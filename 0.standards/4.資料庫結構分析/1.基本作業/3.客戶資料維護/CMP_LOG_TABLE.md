# CMP_LOG
## 客戶使用者異動歷程 (Customer Contact History Trail)

## 📋 基本資訊

- **資料表名稱**: `CMP_LOG`
- **中文名稱**: 客戶使用者異動歷程
- **欄位數量**: 7
- **產生時間**: 2025-12-05 16:00:00
- **用途**: 記錄客戶聯絡人每一次狀態異動的業務原因與時間，專注於業務面的原因記錄。作為 CMP 表的異動歷程 Shadow Table，解決 CMP 只能記錄「最後一次」狀態的問題。

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增欄位 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 英文欄名(Lovable) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `LOG_ID` | 紀錄ID | bigint | - | ❌ | ✅ |  |  | ✅ | **PK (Snowflake ID)**。系統自動產生。 | LogId |
| 2 | `CMP_ID` | 客戶使用者ID | bigint | - | ❌ |  |  | `CMP.id` |  | 被異動的客戶聯絡人 ID (FK 指向 CMP.id)。 | CmpId |
| 3 | `ACTION_TYPE` | 動作類型 | varchar | 20 | ❌ |  |  |  |  | `CREATE`(新增), `UPDATE`(異動), `DISABLE`(停用), `ENABLE`(復用), `TRANSFER`(調動)。 | ActionType |
| 4 | `REASON` | 異動原因 | nvarchar | 200 | ❌ |  |  |  |  | **(稽核重點)** 必須填寫具體原因。例如：離職、職務調整、廠商倒閉、合約終止、服務單位調動等。 | Reason |
| 5 | `EFFECTIVE_DATE` | 生效日期 | char | 8 | ❌ |  |  |  |  | **(稽核重點)** 異動生效日期，格式為 YYYYMMDD。 | EffectiveDate |
| 6 | `CREATED_BY` | 經辦人ID | bigint | - | ❌ |  |  | `USR.USER_ID` |  | 執行此異動的操作者 ID (FK 指向 USR.USER_ID)。 | CreatedBy |
| 7 | `CREATED_AT` | 紀錄時間 | datetime | - | ❌ |  |  |  |  | 異動發生時間（系統自動寫入）。 | CreatedAt |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1 (`LOG_ID`)
- 🆔 **Identity 欄位**: 1 (`LOG_ID` 使用 Snowflake ID)
- 🔗 **外鍵欄位**: 2 (`CMP_ID`, `CREATED_BY`)
- 🔐 **唯一鍵欄位**: 1 (`LOG_ID`)
- ✅ **允許空值欄位**: 0（所有欄位必填）
- ❌ **不允許空值欄位**: 7

## 📝 設計備註

1.  **用途**: 作為 `CMP` 表的異動歷程 Shadow Table，專注於業務面的原因記錄。解決 `CMP` 只能記錄「最後一次」狀態，無法追溯完整歷史的問題。

2.  **與 UHT 的區隔**:
    - **UHT** (User History Trail): 記錄 `USR` 表的物理欄位變更 (Before/After)，專注於「系統狀態稽核」。
    - **CMP_LOG**: 專注於「業務理由」（如：廠商倒閉、合約終止、離職、職務調整），兩者互補不衝突。

3.  **觸發機制**: 建議透過 **Service Layer** 寫入，確保包含 `REASON` 與 `EFFECTIVE_DATE`。所有異動操作（停用、復用、調動）都必須強制填寫原因與日期，否則不可存檔。

4.  **稽核要求**:
    - `REASON` 與 `EFFECTIVE_DATE` 為必填，缺一不可。
    - 前端 UI 與後端 API 都必須進行雙重驗證，防止繞過檢查。
    - 此表應設定為 **WORM (Write Once, Read Many)** 性質，禁止修改與刪除。

5.  **業務情境範例**:
    - 停用：`ACTION_TYPE='DISABLE'`, `REASON='離職'`, `EFFECTIVE_DATE='20251231'`
    - 復用：`ACTION_TYPE='ENABLE'`, `REASON='重新啟用'`, `EFFECTIVE_DATE='20260101'`
    - 調動：`ACTION_TYPE='TRANSFER'`, `REASON='服務單位調動'`, `EFFECTIVE_DATE='20251215'`

---
*此文件由 AI 專案顧問產生於 2025-12-05 16:00:00，最後更新於 2026-01-01*
