# MESSAGETABLE
**中文名稱：** 訊息資料表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MSGDATE | 訊息日期 | msg_date | msg_date |   | varchar(8) |  | Y | Y |  |  |
| MSGTIME | 訊息時間 | msg_time | msg_time |   | varchar(8) |  | Y | Y |  |  |
| SEQNO | 序號 | seq | seq_no |   | decimal(9) |  | Y | Y |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(30) |  |  |  |  |  |
| OWNERID | 擁有者編號 | owner_no | owner_no |   | varchar(30) |  |  |  |  |  |
| MESSAGEID | 訊息編號 | message_no | msg_no |   | decimal(9) |  |  |  |  |  |
| METHODID | 方法編號 | method_no | method_no |   | decimal(9) |  |  |  |  |  |
| DATA | 訊息資料 | msg_content | msg_data |   | image(16) |  |  |  |  |  |
| OPTDATA | 操作資料 | operation_data | op_data |   | image(16) |  |  |  |  |  |
| FLAG | 狀態旗標 | status_flag | status_flag |   | decimal(9) |  |  |  |  |  |
| TRYCOUNT | 嘗試次數 | retry_count | retry_cnt |   | decimal(9) |  |  |  |  |  |
