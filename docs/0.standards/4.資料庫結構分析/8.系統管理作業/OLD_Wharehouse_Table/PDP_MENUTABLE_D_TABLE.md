# PDP_MENUTABLE_D
**中文名稱：** 選單明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MENUID | 選單編號 | menu_no |  |   | varchar(6) |  | Y | Y |  |  |
| SEQ | 序號 | seq |  |   | decimal(9) |  | Y | Y |  |  |
| MODULE_ID | 模組編號 | module_no |  |   | varchar(12) |  |  |  |  |  |
| CAPTION | 標題 | title | title |   | varchar(50) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
