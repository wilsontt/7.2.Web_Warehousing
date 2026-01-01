# 規格文件 (SPEC): 客戶聯絡人異動 API (Customer Contact Status Change API)

**文件版本**: v1.0.0
**狀態**: 草稿 (Draft)
**建立日期**: 2026-01-01
**依據**: 
- `0.standards/0.專案憲章-總規範-SDD工作流程/1.專案憲章 Project Constitution.md`
- `0.standards/4.資料庫結構分析/1.基本作業/3.客戶資料維護/CMP_TABLE.md`
- `0.standards/4.資料庫結構分析/1.基本作業/3.客戶資料維護/CMP_LOG_TABLE.md`
- `0.standards/4.資料庫結構分析/8.系統管理作業/1.身分識別與權限管理/0.2.客戶資料維護與IAM整合設計總結.md`
- `1.specs/8.系統管理作業/8.1.身分識別與權限管理/IAM基礎API.spec.md`

---

## 1. 目的 (Purpose)

本模組提供客戶聯絡人狀態異動與歷程查詢的 API，實現「單一入口服務 (One-Stop Service)」的設計目標。操作人員僅需在客戶聯絡人介面執行異動操作，系統自動同步處理 IAM (`USR`) 的帳號狀態，確保業務層與系統層的狀態永遠一致。

**核心設計原則**：
- **強制稽核**：所有異動必須填寫「原因」與「日期」，缺一不可
- **原子性操作**：所有相關資料表的更新必須在單一 Transaction 中完成
- **自動同步**：CMP 狀態變更時，自動同步更新 USR 狀態

---

## 2. 範圍 (Scope)

**包含功能**:
- 客戶聯絡人狀態異動（停用/復用/調動）
- 異動歷程查詢（完整歷史記錄）
- 自動同步 IAM 帳號狀態

**排除功能**:
- 客戶聯絡人的基本資料維護（新增、修改、刪除基本資訊，由其他 API 處理）
- 客戶聯絡人的部門權限管理（由其他 API 處理）

---

## 3. 使用者故事 (User Stories)

### US-001: 停用客戶聯絡人
**作為** 系統管理員或業務人員
**我想要** 停用客戶聯絡人並填寫停用原因與日期
**以便於** 記錄業務異動並同步停用系統帳號

**驗收條件 (Acceptance Criteria)**:
1. 可選擇客戶聯絡人並執行停用操作
2. 必須填寫「停用原因」與「生效日期」，否則無法儲存
3. 系統自動更新 CMP 表（is_disabled='Y', CMP30-32）
4. 系統自動寫入 CMP_LOG 記錄
5. 若該聯絡人已開通帳號（CMP_UID 不為 NULL），系統自動同步更新 USR.STATUS=0
6. 所有操作在 Transaction 中執行，確保原子性

### US-002: 復用客戶聯絡人
**作為** 系統管理員或業務人員
**我想要** 復用已停用的客戶聯絡人並填寫復用原因與日期
**以便於** 恢復客戶聯絡人的系統使用權限

**驗收條件 (Acceptance Criteria)**:
1. 可選擇已停用的客戶聯絡人並執行復用操作
2. 必須填寫「復用原因」與「生效日期」，否則無法儲存
3. 系統自動更新 CMP 表（is_disabled='N', CMP30-32）
4. 系統自動寫入 CMP_LOG 記錄
5. 若該聯絡人已有帳號（CMP_UID 不為 NULL），系統自動同步更新 USR.STATUS=1
6. 若該聯絡人尚未開通帳號且提供 userId，系統自動建立 USR 記錄並關聯

### US-003: 查詢異動歷程
**作為** 系統管理員或業務人員
**我想要** 查詢客戶聯絡人的完整異動歷程
**以便於** 了解該聯絡人的歷史異動記錄與原因

**驗收條件 (Acceptance Criteria)**:
1. 可查詢指定客戶聯絡人的所有異動記錄
2. 顯示包含 ACTION_TYPE, REASON, EFFECTIVE_DATE, CREATED_BY, CREATED_AT
3. 支援分頁查詢
4. 記錄按時間倒序排列（最新的在前）

---

## 4. 非功能性需求 (Non-Functional Requirements)

### NFR-001: 安全性 (Security)
- **身份驗證**：所有 API 必須驗證 JWT Token
- **權限檢查**：需要客戶資料維護權限
- **稽核記錄**：所有異動必須寫入 CMP_LOG，不可遺漏

### NFR-002: 資料一致性 (Data Consistency)
- **Transaction 保證**：所有相關資料表的更新必須在單一 Transaction 中完成
- **狀態同步**：CMP 與 USR 的狀態必須永遠一致
- **失敗回滾**：任何步驟失敗時，必須回滾所有變更

