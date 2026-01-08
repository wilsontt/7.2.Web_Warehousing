#!/bin/bash
# ============================================================
# Samba AD DC 批次匯入使用者與群組腳本
# ============================================================
# 功能：
# 1. 從 CSV 檔案讀取使用者與群組資料
# 2. 自動建立群組（去重）
# 3. 自動建立使用者帳號（去重）
# 4. 將使用者加入對應群組
# 5. 設定使用者屬性（email, display name）
# ============================================================
# 使用方式：
#   sudo ./import-users-groups.sh <CSV檔案路徑> [預設密碼]
# 範例：
#   sudo ./import-users-groups.sh users-groups.csv
#   sudo ./import-users-groups.sh users-groups.csv TempPass123!
# ============================================================

set -euo pipefail  # 嚴格模式：遇到錯誤立即停止

# ============================================================
# 設定變數
# ============================================================
DOMAIN="LAB1"
REALM="LAB1.WILSONTT.COM"
DEFAULT_PASSWORD="${2:-TempPassword123!}"  # 第二個參數為密碼，預設 TempPassword123!
CSV_FILE="${1:-}"

# 顏色輸出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日誌函數
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_debug() {
    echo -e "${BLUE}[DEBUG]${NC} $1"
}

# ============================================================
# 參數檢查
# ============================================================
if [ -z "$CSV_FILE" ]; then
    log_error "請指定 CSV 檔案路徑"
    echo ""
    echo "使用方式:"
    echo "  sudo $0 <CSV檔案路徑> [預設密碼]"
    echo ""
    echo "範例:"
    echo "  sudo $0 users-groups.csv"
    echo "  sudo $0 users-groups.csv TempPass123!"
    exit 1
fi

if [ ! -f "$CSV_FILE" ]; then
    log_error "CSV 檔案不存在: $CSV_FILE"
    exit 1
fi

# 檢查是否以 root 執行
if [ "$EUID" -ne 0 ]; then 
    log_error "請使用 sudo 執行此腳本"
    exit 1
fi

# 檢查 samba-tool 是否可用
if ! command -v samba-tool &> /dev/null; then
    log_error "samba-tool 未安裝，請先執行 install-samba-ad.sh"
    exit 1
fi

# ============================================================
# 檢查 CSV 檔案編碼與格式
# ============================================================
log_info "檢查 CSV 檔案: $CSV_FILE"

# 檢查第一行是否為標題行
FIRST_LINE=$(head -n 1 "$CSV_FILE")
EXPECTED_HEADER="群組名稱,群組說明,帳號名稱,職務,EMAIL,帳號說明,備註"
if [ "$FIRST_LINE" != "$EXPECTED_HEADER" ]; then
    log_warn "CSV 標題行不符合預期格式"
    log_debug "預期: $EXPECTED_HEADER"
    log_debug "實際: $FIRST_LINE"
    read -p "是否繼續？(y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# ============================================================
# 資料結構初始化
# ============================================================
declare -A GROUPS_CREATED      # 已建立的群組
declare -A USERS_CREATED       # 已建立的使用者
declare -A USER_GROUPS_MAP     # 使用者對應的群組列表（用於最後加入群組）

log_info "開始解析 CSV 檔案..."

# ============================================================
# 解析 CSV 檔案（跳過標題行）
# ============================================================
LINE_NUM=0
SKIPPED_COUNT=0
PROCESSED_COUNT=0

