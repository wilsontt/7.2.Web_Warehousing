# AspNetUsers
**中文名稱：** 

| 欄位代號 | 中文名稱 | 英文名稱 | 型態 | PK | Unique | FK | 備註 |
|----------|----------|----------|------|----|--------|----|------|
| Id |  | Id | nvarchar(900) | Y | Y |  |  |
| UserName |  | UserName | nvarchar(512) |  |  |  |  |
| NormalizedUserName |  | NormalizedUserName | nvarchar(512) |  | Y |  |  |
| Email |  | Email | nvarchar(512) |  |  |  |  |
| NormalizedEmail |  | NormalizedEmail | nvarchar(512) |  |  |  |  |
| EmailConfirmed |  | EmailConfirmed | bit(1) |  |  |  |  |
| PasswordHash |  | PasswordHash | nvarchar(-1) |  |  |  |  |
| SecurityStamp |  | SecurityStamp | nvarchar(-1) |  |  |  |  |
| ConcurrencyStamp |  | ConcurrencyStamp | nvarchar(-1) |  |  |  |  |
| PhoneNumber |  | PhoneNumber | nvarchar(-1) |  |  |  |  |
| PhoneNumberConfirmed |  | PhoneNumberConfirmed | bit(1) |  |  |  |  |
| TwoFactorEnabled |  | TwoFactorEnabled | bit(1) |  |  |  |  |
| LockoutEnd |  | LockoutEnd | datetimeoffset(10) |  |  |  |  |
| LockoutEnabled |  | LockoutEnabled | bit(1) |  |  |  |  |
| AccessFailedCount |  | AccessFailedCount | int(4) |  |  |  |  |
| Address |  | Address | nvarchar(-1) |  |  |  |  |
| Discriminator |  | Discriminator | nvarchar(42) |  |  |  |  |
| Name |  | Name | nvarchar(-1) |  |  |  |  |
| StoreId |  | StoreId | int(4) |  |  | Y |  |
