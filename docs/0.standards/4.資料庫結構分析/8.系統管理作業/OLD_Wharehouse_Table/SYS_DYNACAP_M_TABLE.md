# SYS_DYNACAP_M
**中文名稱：** 系統動態權限主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CAP_TYPE | 標題類型 | title_type | title_type |   | varchar(5) |  | Y | Y |  |  |
| TYPE_DESC | 類型描述 | type_description | type_desc |   | varchar(63) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| VERSION | 版本 | version | version |   | varchar(3) |  |  |  |  |  |
| CAP_KIND | 標題種類 | title_category | title_category |   | varchar(3) |  |  |  |  |  |
| COMPARE_TYPE | 比較類型 | comparison_type | compare_type |   | varchar(3) |  |  |  |  |  |
| TYPE_ID | 類型代號 | type_code | type_code |   | varchar(10) |  |  |  |  |  |
| HAS_OTHER | 是否包含「其他」 | include_other | include_other |   | varchar(3) |  |  |  |  |  |
| OTHER_CAPTION | 其他標題 | other_title | other_title |   | varchar(40) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
