# SYS_TRS_FIELD
**中文名稱：** 系統交易欄位

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRS_NO | 轉換編號 | convert_no |  |   | varchar(20) |  |  |  |  |  |
| TRS_SQL_SEQ | 轉換SQL序號 | convert_sql_no |  |   | decimal(9) |  |  |  |  |  |
| ORI_NAME | 原始欄位名稱 | original_column |  |   | varchar(30) |  |  |  |  |  |
| IS_KEY | 是否為鍵值欄位 | is_key | is_key_field |   | decimal(9) |  |  |  |  |  |
| SEL_NAME | 選用欄位名稱 | optional_column |  |   | varchar(30) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
