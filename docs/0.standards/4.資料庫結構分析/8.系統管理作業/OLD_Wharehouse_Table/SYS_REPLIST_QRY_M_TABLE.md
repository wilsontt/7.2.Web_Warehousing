# SYS_REPLIST_QRY_M
**中文名稱：** 系統報表查詢主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| QUERY_ID | 查詢編號 | query_no | qry_no |   | varchar(20) |  | Y | Y |  |  |
| SYS_TYPE | 系統類型 | system_type | sys_type |   | varchar(10) |  |  |  |  |  |
| QUERY_DESC | 查詢描述 | query_description | qry_desc |   | varchar(40) |  |  |  |  |  |
| CAPTIONYN | 是否顯示標題 | is_show_title | is_show_title |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
