# ShoppingCarts
**中文名稱：** 

| 欄位代號 | 中文名稱 | 英文名稱 | 型態 | PK | Unique | FK | 備註 |
|----------|----------|----------|------|----|--------|----|------|
| Id |  | Id | int(4) | Y | Y |  |  |
| ProductId |  | ProductId | int(4) |  |  | Y |  |
| Count |  | Count | int(4) |  |  |  |  |
| Ice |  | Ice | nvarchar(-1) |  |  |  |  |
| Sweetness |  | Sweetness | nvarchar(-1) |  |  |  |  |
| ApplicationUserId |  | ApplicationUserId | nvarchar(900) |  |  | Y |  |
