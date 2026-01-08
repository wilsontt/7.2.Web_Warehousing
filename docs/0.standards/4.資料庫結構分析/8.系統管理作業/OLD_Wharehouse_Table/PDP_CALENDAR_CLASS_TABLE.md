# PDP_CALENDAR_CLASS
**中文名稱：** 行事曆分類

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CLASS_ID | 班別編號 | shift_no | shift_no |   | varchar(3) |  | Y | Y |  |  |
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(4) |  | Y | Y |  |  |
| CLASS_NM | 班別名稱 | shift_name | shift_name |   | varchar(20) |  |  |  |  |  |
| USUAL_START_TIME | 平常開始時間 | normal_start_time | normal_start_time |   | varchar(6) |  |  |  |  |  |
| USUAL_END_TIME | 平常結束時間 | normal_end_time | normal_end_time |   | varchar(6) |  |  |  |  |  |
| USUAL_USE_TIME | 平常使用時數 | normal_hours | normal_use_hours |   | decimal(5) |  |  |  |  |  |
| ESPEC_START_TIME | 特殊開始時間 | special_start_time | special_start_time |   | varchar(6) |  |  |  |  |  |
| ESPEC_END_TIME | 特殊結束時間 | special_end_time | special_end_time |   | varchar(6) |  |  |  |  |  |
| ESPEC_USE_TIME | 特殊使用時數 | special_hours | special_use_hours |   | decimal(5) |  |  |  |  |  |
| CALENDAR_START_TIME | 行事曆開始時間 | calendar_start_time | calendar_start_time |   | varchar(6) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
