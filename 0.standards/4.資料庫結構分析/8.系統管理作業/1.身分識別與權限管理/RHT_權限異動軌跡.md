# RHT
## 權限異動軌跡 (Role/Permission History Trail)

## 📋 基本資訊

- **資料表名稱**: `RHT`
- **中文名稱**: 權限異動軌跡
- **欄位數量**: 9
- **產生時間**: 2025-12-05 15:35:00

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增欄位 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 英文欄名(Lovable) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `LOG_ID` | 紀錄ID | bigint | - | ❌ | ✅ |  |  | ✅ | **PK (Snowflake ID)**。系統自動產生。 | LogId |
| 2 | `TARGET_OBJ` | 目標物件 | varchar | 20 | ❌ |  |  |  |  | `USER` (針對人員賦予角色), `ROLE` (針對角色賦予權限)。 | TargetObj |
| 3 | `TARGET_ID` | 目標ID | bigint | - | ❌ |  |  |  |  | 被修改的 UserID 或 RoleID。 | TargetId |
| 4 | `ACTION_TYPE` | 動作類型 | varchar | 20 | ❌ |  |  |  |  | `GRANT_ROLE`, `REVOKE_ROLE`, `GRANT_PERM`, `REVOKE_PERM`。 | ActionType |
| 5 | `REF_ID` | 關聯ID | bigint | - | ❌ |  |  |  |  | 被賦予/移除的 RoleID 或 FuncID。 | RefId |
| 6 | `SCOPE_CHANGE` | 範圍變更 | nvarchar | 500 | ✅ |  |  |  |  | 若涉及 Data Scope 變更，記錄前後值 (JSON)。 | ScopeChange |
| 7 | `OPERATOR_ID` | 操作人員ID | bigint | - | ❌ |  |  | `USR.USER_ID` |  | 執行此動作的人員 ID。 | OperatorId |
| 8 | `IP_ADDRESS` | IP位址 | varchar | 50 | ✅ |  |  |  |  | 操作來源 IP。 | IpAddress |
| 9 | `LOG_TIME` | 紀錄時間 | datetime | - | ❌ |  |  |  |  | 異動發生時間。 | LogTime |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1
- 🆔 **Identity 欄位**: 1
- 🔗 **外鍵欄位**: 0 (邏輯關聯)
- 🔐 **唯一鍵欄位**: 1
- ✅ **允許空值欄位**: 2
- ❌ **不允許空值欄位**: 7

## 📝 設計備註
1.  **用途**: 資安稽核的核心。記錄「誰」在「什麼時候」把「什麼權限/角色」給了「誰」。
2.  **安全性**: 此表應設定為 **WORM (Write Once, Read Many)** 性質，禁止修改與刪除。
3.  **情境範例**:
    *   管理員 A 把「倉儲經理」角色給了 使用者 B:
        *   `TARGET_OBJ`: 'USER', `TARGET_ID`: B_ID, `ACTION_TYPE`: 'GRANT_ROLE', `REF_ID`: Manager_Role_ID
    *   管理員 A 修改了「倉儲經理」角色的權限，增加了「刪除庫存」功能:
        *   `TARGET_OBJ`: 'ROLE', `TARGET_ID`: Manager_Role_ID, `ACTION_TYPE`: 'GRANT_PERM', `REF_ID`: Delete_Stock_Func_ID

---
*此文件由 AI 專案顧問產生於 2025-12-05 15:35:00*

