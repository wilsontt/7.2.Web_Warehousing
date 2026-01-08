# SYS_REPLIST_D2
**中文名稱：** 系統報表清單明細2

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| REPORT_ID | 報表編號 | report_no |  |   | varchar(20) |  | Y | Y |  |  |
| GROUP_NAME | 群組名稱 | group_name |  |   | varchar(20) |  | Y | Y |  |  |
| SEQ | 序號 | seq |  |   | decimal(9) |  |  |  |  |  |
| FIELDNAME | 欄位名稱 | column_name |  |   | varchar(255) |  |  |  |  |  |
| GROUP_SPACED | 群組間距 | group_spacing |  |   | varchar(1) |  |  |  |  |  |
| GROUP_PRINT | 群組列印 | group_print |  |   | varchar(1) |  |  |  |  |  |
| GROUP_CAPTION | 群組標題 | group_title |  |   | varchar(60) |  |  |  |  |  |
| PAGE_SHOWGROUP | 頁面顯示群組 | page_group |  |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
