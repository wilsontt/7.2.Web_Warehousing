# WF_TODOLIST
**中文名稱：** 工作流程待辦清單

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LISTID | 清單編號 | list_no | list_no |   | varchar(20) |  | Y | Y |  |  |
| FLOW_ID | 流程編號 | workflow_no | flow_no |   | varchar(12) |  |  |  |  |  |
| S_STEP_ID | 來源步驟編號 | source_step_no | source_step_no |   | varchar(2) |  |  |  |  |  |
| S_USER_ID | 來源使用者編號 | source_user_no | source_user_no |   | varchar(20) |  |  |  |  |  |
| D_STEP_ID | 目的步驟編號 | target_step_no | target_step_no |   | varchar(2) |  |  |  |  |  |
| SENDTO_KIND | 指派對象類別 | assignee_type | assign_target_type |   | varchar(4) |  |  |  |  |  |
| SENDTO_ID | 指派對象編號 | assignee_no | assign_target_no |   | varchar(20) |  |  |  |  |  |
| FLOWIMPORTANT | 流程重要性 | workflow_importance | flow_importance |   | varchar(1) |  |  |  |  |  |
| FLOWURGENT | 流程緊急性 | workflow_urgency | flow_urgency |   | varchar(1) |  |  |  |  |  |
| STATUS | 狀態 | status | status |   | varchar(4) |  |  |  |  |  |
| FORM_TABLE | 表單資料表 | form_table | form_table |   | varchar(30) |  |  |  |  |  |
| FORM_KEYS | 表單鍵值 | form_key | form_key |   | varchar(255) |  |  |  |  |  |
| FORM_PRESENTATION | 表單呈現方式 | form_presentation_method | form_present_mode |   | varchar(255) |  |  |  |  |  |
| FORM_CONT | 表單內容 | form_content | form_content |   | image(16) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(255) |  |  |  |  |  |
| OLD_DATA | 舊資料 | old_data | old_data |   | image(16) |  |  |  |  |  |
| NEW_DATA | 新資料 | new_data | new_data |   | image(16) |  |  |  |  |  |
| FORM_PRESENT_CT | 表單顯示內容 | form_display_content | form_display_content |   | varchar(255) |  |  |  |  |  |
| PROVIDER_NAME | 提供者名稱 | provider_name | provider_name |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
