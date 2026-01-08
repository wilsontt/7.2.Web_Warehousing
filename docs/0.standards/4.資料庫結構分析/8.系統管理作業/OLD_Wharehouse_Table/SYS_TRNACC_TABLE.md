# SYS_TRNACC
**中文名稱：** 系統交易帳戶

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRN_NO | 交易編號 | transaction_no | txn_no |   | varchar(20) |  | Y | Y |  |  |
| TRN_DESC | 交易描述 | transaction_description | txn_desc |   | varchar(100) |  |  |  |  |  |
| ACC_CLASS_NO | 會計分類代號 | accounting_category_no | acct_class_code |   | varchar(4) |  |  |  |  |  |
| BILL_ID | 單據編號 | document_no | doc_no |   | varchar(6) |  |  |  |  |  |
| SRC_TABLE | 來源資料表 | source_table | source_table |   | varchar(20) |  |  |  |  |  |
| SRC_SQL | 原始SQL | original_sql |  |   | varchar(255) |  |  |  |  |  |
| SRC_SQL1 | 原始SQL1 | original_sql1 |  |   | varchar(255) |  |  |  |  |  |
| SRC_SQL2 | 原始SQL2 | original_sql2 |  |   | varchar(255) |  |  |  |  |  |
| SRC_SQL3 | 原始SQL3 | original_sql3 |  |   | varchar(255) |  |  |  |  |  |
| SRC_SQL4 | 原始SQL4 | original_sql4 |  |   | varchar(255) |  |  |  |  |  |
| SRC_SQL5 | 原始SQL5 | original_sql5 |  |   | varchar(255) |  |  |  |  |  |
| SRC_SQL6 | 原始SQL6 | original_sql6 |  |   | varchar(255) |  |  |  |  |  |
| SRC_KEYS | 來源鍵值 | source_key | source_key |   | varchar(100) |  |  |  |  |  |
| UPDATE_FIELD | 更新欄位 | update_field | updated_field |   | varchar(20) |  |  |  |  |  |
| FINISH_FLAG | 完成註記 | completed_flag | complete_flag |   | varchar(4) |  |  |  |  |  |
| UNFINISH_FLAG | 未完成註記 | incomplete_flag | incomplete_flag |   | varchar(4) |  |  |  |  |  |
| JOB_NO | 作業編號 | operation_no | job_no |   | varchar(10) |  |  |  |  |  |
| SLIP_DATE | 傳票日期 | voucher_date | voucher_date |   | varchar(20) |  |  |  |  |  |
| MERGE_TYPE | 合併類型 | merge_type | merge_type |   | varchar(4) |  |  |  |  |  |
| FLOW_ID | 流程編號 | flow_no | flow_no |   | varchar(12) |  |  |  |  |  |
| STEP_ID | 步驟編號 | step_no | step_no |   | varchar(2) |  |  |  |  |  |
| DATE_FIELD | 日期欄位 | date_field | date_field |   | varchar(20) |  |  |  |  |  |
| DATE_TYPE | 日期類型 | date_type | date_type |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
