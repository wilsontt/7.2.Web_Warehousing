#!/bin/bash
# ============================================================
# Samba AD DC 驗證腳本
# ============================================================
# 功能：快速驗證 Samba AD DC 服務是否正常運作
# 使用方式：
#   本機驗證：sudo ./verify-ad-dc.sh 或 ./verify-ad-dc.sh (root)
#   遠端驗證：sudo ./verify-ad-dc.sh 192.168.98.10
#   注意：本腳本支援 Ubuntu Server 上的 Samba AD DC，不支援 Docker 容器
# ============================================================

set -euo pipefail

# 顏色輸出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# 參數設定
AD_IP_OR_NAME="${1:-127.0.0.1}"
DOMAIN="lab1.wilsontt.com"
REALM="LAB1.WILSONTT.COM"
DC_NAME="dc1"

# 檢測是否為 root 權限，決定是否使用 sudo
if [ "$EUID" -eq 0 ]; then
    SUDO_CMD=""  # root 不需要 sudo
else
    SUDO_CMD="sudo"  # 非 root 需要 sudo
fi

# 日誌函數（需在使用前定義）
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_fail() {
    echo -e "${RED}✗${NC} $1"
}

# 檢測是否為 Docker 容器名稱，並解析 IP
# 注意：本專案 Samba AD DC 應在 Ubuntu Server 上安裝，不支援 Docker 容器
AD_IP="$AD_IP_OR_NAME"
IS_DOCKER_CONTAINER=false

# 檢查是否為 Docker 容器名稱（非 IP 格式）
# 如果檢測到容器名稱，會提示使用 IP 位址
if [[ ! "$AD_IP_OR_NAME" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]] && [ "$AD_IP_OR_NAME" != "127.0.0.1" ] && [ "$AD_IP_OR_NAME" != "localhost" ]; then
    # 嘗試從 Docker 取得容器 IP（僅用於檢測，本專案不使用 Docker）
    if command -v docker &> /dev/null; then
        CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' "$AD_IP_OR_NAME" 2>/dev/null)
        if [ -n "$CONTAINER_IP" ]; then
            AD_IP="$CONTAINER_IP"
            IS_DOCKER_CONTAINER=true
            log_warn "檢測到 Docker 容器: $AD_IP_OR_NAME -> $AD_IP"
            log_warn "注意：本專案 Samba AD DC 應在 Ubuntu Server 上安裝，請使用 Ubuntu Server IP 位址"
        fi
    fi
fi

# 檢查是否為本機
IS_LOCAL=false
if [ "$AD_IP" == "127.0.0.1" ] || [ "$AD_IP" == "localhost" ] || [ "$AD_IP_OR_NAME" == "127.0.0.1" ] || [ "$AD_IP_OR_NAME" == "localhost" ]; then
    IS_LOCAL=true
fi

echo "=========================================="
echo "Samba AD DC 驗證腳本"
echo "=========================================="
echo "AD DC IP: $AD_IP"
echo "網域: $DOMAIN"
echo "Realm: $REALM"
echo "=========================================="
echo ""

# ============================================================
# 1. 服務狀態檢查
# ============================================================
log_info "1. 檢查 Samba AD DC 服務狀態..."

if [ "$IS_LOCAL" = true ]; then
    # 本機檢查：先嘗試 systemd，再嘗試 process
    if systemctl is-active --quiet samba-ad-dc 2>/dev/null; then
        log_success "Samba AD DC 服務運行中 (systemd)"
        systemctl status samba-ad-dc --no-pager -l 2>/dev/null | head -5 || true
    elif pgrep -x samba > /dev/null 2>&1; then
        log_success "Samba AD DC 服務運行中 (process)"
        log_info "檢測到 samba 程序運行中"
    else
        log_fail "Samba AD DC 服務未運行"
        if [ -n "$SUDO_CMD" ]; then
            echo "請執行: sudo systemctl start samba-ad-dc"
        else
            echo "請執行: systemctl start samba-ad-dc"
        fi
        exit 1
    fi
