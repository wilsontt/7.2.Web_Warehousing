# SYS_BILLTYPE_D
**中文名稱：** 系統單據類型明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| BILL_ID | 單據編號 | document_no | doc_no |   | varchar(6) |  | Y | Y |  |  |
| STEP_ID | 步驟編號 | step_no | step_no |   | varchar(2) |  | Y | Y |  |  |
| STEP_DESC | 步驟描述 | step_description | step_desc |   | varchar(40) |  |  |  |  |  |
| EXEYN | 是否執行 (Y/N) | is_executed | is_exec |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
