# dtproperties
**中文名稱：** 系統屬性

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| id | 主鍵 | pk |  |   | int(4) | Y | Y | Y |  |  |
| objectid | 物件編號 | object_no |  |   | int(4) |  |  |  |  |  |
| property | 屬性 | property |  |   | varchar(64) |  | Y | Y |  |  |
| value | 值 | value |  |   | varchar(255) |  |  |  |  |  |
| uvalue | U 值 | u_value |  |   | nvarchar(510) |  |  |  |  |  |
| lvalue | L 值 | l_value |  |   | image(16) |  |  |  |  |  |
| version | 版本 | version |  |   | int(4) |  |  |  |  |  |
