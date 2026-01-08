# USERS
**中文名稱：** 使用者資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  | Y | Y |  |  |
| USERNAME | 使用者名稱 | user_name | user_name |   | varchar(30) |  |  |  |  |  |
| AGENT | 代理人 | agent | agent |   | varchar(20) |  |  |  |  |  |
| PWD | 密碼 | password | pwd |   | varchar(20) |  |  |  |  |  |
| CREATEDATE | 建立日期 | create_date | created_date |   | varchar(8) |  |  |  |  |  |
| CREATER |  |  |  |   | varchar(20) |  |  |  |  |  |
| MODIFYDATE | 修改日期 | updated_at | mod_date |   | varchar(8) |  |  |  |  |  |
| MODIFIER | 修改者 | updated_by | mod_user |   | varchar(20) |  |  |  |  |  |
| DESCRIPTION | 說明 | description | desc |   | varchar(100) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
