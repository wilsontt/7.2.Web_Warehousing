# TRANS_LOG_D
**中文名稱：** 交易日誌明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRN_DATE | 交易日期 | transaction_date | trans_date |   | varchar(8) |  | Y | Y |  |  |
| TRN_TIME | 交易時間 | transaction_time | trans_time |   | varchar(8) |  | Y | Y |  |  |
| TRN_SEQ | 交易序號 | transaction_no | trans_seq |   | varchar(8) |  | Y | Y |  |  |
| TRN_USERID | 交易使用者 | transaction_user | trans_user |   | varchar(20) |  | Y | Y |  |  |
| TRN_D_SEQ | 交易明細序號 | transaction_item_no | trans_detail_seq |   | varchar(8) |  | Y | Y |  |  |
| PROG_NAME | 程式名稱 | program_name | prog_name |   | varchar(100) |  |  |  |  |  |
| ERROR_CODE | 錯誤代碼 | error_code | error_code |   | varchar(8) |  |  |  |  |  |
| ERROR_MESSAGE | 錯誤訊息 | error_message | error_msg |   | varchar(255) |  |  |  |  |  |
