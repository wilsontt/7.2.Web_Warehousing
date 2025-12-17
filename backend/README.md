# 後端專案 (Backend)

## 技術堆疊

- **ASP.NET Core 8+**: Web API 框架
- **C# 12**: 程式語言
- **Entity Framework Core**: ORM
- **MS SQL Server 2022+**: 資料庫
- **Redis**: 快取

## 專案結構

```
backend/
├── WarehouseManagementSystem.Api/     # API 專案
│   ├── Controllers/                   # 控制器
│   ├── Services/                      # 業務邏輯服務
│   ├── Models/                        # 資料模型
│   ├── Data/                          # 資料存取層
│   ├── Middleware/                    # 中介軟體
│   └── Program.cs                     # 應用程式進入點
├── WarehouseManagementSystem.Api.Tests/  # 測試專案
└── WarehouseManagementSystem.sln      # 解決方案檔
```

## 開發指令

```bash
# 還原套件
dotnet restore

# 建置專案
dotnet build

# 執行專案
dotnet run --project WarehouseManagementSystem.Api

# 執行測試
dotnet test

# 建立資料庫遷移
dotnet ef migrations add [MigrationName] --project WarehouseManagementSystem.Api

# 更新資料庫
dotnet ef database update --project WarehouseManagementSystem.Api
```

## 環境變數

在 `appsettings.Development.json` 中設定：

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=WarehouseManagement;User Id=sa;Password=YourStrong@Passw0rd;TrustServerCertificate=True;"
  },
  "Redis": {
    "ConnectionString": "localhost:6379"
  }
}
```

## 開發規範

- 使用 **camelCase** 作為變數與函式命名
- 使用 **PascalCase** 作為 class、TypeScript interface、type alias 命名
- 所有程式需使用 **async/await**，不使用 then()
- 優先遵循 **SOLID、KISS、DRY** 原則
- 需加上必要的程式註解，使用 **XML Documentation Comments**

## 安全規範

- 使用 **OIDC/OAuth 2.0** 進行身份驗證
- 實作 **RBAC** 角色基礎存取控制
- 所有 CUD 操作必須產生 **稽核日誌**
- 敏感資料必須加密（at-rest 和 in-transit）

## API 規範

- 使用 **RESTful API** 設計
- 提供 **OpenAPI (Swagger)** 文件
- 所有 API 端點需進行權限驗證

