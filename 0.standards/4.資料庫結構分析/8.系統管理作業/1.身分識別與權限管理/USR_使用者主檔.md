# USR
## 使用者主檔

## 📋 基本資訊

- **資料表名稱**: `USR`
- **中文名稱**: 使用者主檔
- **欄位數量**: 25
- **產生時間**: 2025-11-29 11:00:00
- **用途**: 系統核心身分識別表，儲存內部員工(AD)與外部客戶(Local)的帳號資訊。

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 中文欄名(原) | 資料表中文名稱 | 英文欄名(Lovable) | 新增預設值 | 欄位使用元件 | 驗證規則 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `USER_ID` | 使用者編號 | bigint | - | ❌ | | | | ✅ | **PK (Snowflake ID)** 系統內部唯一識別碼 | 使用者編號 | 使用者主檔 | UserId | (System Gen) | Hidden | |
| 2 | `ACCOUNT_TYPE` | 帳號類型 | varchar | 10 | ❌ | | | | | `'AD'`: 內部員工<br>`'LOCAL'`: 外部客戶 | 帳號類型 | 使用者主檔 | AccountType | 'AD' | Select | |
| 3 | `DOMAIN_NAME` | 網域 | varchar | 50 | ✅ | | | | | AD 網域 (預設 'CORP') | 網域 | 使用者主檔 | DomainName | 'CORP' | Input | |
| 4 | `AD_ACCOUNT` | AD帳號 | varchar | 50 | ✅ | | | | | 當 Type='AD' 時必填，存 sAMAccountName | AD帳號 | 使用者主檔 | AdAccount | - | Input | Type='AD' 時必填 |
| 5 | `LOCAL_ACCOUNT` | 外部帳號 | varchar | 50 | ✅ | | | | | 當 Type='LOCAL' 時必填 | 外部帳號 | 使用者主檔 | LocalAccount | - | Input | Type='LOCAL' 時必填 |
| 6 | `PASSWORD_HASH` | 密碼雜湊 | varchar | 255 | ✅ | | | | | 當 Type='LOCAL' 時必填 | 密碼雜湊 | 使用者主檔 | PasswordHash | - | Input (Password) | Type='LOCAL' 時必填 |
| 7 | `OLD_USERID` | 舊系統ID | varchar | 20 | ✅ | | | | | 歷史資料關聯用 | 舊系統ID | 使用者主檔 | OldUserId | NULL | Input | |
| 8 | `USER_NAME` | 使用者姓名 | nvarchar | 50 | ❌ | | | | | | 使用者姓名 | 使用者主檔 | UserName | - | Input | 必填 |
| 9 | `EMAIL` | 電子郵件 | varchar | 100 | ✅ | | | | | | 電子郵件 | 使用者主檔 | Email | - | Input (Email) | Email 格式 |
| 10 | `DEPARTMENT` | 部門 | nvarchar | 50 | ✅ | | | | | | 部門 | 使用者主檔 | Department | - | Input | |
| 11 | `TITLE` | 職稱 | nvarchar | 50 | ✅ | | | | | | 職稱 | 使用者主檔 | Title | - | Input | |
| 12 | `STATUS` | 狀態 | tinyint | - | ❌ | | | | | `1`: 啟用<br>`0`: 停用<br>`9`: 鎖定 | 狀態 | 使用者主檔 | Status | 1 | Select | |
| 13 | `ENABLE_TIME` | 啟用時間 | datetime | - | ✅ | | | | | | 啟用時間 | 使用者主檔 | EnableTime | CurrentTime | DatePicker | |
| 14 | `DISABLE_TIME` | 停用時間 | datetime | - | ✅ | | | | | | 停用時間 | 使用者主檔 | DisableTime | NULL | DatePicker | |
| 15 | `LOCK_TIME` | 鎖定時間 | datetime | - | ✅ | | | | | | 鎖定時間 | 使用者主檔 | LockTime | NULL | DatePicker | |
| 16 | `UNLOCK_TIME` | 解鎖時間 | datetime | - | ✅ | | | | | | 解鎖時間 | 使用者主檔 | UnlockTime | NULL | DatePicker | |
| 17 | `PWD_LAST_CHANGE_TIME` | 密碼變更時間 | datetime | - | ✅ | | | | | | 密碼變更時間 | 使用者主檔 | PwdLastChangeTime | NULL | - | |
| 18 | `FORCE_CHANGE_PWD` | 強制換密碼 | bit | - | ❌ | | | | | | 強制換密碼 | 使用者主檔 | ForceChangePwd | 0 | Switch | |
| 19 | `LOGIN_FAIL_COUNT` | 登入失敗次數 | int | - | ❌ | | | | | | 登入失敗次數 | 使用者主檔 | LoginFailCount | 0 | - | |
| 20 | `LAST_LOGIN_TIME` | 最後登入時間 | datetime | - | ✅ | | | | | | 最後登入時間 | 使用者主檔 | LastLoginTime | NULL | - | |
| 21 | `LAST_LOGIN_IP` | 最後登入IP | varchar | 50 | ✅ | | | | | | 最後登入IP | 使用者主檔 | LastLoginIp | NULL | - | |
| 22 | `CRE_USERID` | 建檔人員 | varchar | 10 | ✅ | | | | | | 建檔人員 | 使用者主檔 | CreatedBy | CurrentUser | - | |
| 23 | `CRE_DTIME` | 建檔日期 | char | 14 | ✅ | | | | | | 建檔日期 | 使用者主檔 | CreatedAt | CurrentTime | - | |
| 24 | `UPD_USERID` | 修改人員 | varchar | 10 | ✅ | | | | | | 修改人員 | 使用者主檔 | UpdatedBy | CurrentUser | - | |
| 25 | `UPD_DTIME` | 修改日期 | char | 14 | ✅ | | | | | | 修改日期 | 使用者主檔 | UpdatedAt | CurrentTime | - | |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1 (`USER_ID`)
- 🆔 **Identity 欄位**: 0 (使用 Snowflake ID)
- 🔗 **外鍵欄位**: 0
- 🔐 **唯一鍵欄位**: 1 (`USER_ID`)
- ✅ **允許空值欄位**: 17
- ❌ **不允許空值欄位**: 8

## 💡 設計備註

1.  **Snowflake ID**: 採用 64-bit 雪花演算法產生，確保全域唯一且時間有序。
2.  **混合驗證**:
    - `ACCOUNT_TYPE` 決定驗證邏輯。
    - AD 帳號：密碼驗證委由 AD，系統僅記錄 `AD_ACCOUNT`。
    - Local 帳號：系統比對 `PASSWORD_HASH`，並強制執行密碼安全性規範。
3.  **多網域支援**: 預留 `DOMAIN_NAME`，預設為 `CORP`。
4.  **歷史相容**: 透過 `OLD_USERID` 關聯舊系統歷史資料，避免資料斷鏈。

