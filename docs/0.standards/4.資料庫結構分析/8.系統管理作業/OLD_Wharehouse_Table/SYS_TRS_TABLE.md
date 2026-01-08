# SYS_TRS
**中文名稱：** 系統交易處理 (TRS)

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TRS_NO | 規則編號 |  | rule_no |   | varchar(20) |  | Y | Y |  |  |
| TRS_NAME | 規則名稱 |  | rule_name |   | varchar(20) |  |  |  |  |  |
| TRS_DESC | 規則描述 |  | rule_desc |   | varchar(255) |  |  |  |  |  |
| SRC_DB | 來源資料庫 |  | source_db |   | varchar(20) |  |  |  |  |  |
| SRC_TABLE | 來源資料表 |  | source_table |   | varchar(20) |  |  |  |  |  |
| DES_DB | 目的資料庫 |  | target_db |   | varchar(20) |  |  |  |  |  |
| DES_TABLE | 目的資料表 |  | target_table |   | varchar(20) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 |  | upd_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 |  | upd_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 |  | upd_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 |  | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 |  | last_upd_time |   | varchar(14) |  |  |  |  |  |
