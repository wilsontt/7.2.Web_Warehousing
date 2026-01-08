# SYS_AUTONUM_D
**中文名稱：** 系統自動編號明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| AUTONNUMID | 自動編號ID | auto_number_no | autonum_no |   | varchar(8) |  | Y | Y |  |  |
| FILENAMES | 檔案名稱 | filename | file_name |   | varchar(10) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | decimal(9) |  |  |  |  |  |
| TYPE | 類型 | type | type |   | varchar(1) |  |  |  |  |  |
| CONSTVALUE | 固定值 | fixed_value | fixed_val |   | varchar(32) |  |  |  |  |  |
| SRCFILENAME | 來源檔案名稱 | source_filename | src_file_name |   | varchar(32) |  |  |  |  |  |
| DATASOURCESQL | 資料來源 SQL | source_sql | src_sql |   | varchar(255) |  |  |  |  |  |
| STARTPOS | 起始位置 | start_position | start_pos |   | decimal(9) |  |  |  |  |  |
| BYTECOUNT | 位元數 | bit_length | bit_length |   | decimal(9) |  |  |  |  |  |
| VALUEINTERVA | 間隔值 | interval_value | interval_val |   | decimal(9) |  |  |  |  |  |
| DIGITSWIDTH | 數字寬度 | number_width | num_width |   | decimal(9) |  |  |  |  |  |
| MINVALUE | 最小值 | min_value | min_val |   | decimal(9) |  |  |  |  |  |
| MAXVALUE | 最大值 | max_value | max_val |   | decimal(9) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
