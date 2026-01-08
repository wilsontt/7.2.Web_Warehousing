# PDP_ANNOUNCE
**中文名稱：** 公告資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ANNOUNCE_ID | 公告編號 | announcement_no | announce_no |   | varchar(6) |  | Y | Y |  |  |
| ANNOUNCE_NM | 公告名稱 | announcement_name | announce_name |   | varchar(255) |  |  |  |  |  |
| ANNOUNCE_DATE | 公告日期 | announcement_date | announce_date |   | varchar(8) |  |  |  |  |  |
| ANNOUNCE_TIME | 公告時間 | announcement_time | announce_time |   | varchar(6) |  |  |  |  |  |
| VALID | 是否有效 | is_active | is_valid |   | decimal(5) |  |  |  |  |  |
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(4) |  |  |  |  |  |
| ORG_NO | 單位編號 | unit_no | unit_no |   | varchar(8) |  |  |  |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(20) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(232) |  |  |  |  |  |
| STATE | 狀態 | status | status |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
