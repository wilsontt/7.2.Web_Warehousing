# SYS_MODULE_SEC_CTRL
**中文名稱：** 系統模組安全性控制

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MODULE_ID | 模組編號 | module_no | module_no |   | varchar(12) |  | Y | Y |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(12) |  | Y | Y |  |  |
| CONTROL_NAME | 控制項名稱 | ctrl_name | ctrl_name |   | varchar(100) |  | Y | Y |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
