# SYS_AUTONUM_D2
**中文名稱：** 系統自動編號明細2

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| AUTONNUMID | 自動編號ID | auto_number_no | autonum_no |   | varchar(8) |  | Y | Y |  |  |
| FILENAMES | 檔案名稱 | filename | file_name |   | varchar(10) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | varchar(3) |  | Y | Y |  |  |
| SRCVALUE | 來源值 | source_value | src_val |   | varchar(32) |  |  |  |  |  |
| CONSTVALUE | 固定值 | fixed_value | fixed_val |   | varchar(32) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
