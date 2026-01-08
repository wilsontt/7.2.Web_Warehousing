# MAILLOG
**中文名稱：** 郵件日誌

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CREATEDATE | 建立日期 | create_date | created_date |   | varchar(8) |  | Y | Y |  |  |
| CREATETIME | 建立時間 | create_time | created_time |   | varchar(8) |  | Y | Y |  |  |
| OWNER | 擁有者 | owner | owner |   | varchar(20) |  | Y | Y |  |  |
| SEQNO | 序號 | seq | seq_no |   | varchar(10) |  | Y | Y |  |  |
| MAILFROM | 寄件人 | sender | sender |   | varchar(60) |  |  |  |  |  |
| MAILTO | 收件人 | recipient | receiver |   | varchar(60) |  |  |  |  |  |
| CC | 副本 | cc | cc |   | varchar(232) |  |  |  |  |  |
| BCC | 密件副本 | bcc | bcc |   | varchar(232) |  |  |  |  |  |
| SUBJECT | 主旨 | subject | subject |   | varchar(60) |  |  |  |  |  |
| RESULT | 執行結果 | result | exec_result |   | varchar(60) |  |  |  |  |  |
| EXECUTIVE | 執行者 | executor | executor |   | varchar(20) |  |  |  |  |  |
