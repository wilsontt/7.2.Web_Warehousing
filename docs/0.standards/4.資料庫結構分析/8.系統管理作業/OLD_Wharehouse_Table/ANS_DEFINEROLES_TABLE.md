# ANS_DEFINEROLES
**中文名稱：** 答案角色定義

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ANS_NO | 答案編號 | answer_no | ans_no |   | varchar(8) |  | Y | Y |  |  |
| ANS_SEQ | 答案序號 | answer_seq | ans_seq |   | varchar(4) |  | Y | Y |  |  |
| SENDTO_KIND | 發送對象類型 | target_type | target_type |   | varchar(4) |  |  |  |  |  |
| SENDTO_ID | 發送對象編號 | target_no | target_no |   | varchar(20) |  |  |  |  |  |
| OWNER | 擁有者 | owner | owner |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
