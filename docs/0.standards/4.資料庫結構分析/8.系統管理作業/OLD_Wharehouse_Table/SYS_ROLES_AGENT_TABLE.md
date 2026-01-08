# SYS_ROLES_AGENT
**中文名稱：** 系統角色代理人

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ROLE_ID | 角色代號 | role_code | role_code |   | varchar(12) |  | Y | Y |  |  |
| AGENT | 代理人 | agent | agent |   | varchar(20) |  | Y | Y |  |  |
| START_DATE | 起始日期 | start_date | start_date |   | varchar(8) |  | Y | Y |  |  |
| START_TIME | 起始時間 | start_time | start_time |   | varchar(6) |  | Y | Y |  |  |
| END_DATE | 結束日期 | end_date | end_date |   | varchar(8) |  |  |  |  |  |
| END_TIME | 結束時間 | end_time | end_time |   | varchar(6) |  |  |  |  |  |
| PAR_AGENT | 上層代理人 | parent | parent_agent |   | varchar(4) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
