# AspNetUserLogins
**中文名稱：** 

| 欄位代號 | 中文名稱 | 英文名稱 | 型態 | PK | Unique | FK | 備註 |
|----------|----------|----------|------|----|--------|----|------|
| LoginProvider |  | LoginProvider | nvarchar(900) | Y | Y |  |  |
| ProviderKey |  | ProviderKey | nvarchar(900) | Y | Y |  |  |
| ProviderDisplayName |  | ProviderDisplayName | nvarchar(-1) |  |  |  |  |
| UserId |  | UserId | nvarchar(900) |  |  | Y |  |
