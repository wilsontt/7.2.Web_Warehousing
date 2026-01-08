# PDP_CALENDAR_CYCLE
**中文名稱：** 行事曆週期

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CYCLE_ID | 週期編號 | cycle_no | cycle_no |   | varchar(6) |  | Y | Y |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  | Y | Y |  |  |
| CYCLE_DESC | 週期描述 | description | cycle_desc |   | varchar(60) |  |  |  |  |  |
| START_DATE | 開始日期 | start_date | start_date |   | varchar(8) |  |  |  |  |  |
| END_DATE | 結束日期 | end_date | end_date |   | varchar(8) |  |  |  |  |  |
| CYCLE | 週期 | interval | cycle |   | varchar(1) |  |  |  |  |  |
| DAY_NUMBER | 天數 | days | days |   | decimal(5) |  |  |  |  |  |
| STATE | 狀態 | status | status |   | varchar(1) |  |  |  |  |  |
| EVENT_ID | 事件編號 | event_no | event_no |   | varchar(6) |  |  |  |  |  |
| EVENT_NM | 事件名稱 | event_name | event_name |   | varchar(30) |  |  |  |  |  |
| TARGET | 目標對象 | target | target |   | varchar(60) |  |  |  |  |  |
| START_TIME | 開始時間 | start_time | start_time |   | varchar(6) |  |  |  |  |  |
| END_TIME | 結束時間 | end_time | end_time |   | varchar(6) |  |  |  |  |  |
| CUE_TIME | 提示時間 | reminder_time | reminder_time |   | decimal(5) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(120) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
