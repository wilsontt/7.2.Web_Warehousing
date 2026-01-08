# PDP_RECORD_LOG
**中文名稱：** 紀錄日誌

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(4) |  | Y | Y |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  | Y | Y |  |  |
| RECORD_ID | 紀錄編號 | record_no | log_no |   | varchar(6) |  | Y | Y |  |  |
| ANNOUNCE_DATE | 公告日期 | notice_date | ann_date |   | varchar(8) |  | Y | Y |  |  |
| ANNOUNCE_TIME | 公告時間 | notice_time | ann_time |   | varchar(6) |  | Y | Y |  |  |
| VALID | 是否有效 | is_active | is_valid |   | decimal(5) |  |  |  |  |  |
| READ_DATE | 閱讀日期 | read_date | read_date |   | varchar(8) |  |  |  |  |  |
| READ_TIME | 閱讀時間 | read_time | read_time |   | varchar(6) |  |  |  |  |  |
| STATE | 狀態 | status | status |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
