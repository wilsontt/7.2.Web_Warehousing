# COLDEF
**中文名稱：** 欄位定義

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TABLE_NAME | 資料表名稱 | table_name | tbl_name |   | varchar(20) |  | Y | Y |  |  |
| FIELD_NAME | 欄位名稱 | column_name | col_name |   | varchar(20) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | decimal(9) |  |  |  |  |  |
| FIELD_TYPE | 欄位型態 | data_type | col_type |   | varchar(10) |  |  |  |  |  |
| IS_KEY | 是否主鍵 | is_primary_key | is_pk |   | varchar(1) |  |  |  |  |  |
| FIELD_LENGTH | 欄位長度 | column_length | col_len |   | decimal(9) |  |  |  |  |  |
| CAPTION | 標題 | title_cn | title_zh |   | varchar(40) |  |  |  |  |  |
| EDITMASK | 編輯遮罩 | edit_mask | edit_mask |   | varchar(10) |  |  |  |  |  |
| NEEDBOX | 是否需要方塊輸入 | is_checkbox_input | is_block_input |   | varchar(13) |  |  |  |  |  |
| CANREPORT | 可報表輸出 | is_reportable | rpt_output |   | varchar(1) |  |  |  |  |  |
| EXT_MENUID | 外部選單編號 | external_menu_no | ext_menu_no |   | varchar(20) |  |  |  |  |  |
| FIELD_SCALE | 欄位小數位數 | decimal_places | dec_len |   | decimal(9) |  |  |  |  |  |
| DD_NAME | 資料字典名稱 | dictionary_name | dict_name |   | varchar(40) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
