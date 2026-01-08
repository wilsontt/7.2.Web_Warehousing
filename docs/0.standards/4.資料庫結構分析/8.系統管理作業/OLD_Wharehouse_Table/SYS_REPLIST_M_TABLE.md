# SYS_REPLIST_M
**中文名稱：** 系統報表清單主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| REPORT_ID | 報表編號 | report_no | rpt_no |   | varchar(20) |  | Y | Y |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| REPORT_DESC | 報表描述 | report_description | rpt_desc |   | varchar(60) |  |  |  |  |  |
| QUERY_TYPE | 查詢類型 | query_type | qry_type |   | varchar(1) |  |  |  |  |  |
| QUERY_ID | 查詢編號 | query_no | qry_no |   | varchar(20) |  |  |  |  |  |
| MODULE_ID | 模組編號 | module_no | module_no |   | varchar(20) |  |  |  |  |  |
| DS_NO | 資料來源編號 |  |  |   | varchar(20) |  |  |  |  |  |
| SOURCE_TABLE | 來源資料表 | source_table | src_table |   | varchar(20) |  |  |  |  |  |
| HEAD_DS_NO | 表頭資料來源編號 | header_source_no | header_src_no |   | varchar(20) |  |  |  |  |  |
| HEAD_TABLE | 表頭資料表 | header_table | header_table |   | varchar(20) |  |  |  |  |  |
| USER_USE | 使用者設定 | user_setting | user_cfg |   | varchar(10) |  |  |  |  |  |
| REPORT_TITLE | 報表標題 | report_title | rpt_title |   | varchar(120) |  |  |  |  |  |
| COMP_TITLE | 公司標題 | company_title | company_title |   | varchar(120) |  |  |  |  |  |
| COMP_PRINT | 是否列印公司名稱 | is_print_company_name | is_print_company |   | varchar(1) |  |  |  |  |  |
| TITLE_FONT | 標題字型 | title_font | title_font |   | varchar(255) |  |  |  |  |  |
| TITLE_PAGE_PRINT | 是否列印標題 | is_print_title | is_print_title |   | varchar(1) |  |  |  |  |  |
| DATE_TYPE | 日期格式 | date_format | date_fmt |   | varchar(20) |  |  |  |  |  |
| DATE_PRINT | 是否列印日期 | is_print_date | is_print_date |   | varchar(1) |  |  |  |  |  |
| PAGE_TYPE | 頁面類型 | page_type | page_type |   | varchar(20) |  |  |  |  |  |
| PAGE_PRINT | 是否列印頁碼 | is_print_page_number | is_print_page |   | varchar(1) |  |  |  |  |  |
| TITLE2_FONT | 副標題字型 | subtitle_font | subtitle_font |   | varchar(255) |  |  |  |  |  |
| TITLE2_PAGE_PRINT | 是否列印副標題 | is_print_subtitle | is_print_subtitle |   | varchar(1) |  |  |  |  |  |
| PAGE_SIZE | 頁面大小 | page_size | page_size |   | varchar(20) |  |  |  |  |  |
| PAGE_MODE | 頁面模式 | page_mode | page_mode |   | varchar(1) |  |  |  |  |  |
| PRINT_NO | 列印份數 | print_copies | print_copies |   | varchar(20) |  |  |  |  |  |
| DATA_FONT | 資料字型 | data_font | data_font |   | varchar(255) |  |  |  |  |  |
| CAPTION_FONT | 欄位標題字型 | column_title_font | col_title_font |   | varchar(255) |  |  |  |  |  |
| COLUMN_LINE | 欄位線條 | column_lines | col_border |   | varchar(1) |  |  |  |  |  |
| ROW_LINE | 列線條 | row_lines | row_border |   | varchar(1) |  |  |  |  |  |
| TOTAL_PRINT | 是否列印總計 | is_print_total | is_print_total |   | varchar(1) |  |  |  |  |  |
| TOTAL_CAPTION | 總計標題 | total_title | total_title |   | varchar(60) |  |  |  |  |  |
| SUBTOTAL_PRINT | 是否列印小計 | is_print_subtotal | is_print_subtotal |   | varchar(1) |  |  |  |  |  |
| SUBTOTAL_CAPTION | 小計標題 | subtotal_title | subtotal_title |   | varchar(60) |  |  |  |  |  |
| HEAD_HEIGHT | 表頭高度 | header_height | header_height |   | decimal(9) |  |  |  |  |  |
| HEAD_COLUMN | 表頭欄數 | header_columns | header_cols |   | decimal(9) |  |  |  |  |  |
| HEAD_PAGE_PRINT | 是否列印表頭 | is_print_header | is_print_header |   | varchar(1) |  |  |  |  |  |
| FOOTER_HEIGHT | 表尾高度 | footer_height | footer_height |   | decimal(9) |  |  |  |  |  |
| FOOTER_COLUMN | 表尾欄數 | footer_columns | footer_cols |   | decimal(9) |  |  |  |  |  |
| FOOTER_PAGE_PRINT | 是否列印表尾 | is_print_footer | is_print_footer |   | varchar(1) |  |  |  |  |  |
| REPORT_WIDTH | 報表寬度 | report_width | rpt_width |   | decimal(9) |  |  |  |  |  |
| REPORT_HEIGHT | 報表高度 | report_height | rpt_height |   | decimal(9) |  |  |  |  |  |
| COLUMN_SPACE | 欄間距 | column_spacing | col_spacing |   | decimal(9) |  |  |  |  |  |
| ROW_SPACE | 列間距 | row_spacing | row_spacing |   | decimal(9) |  |  |  |  |  |
| ORDER_TYPE | 排序類型 | sort_type | sort_type |   | varchar(1) |  |  |  |  |  |
| DS_TYPE | 資料來源類型 |  |  |   | varchar(4) |  |  |  |  |  |
| REPORTID_PRINT | 是否列印報表編號 | is_print_report_no | is_print_rpt_no |   | varchar(1) |  |  |  |  |  |
| TIME_PRINT | 是否列印時間 | is_print_time | is_print_time |   | varchar(1) |  |  |  |  |  |
| HEAD_POSITION | 表頭位置 | header_position | header_pos |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| VERSION | 版本號 | version | version_no |   | varchar(3) |  |  |  |  |  |
| RIGHT_MEMO_OPT | 右側備註選項 | right_note_option | right_note_opt |   | varchar(4) |  |  |  |  |  |
