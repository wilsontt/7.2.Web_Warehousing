# SYS_CROSSREP_D
**中文名稱：** 系統交叉報表明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CR_IDITEM | 報表項目ID | report_item_no | rpt_item_no |   | varchar(15) |  | Y | Y |  |  |
| CR_NO | 報表編號 | report_no | rpt_no |   | varchar(12) |  |  |  |  |  |
| CR_SEQ | 報表序號 | report_seq | rpt_seq |   | varchar(4) |  |  |  |  |  |
| CR_NAME | 報表名稱 | report_name | rpt_name |   | varchar(31) |  |  |  |  |  |
| VISIBLE | 是否顯示 | is_displayed | is_display |   | varchar(4) |  |  |  |  |  |
| FIELDNAME | 欄位名稱 | field_name | field_name |   | varchar(31) |  |  |  |  |  |
| CALC_TYPE | 計算類型 | calc_type | calc_type |   | varchar(4) |  |  |  |  |  |
| DO_CAP | DO 標題 | do_title | do_title |   | varchar(3) |  |  |  |  |  |
| F_MASKNO | F 遮罩號碼 | f_mask_no | f_mask_no |   | varchar(7) |  |  |  |  |  |
| F_PIVOTSIZE | F 樞紐大小 | f_pivot_size | f_pivot_size |   | varchar(4) |  |  |  |  |  |
| I_PIVOTSIZE | I 樞紐大小 | i_pivot_size | i_pivot_size |   | varchar(4) |  |  |  |  |  |
| I_MASKNO | I 遮罩號碼 | i_mask_no | i_mask_no |   | varchar(7) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| F_TITLE | F 標題 | f_title | f_title |   | varchar(32) |  |  |  |  |  |
| I_TITLE | I 標題 | i_title | i_title |   | varchar(32) |  |  |  |  |  |
