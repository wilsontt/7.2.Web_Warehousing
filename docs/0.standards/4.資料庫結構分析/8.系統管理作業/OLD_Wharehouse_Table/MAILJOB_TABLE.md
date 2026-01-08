# MAILJOB
**中文名稱：** 郵件工作

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JOBID | 工作編號 | job_no | job_no |   | char(10) |  | Y | Y |  |  |
| CC | 副本 | cc | cc |   | text(16) |  |  |  |  |  |
| BCC | 密件副本 | bcc | bcc |   | text(16) |  |  |  |  |  |
| BODY | 郵件內文 | body | body |   | text(16) |  |  |  |  |  |
| ATTACHMENT | 附件 | attachment | attachment |   | text(16) |  |  |  |  |  |
| SUBJECT | 主旨 | subject | subject |   | varchar(60) |  |  |  |  |  |
| FROMNAME | 寄件人名稱 | sender_name | sender_name |   | varchar(60) |  |  |  |  |  |
| FROMADDRESS | 寄件地址 | sender_address | sender_addr |   | varchar(50) |  |  |  |  |  |
| NEGLECTERROR | 忽略錯誤 | ignore_error | ignore_err |   | char(1) |  |  |  |  |  |
| PORT | 連接埠 | port | port |   | int(4) |  |  |  |  |  |
| SMTPSERVER | 郵件伺服器 | smtp_server | mail_server |   | varchar(30) |  |  |  |  |  |
| SUBTYPE | 郵件子類型 | subtype | subtype |   | char(1) |  |  |  |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(30) |  |  |  |  |  |
| ADDRESSOWNER | 郵件地址擁有者 | email_owner | mail_owner |   | varchar(10) |  |  |  |  |  |
