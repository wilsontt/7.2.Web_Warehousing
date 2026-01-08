# CSBC
**中文名稱：** 箱子條碼水號

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CSBC01 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| CSBC02 | 列印次數 | print_count | print_count |   | float(8) |  |  |  |  |  |
| id | 箱子條碼明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cbc_id | 箱子條碼序號 | box_barcode_id | box_barcode_id |   | bigint(8) |  |  | Y |  |  |
