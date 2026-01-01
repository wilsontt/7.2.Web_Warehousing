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

1.  **用途**: 資安稽核的核心。記錄「誰」在「什麼時候」把「什麼權限/角色」給了「誰」。作為 IAM 稽核體系的重要組件，確保所有權限與角色的變更都有完整記錄。

2.  **與 URL 表的關聯**: 
    - RHT 記錄 `URL` (使用者角色關聯) 表的所有變更軌跡。
    - 當管理員在 `URL` 表新增、修改或刪除使用者角色關聯時，系統應自動在 RHT 寫入對應記錄。
    - 當管理員在 `RPM` (角色權限設定) 表修改角色權限時，系統也應在 RHT 寫入記錄。

3.  **安全性**: 此表應設定為 **WORM (Write Once, Read Many)** 性質，禁止修改與刪除，以確保稽核資料的不可篡改性。

4.  **ACTION_TYPE 完整說明**:
    - `GRANT_ROLE`: 賦予使用者角色（在 URL 表新增記錄）
    - `REVOKE_ROLE`: 移除使用者角色（在 URL 表刪除記錄）
    - `GRANT_PERM`: 賦予角色功能權限（在 RPM 表新增記錄）
    - `REVOKE_PERM`: 移除角色功能權限（在 RPM 表刪除記錄）
    - `UPDATE_SCOPE`: 更新使用者的資料範圍（修改 URL 表的 SCOPE_TYPE 或 SCOPE_VALUE）

5.  **業務情境範例**:

    **情境 1：賦予使用者角色 (GRANT_ROLE)**
    - 管理員 A 將「倉儲經理」角色賦予給使用者 B，並設定資料範圍為「台北倉」
    - `TARGET_OBJ`: `'USER'`
    - `TARGET_ID`: B 的 USER_ID
    - `ACTION_TYPE`: `'GRANT_ROLE'`
    - `REF_ID`: 「倉儲經理」角色的 ROLE_ID
    - `SCOPE_CHANGE`: `{"SCOPE_TYPE": {"old": null, "new": "WAREHOUSE"}, "SCOPE_VALUE": {"old": null, "new": "WH_TP01"}}`
    - `OPERATOR_ID`: 管理員 A 的 USER_ID
    - `IP_ADDRESS`: `'192.168.1.100'`

    **情境 2：移除使用者角色 (REVOKE_ROLE)**
    - 管理員 A 移除使用者 B 的「倉儲經理」角色
    - `TARGET_OBJ`: `'USER'`
    - `TARGET_ID`: B 的 USER_ID
    - `ACTION_TYPE`: `'REVOKE_ROLE'`
    - `REF_ID`: 「倉儲經理」角色的 ROLE_ID
    - `SCOPE_CHANGE`: `{"SCOPE_TYPE": {"old": "WAREHOUSE", "new": null}, "SCOPE_VALUE": {"old": "WH_TP01", "new": null}}`
    - `OPERATOR_ID`: 管理員 A 的 USER_ID

    **情境 3：賦予角色功能權限 (GRANT_PERM)**
    - 管理員 A 為「倉儲經理」角色新增「刪除庫存」功能權限
    - `TARGET_OBJ`: `'ROLE'`
    - `TARGET_ID`: 「倉儲經理」角色的 ROLE_ID
    - `ACTION_TYPE`: `'GRANT_PERM'`
    - `REF_ID`: 「刪除庫存」功能的 FUNC_ID
    - `SCOPE_CHANGE`: `null` (不涉及資料範圍變更)
    - `OPERATOR_ID`: 管理員 A 的 USER_ID

    **情境 4：移除角色功能權限 (REVOKE_PERM)**
    - 管理員 A 移除「倉儲經理」角色的「刪除庫存」功能權限
    - `TARGET_OBJ`: `'ROLE'`
    - `TARGET_ID`: 「倉儲經理」角色的 ROLE_ID
    - `ACTION_TYPE`: `'REVOKE_PERM'`
    - `REF_ID`: 「刪除庫存」功能的 FUNC_ID
    - `SCOPE_CHANGE`: `null`
    - `OPERATOR_ID`: 管理員 A 的 USER_ID

    **情境 5：更新使用者資料範圍 (UPDATE_SCOPE)**
    - 管理員 A 將使用者 B 的「倉儲經理」角色資料範圍從「台北倉」改為「高雄倉」
    - `TARGET_OBJ`: `'USER'`
    - `TARGET_ID`: B 的 USER_ID
    - `ACTION_TYPE`: `'UPDATE_SCOPE'`
    - `REF_ID`: 「倉儲經理」角色的 ROLE_ID（對應的 URL.ID）
    - `SCOPE_CHANGE`: `{"SCOPE_TYPE": {"old": "WAREHOUSE", "new": "WAREHOUSE"}, "SCOPE_VALUE": {"old": "WH_TP01", "new": "WH_KS01"}}`
    - `OPERATOR_ID`: 管理員 A 的 USER_ID

    **情境 6：批量賦予多重角色**
    - 管理員 A 同時賦予使用者 B 兩個角色：「倉儲經理」（台北倉）與「業務專員」（台積電客戶）
    - 系統會產生 **兩筆** RHT 記錄：
        *   記錄 1: `GRANT_ROLE`, REF_ID=倉儲經理_ROLE_ID, SCOPE_CHANGE={"SCOPE_TYPE": {"old": null, "new": "WAREHOUSE"}, "SCOPE_VALUE": {"old": null, "new": "WH_TP01"}}`
        *   記錄 2: `GRANT_ROLE`, REF_ID=業務專員_ROLE_ID, SCOPE_CHANGE={"SCOPE_TYPE": {"old": null, "new": "CUSTOMER"}, "SCOPE_VALUE": {"old": null, "new": "TSMC"}}`

