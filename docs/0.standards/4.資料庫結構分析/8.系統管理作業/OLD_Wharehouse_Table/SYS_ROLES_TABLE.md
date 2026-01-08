# SYS_ROLES
**中文名稱：** 系統角色

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ROLE_ID | 角色代號 | role_code | role_code |   | varchar(12) |  | Y | Y |  |  |
| ROLE_DESC | 角色描述 | role_description | role_desc |   | varchar(40) |  |  |  |  |  |
| USER_ID | 使用者代號 | role_user_code | user_code |   | varchar(20) |  |  |  |  |  |
| ROLEGROUP_ID | 所屬角色群組 | role_group_no | role_group_no |   | varchar(12) |  |  |  |  |  |
| FUNCTYPE_ID | 功能類別代號 | function_category_no | func_class_code |   | varchar(4) |  |  |  |  |  |
| DEFAULT_AGENT | 預設代理人 | default_agent | default_agent |   | varchar(20) |  |  |  |  |  |
| AGENT | 代理人 | agent | agent |   | varchar(20) |  |  |  |  |  |
| START_DATE | 起始日期 | start_date | start_date |   | varchar(8) |  |  |  |  |  |
| START_TIME | 起始時間 | start_time | start_time |   | varchar(6) |  |  |  |  |  |
| END_DATE | 結束日期 | end_date | end_date |   | varchar(8) |  |  |  |  |  |
| END_TIME | 結束時間 | end_time | end_time |   | varchar(6) |  |  |  |  |  |
| CC_ROLE | 抄送角色 | cc_role | cc_role |   | varchar(12) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
