# MAILDATA
**中文名稱：** 郵件資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JOBID | 工作編號 | job_no | job_no |   | char(10) |  | Y | Y |  |  |
| SEQNO | 序號 | seq | seq_no |   | int(4) |  | Y | Y |  |  |
| MAILADDR | 郵件地址 | email | email |   | varchar(50) |  |  |  |  |  |
| SUBSTITUTE | 替代收件人 | alt_recipient | alt_receiver |   | text(16) |  |  |  |  |  |
