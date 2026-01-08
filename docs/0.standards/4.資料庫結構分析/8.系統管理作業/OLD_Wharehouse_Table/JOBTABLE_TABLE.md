# JOBTABLE
**中文名稱：** 工作表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JOBID | 工作編號 | job_no | job_no |   | varchar(10) |  | Y | Y |  |  |
| PACKAGENAME | 套件名稱 | package_name | package_name |   | varchar(32) |  |  |  |  |  |
| METHODNAME | 方法名稱 | method_name | method_name |   | varchar(50) |  |  |  |  |  |
| OWNER | 擁有者 | owner | owner |   | varchar(10) |  |  |  |  |  |
| CREATEDATE | 建立日期 | create_date | created_time |   | varchar(8) |  |  |  |  |  |
| CREATETIME | 建立時間 | create_time | created_time |   | varchar(6) |  |  |  |  |  |
| STARTDATE | 開始日期 | start_date | start_date |   | varchar(8) |  |  |  |  |  |
| STARTTIME | 開始時間 | start_time | start_time |   | varchar(6) |  |  |  |  |  |
| LASTTIMEDATE | 上次執行日期 | last_run_date | last_exec_date |   | varchar(8) |  |  |  |  |  |
| LASTTIMETIME | 上次執行時間 | last_run_time | last_exec_time |   | varchar(6) |  |  |  |  |  |
| SCHEDULETYPE | 排程類型 | schedule_type | schedule_type |   | varchar(1) |  |  |  |  |  |
| UNITTYPE | 單位類型 | unit_type | unit_type |   | varchar(1) |  |  |  |  |  |
| TIMESTEP | 時間間隔 | time_interval | time_interval |   | decimal(9) |  |  |  |  |  |
| SELECTEDWEEKDAYS | 選擇的週日 | selected_day_of_week | sel_week_day |   | varchar(1) |  |  |  |  |  |
| SELECTEDMONTHDAYS | 選擇的月日 | selected_day_of_month | sel_month_day |   | decimal(9) |  |  |  |  |  |
| EXECFLAG | 執行旗標 | exec_flag | exec_flag |   | varchar(1) |  |  |  |  |  |
| SCHEDULER | 排程器 | scheduler | scheduler |   | varchar(10) |  |  |  |  |  |
| JOBDESCRIP | 工作描述 | job_description | job_desc |   | varchar(50) |  |  |  |  |  |
| NOTIFICATIONDATA | 通知資料 | notification_data | notify_data |   | varchar(50) |  |  |  |  |  |
