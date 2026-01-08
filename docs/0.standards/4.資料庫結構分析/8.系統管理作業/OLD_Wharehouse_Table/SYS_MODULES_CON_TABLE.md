# SYS_MODULES_CON
**中文名稱：** 系統模組連線/關聯

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MODULE_ID | 模組編號 | module_no | module_no |   | varchar(12) |  | Y | Y |  |  |
| CONNECTED_ID | 連線模組編號 | module_link_no | link_module_no |   | varchar(12) |  | Y | Y |  |  |
| KEYFIELD | 鍵值欄位 | key_field | key_field |   | varchar(255) |  |  |  |  |  |
| MODULE_PARAM | 模組參數 | module_param | module_param |   | varchar(255) |  |  |  |  |  |
| SOURCEFIELD | 來源欄位 | source_field | src_field |   | varchar(255) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(120) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
