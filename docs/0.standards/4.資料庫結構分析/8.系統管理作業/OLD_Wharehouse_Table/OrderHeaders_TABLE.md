# OrderHeaders
**中文名稱：** 

| 欄位代號 | 中文名稱 | 英文名稱 | 型態 | PK | Unique | FK | 備註 |
|----------|----------|----------|------|----|--------|----|------|
| Id |  | Id | int(4) | Y | Y |  |  |
| ApplicationUserId |  | ApplicationUserId | nvarchar(900) |  |  | Y |  |
| OrderDate |  | OrderDate | datetime2(8) |  |  |  |  |
| OrderTotal |  | OrderTotal | float(8) |  |  |  |  |
| OrderStatus |  | OrderStatus | nvarchar(-1) |  |  |  |  |
| PaymentStatus |  | PaymentStatus | nvarchar(-1) |  |  |  |  |
| PaymentDate |  | PaymentDate | datetime2(8) |  |  |  |  |
| PaymentDueDate |  | PaymentDueDate | datetime2(8) |  |  |  |  |
| SessionId |  | SessionId | nvarchar(-1) |  |  |  |  |
| PhoneNumber |  | PhoneNumber | nvarchar(-1) |  |  |  |  |
| Address |  | Address | nvarchar(-1) |  |  |  |  |
| Name |  | Name | nvarchar(-1) |  |  |  |  |
