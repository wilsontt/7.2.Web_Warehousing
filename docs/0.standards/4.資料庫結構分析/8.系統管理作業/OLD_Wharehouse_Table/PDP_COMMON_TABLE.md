# PDP_COMMON
**中文名稱：** 共用資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| USERID | 使用者編號 | user_no | user_no |   | varchar(12) |  | Y | Y |  |  |
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(3) |  | Y | Y |  |  |
| FLOW_ID | 流程編號 | workflow_no | flow_no |   | varchar(12) |  | Y | Y |  |  |
| STEP_ID | 步驟編號 | step_no | step_no |   | varchar(2) |  | Y | Y |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
