# SYS_SLOGAN
**中文名稱：** 系統標語

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| SLOGAN_NO | 標語編號 | slogan_no | slogan_no |   | varchar(8) |  | Y | Y |  |  |
| SLOGAN_DESC | 標語描述 | slogan_description | slogan_desc |   | varchar(40) |  |  |  |  |  |
| SLOGAN_CONT | 標語內容 | slogan_content | slogan_text |   | varchar(255) |  |  |  |  |  |
| SHOW_RANDOM | 是否隨機顯示 | random_display | is_random |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
