# SYS_LABELSIZE_D
**中文名稱：** 系統標籤尺寸明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LABEL_ID | 標籤編號 | label_no | label_no |   | varchar(20) |  | Y | Y |  |  |
| FIELDNAME | 欄位名稱 | field_name | field_name |   | varchar(20) |  | Y | Y |  |  |
| FIELD_EXP | 欄位運算式 | field_expr | field_expr |   | varchar(255) |  |  |  |  |  |
| VISIBLE | 是否可見 | visible | is_visible |   | varchar(1) |  |  |  |  |  |
| CAPTION | 標題 | title | title |   | varchar(60) |  |  |  |  |  |
| ALIGN | 對齊方式 | alignment | align |   | varchar(1) |  |  |  |  |  |
| MASK_NO | 遮罩編號 | mask_no | mask_no |   | varchar(20) |  |  |  |  |  |
| FONT | 字型 | font | font |   | varchar(255) |  |  |  |  |  |
| FIELD_WIDTH | 欄位寬度 | field_width | field_width |   | decimal(9) |  |  |  |  |  |
| FIELD_HEIGHT | 欄位高度 | field_height | field_height |   | decimal(9) |  |  |  |  |  |
| FIELD_TOP | 欄位上距 | field_margin_top | field_margin_top |   | decimal(9) |  |  |  |  |  |
| FIELD_LEFT | 欄位左距 | field_margin_left | field_margin_left |   | decimal(9) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
