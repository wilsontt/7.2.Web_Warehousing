# URL
## 使用者角色關聯

## 📋 基本資訊

- **資料表名稱**: `URL`
- **中文名稱**: 使用者角色關聯
- **欄位數量**: 7
- **產生時間**: 2025-11-29 12:15:00
- **用途**: 定義使用者擁有哪些角色，並進一步指定該角色適用的「資料範圍 (Data Scope)」，實現細粒度的權限控管。

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 中文欄名(原) | 資料表中文名稱 | 英文欄名(Lovable) | 新增預設值 | 欄位使用元件 | 驗證規則 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `ID` | 流水號 | bigint | - | ❌ | | | | ✅ | **PK (Snowflake ID)** | 流水號 | 使用者角色關聯 | Id | (System Gen) | Hidden | |
| 2 | `USER_ID` | 使用者編號 | bigint | - | ❌ | | ✅ | USR.USER_ID | | 關聯使用者 | 使用者編號 | 使用者角色關聯 | UserId | - | Select | 必填 |
| 3 | `ROLE_ID` | 角色編號 | bigint | - | ❌ | | ✅ | ROL.ROLE_ID | | 關聯角色 | 角色編號 | 使用者角色關聯 | RoleId | - | Select | 必填 |
| 4 | `SCOPE_TYPE` | 範圍類型 | varchar | 20 | ❌ | | | | | `'GLOBAL'`: 全域<br>`'WAREHOUSE'`: 倉庫<br>`'CUSTOMER'`: 客戶<br>`'DEPT'`: 客戶部門 | 範圍類型 | 使用者角色關聯 | ScopeType | 'GLOBAL' | Select | |
| 5 | `SCOPE_VALUE` | 範圍值 | varchar | 50 | ✅ | | | | | 對應 ScopeType 的 ID 值。<br>GLOBAL='*'<br>WAREHOUSE=WH_ID<br>CUSTOMER=CUST_ID | 範圍值 | 使用者角色關聯 | ScopeValue | '*' | Input/Select | 依類型動態驗證 |
| 6 | `CRE_USERID` | 建檔人員 | varchar | 10 | ✅ | | | | | | 建檔人員 | 使用者角色關聯 | CreatedBy | CurrentUser | - | |
| 7 | `CRE_DTIME` | 建檔日期 | char | 14 | ✅ | | | | | | 建檔日期 | 使用者角色關聯 | CreatedAt | CurrentTime | - | |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1 (`ID`)
- 🆔 **Identity 欄位**: 0 (使用 Snowflake ID)
- 🔗 **外鍵欄位**: 2 (`USER_ID`, `ROLE_ID`)
- 🔐 **唯一鍵欄位**: 1 (`ID`)
- ✅ **允許空值欄位**: 3
- ❌ **不允許空值欄位**: 4

## 💡 設計備註

1.  **資料範圍 (Data Scope)**:
    - 這是本表的核心。透過 `SCOPE_TYPE` + `SCOPE_VALUE` 的組合，我們可以表達：
        - 「台北倉經理」: `Role=WH_MANAGER`, `ScopeType=WAREHOUSE`, `ScopeValue=WH_TP01`
        - 「台積電經辦」: `Role=CUST_USER`, `ScopeType=CUSTOMER`, `ScopeValue=TSMC`
        - 「總稽核」: `Role=CHIEF_AUDITOR`, `ScopeType=GLOBAL`, `ScopeValue=*`
2.  **多重權限**:
    - 一個使用者可以有多筆記錄。例如某人同時是「台北倉經理」也是「高雄倉代理人」，則會有兩筆不同 Scope 的記錄。
3.  **前端應用**:
    - 登入後，後端應將此使用者的所有 Scope 轉換為 Token Claims 或 Session Data，供前端 API 查詢時進行資料過濾 (Data Filtering)。

