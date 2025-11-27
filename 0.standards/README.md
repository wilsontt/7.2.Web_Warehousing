# 文件倉儲管理系統 (Warehouse Management System)

**版本**: 2.0.0  
**技術堆疊**: React 18+ / TypeScript / ASP.NET Core 8+ / MS SQL Server 2022+

## 專案概述

本專案為文件倉儲管理系統的 Web 版本，從原有的 Client-Server + MSSQL 架構升級而來。採用**規格驅動開發 (SDD)** 方法論，基於**領域驅動設計 (DDD)** 原則，將系統拆分為多個有界上下文模組。

## 專案結構

```
7.2.Web_Warehousing/
├── 0.standards/              # 專案標準文件
│   ├── 1.專案憲章 Project Constitution：文件倉儲管理系統.md
│   ├── 2.文件倉儲管理系統 Warehouse Management System 設計規範v2.0.md
│   └── 3.規格驅動開發 (SDD) 工作流程.md
├── 1.specs/                  # 規格文件 (SPEC)
│   └── [模組名稱].spec.md
├── 2.plans/                  # 計畫文件 (PLAN)
│   └── [模組名稱].plan.md
├── 3.tasks/                  # 任務文件 (TASKS)
│   └── [模組名稱].tasks.md
├── 4.reviews/                # 驗收文件 (REVIEW)
│   └── [模組名稱].review.md
├── frontend/                 # 前端專案 (React + TypeScript + Tailwind)
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/                  # 後端專案 (ASP.NET Core WebAPI)
│   ├── src/
│   ├── tests/
│   └── *.sln
├── docker/                   # Docker 配置檔案
│   ├── docker-compose.yml
│   └── Dockerfile.*
└── docs/                     # 其他文件
```

## 技術堆疊

### 前端
- **框架**: React 18+
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **狀態管理**: Redux/Pinia (建議)
- **API 通訊**: RESTful (OpenAPI 3.x)

### 後端
- **框架**: ASP.NET Core 8+ WebAPI
- **語言**: C# 12
- **資料庫**: MS SQL Server 2022+
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

詳細流程請參考：[規格驅動開發 (SDD) 工作流程](./0.standards/3.規格驅動開發%20(SDD)%20工作流程.md)

## 核心原則

所有開發工作必須遵循[專案憲章](./0.standards/1.專案憲章%20Project%20Constitution：文件倉儲管理系統.md)中定義的核心原則：

- **P1**: 簡潔優先於複雜
- **P2**: 設計即安全（OIDC/OAuth 2.0、RBAC、稽核日誌）
- **P3**: 清晰與可測試性
- **P4**: 漸進式價值交付
- **P5**: 主要語言（正體中文 zh-TW）
- **P6-P13**: 程式碼品質、測試、UX、效能、架構、技術堆疊、數據治理、可觀測性

## 快速開始

### 前置需求

- Node.js 18+
- .NET 8 SDK
- Docker Desktop
- MS SQL Server 2022+ (或使用 Docker)
- Redis (或使用 Docker)

### 安裝步驟

1. **複製專案**
   ```bash
   git clone [repository-url]
   cd 7.2.Web_Warehousing
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

根據設計規範，系統分為 8 個主要功能模組（有界上下文）：

1. **基本作業** (Basic Operations)
2. **例行作業** (Routine Operations)
3. **庫存作業** (Inventory Operations)
4. **客戶作業** (Customer Operations)
5. **移儲作業** (Relocation Operations)
6. **稽核作業** (Audit Operations)
7. **倉儲管理作業** (Warehouse Administrative Operations)
8. **系統管理作業** (System Administration)

## 文件規範

- 所有文件使用 **Markdown** 格式
- 所有文件使用 **正體中文 (zh-TW)** 撰寫
- 文件結構需遵循 7 大項：目的、範圍、權責、名詞解釋、作業內容、參考文件、使用表單

## 授權

[待補充]

## 聯絡資訊

[待補充]
