# PDP_CALENDAR_EVENT
**中文名稱：** 行事曆事件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| EVENT_ID | 事件編號 | event_no | event_no |   | varchar(6) |  | Y | Y |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  | Y | Y |  |  |
| EVENT_NM | 事件名稱 | event_name | event_name |   | varchar(30) |  |  |  |  |  |
| TARGET | 目標對象 | target | target |   | varchar(60) |  |  |  |  |  |
| CUE_TIME | 提示時間 | reminder_time |  |   | decimal(5) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(120) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
