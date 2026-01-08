# WF_FLOWPROCS
**中文名稱：** 工作流程程序

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| FLOW_ID | 流程編號 | workflow_no | flow_no |   | varchar(12) |  | Y | Y |  |  |
| STEP_ID | 步驟編號 | step_no | step_no |   | varchar(2) |  | Y | Y |  |  |
| PROC_ID | 程序編號 | procedure_no | proc_no |   | varchar(2) |  | Y | Y |  |  |
| PROC_DESC | 程序描述 | procedure_description | proc_desc |   | varchar(40) |  |  |  |  |  |
| MODULE_ID | 模組編號 | module_no | module_no |   | varchar(12) |  |  |  |  |  |
| MODULE_PARAM | 模組參數 | module_params | module_param |   | varchar(255) |  |  |  |  |  |
| EXEC_WHEN | 執行時機 | execution_timing | exec_timing |   | varchar(255) |  |  |  |  |  |
| PROC_REMARK | 程序備註 | procedure_remark | proc_remark |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