### NFR-003: 強制驗證 (Mandatory Validation)
- **前端驗證**：前端必須驗證 reason 與 effectiveDate 必填
- **後端驗證**：後端必須再次驗證，防止繞過前端檢查
- **雙重防護**：前端與後端都必須嚴格檢查，不可接受空值或空白字元

### NFR-004: 效能 (Performance)
- 狀態異動 API 回應時間應小於 1 秒
- 歷程查詢 API 支援分頁，避免大量資料查詢

---

## 5. API 規格設計

### 5.1 API 1: 異動客戶聯絡人狀態

**Endpoint**: `POST /api/contacts/{contactId}/status`

**用途**: 執行客戶聯絡人的狀態異動（停用/復用/調動）

**權限要求**: 需要客戶資料維護權限

**路徑參數**:
- `contactId` (bigint, 必填): 客戶聯絡人 ID (CMP.id)

**Request Body**:
```json
{
  "action": "DISABLE",
  "reason": "客戶申請停用：離職",
  "effectiveDate": "20260131",
  "userId": 1234567890123456790
}
```

**欄位說明**:
- `action` (string, 必填): 異動類別，值為 `"DISABLE"` | `"ENABLE"` | `"TRANSFER"`
- `reason` (string, 必填): 異動原因，最多 100 字，不可為空或空白
- `effectiveDate` (string, 必填): 生效日期，格式為 `YYYYMMDD`（例如：`20260131`）
- `userId` (bigint, 選填): 使用者 ID（僅在 action=ENABLE 且需開通帳號時提供）

**回應格式**:
```json
{
  "contactId": 9876543210987654321,
  "action": "DISABLE",
  "status": "success",
  "updatedFields": {
    "cmp": {
      "isDisabled": "Y",
      "statusChangeReason": "客戶申請停用：離職",
      "statusChangeDate": "20260131",
      "statusChangeType": "DISABLE"
    },
    "usr": {
      "userId": 1234567890123456789,
      "status": 0,
      "updated": true
    }
  },
  "logId": 1112223334445556667
}
```

**錯誤回應**:
- `400 Bad Request`: 必填欄位缺失、日期格式錯誤、原因為空
- `404 Not Found`: 客戶聯絡人不存在
- `403 Forbidden`: 無權限執行此操作
- `409 Conflict`: 狀態衝突（例如：嘗試停用已停用的聯絡人）

**處理邏輯（Transaction）**:

1. **驗證階段**:
   - 驗證 contactId 存在
   - 驗證 reason 必填且不為空白
   - 驗證 effectiveDate 必填且格式正確（YYYYMMDD）
   - 驗證 action 值有效
   - 驗證當前狀態與 action 不衝突（例如：已停用不能再停用）

2. **資料更新階段**（在 Transaction 中執行）:
   - **Step A (業務層)**: 更新 `CMP` 表
     - `is_disabled`: 'Y' (DISABLE) 或 'N' (ENABLE)
     - `CMP30` (status_change_reason): reason
     - `CMP31` (status_change_date): effectiveDate
     - `CMP32` (status_change_type): action
     - `updated_at`: 現在時間
   
   - **Step B (歷程層)**: Insert 記錄至 `CMP_LOG`
     - `CMP_ID`: contactId
     - `ACTION_TYPE`: action
     - `REASON`: reason
     - `EFFECTIVE_DATE`: effectiveDate
     - `CREATED_BY`: 當前操作者 USER_ID
     - `CREATED_AT`: 現在時間
   
   - **Step C (系統層)**: 處理 IAM 帳號狀態
     - 查詢 CMP 記錄，取得 `CMP_UID` (user_id)
     - **情境 C1**: 若 `CMP_UID` 不為 NULL（已有帳號）
       - 呼叫 IAM API 4 (`PATCH /api/users/{userId}/status`)
       - 傳入 STATUS (0=停用, 1=啟用), CHANGE_REASON, 對應時間
     - **情境 C2**: 若 `CMP_UID` 為 NULL 且 action=ENABLE 且 userId 有值（需開通帳號）
       - 呼叫 IAM API 3 (`POST /api/users`) 建立 Local 帳號
       - 取得回傳的 USER_ID
       - 更新 CMP 表的 `CMP_UID` = 新建立的 USER_ID
     - **情境 C3**: 若 `CMP_UID` 為 NULL 且 action=DISABLE（無帳號，僅業務停用）
       - 僅更新 CMP 表，不處理 USR

3. **錯誤處理**:
   - 任何步驟失敗時，Transaction 自動回滾
   - 回傳明確的錯誤訊息

