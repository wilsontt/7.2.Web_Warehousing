# UHT
## 使用者異動軌跡 (User History Trail)

## 📋 基本資訊

- **資料表名稱**: `UHT`
- **中文名稱**: 使用者異動軌跡
- **欄位數量**: 9
- **產生時間**: 2025-12-05 15:30:00

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增欄位 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 英文欄名(Lovable) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `LOG_ID` | 紀錄ID | bigint | - | ❌ | ✅ |  |  | ✅ | **PK (Snowflake ID)**。系統自動產生。 | LogId |
| 2 | `USER_ID` | 使用者ID | bigint | - | ❌ |  |  | `USR.USER_ID` |  | 被異動的使用者 ID (不設實體 FK 以免阻擋物理刪除測試，但邏輯上關聯)。 | UserId |
| 3 | `ACTION_TYPE` | 動作類型 | varchar | 20 | ❌ |  |  |  |  | `CREATE`, `UPDATE`, `DISABLE`, `ENABLE`, `LOCK`, `UNLOCK`, `AD_SYNC`。 | ActionType |
| 4 | `CHANGE_REASON` | 變更原因 | nvarchar | 200 | ✅ |  |  |  |  | 變更原因說明 (如：離職停用、密碼重置)。 | ChangeReason |
| 5 | `BEFORE_VALUE` | 變更前內容 | nvarchar | MAX | ✅ |  |  |  |  | JSON 格式。記錄變更欄位的原始值。 | BeforeValue |
| 6 | `AFTER_VALUE` | 變更後內容 | nvarchar | MAX | ✅ |  |  |  |  | JSON 格式。記錄變更欄位的新值。 | AfterValue |
| 7 | `OPERATOR_ID` | 操作人員ID | bigint | - | ❌ |  |  | `USR.USER_ID` |  | 執行此動作的人員 ID (若是系統自動執行，紀錄 System User ID)。 | OperatorId |
| 8 | `IP_ADDRESS` | IP位址 | varchar | 50 | ✅ |  |  |  |  | 操作來源 IP。 | IpAddress |
| 9 | `LOG_TIME` | 紀錄時間 | datetime | - | ❌ |  |  |  |  | 異動發生時間。 | LogTime |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1
- 🆔 **Identity 欄位**: 1
- 🔗 **外鍵欄位**: 0 (邏輯關聯)
- 🔐 **唯一鍵欄位**: 1
- ✅ **允許空值欄位**: 3
- ❌ **不允許空值欄位**: 6

## 📝 設計備註

1.  **用途**: 作為 `USR` 表的 Shadow Table，詳細記錄帳號生命週期的每一次變化，補足系統面稽核缺口。

2.  **觸發機制**: 建議透過 **Service Layer** 寫入，確保包含 `CHANGE_REASON` 與 `IP_ADDRESS`。若由 DB Trigger 寫入，可能無法取得 IP 與業務原因，僅能記錄 Before/After。

3.  **Before/After**: 僅記錄 **有變動** 的欄位差異，以節省空間。
    *   基本格式: `{"欄位名稱": {"old": "舊值", "new": "新值"}}`
    *   範例: `{"STATUS": {"old": 1, "new": 0}, "DEPT_ID": {"old": 101, "new": 202}}`

4.  **與 CMP_LOG 的區隔說明**:
    - **UHT** (User History Trail): 記錄 `USR` 表的物理欄位變更 (Before/After)，專注於「系統狀態稽核」。記錄所有帳號層級的技術性變更，如狀態、密碼、登入資訊等。
    - **CMP_LOG** (Customer Contact History Trail): 記錄 `CMP` 表的業務異動，專注於「業務理由」（如：廠商倒閉、合約終止、離職、職務調整）。
    - **兩者互補不衝突**: UHT 負責系統層面的稽核軌跡，CMP_LOG 負責業務層面的原因記錄。當客戶聯絡人停用時，會同時寫入 CMP_LOG（業務原因）與 UHT（USR.STATUS 變更的技術記錄）。

