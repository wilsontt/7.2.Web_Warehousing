# ROL
## 角色主檔

## 📋 基本資訊

- **資料表名稱**: `ROL`
- **中文名稱**: 角色主檔
- **欄位數量**: 9
- **產生時間**: 2025-11-29 12:00:00
- **用途**: 定義系統中的角色(Role)，作為權限群組的容器。區分為內部員工角色與外部客戶角色。

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 中文欄名(原) | 資料表中文名稱 | 英文欄名(Lovable) | 新增預設值 | 欄位使用元件 | 驗證規則 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `ROLE_ID` | 角色編號 | bigint | - | ❌ | | | | ✅ | **PK (Snowflake ID)** | 角色編號 | 角色主檔 | RoleId | (System Gen) | Hidden | |
| 2 | `ROLE_CODE` | 角色代碼 | varchar | 20 | ❌ | | | | ✅ | 程式邏輯識別用 (e.g. WH_MANAGER) | 角色代碼 | 角色主檔 | RoleCode | - | Input | 必填, 唯一, 英數 |
| 3 | `ROLE_NAME` | 角色名稱 | nvarchar | 50 | ❌ | | | | | 顯示名稱 (e.g. 倉庫主管) | 角色名稱 | 角色主檔 | RoleName | - | Input | 必填 |
| 4 | `ROLE_TYPE` | 角色類型 | varchar | 10 | ❌ | | | | | `'INTERNAL'`: 內部員工<br>`'EXTERNAL'`: 外部客戶 | 角色類型 | 角色主檔 | RoleType | 'INTERNAL' | Select | |
| 5 | `DESCRIPTION` | 說明 | nvarchar | 200 | ✅ | | | | | | 說明 | 角色主檔 | Description | - | Textarea | |
| 6 | `IS_SYSTEM` | 系統預設 | bit | - | ❌ | | | | | `1`: 系統內建(不可刪除)<br>`0`: 自訂 | 系統預設 | 角色主檔 | IsSystem | 0 | Switch | |
| 7 | `STATUS` | 狀態 | tinyint | - | ❌ | | | | | `1`: 啟用<br>`0`: 停用 | 狀態 | 角色主檔 | Status | 1 | Select | |
| 8 | `CRE_USERID` | 建檔人員 | varchar | 10 | ✅ | | | | | | 建檔人員 | 角色主檔 | CreatedBy | CurrentUser | - | |
| 9 | `CRE_DTIME` | 建檔日期 | char | 14 | ✅ | | | | | | 建檔日期 | 角色主檔 | CreatedAt | CurrentTime | - | |
| 10 | `UPD_USERID` | 修改人員 | varchar | 10 | ✅ | | | | | | 修改人員 | 角色主檔 | UpdatedBy | CurrentUser | - | |
| 11 | `UPD_DTIME` | 修改日期 | char | 14 | ✅ | | | | | | 修改日期 | 角色主檔 | UpdatedAt | CurrentTime | - | |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1 (`ROLE_ID`)
- 🆔 **Identity 欄位**: 0 (使用 Snowflake ID)
- 🔗 **外鍵欄位**: 0
- 🔐 **唯一鍵欄位**: 1 (`ROLE_ID`), 1 (`ROLE_CODE`)
- ✅ **允許空值欄位**: 5
- ❌ **不允許空值欄位**: 6

## 💡 設計備註

1.  **角色類型**: 透過 `ROLE_TYPE` 區分內部/外部角色，這對於管理介面篩選（例如：新增客戶帳號時只顯示 `EXTERNAL` 角色）非常重要。
2.  **系統預設角色**: `IS_SYSTEM=1` 的角色（如 `SUPER_ADMIN`）在前端應鎖定 `ROLE_CODE` 不可修改，且禁止刪除，以避免系統運作異常。
3.  **無階層**: 本系統採扁平化角色設計，不實作角色繼承。若需多重權限，請透過 `URL` 表指派多個角色。

