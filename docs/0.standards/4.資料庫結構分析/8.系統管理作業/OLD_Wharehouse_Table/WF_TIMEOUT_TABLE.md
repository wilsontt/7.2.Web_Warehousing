# WF_TIMEOUT
**中文名稱：** 工作流程逾時設定

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| SEQ | 序號 | id | seq_no |   | varchar(20) |  | Y | Y |  |  |
| ROLE_ID | 角色編號 | role_no | role_no |   | varchar(12) |  | Y | Y |  |  |
| OWNER_ROLE_ID | 擁有角色編號 | owner_role_no | owner_role_no |   | varchar(20) |  |  |  |  |  |
| ANS_BILL_NO | 回覆單號 | reply_form_no | reply_order_no |   | varchar(100) |  |  |  |  |  |
| SRC_DESC | 來源描述 | source_desc | source_desc |   | varchar(40) |  |  |  |  |  |
| ANS_CONT | 回覆內容 | reply_content | reply_content |   | varchar(255) |  |  |  |  |  |
| RES_MODULE_ID | 資源模組編號 | resource_module_no | resource_module_no |   | varchar(12) |  |  |  |  |  |
| ANS_PRESENTATION | 回覆呈現方式 | reply_presentation_method | reply_present_mode |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
