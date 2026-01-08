# DBC
**中文名稱：** 物件條碼

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| DBC01 | 件號文字 | item_number_text | item_no_text |   | char(20) |  |  |  |  |  |
| DBC02 | 起始件號 | start_item_number | start_item_no |   | char(20) |  |  |  |  |  |
| DBC03 | 截止件號 | cutoff_item_number | end_item_no |   | char(12) |  |  |  |  |  |
| id | 物件條碼序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
