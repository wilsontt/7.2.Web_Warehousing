# SYS_CACHEDEF
**中文名稱：** 系統快取定義

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CACHE_NO | 快取編號 | cache_no | cache_no |   | varchar(20) |  | Y | Y |  |  |
| CACHE_DESC | 快取描述 | cache_description | cache_desc |   | varchar(40) |  |  |  |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| CACHE_ALIAS | 快取別名 | cache_alias | cache_alias |   | varchar(20) |  |  |  |  |  |
| CACHE_TABLES | 快取資料表 | cache_table | cache_table |   | varchar(100) |  |  |  |  |  |
| CACHE_KEYS | 快取鍵值 | cache_key | cache_key |   | varchar(100) |  |  |  |  |  |
| CACHE_SQL | 快取 SQL | cache_sql | cache_sql |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
