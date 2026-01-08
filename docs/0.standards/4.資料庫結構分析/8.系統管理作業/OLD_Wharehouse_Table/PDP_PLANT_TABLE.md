# PDP_PLANT
**中文名稱：** 廠區資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| PLANT_ID | 廠區編號 | factory_no | plant_no |   | varchar(6) |  | Y | Y |  |  |
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(6) |  |  |  |  |  |
| PLANT_DESC | 廠區描述 | factory_desc | plant_desc |   | varchar(60) |  |  |  |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  |  |  |  |  |
| CONDITION | 狀態條件 | status_condition | status_cond |   | varchar(1) |  |  |  |  |  |
| STOP_STDATE | 停用開始日期 | disable_start_date | disable_start_date |   | varchar(8) |  |  |  |  |  |
| STOP_ENDATE | 停用結束日期 | disable_end_date | disable_end_date |   | varchar(8) |  |  |  |  |  |
| STOP_STTIME | 停用開始時間 | disable_start_time | disable_start_time |   | varchar(6) |  |  |  |  |  |
| STOP_ENTIME | 停用結束時間 | disable_end_time | disable_end_time |   | varchar(6) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