6.  **SCOPE_CHANGE JSON 格式完整範例**:

    **新增資料範圍（從無到有）**:
    ```json
    {
      "SCOPE_TYPE": {
        "old": null,
        "new": "WAREHOUSE"
      },
      "SCOPE_VALUE": {
        "old": null,
        "new": "WH_TP01"
      }
    }
    ```

    **移除資料範圍（從有到無）**:
    ```json
    {
      "SCOPE_TYPE": {
        "old": "WAREHOUSE",
        "new": null
      },
      "SCOPE_VALUE": {
        "old": "WH_TP01",
        "new": null
      }
    }
    ```

    **變更資料範圍類型（WAREHOUSE → CUSTOMER）**:
    ```json
    {
      "SCOPE_TYPE": {
        "old": "WAREHOUSE",
        "new": "CUSTOMER"
      },
      "SCOPE_VALUE": {
        "old": "WH_TP01",
        "new": "TSMC"
      }
    }
    ```

    **變更資料範圍值（同類型，不同值）**:
    ```json
    {
      "SCOPE_TYPE": {
        "old": "WAREHOUSE",
        "new": "WAREHOUSE"
      },
      "SCOPE_VALUE": {
        "old": "WH_TP01",
        "new": "WH_KS01"
      }
    }
    ```

    **變更為全域權限（GLOBAL）**:
    ```json
    {
      "SCOPE_TYPE": {
        "old": "WAREHOUSE",
        "new": "GLOBAL"
      },
      "SCOPE_VALUE": {
        "old": "WH_TP01",
        "new": "*"
      }
    }
    ```

    **不涉及資料範圍變更（僅權限變更）**:
    ```json
    null
    ```
    *注意：當 ACTION_TYPE 為 `GRANT_PERM` 或 `REVOKE_PERM` 時，通常 SCOPE_CHANGE 為 null，因為這是角色層級的權限變更，不涉及特定使用者的資料範圍。*

7.  **與 UHT 的協同運作**:
    - **UHT**: 記錄使用者帳號本身的變更（狀態、密碼、基本資訊等），專注於「帳號生命週期」。
    - **RHT**: 記錄使用者權限與角色的變更（誰被賦予了什麼角色、什麼權限），專注於「權限賦予歷程」。
    - **兩者互補**: 當管理員賦予使用者角色時，RHT 記錄權限變更；當使用者帳號被停用時，UHT 記錄狀態變更。兩者共同構成完整的 IAM 稽核軌跡。
    - **稽核完整性**: 透過 UHT + RHT 的組合，可以完整追溯「誰在什麼時候做了什麼變更」，滿足資安稽核與合規要求。

8.  **觸發機制**:
    - 建議透過 **Service Layer** 寫入，確保包含完整的業務上下文（如操作原因、IP 位址）。
    - 當 `URL` 表發生變更時（新增、修改、刪除），應自動觸發 RHT 記錄。
    - 當 `RPM` 表發生變更時（角色權限的新增或移除），也應自動觸發 RHT 記錄。
    - 所有權限相關的操作都必須記錄，不可遺漏。

---
*此文件由 AI 專案顧問產生於 2025-12-05 15:35:00，最後更新於 2026-01-01*

