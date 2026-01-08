# CBC
**中文名稱：** 箱子條碼

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CBC01 | 起始箱號 | start_box_number | start_box_no |   | char(17) |  |  |  |  |  |
| CBC02 | 截止箱號 | cutoff_box_number | end_box_no |   | char(17) |  |  |  |  |  |
| id | 箱子條碼序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
