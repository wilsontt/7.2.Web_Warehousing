# SYS_REMARK
**中文名稱：** 系統備註

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| REMARK_TYPE | 備註類型 | note_type | note_type |   | varchar(6) |  | Y | Y |  |  |
| REMARK_ID | 備註代號 | note_code | note_code |   | varchar(6) |  | Y | Y |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| REMARK_DESC | 備註描述 | note_description | note_desc |   | varchar(40) |  |  |  |  |  |
| REMARK_MEMO | 備註備註/註解 | note_comment | note_comment |   | varchar(255) |  |  |  |  |  |
| REMARK_COMM | 備註內容 | content | note_content |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
