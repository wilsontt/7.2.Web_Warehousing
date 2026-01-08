# PDP_METTING_GROUP
**中文名稱：** 會議群組

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| METTING_ID | 會議編號 | meeting_no | meeting_no |   | varchar(6) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | varchar(3) |  | Y | Y |  |  |
| ROLEGROUP_ID | 角色群組編號 | role_group_no | role_group_no |   | varchar(12) |  |  |  |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(12) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
