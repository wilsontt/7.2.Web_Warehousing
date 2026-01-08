# ANS_LOG
**中文名稱：** 答案日誌

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ANS_NO | 答案編號 | answer_no | ans_no |   | varchar(8) |  | Y | Y |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  | Y | Y |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  | Y | Y |  |  |
| ANS_BILL_NO | 答案單號 | answer_order_no | ans_doc_no |   | varchar(100) |  | Y | Y |  |  |
| SRC_DESC | 來源描述 | source_desc | src_desc |   | varchar(40) |  |  |  |  |  |
| ANS_CONT | 答案內容 | answer_content | ans_content |   | varchar(255) |  |  |  |  |  |
| ANS_OWNER | 答案擁有者 | answer_owner | ans_owner |   | varchar(20) |  |  |  |  |  |
| OCCUR_TIME | 發生時間 | occur_time | occ_time |   | decimal(5) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
