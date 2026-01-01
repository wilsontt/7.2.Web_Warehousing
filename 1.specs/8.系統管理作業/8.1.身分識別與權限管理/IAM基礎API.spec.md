# 規格文件 (SPEC): IAM 基礎 API (Identity & Access Management Base API)

**文件版本**: v1.0.0
**狀態**: 草稿 (Draft)
**建立日期**: 2026-01-01
**依據**: 
- `0.standards/0.專案憲章-總規範-SDD工作流程/1.專案憲章 Project Constitution.md`
- `0.standards/4.資料庫結構分析/8.系統管理作業/1.身分識別與權限管理/USR_使用者主檔.md`
- `0.standards/4.資料庫結構分析/8.系統管理作業/1.身分識別與權限管理/0.2.客戶資料維護與IAM整合設計總結.md`

---

## 1. 目的 (Purpose)

本模組提供最小必要的 IAM API，支援客戶聯絡人異動功能所需的使用者查詢與狀態管理。這些 API 作為系統基礎服務，後續其他模組（如客戶資料維護）將依賴這些 API 來完成使用者相關操作。

**設計原則**：
- **最小必要集**：僅包含客戶聯絡人異動功能所需的 API，不包含完整的 IAM 管理功能
- **可擴充性**：預留後續擴充完整 IAM 管理功能的空間
- **安全性**：所有 API 必須進行身份驗證與權限檢查

---

## 2. 範圍 (Scope)

**包含功能**:
- 使用者基本資訊查詢（單一查詢、搜尋）
- 使用者狀態管理（啟用/停用/鎖定）
- 外部客戶 Local 帳號建立（用於客戶聯絡人開通帳號）

**排除功能**:
- 完整的 IAM 管理介面（角色管理、權限設定等，後續版本擴充）
- AD 帳號同步（由系統排程處理，不透過 API）
- 密碼重設（後續版本擴充）

---

## 3. 使用者故事 (User Stories)

### US-001: 查詢使用者資訊
**作為** 系統管理員或業務人員
**我想要** 查詢指定使用者的基本資訊
**以便於** 顯示使用者名稱、驗證帳號關聯、確認使用者狀態

**驗收條件 (Acceptance Criteria)**:
1. 可透過 USER_ID 查詢單一使用者資訊
2. 可透過帳號或姓名搜尋使用者
3. 回應包含 USER_ID, USER_NAME, ACCOUNT_TYPE, STATUS 等必要欄位
4. 查詢自己的資訊時不需要特殊權限
5. 查詢他人資訊時需要管理權限

### US-002: 建立外部客戶帳號
**作為** 系統管理員
**我想要** 為客戶聯絡人建立 Local 帳號
**以便於** 客戶聯絡人可以登入系統

**驗收條件 (Acceptance Criteria)**:
1. 可建立 ACCOUNT_TYPE='LOCAL' 的使用者
2. 必須提供 LOCAL_ACCOUNT, PASSWORD_HASH, USER_NAME 等必填欄位
3. 系統自動產生 USER_ID (Snowflake ID)
4. 建立成功後回傳完整的使用者資訊（含 USER_ID）
5. 需要管理權限

### US-003: 更新使用者狀態
**作為** 系統管理員或業務人員
**我想要** 更新使用者的狀態（啟用/停用/鎖定）
**以便於** 控制使用者是否能登入系統

**驗收條件 (Acceptance Criteria)**:
1. 可更新 STATUS 欄位（1=啟用, 0=停用, 9=鎖定）
2. 必須提供 CHANGE_REASON（變更原因）
3. 狀態變更時自動更新對應的時間欄位（ENABLE_TIME, DISABLE_TIME, LOCK_TIME）
4. 必須同時寫入 UHT 記錄（Before/After）
5. 需要管理權限

---

## 4. 非功能性需求 (Non-Functional Requirements)

### NFR-001: 安全性 (Security)
- **身份驗證**：所有 API 必須驗證 JWT Token
- **權限檢查**：查詢他人資訊、建立帳號、更新狀態需要管理權限
- **稽核記錄**：所有狀態變更必須寫入 UHT 記錄

### NFR-002: 效能 (Performance)
- 單一使用者查詢回應時間應小於 200ms
- 搜尋 API 支援分頁，避免大量資料查詢

### NFR-003: 資料一致性 (Data Consistency)
- 狀態更新必須在 Transaction 中執行，確保 CMP 與 USR 狀態同步
- UHT 記錄必須與 USR 更新在同一 Transaction 中

---

## 5. API 規格設計

### 5.1 API 1: 查詢單一使用者

**Endpoint**: `GET /api/users/{userId}`

**用途**: 查詢指定使用者的基本資訊

**權限要求**: 
- 查詢自己的資訊：僅需登入
- 查詢他人資訊：需要管理權限

**路徑參數**:
- `userId` (bigint, 必填): 使用者 ID (USER_ID)

