# DSBC
**中文名稱：** 物件條碼水號

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| DSBC01 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| DSBC02 | 列印次數 | print_count | print_count |   | float(8) |  |  |  |  |  |
| id | 物件條碼明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| dbc_id | 物件條碼序號 | object_barcode_id | obj_barcode_id |   | bigint(8) |  |  | Y |  |  |
