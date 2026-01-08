# PDP_PARAMS_D
**中文名稱：** 參數明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TYPE | 類型 | param_type | type |   | varchar(4) |  | Y | Y |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  | Y | Y |  |  |
| FIELDNAME | 欄位名稱 | column_name | fld_name |   | varchar(20) |  | Y | Y |  |  |
| WIDTH | 欄位寬度 | column_width | fld_width |   | decimal(5) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
