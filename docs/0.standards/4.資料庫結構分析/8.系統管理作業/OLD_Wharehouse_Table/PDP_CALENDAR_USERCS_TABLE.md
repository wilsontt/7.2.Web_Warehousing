# PDP_CALENDAR_USERCS
**中文名稱：** 行事曆使用者關聯

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  | Y | Y |  |  |
| CLASS_ID | 班別編號 | shift_no | shift_no |   | varchar(3) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | _updated_by | upd_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | _update_date | upd_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | _update_time | upd_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | _system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | _last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