**重要注意事項**:
- 所有步驟必須在**單一 Transaction** 中執行
- IAM API 呼叫失敗時，整個 Transaction 必須回滾
- 若 IAM API 為內部服務呼叫，建議使用同一個 DB Transaction
- 若 IAM API 為外部服務，需要實作補償機制（Compensating Transaction）

---

### 5.2 API 2: 查詢異動歷程

**Endpoint**: `GET /api/contacts/{contactId}/history`

**用途**: 查詢客戶聯絡人的完整異動歷程

**權限要求**: 需要客戶資料維護權限

**路徑參數**:
- `contactId` (bigint, 必填): 客戶聯絡人 ID (CMP.id)

**查詢參數**:
- `page` (int, 選填): 頁碼，預設 1
- `pageSize` (int, 選填): 每頁筆數，預設 20，最大 100
- `actionType` (string, 選填): 篩選異動類別（DISABLE, ENABLE, TRANSFER, CREATE, UPDATE）

**回應格式**:
```json
{
  "data": [
    {
      "logId": 1112223334445556667,
      "actionType": "DISABLE",
      "reason": "客戶申請停用：離職",
      "effectiveDate": "20260131",
      "createdBy": {
        "userId": 1234567890123456789,
        "userName": "系統管理員"
      },
      "createdAt": "2026-01-01T14:30:00"
    },
    {
      "logId": 1112223334445556666,
      "actionType": "ENABLE",
      "reason": "重新啟用",
      "effectiveDate": "20251201",
      "createdBy": {
        "userId": 1234567890123456789,
        "userName": "系統管理員"
      },
      "createdAt": "2025-12-01T10:00:00"
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 2,
    "totalPages": 1
  }
}
```

**錯誤回應**:
- `404 Not Found`: 客戶聯絡人不存在
- `403 Forbidden`: 無權限查詢

**處理邏輯**:
1. 驗證 contactId 存在
2. 查詢 CMP_LOG 表，WHERE CMP_ID = contactId
3. 若提供 actionType，加入篩選條件
4. 按 CREATED_AT 倒序排列（最新的在前）
5. 實作分頁
6. 關聯 USR 表，取得 CREATED_BY 對應的 USER_NAME

---

## 6. 資料模型與欄位映射

### 6.1 CMP 表欄位映射（異動相關）

| 資料庫欄位 | 前端欄位名稱 (Lovable) | 中文名稱 | 必填 | 顯示格式/驗證規則 | 新增預設值 | 編輯狀態 (新/修) |
|:---|:---|:---|:---:|:---|:---|:---:|
| `is_disabled` | `IsDisabled` | 是否停用 | ✅ | Select (Y/N) | 'N' | ✅ / ✅ |
| `CMP30` | `StatusChangeReason` | 狀態異動原因 | ✅ | Input (最多100字) | - | ✅ / ✅ |
| `CMP31` | `StatusChangeDate` | 狀態異動日期 | ✅ | Date (YYYYMMDD) | - | ✅ / ✅ |
| `CMP32` | `StatusChangeType` | 狀態異動類別 | ✅ | Select (DISABLE/ENABLE/TRANSFER) | - | ✅ / ✅ |
| `CMP_UID` | `UserId` | 系統使用者ID | ❌ | Hidden (FK to USR) | NULL | ✅ / ✅ |

### 6.2 CMP_LOG 表欄位映射

| 資料庫欄位 | 前端欄位名稱 (Lovable) | 中文名稱 | 必填 | 顯示格式/驗證規則 |
|:---|:---|:---|:---:|:---|
| `LOG_ID` | `LogId` | 紀錄ID | ✅ | Hidden (Snowflake ID) |
| `CMP_ID` | `CmpId` | 客戶使用者ID | ✅ | Hidden |
| `ACTION_TYPE` | `ActionType` | 動作類型 | ✅ | Text |
| `REASON` | `Reason` | 異動原因 | ✅ | Text |
| `EFFECTIVE_DATE` | `EffectiveDate` | 生效日期 | ✅ | Date (YYYYMMDD) |
| `CREATED_BY` | `CreatedBy` | 經辦人 | ✅ | UserName (關聯 USR) |
| `CREATED_AT` | `CreatedAt` | 紀錄時間 | ✅ | DateTime (yyyy/MM/dd HH:mm:ss) |

---

## 7. 依賴關係說明

### 7.1 依賴的 IAM 基礎 API

本 API 依賴以下 IAM 基礎 API（定義於 `IAM基礎API.spec.md`）：

1. **IAM API 3: 建立使用者（Local 帳號）**
   - Endpoint: `POST /api/users`
   - 使用時機: 當 action=ENABLE 且需開通帳號時
   - 用途: 建立 USR 記錄並取得 USER_ID，回填到 CMP.CMP_UID

