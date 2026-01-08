# SYS_SCHEDULE
**中文名稱：** 系統排程

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JOB_NO | 工作編號 | job_no | job_no |   | varchar(10) |  | Y | Y |  |  |
| JOB_DESC | 工作描述 | job_description | job_desc |   | varchar(20) |  |  |  |  |  |
| START_DATE | 開始日期 | start_date | start_date |   | varchar(8) |  |  |  |  |  |
| END_DATE | 結束日期 | end_date | end_date |   | varchar(8) |  |  |  |  |  |
| START_TIME | 開始時間 | start_time | start_time |   | varchar(6) |  |  |  |  |  |
| END_TIME | 結束時間 | end_time | end_time |   | varchar(6) |  |  |  |  |  |
| PRIORITY | 優先順序 | priority | priority |   | varchar(1) |  |  |  |  |  |
| CYCLE_TYPE | 週期類型 | cycle_type | cycle_type |   | varchar(1) |  |  |  |  |  |
| DAYTYPE | 日類型 | day_type | day_type |   | varchar(1) |  |  |  |  |  |
| SCHEDULE_ACTIVE | 排程啟用 | enabled | sched_enable |   | varchar(1) |  |  |  |  |  |
| AUTO_LOG | 自動記錄 | auto_log | auto_log |   | varchar(1) |  |  |  |  |  |
| CALENDAR_NO | 行事曆編號 | calendar_no | cal_no |   | varchar(40) |  |  |  |  |  |
| NOTIFICATIONDATA | 通知資料 | notification_data | notify_data |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
