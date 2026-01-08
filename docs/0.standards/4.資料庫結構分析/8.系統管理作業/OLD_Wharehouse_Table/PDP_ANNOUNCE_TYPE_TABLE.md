# PDP_ANNOUNCE_TYPE
**中文名稱：** 公告類型

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(4) |  | Y | Y |  |  |
| TYPE | 類型 | type | type_name |   | varchar(20) |  |  |  |  |  |
| VALID | 是否有效 | is_active | is_valid |   | decimal(5) |  |  |  |  |  |
| ORG_NO | 單位編號 | unit_no | unit_no |   | varchar(8) |  |  |  |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(12) |  |  |  |  |  |
| FLAG | 狀態旗標 | status_flag | status_flag |   | varchar(20) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
