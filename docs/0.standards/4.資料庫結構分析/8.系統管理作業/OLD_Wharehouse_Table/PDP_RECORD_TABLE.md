# PDP_RECORD
**中文名稱：** 紀錄資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| RECORD_ID | 紀錄編號 | record_no | log_no |   | varchar(6) |  | Y | Y |  |  |
| METTING_ID | 會議編號 | meeting_no | meeting_no |   | varchar(6) |  |  |  |  |  |
| ANNOUNCE_DATE | 公告日期 | notice_date | ann_date |   | varchar(8) |  |  |  |  |  |
| ANNOUNCE_TIME | 公告時間 | notice_time | ann_time |   | varchar(6) |  |  |  |  |  |
| VALID | 是否有效 | is_active | is_valid |   | decimal(5) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(232) |  |  |  |  |  |
| STATE | 狀態 | status | status |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