else
    # 遠端檢查：支援 SSH（本專案使用 Ubuntu Server，不支援 Docker 容器）
    if [ "$IS_DOCKER_CONTAINER" = true ]; then
        # 檢測到 Docker 容器，但本專案不使用 Docker 部署 Samba AD DC
        log_warn "檢測到 Docker 容器，但本專案 Samba AD DC 應在 Ubuntu Server 上安裝"
        log_warn "請使用 Ubuntu Server IP 位址進行驗證，而非容器名稱"
        exit 1
    else
        # SSH 遠端檢查
        if ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no root@$AD_IP "pgrep -x samba > /dev/null 2>&1 || systemctl is-active samba-ad-dc" 2>/dev/null; then
            log_success "遠端 Samba AD DC 服務運行中"
        else
            log_fail "無法連線到遠端 AD DC 或服務未運行"
            log_warn "可能原因："
            log_warn "  1. SSH 連線失敗（請確認 SSH 金鑰設定或密碼認證）"
            log_warn "  2. 服務未運行（請在 AD DC 上執行: systemctl start samba-ad-dc）"
            log_warn "  3. 網路連線問題（請確認 IP 位址正確）"
            log_warn ""
            log_warn "建議：直接在 AD DC 伺服器上執行本腳本（不指定 IP）"
            exit 1
        fi
    fi
fi

echo ""

# ============================================================
# 2. DNS 查詢測試
# ============================================================
log_info "2. 測試 DNS 功能..."

# 測試主機 A 記錄
if host -t A $DC_NAME.$DOMAIN $AD_IP 2>/dev/null | grep -q "$AD_IP\|has address"; then
    log_success "主機 A 記錄查詢成功"
    host -t A $DC_NAME.$DOMAIN $AD_IP 2>/dev/null | head -1
else
    log_fail "主機 A 記錄查詢失敗"
fi

# 測試網域 A 記錄
if host -t A $DOMAIN $AD_IP 2>/dev/null | grep -q "has address"; then
    log_success "網域 A 記錄查詢成功"
else
    log_warn "網域 A 記錄查詢失敗（可能正常，取決於設定）"
fi

# 測試 LDAP SRV 記錄
if host -t SRV _ldap._tcp.$DOMAIN $AD_IP 2>/dev/null | grep -q "service"; then
    log_success "LDAP SRV 記錄查詢成功"
    host -t SRV _ldap._tcp.$DOMAIN $AD_IP 2>/dev/null | head -1
else
    log_fail "LDAP SRV 記錄查詢失敗"
fi

# 測試 Kerberos SRV 記錄
if host -t SRV _kerberos._tcp.$DOMAIN $AD_IP 2>/dev/null | grep -q "service"; then
    log_success "Kerberos SRV 記錄查詢成功"
    host -t SRV _kerberos._tcp.$DOMAIN $AD_IP 2>/dev/null | head -1
else
    log_fail "Kerberos SRV 記錄查詢失敗"
fi

echo ""

# ============================================================
# 3. 網路連線測試
# ============================================================
log_info "3. 測試網路連線..."

# 測試 LDAP port (389)
if timeout 3 bash -c "cat < /dev/null > /dev/tcp/$AD_IP/389" 2>/dev/null; then
    log_success "LDAP port (389) 可連線"
else
    log_fail "LDAP port (389) 無法連線"
fi

# 測試 Kerberos port (88)
if timeout 3 bash -c "cat < /dev/null > /dev/tcp/$AD_IP/88" 2>/dev/null; then
    log_success "Kerberos port (88) 可連線"
else
    log_fail "Kerberos port (88) 無法連線"
fi

# 測試 DNS port (53)
if timeout 3 bash -c "cat < /dev/null > /dev/tcp/$AD_IP/53" 2>/dev/null; then
    log_success "DNS port (53) 可連線"
else
    log_fail "DNS port (53) 無法連線"
fi

echo ""

# ============================================================
# 4. Kerberos 認證測試（僅本機）
# ============================================================
if [ "$IS_LOCAL" = true ]; then
    log_info "4. 測試 Kerberos 認證..."
    
    if command -v kinit &> /dev/null; then
        echo "請輸入 Administrator 密碼進行 Kerberos 認證測試："
        if kinit Administrator@$REALM 2>/dev/null; then
            log_success "Kerberos 認證成功"
            klist | head -3
            kdestroy 2>/dev/null
        else
            log_fail "Kerberos 認證失敗"
            log_warn "請確認 Administrator 密碼是否正確"
        fi
    else
        log_warn "kinit 命令未安裝，跳過 Kerberos 測試"
        if [ -n "$SUDO_CMD" ]; then
            log_warn "安裝方式: sudo apt install krb5-user"
        else
            log_warn "安裝方式: apt install krb5-user"
        fi
    fi
    echo ""
