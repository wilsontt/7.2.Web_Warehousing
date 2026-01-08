# ANS_DEFINE
**中文名稱：** 答案定義

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ANS_NO | 答案編號 | answer_no | ans_no |   | varchar(8) |  | Y | Y |  |  |
| ANS_DESC | 答案描述 | answer_desc | ans_desc |   | varchar(40) |  |  |  |  |  |
| TYPE_ID | 類型編號 | type_no | type_no |   | varchar(10) |  |  |  |  |  |
| EXP_TIME | 到期時間 | expire_time | exp_time |   | decimal(5) |  |  |  |  |  |
| TIME_UNIT | 時間單位 | time_unit | time_unit |   | varchar(4) |  |  |  |  |  |
| WARN_DEG | 警示等級 | alert_level | alert_lvl |   | varchar(4) |  |  |  |  |  |
| SRC_TABLE | 來源資料表 | source_table | src_table |   | varchar(40) |  |  |  |  |  |
| DS_NO | 資料來源編號 | data_source_no | src_no |   | varchar(20) |  |  |  |  |  |
| AUTO_LOG | 自動記錄 | auto_log | auto_log |   | varchar(4) |  |  |  |  |  |
| SRC_DESC_FIELD | 來源描述欄位 | source_field | src_desc_fld |   | varchar(40) |  |  |  |  |  |
| ANS_FIELDS | 答案欄位 | answer_field | ans_field |   | varchar(100) |  |  |  |  |  |
| RES_MODULE_ID | 資源模組編號 | resource_module_no | res_mod_no |   | varchar(12) |  |  |  |  |  |
| RES_MODULE_FIELD | 資源模組欄位 | resource_module_field | res_mod_field |   | varchar(20) |  |  |  |  |  |
| DES_KEYS | 描述鍵值 | desc_key | desc_key |   | varchar(100) |  |  |  |  |  |
| JOB_NO | 工作編號 | job_no | job_no |   | varchar(10) |  |  |  |  |  |
| ANS_FILE | 答案檔案 | answer_file | ans_file |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
