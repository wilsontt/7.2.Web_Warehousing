# PDP_METTING_PLANT
**中文名稱：** 會議廠區

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| METTING_ID | 會議編號 | meeting_no | meeting_no |   | varchar(6) |  | Y | Y |  |  |
| PLANT_ID | 廠別編號 | id | plant_no |   | varchar(6) |  | Y | Y |  |  |
| COLLIDEYN | 是否衝突 (Y/N) | is_conflict | is_conflict |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
