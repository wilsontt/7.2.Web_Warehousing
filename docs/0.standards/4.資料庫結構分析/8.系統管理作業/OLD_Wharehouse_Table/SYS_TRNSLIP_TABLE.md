# SYS_TRNSLIP
**中文名稱：** 系統交易傳票

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TABLE_NAME | 表格名稱 | table_name | table_name |   | varchar(20) |  |  |  |  |  |
| KEY1 | 鍵值1 | key1 |  |   | varchar(40) |  |  |  |  |  |
| KEY2 | 鍵值2 | key2 |  |   | varchar(40) |  |  |  |  |  |
| SLIP_SEQ | 傳票序號 | voucher_seq_no | voucher_seq |   | decimal(9) |  |  |  |  |  |
| TRN_NO | 交易編號 | transaction_no | txn_no |   | varchar(20) |  |  |  |  |  |
| PRESENTATION | 傳票摘要 | voucher_summary | voucher_summary |   | varchar(255) |  |  |  |  |  |
| BILL_ID | 單據編號 | document_no | doc_no |   | varchar(6) |  |  |  |  |  |
| MERGE_TYPE | 合併類型 | merge_type | merge_type |   | varchar(4) |  |  |  |  |  |
| SLIP_DATE | 傳票日期 | voucher_date | voucher_date |   | varchar(8) |  |  |  |  |  |
| ACC_CLASS_NO | 會計分類代號 | accounting_category_no | acct_class_code |   | varchar(4) |  |  |  |  |  |
| ACC_ACC_ID | 會計科目編號 | account_no | acct_code |   | varchar(6) |  |  |  |  |  |
| ACC_SUB_ID | 會計子科目 | sub_account | acct_subitem |   | varchar(12) |  |  |  |  |  |
| DEPT_NO | 部門代號 | department_code | dept_code |   | varchar(8) |  |  |  |  |  |
| DBCR_CODE | 借貸代號 | dr_cr_code | drcr_code |   | varchar(1) |  |  |  |  |  |
| CURRENCY_ID | 幣別代號 | currency_code | currency_code |   | varchar(3) |  |  |  |  |  |
| CURRENCY_RATE | 匯率 | exchange_rate | exchange_rate |   | decimal(5) |  |  |  |  |  |
| AMT | 金額 | amount | amount |   | decimal(9) |  |  |  |  |  |
| ACC_REMARK | 會計備註 | account_remark | acct_remark |   | varchar(40) |  |  |  |  |  |
| REF_CODE1 | 參考代碼1 | ref_code1 |  |   | varchar(20) |  |  |  |  |  |
| REF_CODE2 | 參考代碼2 | ref_code2 |  |   | varchar(20) |  |  |  |  |  |
| REF_CODE3 | 參考代碼3 | ref_code3 |  |   | varchar(20) |  |  |  |  |  |
| REF_CODE4 | 參考代碼4 | ref_code4 |  |   | varchar(20) |  |  |  |  |  |
| SEQ_NO | 序號 | seq | seq_no |   | varchar(13) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| SLIP_GROUP | 傳票群組 | voucher_group | voucher_group |   | varchar(4) |  |  |  |  |  |
