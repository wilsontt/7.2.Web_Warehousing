# PDP_METTING
**中文名稱：** 會議資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| METTING_ID | 會議編號 | meeting_no | meeting_no |   | varchar(6) |  | Y | Y |  |  |
| METTING_NM | 會議名稱 | meeting_name | meeting_name |   | varchar(255) |  |  |  |  |  |
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(4) |  |  |  |  |  |
| METTING_DATE | 會議日期 | meeting_date | meeting_date |   | varchar(8) |  |  |  |  |  |
| METTING_TIME | 會議時間 | meeting_time | meeting_time |   | varchar(6) |  |  |  |  |  |
| ANNOUNCE_DATE | 公告日期 | announce_date | announce_date |   | varchar(8) |  |  |  |  |  |
| ANNOUNCE_TIME | 公告時間 | announce_time | announce_time |   | varchar(6) |  |  |  |  |  |
| ANNOUNCE_USER | 公告人員 | announcer | announcer |   | varchar(20) |  |  |  |  |  |
| USE_TIME | 使用時數 | usage_hours | use_hours |   | decimal(5) |  |  |  |  |  |
| STATE | 狀態 | status | status |   | varchar(1) |  |  |  |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(12) |  |  |  |  |  |
| CHAIR | 主席 | chairman | chairman |   | varchar(12) |  |  |  |  |  |
| RECORD | 記錄 | record | record |   | varchar(12) |  |  |  |  |  |
| SITE_ID | 場地編號 | location_no | loc_no |   | varchar(6) |  |  |  |  |  |
| VALID | 是否有效 | is_active | is_valid |   | decimal(5) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(232) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
