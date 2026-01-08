# SYS_COLUMN_SEC_H
**中文名稱：** 系統欄位安全性主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| COLSEC_TYPE | 欄位安全類型 | field_sec_type | fld_sec_type |   | varchar(4) |  | Y | Y |  |  |
| COLSEC_NAME | 欄位安全名稱 | field_sec_name | fld_sec_name |   | varchar(40) |  | Y | Y |  |  |
| COLSEC_DESC | 欄位安全描述 | field_sec_desc | fld_sec_desc |   | varchar(60) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
