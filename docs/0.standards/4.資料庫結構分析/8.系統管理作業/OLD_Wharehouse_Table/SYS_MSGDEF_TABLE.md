# SYS_MSGDEF
**中文名稱：** 系統訊息定義

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MSG_ID | 訊息代號 | message_code | msg_code |   | varchar(20) |  | Y | Y |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| MSG_DESC | 訊息描述 | message_description | msg_desc |   | varchar(255) |  |  |  |  |  |
| MSG_TYPE | 訊息類型 | message_type | msg_type |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
