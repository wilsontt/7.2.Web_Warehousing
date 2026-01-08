# PDP_MAINFORM_PARAMS
**中文名稱：** 主表單參數

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  | Y | Y |  |  |
| MENUID | 選單編號 | menu_no | menu_no |   | varchar(6) |  | Y | Y |  |  |
| COLUMNNUM | 欄位數 | field_count | field_cnt |   | decimal(9) |  |  |  |  |  |
| TYPE | 類型 | type | type_name |   | varchar(1) |  |  |  |  |  |
| TABORDER | 標籤順序 | label_order | label_order |   | decimal(9) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| MENUHIGHT | 選單高度 | menu_height | menu_height |   | decimal(9) |  |  |  |  |  |
