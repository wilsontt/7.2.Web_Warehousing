# SYS_MODULES
**中文名稱：** 系統模組

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MODULE_ID | 模組編號 | module_no | module_no |   | varchar(12) |  | Y | Y |  |  |
| ITEMTYPE | 項目類型 | item_type | item_type |   | varchar(10) |  |  |  |  |  |
| MODULE_DESC | 模組描述 | module_description | module_desc |   | varchar(40) |  |  |  |  |  |
| MODULE_TIER | 模組層級 | module_level | module_level |   | varchar(4) |  |  |  |  |  |
| PACKAGE_NAME | 套件名稱 | package_name | package_name |   | varchar(40) |  |  |  |  |  |
| FUNC_NAME | 功能名稱 | function_name | func_name |   | varchar(40) |  |  |  |  |  |
| FUNC_PARAM | 功能參數 | function_param | func_param |   | varchar(255) |  |  |  |  |  |
| SITE_MODE | 站點模式 | site_mode | site_mode |   | varchar(4) |  |  |  |  |  |
| REPORT_MODE | 報表模式 | report_mode | rpt_mode |   | varchar(4) |  |  |  |  |  |
| REPORT_MODULE | 報表模組 | report_module | rpt_module |   | varchar(100) |  |  |  |  |  |
| REPORT_NAME | 報表名稱 | report_name | rpt_name |   | varchar(100) |  |  |  |  |  |
| TABLE_NAME | 資料表名稱 | table_name | table_name |   | varchar(20) |  |  |  |  |  |
| QUERY_MODE | 查詢模式 | query_mode | query_mode |   | varchar(4) |  |  |  |  |  |
| QUERY_ID | 查詢編號 | query_no | query_no |   | varchar(20) |  |  |  |  |  |
| QUERY_CONDITION | 查詢條件 | query_condition |  |   | varchar(255) |  |  |  |  |  |
| QUERY_CONDITION1 | 查詢條件1 | query_condition1 | query_cond1 |   | varchar(255) |  |  |  |  |  |
| QUERY_CONDITION2 | 查詢條件2 | query_condition2 | query_cond2 |   | varchar(255) |  |  |  |  |  |
| QUERY_CONDITION3 | 查詢條件3 | query_condition3 | query_cond3 |   | varchar(255) |  |  |  |  |  |
| QUERY_CONDITION4 | 查詢條件4 | query_condition4 | query_cond4 |   | varchar(255) |  |  |  |  |  |
| ISSUE_DATE | 發佈日期 | publish_date | publish_date |   | varchar(8) |  |  |  |  |  |
| LASTUSED_DATE | 最後使用日期 | last_used_date | last_used_date |   | varchar(8) |  |  |  |  |  |
| LASTUSED_USERID | 最後使用者 | last_user | last_user |   | varchar(20) |  |  |  |  |  |
| USED_COUNT | 使用次數 | usage_count | usage_cnt |   | decimal(9) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| PACKAGE_CLASS | 套件類別 | package_class | package_class |   | varchar(40) |  |  |  |  |  |
