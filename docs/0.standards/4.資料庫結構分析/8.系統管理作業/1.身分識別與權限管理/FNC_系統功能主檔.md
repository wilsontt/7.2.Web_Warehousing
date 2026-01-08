# FNC
## 系統功能主檔

## 📋 基本資訊

- **資料表名稱**: `FNC`
- **中文名稱**: 系統功能主檔
- **欄位數量**: 14
- **產生時間**: 2025-11-29 11:30:00

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增欄位 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 英文欄名(Lovable) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `FUNC_ID` | 功能ID | bigint | - | ❌ | ✅ |  |  | ✅ | **PK (Snowflake ID)**。系統內部唯一識別碼。 | FuncId |
| 2 | `FUNC_CODE` | 功能代碼 | varchar | 50 | ❌ |  |  |  | ✅ | 權限控管代碼 (e.g., `SYS001`, `USER_ADD`)，程式權限判斷依據。 | FuncCode |
| 3 | `FUNC_NAME` | 功能名稱 | nvarchar | 50 | ❌ |  |  |  |  | 選單或功能顯示名稱。 | FuncName |
| 4 | `PARENT_ID` | 父功能ID | bigint | - | ✅ |  | ✅ | `FNC.FUNC_ID` |  | 父節點 ID，用於建立樹狀結構 (無限層級)。若為根節點則為 NULL。 | ParentId |
| 5 | `FUNC_TYPE` | 功能類型 | varchar | 10 | ❌ |  |  |  |  | `MODULE`: 模組/目錄, `MENU`: 選單頁面, `ACTION`: 按鈕/動作。 | FuncType |
| 6 | `PATH` | 路徑 | varchar | 200 | ✅ |  |  |  |  | 前端路由 (Route) 或 API 路徑。類型為 MODULE 時通常為 NULL。 | Path |
| 7 | `ICON` | 圖示 | varchar | 50 | ✅ |  |  |  |  | 選單圖示代碼 (e.g., `IconUser`, `fa-home`)。 | Icon |
| 8 | `SORT_ORDER` | 排序 | int | - | ❌ |  |  |  |  | 顯示順序，數字越小越前面。 | SortOrder |
| 9 | `IS_VISIBLE` | 是否顯示 | bit | - | ❌ |  |  |  |  | `1`: 顯示於選單, `0`: 隱藏 (如細部權限按鈕或 API)。預設 `1`。 | IsVisible |
| 10 | `STATUS` | 狀態 | tinyint | - | ❌ |  |  |  |  | `1`: 啟用, `0`: 停用。預設 `1`。 | Status |
| 11 | `CRE_USERID` | 建檔人員 | bigint | - | ❌ |  | ✅ | `USR.USER_ID` |  | 建檔人員 (FK to `USR.USER_ID`)。 | CreatedBy |
| 12 | `CRE_DTIME` | 建檔日期時間 | datetime | - | ❌ |  |  |  |  | 建檔日期時間。 | CreatedAt |
| 13 | `UPD_USERID` | 修改人員 | bigint | - | ❌ |  | ✅ | `USR.USER_ID` |  | 修改人員 (FK to `USR.USER_ID`)。 | UpdatedBy |
| 14 | `UPD_DTIME` | 修改日期時間 | datetime | - | ❌ |  |  |  |  | 修改日期時間。 | UpdatedAt |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1
- 🆔 **Identity 欄位**: 1
- 🔗 **外鍵欄位**: 3
- 🔐 **唯一鍵欄位**: 2
- ✅ **允許空值欄位**: 3
- ❌ **不允許空值欄位**: 11

---
*此文件由 AI 專案顧問產生於 2025-11-29 11:30:00*

