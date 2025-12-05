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
1.  **用途**: 作為 `USR` 表的 Shadow Table，詳細記錄帳號生命週期的每一次變化。
2.  **觸發機制**: 建議透過 **Service Layer** 寫入，確保包含 `CHANGE_REASON` 與 `IP_ADDRESS`。若由 DB Trigger 寫入，可能無法取得 IP 與業務原因，僅能記錄 Before/After。
3.  **Before/After**: 僅記錄 **有變動** 的欄位差異，以節省空間。
    *   Example: `{"STATUS": {"old": 1, "new": 0}, "DEPT_ID": {"old": 101, "new": 202}}`

---
*此文件由 AI 專案顧問產生於 2025-12-05 15:30:00*

