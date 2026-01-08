# TRANSACTION_LOG
**中文名稱：** 交易日誌

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRN_DATE | 交易日期 | transaction_date | trans_date |   | varchar(8) |  | Y | Y |  |  |
| TRN_TIME | 交易時間 | transaction_time | trans_time |   | varchar(8) |  | Y | Y |  |  |
| TRN_SEQ | 交易序號 | transaction_no | trans_seq |   | varchar(8) |  | Y | Y |  |  |
| TRN_USERID | 使用者 | user | user_name |   | varchar(20) |  | Y | Y |  |  |
| TRN_S_COUNT | 成功筆數 | success_count | success_cnt |   | decimal(9) |  |  |  |  |  |
| TRN_E_COUNT | 錯誤筆數 | error_count | error_cnt |   | decimal(9) |  |  |  |  |  |
| TRN_NAME | 交易名稱 | transaction_name | trans_name |   | varchar(100) |  |  |  |  |  |
| TRN_INDEX_1 | 索引值1 | index1 | index_val1 |   | varchar(40) |  |  |  |  |  |
| TRN_INDEX_2 | 索引值2 | index2 | index_val2 |   | varchar(40) |  |  |  |  |  |
| TRN_ERROR_FLAG | 錯誤旗標 | error_flag | error_flag |   | varchar(4) |  |  |  |  |  |
| TRN_PACKAGE | 交易套件 | transaction_package | trans_package |   | varchar(40) |  |  |  |  |  |
| TRN_METHOD | 交易方法 | transaction_method | trans_method |   | varchar(40) |  |  |  |  |  |