**回應格式**:
```json
{
  "userId": 1234567890123456789,
  "accountType": "LOCAL",
  "localAccount": "customer001",
  "adAccount": null,
  "userName": "王小明",
  "email": "wang@example.com",
  "department": "業務部",
  "title": "業務專員",
  "status": 1,
  "enableTime": "2025-01-01T09:00:00",
  "disableTime": null,
  "lockTime": null,
  "lastLoginTime": "2026-01-01T10:30:00",
  "lastLoginIp": "192.168.1.100"
}
```

**錯誤回應**:
- `404 Not Found`: 使用者不存在
- `403 Forbidden`: 無權限查詢該使用者

---

### 5.2 API 2: 搜尋使用者

**Endpoint**: `GET /api/users/search`

**用途**: 依帳號或姓名搜尋使用者（用於 Migration 對應、帳號關聯）

**權限要求**: 需要登入

**查詢參數**:
- `account` (string, 選填): 帳號（支援 LOCAL_ACCOUNT 或 AD_ACCOUNT 模糊搜尋）
- `name` (string, 選填): 姓名（USER_NAME 模糊搜尋）
- `accountType` (string, 選填): 帳號類型 ('AD' | 'LOCAL')
- `status` (int, 選填): 狀態 (1=啟用, 0=停用, 9=鎖定)
- `page` (int, 選填): 頁碼，預設 1
- `pageSize` (int, 選填): 每頁筆數，預設 20，最大 100

**回應格式**:
```json
{
  "data": [
    {
      "userId": 1234567890123456789,
      "accountType": "LOCAL",
      "localAccount": "customer001",
      "userName": "王小明",
      "status": 1
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 1,
    "totalPages": 1
  }
}
```

**錯誤回應**:
- `400 Bad Request`: 查詢參數格式錯誤

---

### 5.3 API 3: 建立使用者（Local 帳號）

**Endpoint**: `POST /api/users`

**用途**: 建立外部客戶的 Local 帳號（當客戶聯絡人開通帳號時）

**權限要求**: 需要管理權限

**Request Body**:
```json
{
  "accountType": "LOCAL",
  "localAccount": "customer001",
  "password": "TempPassword123!",
  "userName": "王小明",
  "email": "wang@example.com",
  "department": "業務部",
  "title": "業務專員",
  "oldUserId": "C001"
}
```

**欄位說明**:
- `accountType` (string, 必填): 必須為 'LOCAL'
- `localAccount` (string, 必填): 外部帳號，需唯一
- `password` (string, 必填): 明文密碼，後端需進行雜湊處理
- `userName` (string, 必填): 使用者姓名
- `email` (string, 選填): 電子郵件
- `department` (string, 選填): 部門
- `title` (string, 選填): 職稱
- `oldUserId` (string, 選填): 舊系統 ID（Migration 用）

**回應格式**:
```json
{
  "userId": 1234567890123456790,
  "accountType": "LOCAL",
  "localAccount": "customer001",
  "userName": "王小明",
  "status": 1,
  "createdAt": "2026-01-01T14:00:00"
}
```

**錯誤回應**:
- `400 Bad Request`: 必填欄位缺失、帳號已存在、密碼不符合規範
- `403 Forbidden`: 無管理權限
- `409 Conflict`: LOCAL_ACCOUNT 已存在

**處理邏輯**:
1. 驗證必填欄位
2. 檢查 LOCAL_ACCOUNT 唯一性
3. 驗證密碼強度（12碼以上，包含大小寫、數字、特殊符號）
4. 產生 USER_ID (Snowflake ID)
5. 將密碼進行雜湊處理（bcrypt/argon2）
6. 建立 USR 記錄（STATUS=1, ENABLE_TIME=現在）
7. 寫入 UHT 記錄（ACTION_TYPE='CREATE'）

---

### 5.4 API 4: 更新使用者狀態

**Endpoint**: `PATCH /api/users/{userId}/status`

**用途**: 更新使用者狀態（啟用/停用/鎖定），用於客戶聯絡人異動時的同步

**權限要求**: 需要管理權限

**路徑參數**:
- `userId` (bigint, 必填): 使用者 ID

**Request Body**:
```json
{
  "status": 0,
  "changeReason": "客戶申請停用：離職",
  "disableTime": "2026-01-01T14:30:00"
}
```

**欄位說明**:
- `status` (int, 必填): 新狀態 (1=啟用, 0=停用, 9=鎖定)
- `changeReason` (string, 必填): 變更原因，最多 200 字
- `disableTime` (datetime, 選填): 停用時間（當 status=0 時建議提供）
- `enableTime` (datetime, 選填): 啟用時間（當 status=1 時建議提供）
- `lockTime` (datetime, 選填): 鎖定時間（當 status=9 時建議提供）

**回應格式**:
```json
{
  "userId": 1234567890123456789,
  "status": 0,
  "disableTime": "2026-01-01T14:30:00",
  "updatedAt": "2026-01-01T14:30:00"
}
```

**錯誤回應**:
- `400 Bad Request`: 狀態值無效、變更原因缺失
- `404 Not Found`: 使用者不存在
- `403 Forbidden`: 無管理權限

