# WF_APPROVERIGHT
**中文名稱：** 工作流程審批權限

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| FLOW_ID | 流程編號 | workflow_no | flow_no |   | varchar(12) |  | Y | Y |  |  |
| STEP_ID | 步驟編號 | step_no | step_no |   | varchar(2) |  | Y | Y |  |  |
| LEVEL_NO | 層級編號 | level_no | level_no |   | varchar(6) |  | Y | Y |  |  |
| APPROVE_SEQ | 審核順序 | approval_order | approve_order |   | varchar(20) |  |  |  |  |  |
| APPROVE_DESC | 審核描述 | approval_description | approve_desc |   | varchar(255) |  |  |  |  |  |
| APPROVE_WHEN | 審核時機 | approval_timing | approve_timing |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
