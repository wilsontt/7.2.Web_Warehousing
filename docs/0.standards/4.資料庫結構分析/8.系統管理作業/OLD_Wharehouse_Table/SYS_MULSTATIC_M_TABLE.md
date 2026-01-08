# SYS_MULSTATIC_M
**中文名稱：** 系統多語靜態主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MUL_ID | 多維統計編號 | multi_stat_no | multi_stat_no |   | varchar(12) |  | Y | Y |  |  |
| MUL_DESC | 多維統計描述 | multi_stat_description | multi_stat_desc |   | varchar(255) |  |  |  |  |  |
| QUERY_ID | 查詢編號 | query_no | query_no |   | varchar(20) |  |  |  |  |  |
| NULLTYPE | 空值類型 | null_type | null_type |   | varchar(4) |  |  |  |  |  |
| MAX_X | X 軸最大值 | x_max_value | x_axis_max |   | decimal(9) |  |  |  |  |  |
| Y_SUM | Y 軸合計 | y_total | y_axis_total |   | varchar(4) |  |  |  |  |  |
| Y_STC_FIELDS | Y 軸統計欄位 | y_stat_field | y_axis_stat_field |   | varchar(255) |  |  |  |  |  |
| STC_MODE | 統計模式 | stat_mode | stat_mode |   | varchar(4) |  |  |  |  |  |
| CAP_TYPE | 標題類型 | title_type | title_type |   | varchar(5) |  |  |  |  |  |
| Y_STC_CAPTIONS | Y 軸統計標題 | y_stat_title | y_axis_stat_title |   | varchar(255) |  |  |  |  |  |
| Y_SUM_CAPTION | Y 軸合計標題 | y_total_title | y_axis_total_title |   | varchar(40) |  |  |  |  |  |
| VERSION | 版本 | version | version |   | varchar(3) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| TYPE_ID | 類型代號 | type_code | type_code |   | varchar(10) |  |  |  |  |  |
