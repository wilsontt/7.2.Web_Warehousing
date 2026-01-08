# SYS_DATASOURCE
**中文名稱：** 系統資料來源

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| DS_NO | 資料來源編號 | data_source_no | src_no |   | varchar(20) |  | Y | Y |  |  |
| DS_DESC | 資料來源描述 | data_source_description | src_desc |   | varchar(40) |  |  |  |  |  |
| TYPE_ID | 類型代號 | type_code | type_code |   | varchar(10) |  |  |  |  |  |
| SRC_TABLE | 來源資料表 | source_table | src_table |   | varchar(40) |  |  |  |  |  |
| SRC_MODE | 資料來源模式 | data_source_mode | src_mode |   | varchar(4) |  |  |  |  |  |
| SRC_SQL | 來源 SQL | source_sql | src_sql |   | varchar(255) |  |  |  |  |  |
| SRC_SQL1 | 來源 SQL1 | source_sql1 | src_sql1 |   | varchar(255) |  |  |  |  |  |
| SRC_SQL2 | 來源 SQL2 | source_sql2 | src_sql2 |   | varchar(255) |  |  |  |  |  |
| SRC_SQL3 | 來源 SQL3 | source_sql3 | src_sql3 |   | varchar(255) |  |  |  |  |  |
| SRC_SQL4 | 來源 SQL4 | source_sql4 | src_sql4 |   | varchar(255) |  |  |  |  |  |
| SRC_WHERE | 來源條件 | source_condition | src_cond |   | varchar(255) |  |  |  |  |  |
| SRC_WHERE1 | 來源條件1 | source_condition1 | src_cond1 |   | varchar(255) |  |  |  |  |  |
| SRC_WHERE2 | 來源條件2 | source_condition2 | src_cond2 |   | varchar(255) |  |  |  |  |  |
| SRC_WHERE3 | 來源條件3 | source_condition3 | src_cond3 |   | varchar(255) |  |  |  |  |  |
| SRC_WHERE4 | 來源條件4 | source_condition4 | src_cond4 |   | varchar(255) |  |  |  |  |  |
| SRC_MODULE_ID | 來源模組編號 | source_module_no | src_module_no |   | varchar(12) |  |  |  |  |  |
| SRC_MODULE_PARA | 來源模組參數 | source_module_param | src_module_param |   | varchar(255) |  |  |  |  |  |
| STC_REPORT | 統計報表 | stat_report | stat_rpt |   | varchar(4) |  |  |  |  |  |
| STC_FIELD | 統計欄位 | stat_column | stat_col |   | varchar(20) |  |  |  |  |  |
| STC_EXPRESSION | 統計運算式 | stat_expr | stat_expr |   | varchar(255) |  |  |  |  |  |
| STC_MODE | 統計模式 | stat_mode | stat_mode |   | varchar(4) |  |  |  |  |  |
| Y_STC_FIELDS | Y 統計欄位 | y_stat_column | y_stat_col |   | varchar(255) |  |  |  |  |  |
| Y_SORT_SOURCE | Y 排序來源 | y_sort_source | y_sort_src |   | varchar(4) |  |  |  |  |  |
| Y_SORT_MODE | Y 排序模式 | y_sort_mode | y_sort_mode |   | varchar(4) |  |  |  |  |  |
| Y_MAX_ROWS | Y 最大列數 | y_max_rows | y_max_rows |   | decimal(9) |  |  |  |  |  |
| Y_TRUNC_MAX | Y 截斷上限 | y_trunc_limit | y_trunc_limit |   | varchar(4) |  |  |  |  |  |
| Y_OTHER_CAPTION | Y 其他標題 | y_other_title | y_other_title |   | varchar(40) |  |  |  |  |  |
| Y_STC_SYSVAR | Y 統計系統變數 | y_stat_system_var | y_stat_sysvar |   | varchar(40) |  |  |  |  |  |
| X_STC_FIELDS | X 統計欄位 | x_stat_column | x_stat_col |   | varchar(255) |  |  |  |  |  |
| X_SORT_SOURCE | X 排序來源 | x_sort_source | x_sort_src |   | varchar(4) |  |  |  |  |  |
| X_SORT_MODE | X 排序模式 | x_sort_mode | x_sort_mode |   | varchar(4) |  |  |  |  |  |
| X_MAX_ROWS | X 最大列數 | x_max_rows | x_max_rows |   | decimal(9) |  |  |  |  |  |
| X_TRUNC_MAX | X 截斷上限 | x_trunc_limit | x_trunc_limit |   | varchar(4) |  |  |  |  |  |
| X_STC_SYSVAR | X 統計系統變數 | x_stat_system_var | x_stat_sysvar |   | varchar(40) |  |  |  |  |  |
| X_CAPTION_EXPR | X 標題運算式 | x_title_expr | x_title_expr |   | varchar(255) |  |  |  |  |  |
| X_OTHER_CAPTION | X 其他標題 | x_other_title | x_other_title |   | varchar(40) |  |  |  |  |  |
| X_CAPTION_SYSVAR | X 標題系統變數 | x_title_system_var | x_title_sysvar |   | varchar(40) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| VERSION | 版本 | version | version |   | varchar(3) |  |  |  |  |  |
| QUERY_TYPE | 查詢類型 | query_type | query_type |   | varchar(1) |  |  |  |  |  |
| QUERY_ID | 查詢編號 | query_no | query_no |   | varchar(20) |  |  |  |  |  |
| MODULE_ID | 模組編號 | module_no | module_no |   | varchar(20) |  |  |  |  |  |
