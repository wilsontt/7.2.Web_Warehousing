# README.md 範本檔案 (Template)

**文件版本**: v1.0.0  
**建立日期**: 2025-11-28  
**依據**: `0.standards/README徽章使用規範.md`

---

## 範本 1: 根目錄 README.md

```markdown
# [專案名稱] ([Project Name])

![版本](https://img.shields.io/badge/版本-{版本號}-blue)
![狀態](https://img.shields.io/badge/狀態-{狀態}-{顏色})
![授權](https://img.shields.io/badge/授權-{授權類型}-lightgrey)

![React](https://img.shields.io/badge/React-{版本}+-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-{版本}+-3178C6?logo=typescript&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-{版本}-512BD4?logo=dotnet&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-{版本}-CC2927?logo=microsoft-sql-server&logoColor=white)

**版本**: {版本號}  
**技術堆疊**: {技術堆疊說明}

## 專案概述

{專案概述內容}

## 專案結構

{專案結構說明}

## 技術堆疊

### 前端
- **框架**: React {版本}+
- **語言**: TypeScript {版本}
- **樣式**: Tailwind CSS {版本}
- **狀態管理**: {狀態管理工具}
- **API 通訊**: RESTful (OpenAPI 3.x)

### 後端
- **框架**: ASP.NET Core {版本}+ WebAPI
- **語言**: C# {版本}
- **資料庫**: MS SQL Server {版本}+
- **ORM**: Entity Framework Core
- **快取**: Redis
- **容器化**: Docker

## 開發流程

本專案採用**規格驅動開發 (SDD)** 工作流程，每個模組開發需遵循以下五個階段：

1. **Phase 1: 規格 (SPEC)** - 定義「做什麼」
2. **Phase 2: 計畫 (PLAN)** - 定義「怎麼做」
3. **Phase 3: 任務 (TASKS)** - 拆解為可執行的任務
4. **Phase 4: 執行 (EXECUTE)** - 實作程式碼
5. **Phase 5: 驗收 (REVIEW)** - 驗收與測試

詳細流程請參考：[規格驅動開發 (SDD) 工作流程](./0.專案憲章-總規範-SDD工作流程/3.規格驅動開發%20(SDD)%20工作流程.md)

## 核心原則

所有開發工作必須遵循[專案憲章](./0.專案憲章-總規範-SDD工作流程/1.專案憲章%20Project%20Constitution.md)中定義的核心原則：

- **P1**: 簡潔優先於複雜
- **P2**: 設計即安全（OIDC/OAuth 2.0、RBAC、稽核日誌）
- **P3**: 清晰與可測試性
- **P4**: 漸進式價值交付
- **P5**: 主要語言（正體中文 zh-TW）
- **P6-P13**: 程式碼品質、測試、UX、效能、架構、技術堆疊、數據治理、可觀測性
- **P14**: 文件產出規範（README.md 格式與結構規範）

## 快速開始

### 前置需求

- Node.js {版本}+
- .NET {版本} SDK
- Docker Desktop
- MS SQL Server {版本}+ (或使用 Docker)
- Redis (或使用 Docker)

### 安裝步驟

1. **複製專案**
   ```bash
   git clone [repository-url]
   cd [專案目錄]
   ```

2. **啟動後端服務**
   ```bash
   cd backend
   dotnet restore
   dotnet run
   ```

3. **啟動前端服務**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **使用 Docker Compose 啟動所有服務**
   ```bash
   docker-compose up -d
   ```

詳細的開發環境設定請參考各子專案的 README。

## 模組清單

{模組清單說明}

## 文件規範

- 所有文件使用 **Markdown** 格式
- 所有文件使用 **正體中文 (zh-TW)** 撰寫
- 文件結構需遵循 7 大項：目的、範圍、權責、名詞解釋、作業內容、參考文件、使用表單
- README.md 必須遵循 `0.standards/README徽章使用規範.md` 的格式規範

## 授權

{授權資訊}

## 聯絡資訊

{聯絡資訊}
```

---

## 範本 2: 子專案 README.md (Frontend)

```markdown
# 前端專案 (Frontend)

![React](https://img.shields.io/badge/React-{版本}-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-{版本}-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-{版本}-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-{版本}-646CFF?logo=vite&logoColor=white)

## 技術堆疊

- **React {版本}+**: UI 框架
- **TypeScript {版本}**: 型別安全
- **Tailwind CSS {版本}**: 樣式框架
- **Vite {版本}**: 建置工具

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
│   └── layouts/         # 佈局元件
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
```