2. **IAM API 4: 更新使用者狀態**
   - Endpoint: `PATCH /api/users/{userId}/status`
   - 使用時機: 當 CMP_UID 不為 NULL 時，同步更新 USR.STATUS
   - 用途: 確保 CMP 與 USR 狀態一致

### 7.2 依賴的資料表

- `CMP`: 客戶使用者主檔
- `CMP_LOG`: 客戶使用者異動歷程
- `USR`: 使用者主檔（透過 CMP_UID 關聯）
- `UHT`: 使用者異動軌跡（由 IAM API 4 自動寫入）

### 7.3 Transaction 處理邏輯

所有資料更新必須在**單一 Transaction** 中執行：

```
BEGIN TRANSACTION
  TRY:
    1. 更新 CMP 表
    2. 寫入 CMP_LOG
    3. 若需處理 USR:
       - 呼叫 IAM API（內部服務，使用相同 Transaction）
       - 或實作補償機制（外部服務）
    COMMIT
  CATCH:
    ROLLBACK
    Return Error
END TRANSACTION
```

**重要**：若 IAM API 為外部服務呼叫，必須實作補償機制（Saga Pattern），確保資料一致性。

---

## 8. 錯誤處理

### 8.1 標準錯誤回應格式

```json
{
  "error": {
    "code": "MISSING_REASON",
    "message": "異動原因為必填欄位",
    "details": "reason 欄位不可為空或空白字元"
  }
}
```

### 8.2 常見錯誤碼

- `CONTACT_NOT_FOUND`: 客戶聯絡人不存在
- `MISSING_REASON`: 異動原因缺失
- `MISSING_EFFECTIVE_DATE`: 生效日期缺失
- `INVALID_DATE_FORMAT`: 日期格式錯誤（應為 YYYYMMDD）
- `INVALID_ACTION`: 異動類別無效
- `STATUS_CONFLICT`: 狀態衝突（例如：已停用不能再停用）
- `IAM_API_ERROR`: IAM API 呼叫失敗
- `TRANSACTION_FAILED`: Transaction 執行失敗
- `INSUFFICIENT_PERMISSION`: 權限不足

---

## 9. 驗收標準 (Acceptance Criteria Summary)

- [ ] API 1 可正確執行停用/復用/調動操作
- [ ] API 1 嚴格驗證 reason 與 effectiveDate 必填，前端與後端雙重檢查
- [ ] API 1 正確更新 CMP 表（is_disabled, CMP30-32）
- [ ] API 1 正確寫入 CMP_LOG 記錄
- [ ] API 1 正確同步更新 USR 狀態（透過 IAM API 4）
- [ ] API 1 正確建立 USR 記錄並關聯（透過 IAM API 3，當需開通帳號時）
- [ ] API 1 所有操作在 Transaction 中執行，失敗時正確回滾
- [ ] API 2 可正確查詢異動歷程，支援分頁與篩選
- [ ] API 2 正確關聯 USR 表顯示經辦人姓名
- [ ] 所有 API 正確進行身份驗證與權限檢查

---

## 10. 業務情境範例

### 情境 1: 停用已有帳號的客戶聯絡人

**Request**:
```json
POST /api/contacts/9876543210987654321/status
{
  "action": "DISABLE",
  "reason": "客戶申請停用：離職",
  "effectiveDate": "20260131"
}
```

**處理流程**:
1. 查詢 CMP，發現 CMP_UID = 1234567890123456789（已有帳號）
2. 更新 CMP: is_disabled='Y', CMP30-32
3. 寫入 CMP_LOG
4. 呼叫 IAM API 4: PATCH /api/users/1234567890123456789/status
   - STATUS=0, CHANGE_REASON="客戶申請停用：離職", DISABLE_TIME="2026-01-31T00:00:00"
5. IAM API 4 自動寫入 UHT 記錄
6. Commit Transaction

### 情境 2: 復用並開通新帳號的客戶聯絡人

**Request**:
```json
POST /api/contacts/9876543210987654321/status
{
  "action": "ENABLE",
  "reason": "重新啟用並開通帳號",
  "effectiveDate": "20260201",
  "userId": 1234567890123456790
}
```

**處理流程**:
1. 查詢 CMP，發現 CMP_UID = NULL（尚未開通帳號）
2. 更新 CMP: is_disabled='N', CMP30-32
3. 寫入 CMP_LOG
4. 呼叫 IAM API 3: POST /api/users
   - 建立 Local 帳號，取得 USER_ID = 1234567890123456790
5. 更新 CMP: CMP_UID = 1234567890123456790
6. Commit Transaction

---

**文件狀態**：✅ 已確認  
**最後更新**：2026-01-01
