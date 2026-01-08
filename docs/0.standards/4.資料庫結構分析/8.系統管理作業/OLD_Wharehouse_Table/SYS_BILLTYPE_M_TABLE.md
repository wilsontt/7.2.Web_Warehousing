# SYS_BILLTYPE_M
**中文名稱：** 系統單據類型主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| BILL_ID | 單據編號 | document_no | doc_no |   | varchar(6) |  | Y | Y |  |  |
| TYPE_ID | 類型編號 |  | type_no |   | varchar(3) |  | Y | Y |  |  |
| BILL_DESC | 單據描述 | document_description | doc_desc |   | varchar(40) |  |  |  |  |  |
| FLOW_ID | 流程編號 |  | flow_no |   | varchar(12) |  |  |  |  |  |
| FLOW_DESC | 流程描述 |  | flow_desc |   | varchar(40) |  |  |  |  |  |
| TRANCODE | 交易代碼 |  | trx_code |   | varchar(8) |  |  |  |  |  |
| AUTOCODE | 自動編號 | auto_no | auto_no |   | varchar(8) |  |  |  |  |  |
| ACCOCODE | 會計代碼 |  | acct_code |   | varchar(8) |  |  |  |  |  |
| AUTOCODE_FIELD | 自動編號欄位 | auto_no_col | auto_no_col |   | varchar(20) |  |  |  |  |  |
| MODULE_ID | 模組編號 |  | module_no |   | varchar(12) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 |  | upd_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 |  | upd_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 |  | upd_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 |  | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 |  | last_upd_time |   | varchar(14) |  |  |  |  |  |
