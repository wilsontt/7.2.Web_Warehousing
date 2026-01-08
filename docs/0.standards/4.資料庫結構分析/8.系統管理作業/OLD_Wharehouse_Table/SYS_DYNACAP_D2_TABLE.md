# SYS_DYNACAP_D2
**中文名稱：** 系統動態權限明細2

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CAP_TYPE | 標題類型 | title_type | title_type |   | varchar(5) |  | Y | Y |  |  |
| GROUP_NO | 群組編號 | group_no | group_no |   | varchar(7) |  | Y | Y |  |  |
| GROUPCAPTION | 群組標題 | group_title | group_title |   | varchar(15) |  |  |  |  |  |
| ELEMENTS | 元素 | element | element |   | varchar(255) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| SEQ | 序號 | seq | seq_no |   | varchar(3) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
