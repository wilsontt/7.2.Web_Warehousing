# SYS_LANGDEF_CTRL
**中文名稱：** 系統語言定義控制

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LANG_NO | 語系代號 | locale_code |  |   | varchar(20) |  | Y | Y |  |  |
| MODULE_ID | 模組編號 | module_no |  |   | varchar(12) |  | Y | Y |  |  |
| CONTROL_NAME | 控制項名稱 | ctrl_name |  |   | varchar(40) |  | Y | Y |  |  |
| CONTROL_PROPNAME | 屬性名稱 | attr_name |  |   | varchar(40) |  | Y | Y |  |  |
| CONTROL_PROVALUE | 屬性值 | attr_value |  |   | varchar(100) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
