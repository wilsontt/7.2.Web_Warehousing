# SYS_REPLIST_QRY_D
**中文名稱：** 系統報表查詢明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| QUERY_ID | 查詢編號 | query_no | qry_no |   | varchar(20) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | varchar(3) |  | Y | Y |  |  |
| CAPTION | 顯示標題 | title | title |   | varchar(30) |  |  |  |  |  |
| VARIABLE | 變數名稱 | variable_name | var_name |   | varchar(20) |  |  |  |  |  |
| MASK_NO | 遮罩編號 | mask_no | mask_no |   | varchar(20) |  |  |  |  |  |
| DEFAULT_TYPE | 預設類型 | default_type | default_type |   | varchar(1) |  |  |  |  |  |
| DEFAULT_VALUE | 預設值 | default_value | default_val |   | varchar(255) |  |  |  |  |  |
| CHECK_TYPE | 檢查類型 | check_type | chk_type |   | varchar(1) |  |  |  |  |  |
| CHECK_VALUE | 檢查值 | check_value | chk_val |   | varchar(255) |  |  |  |  |  |
| MSG_ID | 訊息代號 | msg_no | msg_code |   | varchar(20) |  |  |  |  |  |
| REF_NO | 參照編號 | reference_no | ref_no |   | varchar(20) |  |  |  |  |  |
| REF_KEYS | 參照鍵值 | ref_key | ref_key |   | varchar(255) |  |  |  |  |  |
| ALIGN | 對齊方式 | alignment | align |   | varchar(1) |  |  |  |  |  |
| LIKE_MODE | 模糊比對模式 | fuzzy_match_mode | like_mode |   | varchar(4) |  |  |  |  |  |
| BUTTON_STYLE | 按鈕樣式 | button_style | btn_style |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
