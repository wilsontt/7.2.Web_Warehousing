# SYS_DOMAINTABLE
**中文名稱：** 系統領域資料表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| DOMAIN_NAME | 網域名稱 | domain_name | domain_name |   | varchar(40) |  | Y | Y |  |  |
| DOMAIN_DESC | 網域描述 | domain_description | domain_desc |   | varchar(40) |  |  |  |  |  |
| DATA_TYPE | 資料型態 | data_type | data_type |   | varchar(20) |  |  |  |  |  |
| DATA_LENGTH | 資料長度 | data_length | data_len |   | decimal(9) |  |  |  |  |  |
| DATA_SCALE | 小數位數 | decimal_places | decimal_len |   | decimal(9) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
