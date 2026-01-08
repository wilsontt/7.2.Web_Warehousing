# ANS_LIST
**中文名稱：** 答案清單

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ANS_NO | 答案編號 | answer_no | ans_no |   | varchar(8) |  | Y | Y |  |  |
| ANS_BILL_NO | 答案單號 | answer_order_no | ans_doc_no |   | varchar(100) |  | Y | Y |  |  |
| SRC_DESC | 來源描述 | source_desc | src_desc |   | varchar(40) |  |  |  |  |  |
| ANS_CONT | 答案內容 | answer_content | ans_content |   | varchar(255) |  |  |  |  |  |
| ANS_OWNER | 答案擁有者 | answer_owner | ans_owner |   | varchar(20) |  |  |  |  |  |
| RES_MODULE_ID | 資源模組編號 | resource_module_no | res_mod_no |   | varchar(12) |  |  |  |  |  |
| FIRST_UPDATE_DATE | 初次更新日期 | first_update_date | first_upd_date |   | varchar(8) |  |  |  |  |  |
| FIRST_UPDATE_TIME | 初次更新時間 | first_update_time | first_upd_time |   | varchar(6) |  |  |  |  |  |
| OCCUR_TIME | 發生時間 | occur_time | occ_time |   | decimal(5) |  |  |  |  |  |
| ANS_PRESENTATION | 答案呈現方式 | answer_display_mode | ans_display |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
