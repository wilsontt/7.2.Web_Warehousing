# 前端專案 (Frontend)

## 技術堆疊

- **React 18+**: UI 框架
- **TypeScript**: 型別安全
- **Tailwind CSS**: 樣式框架
- **Vite**: 建置工具

## 專案結構

```
frontend/
├── src/
│   ├── components/      # 共用元件
│   ├── pages/          # 頁面元件
│   ├── hooks/          # 自訂 Hooks
│   ├── services/       # API 服務
│   ├── store/          # 狀態管理
│   ├── types/          # TypeScript 類型定義
│   ├── utils/          # 工具函式
│   └── layouts/        # 佈局元件
├── public/             # 靜態資源
└── package.json
```

## 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview

# 執行 Lint
npm run lint
```

## 環境變數

建立 `.env.local` 檔案：

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## 開發規範

- 使用 **camelCase** 作為變數與函式命名
- 使用 **PascalCase** 作為 class、TypeScript interface、type alias 命名
- 所有程式需使用 **async/await**，不使用 then()
- 優先遵循 **SOLID、KISS、DRY** 原則
- 需加上必要的程式註解，使用 **JSDoc** 樣式

## UI/UX 規範

請遵循 `0.standards/0.專案憲章-總規範-SDD工作流程/2.文件倉儲管理系統 Warehouse Management System 設計規範v2.0.md` 中的設計規範。

### 主要設計要點

- 淺色底、淡淺水藍色線條、圓角按鈕
- 支援深色模式（手動切換 + 系統偏好）
- 響應式設計（優先支援桌面與平板）
- Master-Detail 佈局（使用 ResizableLayout）
- 明確的交易儲存（不使用 Auto-Save）
