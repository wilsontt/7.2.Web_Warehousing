# SYS_REPLIST_D3
**中文名稱：** 系統報表清單明細3

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| REPORT_ID | 報表編號 | report_no |  |   | varchar(20) |  | Y | Y |  |  |
| FIELDNAME | 欄位名稱 | column_name |  |   | varchar(20) |  | Y | Y |  |  |
| FIELD_EXP | 欄位公式 | column_formula |  |   | varchar(255) |  |  |  |  |  |
| CAPTION | 標題 | title | title |   | varchar(60) |  |  |  |  |  |
| ALIGN | 對齊方式 | alignment | align |   | varchar(1) |  |  |  |  |  |
| MASK_NO | 遮罩編號 | mask_no |  |   | varchar(20) |  |  |  |  |  |
| FONT | 字型 | font |  |   | varchar(255) |  |  |  |  |  |
| HEAD_WIDTH | 表頭寬度 | header_width |  |   | decimal(9) |  |  |  |  |  |
| HEAD_HEIGHT | 表頭高度 | header_height |  |   | decimal(9) |  |  |  |  |  |
| HEAD_TOP | 表頭上距 | header_margin_top |  |   | decimal(9) |  |  |  |  |  |
| HEAD_LEFT | 表頭左距 | header_margin_left |  |   | decimal(9) |  |  |  |  |  |
| AUTOWARP | 自動換行 | auto_wrap |  |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
| IMAGE_MODE | 圖像模式 | image_mode |  |   | varchar(1) |  |  |  |  |  |
| STRETCH | 是否拉伸 | is_stretch |  |   | varchar(1) |  |  |  |  |  |
