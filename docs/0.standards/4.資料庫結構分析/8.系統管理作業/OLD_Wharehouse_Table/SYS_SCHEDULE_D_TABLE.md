# SYS_SCHEDULE_D
**中文名稱：** 系統排程明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JOB_NO | 工作編號 | job_no | job_no |   | varchar(10) |  | Y | Y |  |  |
| MODULE_ID | 模組代號 | module_code | module_code |   | varchar(20) |  | Y | Y |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| SCHEDULE_ACTIVE | 排程啟用 | schedule_enabled | sched_enable |   | varchar(1) |  |  |  |  |  |
| EONCE | 是否執行一次 | execute_once | is_once |   | varchar(1) |  |  |  |  |  |
| EONCEOK | 單次執行確認 | single_execute_confirm | exec_once_chk |   | varchar(1) |  |  |  |  |  |
| PARAMS | 參數 | parameter | param |   | varchar(255) |  |  |  |  |  |
| ANS_NO | 回應編號 | response_no | resp_no |   | varchar(8) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
