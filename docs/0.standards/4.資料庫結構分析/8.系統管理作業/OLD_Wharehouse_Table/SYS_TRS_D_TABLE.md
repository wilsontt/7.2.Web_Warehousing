# SYS_TRS_D
**中文名稱：** 系統交易處理明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRS_NO | 規則編號 | rule_no | rule_no |   | varchar(20) |  | Y | Y |  |  |
| TRS_SQL_SEQ | 規則 SQL 序號 | rule_sql_seq | rule_sql_seq |   | decimal(9) |  | Y | Y |  |  |
| TRS_SEQ | 規則序號 | rule_seq | rule_seq |   | decimal(9) |  | Y | Y |  |  |
| TRS_KIND | 規則種類 | rule_type | rule_type |   | varchar(1) |  |  |  |  |  |
| SRC_FIELD | 來源欄位 | source_field | source_field |   | varchar(255) |  |  |  |  |  |
| DES_FIELD | 目的欄位 | target_field | target_field |   | varchar(255) |  |  |  |  |  |
| TRS_MODE | 規則模式 | rule_mode | rule_mode |   | varchar(1) |  |  |  |  |  |
| TRS_CONDITION | 規則條件 | rule_condition | rule_condition |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
