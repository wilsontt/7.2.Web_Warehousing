# PDP_RECORD_HOST
**中文名稱：** 紀錄主機

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| RECORD_ID | 紀錄編號 | record_no | log_no |   | varchar(6) |  | Y | Y |  |  |
| SEQ | 序號 | seq | seq_no |   | varchar(3) |  | Y | Y |  |  |
| AFFAIR | 事項 | subject | subject |   | varchar(160) |  |  |  |  |  |
| CHARGE | 負責人 | owner | owner |   | varchar(20) |  |  |  |  |  |
| START_DATE | 開始日期 | start_date | start_date |   | varchar(8) |  |  |  |  |  |
| EXPECT_DATE | 預期日期 | expected_date | exp_date |   | varchar(8) |  |  |  |  |  |
| REALITY_DATE | 實際日期 | actual_date | act_date |   | varchar(8) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