# 使用 while read 逐行處理（支援 UTF-8）
while IFS=',' read -r group_name group_desc username title email display_name notes || [ -n "$group_name" ]; do
    LINE_NUM=$((LINE_NUM + 1))
    
    # 跳過標題行
    if [ $LINE_NUM -eq 1 ]; then
        continue
    fi
    
    # 跳過空行
    if [ -z "$group_name" ] || [ -z "$username" ]; then
        continue
    fi
    
    # 處理「未進AD」標記
    if [[ "$notes" == *"未進AD"* ]] || [[ "$notes" == *"AD暫停用"* ]]; then
        log_warn "跳過帳號 '$username'（備註: $notes）"
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        continue
    fi
    
    # 清理欄位（移除前後空白和引號）
    group_name=$(echo "$group_name" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^"//;s/"$//')
    group_desc=$(echo "$group_desc" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^"//;s/"$//')
    username=$(echo "$username" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^"//;s/"$//')
    title=$(echo "$title" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^"//;s/"$//')
    email=$(echo "$email" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^"//;s/"$//')
    display_name=$(echo "$display_name" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^"//;s/"$//')
    notes=$(echo "$notes" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^"//;s/"$//')
    
    # 處理 EMAIL 為 "-" 或空值的情況
    if [ "$email" == "-" ] || [ -z "$email" ]; then
        email=""
    fi
    
    # 記錄群組資訊（用於後續建立）
    if [ -n "$group_name" ]; then
        GROUPS_CREATED["$group_name"]="$group_desc"
    fi
    
    # 記錄使用者資訊（用於後續建立）
    if [ -n "$username" ]; then
        if [ -z "${USERS_CREATED[$username]:-}" ]; then
            USERS_CREATED["$username"]="$email|$title|$display_name"
        fi
        # 記錄使用者與群組的對應關係
        if [ -z "${USER_GROUPS_MAP[$username]:-}" ]; then
            USER_GROUPS_MAP["$username"]="$group_name"
        else
            # 如果使用者已存在，追加群組（用逗號分隔）
            if [[ ! "${USER_GROUPS_MAP[$username]}" == *"$group_name"* ]]; then
                USER_GROUPS_MAP["$username"]="${USER_GROUPS_MAP[$username]},$group_name"
            fi
        fi
    fi
    
    PROCESSED_COUNT=$((PROCESSED_COUNT + 1))
    
done < <(cat "$CSV_FILE")

log_info "CSV 解析完成：處理 $PROCESSED_COUNT 筆記錄，跳過 $SKIPPED_COUNT 筆"

# ============================================================
# 建立群組
# ============================================================
log_info "開始建立群組..."
GROUP_COUNT=0
for GROUP_NAME in "${!GROUPS_CREATED[@]}"; do
    GROUP_DESC="${GROUPS_CREATED[$GROUP_NAME]}"
    
    # 檢查群組是否已存在
    if samba-tool group show "$GROUP_NAME" &>/dev/null 2>&1; then
        log_warn "群組 '$GROUP_NAME' 已存在，跳過建立"
    else
        log_info "建立群組: $GROUP_NAME ($GROUP_DESC)"
        if samba-tool group add "$GROUP_NAME" --description="$GROUP_DESC" 2>&1; then
            GROUP_COUNT=$((GROUP_COUNT + 1))
        else
            log_error "建立群組 '$GROUP_NAME' 失敗"
        fi
    fi
done
log_info "群組建立完成：共 $GROUP_COUNT 個新群組"

# ============================================================
# 建立使用者帳號
# ============================================================
log_info "開始建立使用者帳號..."
USER_COUNT=0
for USERNAME in "${!USERS_CREATED[@]}"; do
    USER_DATA="${USERS_CREATED[$USERNAME]}"
    IFS='|' read -r EMAIL TITLE DISPLAY_NAME <<< "$USER_DATA"
    
    # 檢查使用者是否已存在
    if samba-tool user show "$USERNAME" &>/dev/null 2>&1; then
        log_warn "使用者 '$USERNAME' 已存在，跳過建立"
    else
        log_info "建立使用者: $USERNAME ($DISPLAY_NAME)"
        
        # 建立使用者基本資料
        # 建立使用者基本資料
        CREATE_CMD="samba-tool user create \"$USERNAME\" \"$DEFAULT_PASSWORD\""
        CREATE_CMD="$CREATE_CMD --description=\"$TITLE - $DISPLAY_NAME\""
        
        if [ -n "$EMAIL" ]; then
            CREATE_CMD="$CREATE_CMD --mail=\"$EMAIL\""
        fi
        
        # 嘗試分離 given-name 和 surname（如果可能）
        # 這裡簡化處理，直接使用 display_name 作為 given-name
        CREATE_CMD="$CREATE_CMD --given-name=\"$DISPLAY_NAME\""
                
        if eval "$CREATE_CMD" 2>&1; then
            USER_COUNT=$((USER_COUNT + 1))
            
            # 設定 displayName 屬性（使用 ldbmodify）
            if command -v ldbmodify &> /dev/null && [ -n "$DISPLAY_NAME" ]; then
                DN=$(samba-tool user show "$USERNAME" --attributes=dn 2>/dev/null | grep "^dn:" | cut -d' ' -f2-)
                if [ -n "$DN" ]; then
                    TEMP_LDIF=$(mktemp)
                    {
                        echo "dn: $DN"
                        echo "changetype: modify"
                        echo "replace: displayName"
                        echo "displayName: $DISPLAY_NAME"
                    } > "$TEMP_LDIF"
                    
                    if ldbmodify -H /var/lib/samba/private/sam.ldb "$TEMP_LDIF" &>/dev/null 2>&1; then
                        log_debug "  已設定 displayName: $DISPLAY_NAME"
                    fi
                    rm -f "$TEMP_LDIF"
                fi
            fi
        else
            log_error "建立使用者 '$USERNAME' 失敗"
        fi
    fi
done
log_info "使用者建立完成：共 $USER_COUNT 個新使用者"

# ============================================================
# 將使用者加入群組
# ============================================================
log_info "開始將使用者加入群組..."
MEMBER_COUNT=0
for USERNAME in "${!USER_GROUPS_MAP[@]}"; do
    GROUPS_LIST="${USER_GROUPS_MAP[$USERNAME]}"
    IFS=',' read -ra GROUP_ARRAY <<< "$GROUPS_LIST"
    
    for GROUP_NAME in "${GROUP_ARRAY[@]}"; do
        # 檢查使用者是否已在群組中
        if samba-tool group listmembers "$GROUP_NAME" 2>/dev/null | grep -q "^$USERNAME$"; then
            log_debug "使用者 '$USERNAME' 已在群組 '$GROUP_NAME' 中"
        else
            log_info "將使用者 '$USERNAME' 加入群組 '$GROUP_NAME'"
            if samba-tool group addmembers "$GROUP_NAME" "$USERNAME" 2>&1; then
                MEMBER_COUNT=$((MEMBER_COUNT + 1))
            else
                log_error "將使用者 '$USERNAME' 加入群組 '$GROUP_NAME' 失敗"
            fi
        fi
    done
done
log_info "群組成員關係建立完成：共 $MEMBER_COUNT 個新增關係"

# ============================================================
# 驗證結果
# ============================================================
log_info "驗證匯入結果..."
echo ""
echo "=== 群組列表 ==="
for GROUP_NAME in "${!GROUPS_CREATED[@]}"; do
    if samba-tool group show "$GROUP_NAME" &>/dev/null 2>&1; then
        MEMBERS=$(samba-tool group listmembers "$GROUP_NAME" 2>/dev/null | tr '\n' ',' | sed 's/,$//')
        echo "✓ $GROUP_NAME: ${MEMBERS:-（無成員）}"
    else
        echo "✗ $GROUP_NAME (建立失敗)"
    fi
done

echo ""
echo "=== 使用者列表 ==="
USER_LIST_COUNT=0
for USERNAME in "${!USERS_CREATED[@]}"; do
    if samba-tool user show "$USERNAME" &>/dev/null 2>&1; then
        echo "✓ $USERNAME"
        USER_LIST_COUNT=$((USER_LIST_COUNT + 1))
    else
        echo "✗ $USERNAME (建立失敗)"
    fi
done

echo ""
log_info "批次匯入完成！"
log_warn "所有使用者預設密碼: $DEFAULT_PASSWORD"
log_warn "請提醒使用者首次登入後修改密碼"
echo ""
echo "統計："
echo "  - 處理記錄數: $PROCESSED_COUNT"
echo "  - 跳過記錄數: $SKIPPED_COUNT"
echo "  - 建立群組數: $GROUP_COUNT"
echo "  - 建立使用者數: $USER_COUNT"
echo "  - 建立成員關係數: $MEMBER_COUNT"

