# UPF
## 使用者偏好設定

## 📋 基本資訊

- **資料表名稱**: `UPF`
- **中文名稱**: 使用者偏好設定
- **欄位數量**: 9
- **產生時間**: 2025-11-29 10:00:00
- **用途**: 儲存使用者個人的介面與操作偏好設定，實現跨裝置/跨工作階段的個人化體驗。

## 📊 欄位清單

| 序號 | 欄位名稱 | 中文欄位(AI) | 資料型態 | 資料長度 | 可Null | 自動遞增 | 外鍵 | FK參考 | 唯一值 | 欄位說明 | 中文欄名(原) | 資料表中文名稱 | 英文欄名(Lovable) | 新增預設值 | 欄位使用元件 | 驗證規則 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `USERID` | 使用者帳號 | varchar | 20 | ❌ | | ✅ | USERS.USERID | ✅ | 主鍵，對應使用者帳號 | 使用者帳號 | 使用者偏好設定 | UserId | CurrentUser | Input (Hidden) | 必填 |
| 2 | `THEME_MODE` | 主題模式 | varchar | 10 | ❌ | | | | | `light`: 淺色 (預設)<br>`dark`: 深色<br>`system`: 跟隨系統 | 主題模式 | 使用者偏好設定 | ThemeMode | 'light' | Select | 必須是 light/dark/system |
| 3 | `LANGUAGE` | 語系 | varchar | 10 | ❌ | | | | | `zh-TW`: 正體中文 (預設)<br>`en-US`: English | 語系 | 使用者偏好設定 | Language | 'zh-TW' | Select | 必須是支援的語系代碼 |
| 4 | `FONT_SIZE` | 字體大小 | varchar | 10 | ❌ | | | | | `small`: 小<br>`medium`: 中 (預設)<br>`large`: 大 | 字體大小 | 使用者偏好設定 | FontSize | 'medium' | Select | 必須是 small/medium/large |
| 5 | `MENU_COLLAPSED` | 選單收合 | bit | - | ❌ | | | | | `0`: 展開 (預設)<br>`1`: 收合 | 選單收合狀態 | 使用者偏好設定 | MenuCollapsed | 0 | Switch | boolean |
| 6 | `DASHBOARD_CFG` | 首頁配置 | nvarchar | MAX | ✅ | | | | | JSON 格式，儲存 Dashboard Widget 的位置與顯示設定 | 首頁配置 | 使用者偏好設定 | DashboardConfig | NULL | - | 必須是有效的 JSON |
| 7 | `GRID_DENSITY` | 表格密度 | varchar | 10 | ❌ | | | | | `compact`: 緊湊<br>`standard`: 標準 (預設)<br>`comfortable`: 寬鬆 | 表格密度 | 使用者偏好設定 | GridDensity | 'standard' | Select | 必須是 compact/standard/comfortable |
| 8 | `UPD_USERID` | 修改人員 | varchar | 10 | ✅ | | | | | | 修改人員 | 使用者偏好設定 | UpdatedBy | CurrentUser | - | |
| 9 | `UPD_DTIME` | 修改日期 | char | 14 | ✅ | | | | | 格式: yyyyMMddHHmmss | 修改日期 | 使用者偏好設定 | UpdatedAt | CurrentTime | - | |

## 📈 統計資訊

- 🔑 **主鍵欄位**: 1 (`USERID`)
- 🆔 **Identity 欄位**: 0
- 🔗 **外鍵欄位**: 1 (`USERID`)
- 🔐 **唯一鍵欄位**: 1 (`USERID`)
- ✅ **允許空值欄位**: 2 (`DASHBOARD_CFG`, `UPD_USERID`, `UPD_DTIME` 系統自動填入)
- ❌ **不允許空值欄位**: 7

## 💡 設計備註

1. **讀取時機**:
   - 使用者登入成功 (Login Success) 後，立即呼叫 API 取得此表資料。
   - 若該使用者尚無資料（初次登入），後端應回傳預設值（不一定需要立即 Insert，可待使用者變更設定後再 Insert）。
   - 前端取得資料後，應將設定套用至 Global Context (AuthContext 或 UIContext) 並寫入 LocalStorage 作為快取。

2. **寫入時機**:
   - 當使用者在「個人設定」頁面變更並儲存時。
   - 當使用者在 UI 上進行特定操作（如收合選單、切換深淺色）時，可採 Debounce (防抖) 機制自動背景儲存。

3. **擴充性**:
   - `DASHBOARD_CFG` 使用 JSON 格式儲存，保留未來擴充首頁 Widget 自訂排列的彈性，無需頻繁變更 Schema。

