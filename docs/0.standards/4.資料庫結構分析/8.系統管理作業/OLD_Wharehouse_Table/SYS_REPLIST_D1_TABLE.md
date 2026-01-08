# SYS_REPLIST_D1
**中文名稱：** 系統報表清單明細1

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| REPORT_ID | 報表編號 | report_no |  |   | varchar(20) |  | Y | Y |  |  |
| SEQ | 序號 | seq |  |   | decimal(9) |  | Y | Y |  |  |
| FIELDNAME | 欄位名稱 | column_name |  |   | varchar(20) |  | Y | Y |  |  |
| VISIBLE | 是否可見 | is_visible |  |   | varchar(1) |  |  |  |  |  |
| AUTO_CAPTION | 自動標題 | auto_title | auto_title |   | varchar(1) |  |  |  |  |  |
| CAPTION | 標題 | title | title |   | varchar(60) |  |  |  |  |  |
| WIDTH | 欄位寬度 | column_width |  |   | decimal(9) |  |  |  |  |  |
| ALIGN | 水平對齊 | horizontal_align | horizontal_align |   | varchar(1) |  |  |  |  |  |
| MASK_NO | 遮罩編號 | mask_no |  |   | varchar(20) |  |  |  |  |  |
| TOTAL_TYPE | 合計類型 | total_type |  |   | varchar(1) |  |  |  |  |  |
| WORDWRAP | 自動換行 | auto_wrap |  |   | decimal(9) |  |  |  |  |  |
| SORTED | 是否排序 | is_sortable |  |   | varchar(1) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
| DATA_KIND | 資料類型 | data_type |  |   | varchar(4) |  |  |  |  |  |
| ALIGN_TOP | 對齊上方 | alignment_top | align_top |   | varchar(1) |  |  |  |  |  |
| AUTO_HEIGHT | 自動高度 | auto_height | auto_height |   | varchar(1) |  |  |  |  |  |
| DISPLAY_HEIGHT | 顯示高度 | display_height |  |   | decimal(9) |  |  |  |  |  |
| STRETCH | 是否拉伸 | is_stretch |  |   | varchar(1) |  |  |  |  |  |
| VALIGNMENT | 垂直對齊 | vertical_align |  |   | varchar(4) |  |  |  |  |  |
