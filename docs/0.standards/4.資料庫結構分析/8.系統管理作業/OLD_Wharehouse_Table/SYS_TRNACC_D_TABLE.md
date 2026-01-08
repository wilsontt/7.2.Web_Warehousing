# SYS_TRNACC_D
**中文名稱：** 系統交易帳戶明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRN_NO | 交易編號 | transaction_no | txn_no |   | varchar(20) |  | Y | Y |  |  |
| TRN_SEQ | 交易序號 | transaction_seq | txn_seq |   | decimal(9) |  | Y | Y |  |  |
| ACC_CLASS_NO | 會計分類代號 | accounting_category_no | acct_class_code |   | varchar(4) |  |  |  |  |  |
| ACC_ACC_ID | 會計科目編號 | account_no | acct_code |   | varchar(255) |  |  |  |  |  |
| ACC_SUB_ID | 會計子科目 | sub_account | acct_subitem |   | varchar(255) |  |  |  |  |  |
| DEPT_NO | 部門代號 | department_code | dept_code |   | varchar(255) |  |  |  |  |  |
| DBCR_CODE | 借貸代號 | dr_cr_code | drcr_code |   | varchar(255) |  |  |  |  |  |
| CURRENCY_ID | 幣別代號 | currency_code | currency_code |   | varchar(255) |  |  |  |  |  |
| CURRENCY_RATE | 匯率 | exchange_rate | exchange_rate |   | varchar(255) |  |  |  |  |  |
| AMT | 金額 | amount | amount |   | varchar(255) |  |  |  |  |  |
| ACC_CONDTION | 會計條件 | account_condition | acct_condition |   | varchar(255) |  |  |  |  |  |
| ACC_REMARK | 會計備註 | account_remark | acct_remark |   | varchar(255) |  |  |  |  |  |
| REF_CODE1 | 參考代碼1 | ref_code1 |  |   | varchar(255) |  |  |  |  |  |
| REF_CODE2 | 參考代碼2 | ref_code2 |  |   | varchar(255) |  |  |  |  |  |
| REF_CODE3 | 參考代碼3 | ref_code3 |  |   | varchar(255) |  |  |  |  |  |
| REF_CODE4 | 參考代碼4 | ref_code4 |  |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
