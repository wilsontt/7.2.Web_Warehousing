# SYS_ROW_SEC_D
**中文名稱：** 系統資料列安全性明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TABLENAME | 資料表名稱 | table_name | table_name |   | varchar(20) |  | Y | Y |  |  |
| TYPE_ID | 類型代號 | type_code | type_code |   | varchar(20) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | decimal(9) |  | Y | Y |  |  |
| ROLEGROUP_ID | 角色群組代號 | group_code | role_grp_code |   | varchar(12) |  |  |  |  |  |
| ROLE_ID | 角色代號 | role_code | role_code |   | varchar(12) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
