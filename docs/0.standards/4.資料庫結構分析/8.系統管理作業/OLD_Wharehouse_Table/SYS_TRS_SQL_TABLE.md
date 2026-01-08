# SYS_TRS_SQL
**中文名稱：** 系統交易 SQL

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRS_NO | 規則編號 | rule_no | rule_no |   | varchar(20) |  | Y | Y |  |  |
| TRS_SQL_SEQ | 規則 SQL 序號 | rule_sql_seq | rule_sql_seq |   | decimal(9) |  | Y | Y |  |  |
| SRC_SQL | 原始SQL |  |  |   | varchar(255) |  |  |  |  |  |
| SRC_SQL1 | 來源_SQL1 | source_sql1 | src_sql1 |   | varchar(255) |  |  |  |  |  |
| SRC_SQL2 | 來源_SQL2 | source_sql2 | src_sql2 |   | varchar(255) |  |  |  |  |  |
| SRC_SQL3 | 來源_SQL3 | source_sql3 | src_sql3 |   | varchar(255) |  |  |  |  |  |
| SRC_SQL4 | 來源_SQL4 | source_sql4 | src_sql4 |   | varchar(255) |  |  |  |  |  |
| SRC_WHEN | 執行條件 | exec_condition | exec_condition |   | varchar(255) |  |  |  |  |  |
| DES_APPEND_MODE | 目的附加模式 | target_append_mode | target_append_mode |   | varchar(1) |  |  |  |  |  |
| ON_KEY | 關聯鍵 | relation_key | join_key |   | varchar(255) |  |  |  |  |  |
| EXEC_SEQ | 執行順序 | exec_order | exec_order |   | decimal(9) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
