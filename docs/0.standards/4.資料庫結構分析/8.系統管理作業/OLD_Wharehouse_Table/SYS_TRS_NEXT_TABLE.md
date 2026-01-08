# SYS_TRS_NEXT
**中文名稱：** 系統交易下一步

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRS_NO | 規則編號 | rule_no | rule_no |   | varchar(20) |  |  |  |  |  |
| TRS_SQL_SEQ | 規則 SQL 序號 | rule_sql_seq | rule_sql_seq |   | decimal(9) |  |  |  |  |  |
| TRS_NEXT_SEQ | 下一規則序號 | next_rule_seq | next_rule_seq |   | decimal(9) |  |  |  |  |  |
| TRS_NEXT_NO | 下一規則編號 | next_rule_no | next_rule_no |   | varchar(20) |  |  |  |  |  |
| NEXT_KEY | 下一鍵值 | key_value | next_key |   | varchar(200) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