---

## 範本 3: 子專案 README.md (Backend)

```markdown
# 後端專案 (Backend)

![.NET](https://img.shields.io/badge/.NET-{版本}-512BD4?logo=dotnet&logoColor=white)
![C#](https://img.shields.io/badge/C%23-{版本}-239120?logo=c-sharp&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-{版本}-CC2927?logo=microsoft-sql-server&logoColor=white)
![Entity Framework](https://img.shields.io/badge/Entity%20Framework-Core-512BD4?logo=dotnet&logoColor=white)

## 技術堆疊

- **ASP.NET Core {版本}+**: WebAPI 框架
- **C# {版本}**: 程式語言
- **MS SQL Server {版本}+**: 資料庫
- **Entity Framework Core**: ORM 框架
- **Redis**: 快取系統

## 專案結構

```
backend/
├── src/
│   ├── {專案名稱}.API/          # WebAPI 專案
│   ├── {專案名稱}.Application/   # 應用層
│   ├── {專案名稱}.Domain/        # 領域層
│   └── {專案名稱}.Infrastructure/ # 基礎設施層
├── tests/                       # 測試專案
└── *.sln                        # 解決方案檔案
```

## 開發指令

```bash
# 還原套件
dotnet restore

# 建置專案
dotnet build

# 執行專案
dotnet run --project src/{專案名稱}.API

# 執行測試
dotnet test

# 執行資料庫遷移
dotnet ef migrations add {遷移名稱} --project src/{專案名稱}.Infrastructure
dotnet ef database update --project src/{專案名稱}.Infrastructure
```

## 環境變數

建立 `appsettings.Development.json` 檔案：

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database={資料庫名稱};Trusted_Connection=True;"
  },
  "Redis": {
    "ConnectionString": "localhost:6379"
  }
}
```

## 開發規範

- 遵循 **領域驅動設計 (DDD)** 原則
- 使用 **C# 命名規範**（PascalCase 類別、方法，camelCase 區域變數）
- 所有 API 端點必須提供 **OpenAPI 文件**
- 必須實作 **結構化日誌 (Structured Logging)**
- 必須實作 **健康檢查 (Health Check)** 端點

## API 規範

- 遵循 **RESTful** 設計原則
- 使用 **OpenAPI 3.x** 規格
- 所有 API 必須包含 **版本號**（如：`/api/v1/...`）
- 必須實作 **統一的錯誤回應格式**
```

---

## 範本 4: 模組 README.md

```markdown
# [模組名稱] ([Module Name])

## 目的

{模組目的說明}

## 範圍

### 包含功能
- {功能 1}
- {功能 2}

### 排除功能
- {排除功能 1}
- {排除功能 2}

## 文件結構

本模組包含以下文件：

```
[模組目錄]/
├── README.md                    # 本檔案
├── [模組名稱].spec.md          # 規格文件
├── [模組名稱].plan.md          # 計畫文件
├── [模組名稱].tasks.md         # 任務文件
└── [模組名稱].review.md        # 驗收文件
```

## 相關文件

- [規格文件](./[模組名稱].spec.md)
- [計畫文件](./[模組名稱].plan.md)
- [任務文件](./[模組名稱].tasks.md)
- [驗收文件](./[模組名稱].review.md)

## 使用說明

{使用說明內容}

## 注意事項

{注意事項}
```

---

## 使用說明

1. **選擇適當的範本**：根據您的 README.md 類型（根目錄、子專案、模組）選擇對應的範本。

2. **替換變數**：將範本中的 `{變數名稱}` 替換為實際值：
   - `{版本號}` → 實際版本號（如：2.0.0）
   - `{狀態}` → 專案狀態（開發中、測試中、穩定版等）
   - `{授權類型}` → 授權類型（MIT、Apache-2.0 等）
   - `{專案名稱}` → 專案名稱

3. **自訂內容**：根據專案實際情況調整內容。

4. **檢查規範**：確保符合 `0.standards/README徽章使用規範.md` 的要求。

---

**文件版本**: v1.0.0  
**參考文件**: `0.standards/README徽章使用規範.md`

