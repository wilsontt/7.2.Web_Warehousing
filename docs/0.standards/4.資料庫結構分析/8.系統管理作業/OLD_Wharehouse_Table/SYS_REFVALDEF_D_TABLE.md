# SYS_REFVALDEF_D
**中文名稱：** 系統參考值定義明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| REF_NO | 參照編號 | reference_no | ref_no |   | varchar(20) |  | Y | Y |  |  |
| REF_SEQ | 參照序號 | ref_seq | ref_seq |   | decimal(9) |  | Y | Y |  |  |
| REF_TABLE | 參照資料表 | ref_table | ref_table |   | varchar(20) |  |  |  |  |  |
| REF_FIELD | 參照欄位 | ref_column | ref_col |   | varchar(20) |  |  |  |  |  |
| MASK_NO | 遮罩編號 | mask_no | mask_no |   | varchar(10) |  |  |  |  |  |
| DISPLAY_WIDTH | 顯示寬度 | display_width | disp_width |   | decimal(9) |  |  |  |  |  |
| ALIGNMENT | 對齊方式 | alignment | align |   | varchar(4) |  |  |  |  |  |
| VISIBLE | 是否顯示 | is_visible | is_display |   | varchar(4) |  |  |  |  |  |
| FONT | 字型 | font | font |   | varchar(100) |  |  |  |  |  |
| COLOR | 顏色 | color | color |   | varchar(20) |  |  |  |  |  |
| TITLE_CAPTION | 標題文字 | title_text | title_text |   | varchar(40) |  |  |  |  |  |
| TITLE_ALIGNMENT | 標題對齊 | title_alignment | title_align |   | varchar(4) |  |  |  |  |  |
| TITLE_FONT | 標題字型 | title_font | title_font |   | varchar(100) |  |  |  |  |  |
| TITLE_COLOR | 標題顏色 | title_color | title_color |   | varchar(20) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