**處理邏輯**:
1. 驗證使用者存在
2. 驗證 changeReason 必填
3. 記錄 Before 狀態（用於 UHT）
4. 更新 USR 表：
   - STATUS 欄位
   - 對應的時間欄位（DISABLE_TIME, ENABLE_TIME, LOCK_TIME）
   - UPD_USERID, UPD_DTIME
5. 寫入 UHT 記錄：
   - ACTION_TYPE: 'DISABLE' | 'ENABLE' | 'LOCK' | 'UNLOCK'
   - BEFORE_VALUE: 原始狀態 JSON
   - AFTER_VALUE: 新狀態 JSON
   - CHANGE_REASON: 變更原因
   - OPERATOR_ID: 當前操作者
   - IP_ADDRESS: 請求來源 IP
6. 所有操作必須在 Transaction 中執行

---

## 6. 資料模型與欄位映射

### 6.1 欄位映射表

| 資料庫欄位 | 前端欄位名稱 (Lovable) | 中文名稱 | 必填 | 顯示格式/驗證規則 | 新增預設值 | 編輯狀態 (新/修) |
|:---|:---|:---|:---:|:---|:---|:---:|
| `USER_ID` | `UserId` | 使用者編號 | ✅ | Hidden (Snowflake ID) | System Gen | ❌ / ❌ |
| `ACCOUNT_TYPE` | `AccountType` | 帳號類型 | ✅ | Select (AD/LOCAL) | 'LOCAL' | ✅ / ❌ |
| `LOCAL_ACCOUNT` | `LocalAccount` | 外部帳號 | ✅ | Input (唯一) | - | ✅ / ❌ |
| `AD_ACCOUNT` | `AdAccount` | AD帳號 | ❌ | Input | - | ✅ / ❌ |
| `PASSWORD_HASH` | `Password` | 密碼 | ✅ | Input (Password) | - | ✅ / ❌ |
| `USER_NAME` | `UserName` | 使用者姓名 | ✅ | Input | - | ✅ / ✅ |
| `EMAIL` | `Email` | 電子郵件 | ❌ | Input (Email) | - | ✅ / ✅ |
| `DEPARTMENT` | `Department` | 部門 | ❌ | Input | - | ✅ / ✅ |
| `TITLE` | `Title` | 職稱 | ❌ | Input | - | ✅ / ✅ |
| `STATUS` | `Status` | 狀態 | ✅ | Select (1/0/9) | 1 | ✅ / ✅ |
| `ENABLE_TIME` | `EnableTime` | 啟用時間 | ❌ | DateTime | CurrentTime | ✅ / ❌ |
| `DISABLE_TIME` | `DisableTime` | 停用時間 | ❌ | DateTime | NULL | ❌ / ✅ |
| `OLD_USERID` | `OldUserId` | 舊系統ID | ❌ | Input | NULL | ✅ / ✅ |

### 6.2 狀態值說明

- `STATUS = 1`: 啟用（可登入）
- `STATUS = 0`: 停用（不可登入）
- `STATUS = 9`: 鎖定（不可登入，需管理員解鎖）

---

## 7. 錯誤處理

### 7.1 標準錯誤回應格式

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "使用者不存在",
    "details": "USER_ID: 1234567890123456789 不存在於系統中"
  }
}
```

### 7.2 常見錯誤碼

- `USER_NOT_FOUND`: 使用者不存在
- `DUPLICATE_ACCOUNT`: 帳號已存在
- `INVALID_STATUS`: 狀態值無效
- `MISSING_REASON`: 變更原因缺失
- `INSUFFICIENT_PERMISSION`: 權限不足
- `PASSWORD_WEAK`: 密碼強度不足

---

## 8. 驗收標準 (Acceptance Criteria Summary)

- [ ] API 1 可正確查詢單一使用者資訊
- [ ] API 2 可依帳號或姓名搜尋使用者，支援分頁
- [ ] API 3 可建立 Local 帳號，自動產生 USER_ID，密碼正確雜湊
- [ ] API 4 可更新使用者狀態，同時寫入 UHT 記錄
- [ ] 所有 API 正確進行身份驗證與權限檢查
- [ ] 狀態更新操作在 Transaction 中執行，確保資料一致性
- [ ] 錯誤回應格式統一且明確

---

## 9. 依賴關係

### 9.1 依賴的資料表
- `USR`: 使用者主檔
- `UHT`: 使用者異動軌跡

### 9.2 被其他模組依賴
- **客戶資料維護模組**: 需要 API 3 (建立帳號) 和 API 4 (更新狀態)
- **登入模組**: 需要查詢使用者資訊（但可能使用不同的 API）

---

## 10. 後續擴充規劃

本版本僅提供最小必要 API，後續版本可擴充：
- 完整的 IAM 管理 API（角色、權限、使用者角色關聯）
- 密碼重設 API
- 批次操作 API
- 使用者偏好設定 API

---

**文件狀態**：✅ 已確認  
**最後更新**：2026-01-01
