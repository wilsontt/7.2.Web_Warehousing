# SYS_CONFIG
**中文名稱：** 系統設定

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CONFIG_TYPE | 設定類型 | setting_type | cfg_type |   | varchar(6) |  | Y | Y |  |  |
| CONFIG_NAME | 設定名稱 | setting_name | cfg_name |   | varchar(20) |  | Y | Y |  |  |
| CONFIG_DESC | 設定描述 | setting_description | cfg_desc |   | varchar(40) |  |  |  |  |  |
| CONFIG_VALUE | 設定值 | setting_value | cfg_val |   | varchar(100) |  |  |  |  |  |
| CONFIG_USAGE | 設定用途 | setting_usage | cfg_usage |   | varchar(4) |  |  |  |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| NEED_PARAM | 是否需要參數 | is_requires_param | need_param |   | varchar(4) |  |  |  |  |  |
| PARAM_KIND | 參數種類 | param_category | param_kind |   | varchar(20) |  |  |  |  |  |
| CONFIG_COND | 設定條件 | setting_condition | cfg_cond |   | varchar(3) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
