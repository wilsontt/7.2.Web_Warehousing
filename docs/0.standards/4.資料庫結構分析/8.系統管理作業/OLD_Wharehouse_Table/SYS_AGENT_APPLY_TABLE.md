# SYS_AGENT_APPLY
**中文名稱：** 系統代理人申請

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| AA_NO | 申請編號 | application_no | apply_no |   | varchar(20) |  | Y | Y |  |  |
| AA_DESC | 申請描述 | application_description | apply_desc |   | varchar(255) |  |  |  |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(12) |  |  |  |  |  |
| AGENT | 代理人 | agent | agent |   | varchar(20) |  |  |  |  |  |
| START_DATE | 開始日期 | start_date | start_date |   | varchar(8) |  |  |  |  |  |
| START_TIME | 開始時間 | start_time | start_time |   | varchar(6) |  |  |  |  |  |
| END_DATE | 結束日期 | end_date | end_date |   | varchar(8) |  |  |  |  |  |
| END_TIME | 結束時間 | end_time | end_time |   | varchar(6) |  |  |  |  |  |
| RECORD_OWNER | 記錄擁有者 | owner | record_owner |   | varchar(20) |  |  |  |  |  |
| FLOWFLAG | 流程旗標 | flow_flag | flow_flag |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
