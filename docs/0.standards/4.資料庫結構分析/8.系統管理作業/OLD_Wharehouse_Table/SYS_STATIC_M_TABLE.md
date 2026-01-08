# SYS_STATIC_M
**中文名稱：** 系統靜態資料主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| STATIC_NO | 統計代號 | stat_code | stat_no |   | varchar(8) |  | Y | Y |  |  |
| STATIC_DESC | 統計描述 | stat_description | stat_desc |   | varchar(40) |  |  |  |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| SRC_TABLE | 來源資料表 | source_table | src_table |   | varchar(40) |  |  |  |  |  |
| DS_NO | 資料來源編號 | data_source_no | src_no |   | varchar(20) |  |  |  |  |  |
| STATIC_FIELD | 統計欄位 | stat_field | stat_field |   | varchar(20) |  |  |  |  |  |
| CONT_FIELD | 內容欄位 | content_field | content_field |   | varchar(20) |  |  |  |  |  |
| OTHER_FIELD1 | 其他欄位1 | other_field1 | other_field1 |   | varchar(20) |  |  |  |  |  |
| OTHER_FIELD2 | 其他欄位2 | other_field2 | other_field2 |   | varchar(20) |  |  |  |  |  |
| OTHER_FIELD3 | 其他欄位3 | other_field3 | other_field3 |   | varchar(20) |  |  |  |  |  |
| OTHER_FIELD4 | 其他欄位4 | other_field4 | other_field4 |   | varchar(20) |  |  |  |  |  |
| COMPARE_MODE1 | 比較模式1 | compare_mode1 | cmp_mode1 |   | varchar(4) |  |  |  |  |  |
| COMPARE_MODE2 | 比較模式2 | compare_mode2 | cmp_mode2 |   | varchar(4) |  |  |  |  |  |
| COMPARE_MODE3 | 比較模式3 | compare_mode3 | cmp_mode3 |   | varchar(4) |  |  |  |  |  |
| COMPARE_MODE4 | 比較模式4 | compare_mode4 | cmp_mode4 |   | varchar(4) |  |  |  |  |  |
| COMPARE_FIELD1 | 比較欄位1 | compare_field1 | cmp_field1 |   | varchar(20) |  |  |  |  |  |
| COMPARE_FIELD2 | 比較欄位2 | compare_field2 | cmp_field2 |   | varchar(20) |  |  |  |  |  |
| COMPARE_FIELD3 | 比較欄位3 | compare_field3 | cmp_field3 |   | varchar(20) |  |  |  |  |  |
| COMPARE_FIELD4 | 比較欄位4 | compare_field4 | cmp_field4 |   | varchar(20) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| TYPE_ID | 類型代號 | type_code | type_code |   | varchar(6) |  |  |  |  |  |
