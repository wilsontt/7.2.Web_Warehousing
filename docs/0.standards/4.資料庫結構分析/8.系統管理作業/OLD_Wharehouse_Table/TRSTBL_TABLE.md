# TRSTBL
**中文名稱：** 交易資料表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRS_ID | 轉換編號 | convert_no | convert_no |   | varchar(50) |  | Y | Y |  |  |
| PARAM_ID | 參數編號 | parameter_no | param_no |   | varchar(20) |  | Y | Y |  |  |
| TRS_OWNER | 擁有者 | owner | owner |   | varchar(40) |  |  |  |  |  |
| TRS_TYPE | 轉換類型 | convert_type | convert_type |   | varchar(1) |  |  |  |  |  |
| TRS_FLAG | 轉換旗標 | convert_flag | convert_flag |   | varchar(1) |  |  |  |  |  |
| ERROR_MSG | 錯誤訊息 | error_message | error_msg |   | varchar(255) |  |  |  |  |  |
