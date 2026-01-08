# PDP_METTING_TYPE
**中文名稱：** 會議類型

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(4) |  | Y | Y |  |  |
| TYPE | 類型 | meeting_type | type |   | varchar(30) |  |  |  |  |  |
| ORG_NO | 單位編號 | unit_no | unit_no |   | varchar(8) |  |  |  |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(12) |  |  |  |  |  |
| CHAIR | 主席 | chairman | chairman |   | varchar(12) |  |  |  |  |  |
| RECORD | 記錄 | record | record |   | varchar(12) |  |  |  |  |  |
| START_DATE | 開始日期 | start_date | start_date |   | varchar(8) |  |  |  |  |  |
| END_DATE | 結束日期 | end_date | end_date |   | varchar(8) |  |  |  |  |  |
| METTING_CYCLE | 會議週期 | meeting_cycle | meeting_cycle |   | varchar(1) |  |  |  |  |  |
| METTING_TIME | 會議時間 | meeting_time | meeting_time |   | varchar(6) |  |  |  |  |  |
| USE_TIME | 使用時數 | usage_hours | use_hours |   | decimal(5) |  |  |  |  |  |
| AHEAD_DAY | 提前天數 | advance_days | adv_days |   | decimal(5) |  |  |  |  |  |
| VALID | 是否有效 | is_active | is_valid |   | decimal(5) |  |  |  |  |  |
| WORK_TYPE | 工作類型 | task_type | job_type |   | varchar(1) |  |  |  |  |  |
| SITE_ID | 場地編號 | location_no | loc_no |   | varchar(6) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(255) |  |  |  |  |  |
| FLAG | 狀態旗標 | status_flag | status_flag |   | varchar(20) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
