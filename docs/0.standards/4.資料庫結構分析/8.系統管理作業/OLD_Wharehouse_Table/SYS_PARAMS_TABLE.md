# SYS_PARAMS
**中文名稱：** 系統參數

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| PARAM_KIND | 參數種類 | param_category | param_kind |   | varchar(20) |  | Y | Y |  |  |
| PARAM_ID | 參數代號 | param_code | param_code |   | varchar(10) |  | Y | Y |  |  |
| PARAM_DESC | 參數描述 | param_description | param_desc |   | varchar(40) |  |  |  |  |  |
| PARAM_DESC1 | 參數描述1 | param_description1 | param_desc1 |   | varchar(255) |  |  |  |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| PARAM_USAGE | 參數用途 | param_usage | param_usage |   | varchar(4) |  |  |  |  |  |
| DD_NAME | 資料字典名稱 | dictionary_name | dict_name |   | varchar(20) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(255) |  |  |  |  |  |
| REL_VALUE | 參考值 | ref_value | ref_val |   | varchar(40) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
