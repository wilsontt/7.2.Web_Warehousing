# SYS_COLDEF_M
**中文名稱：** 系統欄位定義主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TABLE_NAME | 資料表名稱 | table_name | tbl_name |   | varchar(20) |  | Y | Y |  |  |
| TABLE_DESC | 資料表描述 | table_desc | tbl_desc |   | varchar(100) |  |  |  |  |  |
| PRIMARY_KEY | 主鍵 | pk | pk |   | varchar(255) |  |  |  |  |  |
| INDEX_NAME | 索引名稱 | index_name | idx_name |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
