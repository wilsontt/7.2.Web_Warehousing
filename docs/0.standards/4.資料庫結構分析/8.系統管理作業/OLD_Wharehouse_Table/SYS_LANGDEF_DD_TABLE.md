# SYS_LANGDEF_DD
**中文名稱：** 系統語言定義資料字典

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LANG_NO | 語系代號 | locale_code |  |   | varchar(20) |  | Y | Y |  |  |
| TABLE_NAME | 資料表名稱 | table_name |  |   | varchar(20) |  | Y | Y |  |  |
| FIELD_NAME | 欄位名稱 | column_name |  |   | varchar(20) |  | Y | Y |  |  |
| CAPTION | 標題 | title | title |   | varchar(40) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
