# SYS_DRILLDOWN_D
**中文名稱：** 系統下鑽明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TABLENAME | 資料表名稱 |  | table_name |   | varchar(20) |  | Y | Y |  |  |
| SEQ | 序號 |  | seq_no |   | decimal(9) |  | Y | Y |  |  |
| FIELDNAME | 欄位名稱 |  | field_name |   | varchar(20) |  |  |  |  |  |
| TRAIL_TYPE | 下鑽類型 |  | drill_type |   | varchar(1) |  |  |  |  |  |
| KEYFIELD | 鍵值欄位 |  | key_field |   | varchar(255) |  |  |  |  |  |
| MODULE_ID | 模組編號 |  | module_no |   | varchar(12) |  |  |  |  |  |
| MODULE_PARAM | 模組參數 |  | module_param |   | varchar(255) |  |  |  |  |  |
| SOURCEFIELD | 來源欄位 |  | source_field |   | varchar(255) |  |  |  |  |  |
| SOURCETABLE | 來源表格 |  | source_table |   | varchar(20) |  |  |  |  |  |
| SQLSCIPTWHERE | SQL 條件 |  | sql_condition |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 |  | upd_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 |  | upd_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 |  | upd_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 |  | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 |  | last_upd_time |   | varchar(14) |  |  |  |  |  |
