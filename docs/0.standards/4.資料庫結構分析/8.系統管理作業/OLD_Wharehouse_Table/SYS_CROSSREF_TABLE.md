# SYS_CROSSREF
**中文名稱：** 系統交叉參照

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CR_NO | 交叉分析編號 | cross_analysis_no | cross_no |   | varchar(12) |  | Y | Y |  |  |
| CR_DESC | 交叉分析描述 | cross_analysis_description | cross_desc |   | varchar(40) |  |  |  |  |  |
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(10) |  |  |  |  |  |
| SRC_TABLE | 資料來源表 | source_table | source_table |   | varchar(40) |  |  |  |  |  |
| SRC_TYPE | 資料來源類型 | source_type | source_type |   | varchar(4) |  |  |  |  |  |
| SRC_NO | 資料來源編號 | source_no | source_no |   | varchar(12) |  |  |  |  |  |
| STC_FIELD | 統計欄位 | stat_field | stat_field |   | varchar(20) |  |  |  |  |  |
| STC_EXPRESSION | 統計運算式 | stat_expression | stat_expr |   | varchar(255) |  |  |  |  |  |
| STC_MODE | 統計模式 | stat_mode | stat_mode |   | varchar(4) |  |  |  |  |  |
| Y_STC_FIELDS | Y 統計欄位 | y_stat_field | y_stat_field |   | varchar(255) |  |  |  |  |  |
| Y_SORT_SOURCE | Y 排序來源 | y_sort_source | y_sort_source |   | varchar(4) |  |  |  |  |  |
| Y_SORT_MODE | Y 排序模式 | y_sort_mode | y_sort_mode |   | varchar(4) |  |  |  |  |  |
| Y_MAX_ROWS | Y 最大列數 | y_max_rows | y_max_rows |   | decimal(9) |  |  |  |  |  |
| Y_TRUNC_MAX | Y 截斷上限 | y_truncate_limit | y_trunc_limit |   | varchar(4) |  |  |  |  |  |
| Y_OTHER_CAPTION | Y 其他標題 | y_other_title | y_other_title |   | varchar(40) |  |  |  |  |  |
| Y_STC_SYSVAR | Y 統計系統變數 | y_stat_system_variable | y_stat_var |   | varchar(40) |  |  |  |  |  |
| X_STC_FIELDS | X 統計欄位 | x_stat_field | x_stat_field |   | varchar(255) |  |  |  |  |  |
| X_SORT_SOURCE | X 排序來源 | x_sort_source | x_sort_source |   | varchar(4) |  |  |  |  |  |
| X_SORT_MODE | X 排序模式 | x_sort_mode | x_sort_mode |   | varchar(4) |  |  |  |  |  |
| X_MAX_ROWS | X 最大列數 | x_max_rows | x_max_rows |   | decimal(9) |  |  |  |  |  |
| X_TRUNC_MAX | X 截斷上限 | x_truncate_limit | x_trunc_limit |   | varchar(4) |  |  |  |  |  |
| X_STC_SYSVAR | X 統計系統變數 | x_stat_system_variable | x_stat_var |   | varchar(40) |  |  |  |  |  |
| X_CAPTION_EXPR | X 標題運算式 | x_title_expression | x_title_expr |   | varchar(255) |  |  |  |  |  |
| X_OTHER_CAPTION | X 其他標題 | x_other_title | x_other_title |   | varchar(40) |  |  |  |  |  |
| X_CAPTION_SYSVAR | X 標題系統變數 | x_title_system_variable | x_title_var |   | varchar(40) |  |  |  |  |  |
| STATIC_NO | 統計編號 | stat_no | stat_no |   | varchar(8) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| X_SUM | X 合計 | x_total | x_total |   | varchar(4) |  |  |  |  |  |
| Y_SUM | Y 合計 | y_total | y_total |   | varchar(4) |  |  |  |  |  |
| X_SUM_CAPTION | X 合計標題 | x_total_title | x_total_title |   | varchar(40) |  |  |  |  |  |
| Y_SUM_CAPTION | Y 合計標題 | y_total_title | y_total_title |   | varchar(40) |  |  |  |  |  |
| CAP_TYPE | 標題類型 | title_type | title_type |   | varchar(5) |  |  |  |  |  |
| Y_STC_CAPTIONS | Y 標題統計 | y_title_stat | y_title_stat |   | varchar(255) |  |  |  |  |  |
| X_MASKNO | X 遮罩號碼 | x_mask_no | x_mask_no |   | varchar(7) |  |  |  |  |  |
| PIVOTSIZE | 樞紐大小 | pivot_size | pivot_size |   | varchar(3) |  |  |  |  |  |
| VERSION | 版本 | version | version |   | varchar(3) |  |  |  |  |  |
| CR_TYPE | 交叉分析類型 | analysis_type | cross_type |   | varchar(3) |  |  |  |  |  |
| P_TYPE | 參照類型 | reference_type | ref_type |   | varchar(3) |  |  |  |  |  |
| Y_CAP_FIELD | Y 標題欄位 | y_title_field | y_title_field |   | varchar(31) |  |  |  |  |  |
| Y_CAP_TYPE | Y 標題類型 | y_title_type | y_title_type |   | varchar(5) |  |  |  |  |  |