fi

# ============================================================
# 5. 使用者與群組查詢
# ============================================================
log_info "5. 查詢使用者與群組..."

if [ "$IS_LOCAL" = true ]; then
    if command -v samba-tool &> /dev/null; then
        USER_COUNT=$(${SUDO_CMD} samba-tool user list 2>/dev/null | wc -l)
        GROUP_COUNT=$(${SUDO_CMD} samba-tool group list 2>/dev/null | wc -l)
        
        if [ "$USER_COUNT" -gt 0 ]; then
            log_success "找到 $USER_COUNT 個使用者"
            echo "使用者列表（前 5 個）："
            ${SUDO_CMD} samba-tool user list 2>/dev/null | head -5 | sed 's/^/  /'
        else
            log_warn "未找到任何使用者"
        fi
        
        if [ "$GROUP_COUNT" -gt 0 ]; then
            log_success "找到 $GROUP_COUNT 個群組"
            echo "群組列表（前 5 個）："
            ${SUDO_CMD} samba-tool group list 2>/dev/null | head -5 | sed 's/^/  /'
        else
            log_warn "未找到任何群組"
        fi
    else
        log_warn "samba-tool 未安裝，跳過使用者/群組查詢"
    fi
else
    if [ "$IS_DOCKER_CONTAINER" = true ]; then
        # 本專案不使用 Docker 部署 Samba AD DC
        log_warn "本專案 Samba AD DC 應在 Ubuntu Server 上安裝，不支援 Docker 容器查詢"
        log_warn "請使用 Ubuntu Server IP 位址進行驗證"
    else
        # SSH 遠端查詢
        if ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no root@$AD_IP "command -v samba-tool" &>/dev/null; then
            USER_COUNT=$(ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no root@$AD_IP "samba-tool user list" 2>/dev/null | wc -l)
            GROUP_COUNT=$(ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no root@$AD_IP "samba-tool group list" 2>/dev/null | wc -l)
            
            if [ "$USER_COUNT" -gt 0 ]; then
                log_success "找到 $USER_COUNT 個使用者"
                echo "使用者列表（前 5 個）："
                ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no root@$AD_IP "samba-tool user list" 2>/dev/null | head -5 | sed 's/^/  /'
            fi
            
            if [ "$GROUP_COUNT" -gt 0 ]; then
                log_success "找到 $GROUP_COUNT 個群組"
                echo "群組列表（前 5 個）："
                ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no root@$AD_IP "samba-tool group list" 2>/dev/null | head -5 | sed 's/^/  /'
            fi
        else
            log_warn "遠端 samba-tool 未安裝或無法存取"
        fi
    fi
fi

echo ""

# ============================================================
# 6. LDAP 查詢測試（如果可用）
# ============================================================
log_info "6. 測試 LDAP 查詢..."

if command -v ldapsearch &> /dev/null; then
    if ldapsearch -x -H ldap://$AD_IP -b "DC=lab1,DC=wilsontt,DC=com" -s base 2>/dev/null | grep -q "dn:"; then
        log_success "LDAP 查詢成功"
    else
        log_warn "LDAP 查詢失敗（可能需要認證）"
    fi
else
    log_warn "ldapsearch 未安裝，跳過 LDAP 測試"
    if [ -n "$SUDO_CMD" ]; then
        log_warn "安裝方式: sudo apt install ldap-utils"
    else
        log_warn "安裝方式: apt install ldap-utils"
    fi
fi

echo ""

# ============================================================
# 總結
# ============================================================
echo "=========================================="
log_info "驗證完成！"
echo "=========================================="
echo ""
echo "如果所有項目都顯示 ✓，表示 AD DC 運作正常。"
echo "如有 ✗ 項目，請檢查對應的服務設定。"
echo ""
echo "下一步："
if [ -n "$SUDO_CMD" ]; then
    echo "  1. 執行批次匯入: sudo ./import-users-groups.sh users-groups.csv"
else
    echo "  1. 執行批次匯入: ./import-users-groups.sh users-groups.csv"
fi
echo "  2. 設定 Windows 機器加入網域"
echo ""

