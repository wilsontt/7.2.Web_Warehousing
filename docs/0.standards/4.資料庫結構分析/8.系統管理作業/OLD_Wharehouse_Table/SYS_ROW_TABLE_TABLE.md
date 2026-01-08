# SYS_ROW_TABLE
**中文名稱：** 系統資料列表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TABLENAME | 資料表名稱 | table_name | table_name |   | varchar(20) |  | Y | Y |  |  |
| SECTYPE | 安全類型 | security_type | sec_type |   | varchar(1) |  |  |  |  |  |
| ORG_KIND | 組織類型 | org_type | org_type |   | varchar(4) |  |  |  |  |  |
| FUNCTYPE_ID | 功能類型代號 | function_type_code | func_type_code |   | varchar(4) |  |  |  |  |  |
| FIELDNAME | 欄位名稱 | column_name | col_name |   | varchar(30) |  |  |  |  |  |
| STATE | 狀態 | status | status |   | varchar(3) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
