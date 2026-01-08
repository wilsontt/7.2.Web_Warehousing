# SYS_STATIC_D
**中文名稱：** 系統靜態資料明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| STATIC_NO | 統計編號 | stat_no | stat_no |   | varchar(8) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | varchar(4) |  | Y | Y |  |  |
| L_NAME | 左方名稱 | left_name | left_name |   | varchar(30) |  |  |  |  |  |
| L_RANGE | 左方範圍 | left_range | left_range |   | varchar(255) |  |  |  |  |  |
| L_EXPEND | 左方支出 | left_expense | left_expense |   | varchar(1) |  |  |  |  |  |
| L_VALUE | 左方值 | left_value | left_val |   | varchar(1) |  |  |  |  |  |
| L_SUM_FORMAT | 左方合計格式 | left_sum_format | left_sum_fmt |   | varchar(255) |  |  |  |  |  |
| L_BALANCE_CODE | 左方餘額代碼 | left_balance_code | left_bal_code |   | varchar(1) |  |  |  |  |  |
| L_DIV_FLAG | 左方分隔旗標 | left_split_flag | left_sep_flag |   | varchar(1) |  |  |  |  |  |
| R_NAME | 右方名稱 | right_name | right_name |   | varchar(30) |  |  |  |  |  |
| R_RANGE | 右方範圍 | right_range | right_range |   | varchar(255) |  |  |  |  |  |
| R_EXPEND | 右方支出 | right_expense | right_expense |   | varchar(1) |  |  |  |  |  |
| R_VALUE | 右方值 | right_value | right_val |   | varchar(1) |  |  |  |  |  |
| R_SUM_FORMAT | 右方合計格式 | right_sum_format | right_sum_fmt |   | varchar(255) |  |  |  |  |  |
| R_BALANCE_CODE | 右方餘額代碼 | right_balance_code | right_bal_code |   | varchar(1) |  |  |  |  |  |
| R_DIV_FLAG | 右方分隔旗標 | right_split_flag | right_sep_flag |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
