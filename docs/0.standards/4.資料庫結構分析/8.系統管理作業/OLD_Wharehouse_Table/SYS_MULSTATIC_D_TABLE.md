# SYS_MULSTATIC_D
**中文名稱：** 系統多語靜態明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ELE_KEY | 元素鍵值 | element_key | element_key |   | varchar(31) |  | Y | Y |  |  |
| MUL_ID | 多維統計編號 | multi_stat_no | multi_stat_no |   | varchar(12) |  |  |  |  |  |
| NO_SEQ | 編號序號 | number_seq | no_seq |   | varchar(4) |  |  |  |  |  |
| CR_NO | 報表/交叉編號 | report_cross_no | rpt_cross_no |   | varchar(12) |  |  |  |  |  |
| CR_PARAM | 報表參數 | report_param | rpt_param |   | varchar(255) |  |  |  |  |  |
| CALC_SEQ | 計算序號 | calc_seq | calc_seq |   | varchar(31) |  |  |  |  |  |
| CALC_TYPE | 計算類型 | calc_type |  |   | varchar(3) |  |  |  |  |  |
| TITLE | 標題 | title | title |   | varchar(31) |  |  |  |  |  |
| QUERY_ID | 查詢編號 | query_no | query_no |   | varchar(20) |  |  |  |  |  |
| G_SOURCE | 群組來源 | group_source | group_source |   | varchar(255) |  |  |  |  |  |
| VISIBLE | 是否顯示 | is_displayed | is_display |   | varchar(4) |  |  |  |  |  |
| PIVOTSIZE | 樞紐大小 | pivot_size | pivot_size |   | varchar(3) |  |  |  |  |  |
| MASK_NO | 遮罩編號 | mask_no | mask_no |   | varchar(7) |  |  |  |  |  |
| UPLINE | 上層 | parent | parent |   | varchar(3) |  |  |  |  |  |
| CALCTYPE | 計算類型（簡碼） | calc_type_code |  |   | varchar(3) |  |  |  |  |  |
| GROUPNAME | 群組名稱 | group_name | group_name |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
