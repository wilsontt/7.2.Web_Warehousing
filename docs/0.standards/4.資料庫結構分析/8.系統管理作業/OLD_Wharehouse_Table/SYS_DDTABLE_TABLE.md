# SYS_DDTABLE
**中文名稱：** 系統資料字典表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| DD_NAME | 資料字典名稱 | name | dict_name |   | varchar(40) |  | Y | Y |  |  |
| DOMAIN_NAME | 網域名稱 | domain_name | domain_name |   | varchar(40) |  |  |  |  |  |
| DISPLAYLABEL | 顯示標籤 | display_label | disp_label |   | varchar(40) |  |  |  |  |  |
| DATA_TYPE | 資料型態 | data_type | data_type |   | varchar(20) |  |  |  |  |  |
| DATA_LENGTH | 資料長度 | data_length | data_len |   | decimal(9) |  |  |  |  |  |
| DATA_SCALE | 小數位數 | decimal_places | decimal_len |   | decimal(9) |  |  |  |  |  |
| EDITMASK | 輸入遮罩 | input_mask | input_mask |   | varchar(40) |  |  |  |  |  |
| IME | 輸入法設定 | input_method | ime_setting |   | varchar(20) |  |  |  |  |  |
| REF_TABLE | 參照資料表 | reference_table | ref_table |   | varchar(20) |  |  |  |  |  |
| REF_STYLE | 參照樣式 | reference_style | ref_style |   | varchar(4) |  |  |  |  |  |
| DEFAULT_TYPE | 預設類型 | default_type | default_type |   | varchar(20) |  |  |  |  |  |
| DD_REQUIRED | 是否必填 | is_required | is_required |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
