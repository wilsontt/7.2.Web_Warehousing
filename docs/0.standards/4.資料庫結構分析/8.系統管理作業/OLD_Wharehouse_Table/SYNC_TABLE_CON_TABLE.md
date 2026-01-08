# SYNC_TABLE_CON
**中文名稱：** 同步資料表連線

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TABLE_NAME | 資料表名稱 | table_name | table_name |   | varchar(30) |  | Y | Y |  |  |
| APSRV_ID | 應用伺服器編號 | app_server_no | app_server_no |   | varchar(9) |  | Y | Y |  |  |
| ORDER_NO | 順序號 | order | order_seq |   | decimal(9) |  |  |  |  |  |
| FIELDS_LIST | 欄位清單 | column_list | field_list |   | decimal(9) |  |  |  |  |  |
| KEY_FIELD | 主鍵欄位 | primary_key | pk_field |   | varchar(50) |  |  |  |  |  |
| CONDITION | 條件 | condition | condition |   | varchar(50) |  |  |  |  |  |
