# SYS_LABELSIZE_M
**中文名稱：** 系統標籤尺寸主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LABEL_ID | 標籤編號 | label_no | label_no |   | varchar(20) |  | Y | Y |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| LABEL_DESC | 標籤描述 | label_description | label_desc |   | varchar(60) |  |  |  |  |  |
| QUERY_TYPE | 查詢類型 | query_type | query_type |   | varchar(1) |  |  |  |  |  |
| QUERY_ID | 查詢編號 | query_no | query_no |   | varchar(20) |  |  |  |  |  |
| MODULE_ID | 模組編號 | module_no | module_no |   | varchar(20) |  |  |  |  |  |
| DS_NO | 資料來源編號 | source_no | src_no |   | varchar(20) |  |  |  |  |  |
| SOURCE_TABLE | 來源表格 | source_table | src_table |   | varchar(20) |  |  |  |  |  |
| USER_USE | 使用者用途 | user_purpose | user_usage |   | varchar(3) |  |  |  |  |  |
| LABEL_CAPTION | 標籤標題 | label_title | label_title |   | varchar(120) |  |  |  |  |  |
| LABEL_WIDTH | 標籤寬度 | label_width | label_width |   | decimal(9) |  |  |  |  |  |
| LABEL_HEIGHT | 標籤高度 | label_height | label_height |   | decimal(9) |  |  |  |  |  |
| LABEL_COLUMN | 列數 | rows | row_cnt |   | decimal(9) |  |  |  |  |  |
| LABEL_ROW | 行數 | columns | col_cnt |   | decimal(9) |  |  |  |  |  |
| MARGINTOP | 上邊界 | margin_top | margin_top |   | decimal(9) |  |  |  |  |  |
| MARGINLEFT | 左邊界 | margin_left | margin_left |   | decimal(9) |  |  |  |  |  |
| PAGE_SIZE | 頁面大小 | page_size | page_size |   | varchar(20) |  |  |  |  |  |
| PAGE_MODE | 頁面模式 | page_mode | page_mode |   | varchar(1) |  |  |  |  |  |
| REPORT_WIDTH | 報表寬度 | report_width | rpt_width |   | decimal(9) |  |  |  |  |  |
| REPORT_HEIGHT | 報表高度 | report_height | rpt_height |   | decimal(9) |  |  |  |  |  |
| PRINT_NO | 列印編號 | print_no | print_no |   | varchar(20) |  |  |  |  |  |
| REPORT_FONT | 報表字型 | report_font | rpt_font |   | varchar(255) |  |  |  |  |  |
| HEAD_COLUMN | 標頭列數 | header_rows | header_rows |   | decimal(9) |  |  |  |  |  |
| H_INTERVAL | 水平間距 | horizontal_spacing | h_spacing |   | decimal(9) |  |  |  |  |  |
| V_INTERVAL | 垂直間距 | vertical_spacing | v_spacing |   | decimal(9) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
