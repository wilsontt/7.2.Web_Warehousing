# PDP_WEBSITE_TYPE_D
**中文名稱：** 網站類型明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(4) |  | Y | Y |  |  |
| WEBSITE_ID | 網站編號 | website_no | site_no |   | varchar(6) |  | Y | Y |  |  |
| WEBSITE_NM | 網站名稱 | website_name | site_name |   | varchar(200) |  |  |  |  |  |
| WEBSITE_IP | 網站 IP | website_ip | site_ip |   | varchar(120) |  |  |  |  |  |
| WEBSITE_ICON | 網站圖示 | website_icon | site_icon |   | image(16) |  |  |  |  |  |
| FLAG | 狀態旗標 | status_flag | status_flag |   | varchar(20) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