5.  **業務情境範例**:

    **情境 1：AD 同步觸發 (AD_SYNC)**
    - 系統排程每日同步 AD 狀態，發現某 AD 帳號已被停用
    - `ACTION_TYPE`: `'AD_SYNC'`
    - `CHANGE_REASON`: `'AD 帳號已停用，系統自動同步'`
    - `OPERATOR_ID`: System User ID (系統自動執行)
    - `BEFORE_VALUE`: `{"STATUS": 1, "DISABLE_TIME": null}`
    - `AFTER_VALUE`: `{"STATUS": 0, "DISABLE_TIME": "2025-12-05 23:00:00"}`
    - `IP_ADDRESS`: `null` (系統內部作業)

    **情境 2：手動停用帳號 (DISABLE)**
    - 管理員在系統介面手動停用某使用者帳號
    - `ACTION_TYPE`: `'DISABLE'`
    - `CHANGE_REASON`: `'管理員手動停用：離職'`
    - `OPERATOR_ID`: 管理員的 USER_ID
    - `BEFORE_VALUE`: `{"STATUS": 1, "DISABLE_TIME": null}`
    - `AFTER_VALUE`: `{"STATUS": 0, "DISABLE_TIME": "2025-12-05 14:30:00"}`
    - `IP_ADDRESS`: `'192.168.1.100'` (管理員操作 IP)

    **情境 3：系統自動停用 (DISABLE)**
    - 系統偵測到登入失敗次數超過限制，自動鎖定帳號
    - `ACTION_TYPE`: `'LOCK'` (鎖定) 或 `'DISABLE'` (停用)
    - `CHANGE_REASON`: `'登入失敗次數超過限制，系統自動鎖定'`
    - `OPERATOR_ID`: System User ID
    - `BEFORE_VALUE`: `{"STATUS": 1, "LOCK_TIME": null, "LOGIN_FAIL_COUNT": 4}`
    - `AFTER_VALUE`: `{"STATUS": 9, "LOCK_TIME": "2025-12-05 15:00:00", "LOGIN_FAIL_COUNT": 5}`

    **情境 4：帳號資訊更新 (UPDATE)**
    - 管理員修改使用者的部門或職稱
    - `ACTION_TYPE`: `'UPDATE'`
    - `CHANGE_REASON`: `'職務調整：從倉儲部調至業務部'`
    - `OPERATOR_ID`: 管理員的 USER_ID
    - `BEFORE_VALUE`: `{"DEPARTMENT": "倉儲部", "TITLE": "倉儲專員"}`
    - `AFTER_VALUE`: `{"DEPARTMENT": "業務部", "TITLE": "業務專員"}`

    **情境 5：密碼重置 (UPDATE)**
    - 使用者忘記密碼，管理員協助重置
    - `ACTION_TYPE`: `'UPDATE'`
    - `CHANGE_REASON`: `'密碼重置：使用者申請忘記密碼'`
    - `OPERATOR_ID`: 管理員的 USER_ID
    - `BEFORE_VALUE`: `{"PASSWORD_HASH": "old_hash_value", "PWD_LAST_CHANGE_TIME": "2025-01-01 10:00:00", "FORCE_CHANGE_PWD": 0}`
    - `AFTER_VALUE`: `{"PASSWORD_HASH": "new_hash_value", "PWD_LAST_CHANGE_TIME": "2025-12-05 16:00:00", "FORCE_CHANGE_PWD": 1}`
    - **注意**: 密碼雜湊值僅記錄變更事實，不記錄實際密碼內容（安全考量）

    **情境 6：帳號解鎖 (UNLOCK)**
    - 管理員手動解鎖被系統鎖定的帳號
    - `ACTION_TYPE`: `'UNLOCK'`
    - `CHANGE_REASON`: `'管理員手動解鎖：誤鎖定'`
    - `OPERATOR_ID`: 管理員的 USER_ID
    - `BEFORE_VALUE`: `{"STATUS": 9, "LOCK_TIME": "2025-12-05 15:00:00", "LOGIN_FAIL_COUNT": 5}`
    - `AFTER_VALUE`: `{"STATUS": 1, "UNLOCK_TIME": "2025-12-05 16:30:00", "LOGIN_FAIL_COUNT": 0}`

6.  **Before/After JSON 格式完整範例**:

    **單一欄位變更**:
    ```json
    {
      "STATUS": {
        "old": 1,
        "new": 0
      }
    }
    ```

    **多欄位同時變更**:
    ```json
    {
      "STATUS": {
        "old": 1,
        "new": 0
      },
      "DISABLE_TIME": {
        "old": null,
        "new": "2025-12-05 14:30:00"
      },
      "DEPARTMENT": {
        "old": "倉儲部",
        "new": "業務部"
      }
    }
    ```

    **AD 同步完整範例**:
    ```json
    {
      "AD_ACCOUNT": {
        "old": "john.doe",
        "new": "john.doe"
      },
      "STATUS": {
        "old": 1,
        "new": 0
      },
      "DISABLE_TIME": {
        "old": null,
        "new": "2025-12-05 23:00:00"
      },
      "EMAIL": {
        "old": "john.doe@company.com",
        "new": "john.doe.new@company.com"
      }
    }
    ```

    **狀態變更完整範例（啟用 → 停用）**:
    ```json
    {
      "STATUS": {
        "old": 1,
        "new": 0
      },
      "ENABLE_TIME": {
        "old": "2025-01-01 09:00:00",
        "new": "2025-01-01 09:00:00"
      },
      "DISABLE_TIME": {
        "old": null,
        "new": "2025-12-05 14:30:00"
      }
    }
    ```

    **NULL 值處理**:
    ```json
    {
      "LOCK_TIME": {
        "old": "2025-12-05 15:00:00",
        "new": null
      },
      "UNLOCK_TIME": {
        "old": null,
        "new": "2025-12-05 16:30:00"
      }
    }
    ```

7.  **與 IAM 稽核體系的關係**:
    - **定位**: UHT 是 IAM 稽核體系的核心組件之一，負責記錄所有 `USR` 表的變更軌跡。
    - **與 RHT 的協同**: 
      - **UHT**: 記錄使用者帳號本身的變更（狀態、密碼、基本資訊等）
      - **RHT**: 記錄使用者權限與角色的變更（誰被賦予了什麼角色、什麼權限）
      - 兩者共同構成完整的 IAM 稽核軌跡，確保所有帳號與權限的變更都有完整記錄。
    - **全方位監控**: 包含手動修改、AD 同步觸發、系統自動停用等所有來源的異動，確保稽核軌跡的完整性。
    - **安全性**: 此表應設定為 **WORM (Write Once, Read Many)** 性質，禁止修改與刪除，以確保稽核資料的不可篡改性。

---
*此文件由 AI 專案顧問產生於 2025-12-05 15:30:00，最後更新於 2026-01-01*

