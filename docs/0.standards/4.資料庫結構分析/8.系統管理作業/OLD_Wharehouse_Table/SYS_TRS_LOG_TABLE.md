# SYS_TRS_LOG
**中文名稱：** 系統交易日誌

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRS_NO | 規則編號 | rule_no | rule_no |   | varchar(10) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| LOG_DESC | 紀錄描述 | log_description | log_desc |   | varchar(40) |  |  |  |  |  |
| FLOW_ID | 流程編號 | flow_no | flow_no |   | varchar(12) |  |  |  |  |  |
| STEP_ID | 步驟編號 | step_no | step_no |   | varchar(2) |  |  |  |  |  |
| PROC_ID | 程序編號 | process_no | proc_no |   | varchar(2) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
