# WF_AGENTNOTIFY
**中文名稱：** 工作流程代理人通知

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LISTID | 清單編號 | list_no | list_no |   | varchar(20) |  | Y | Y |  |  |
| TODOLIST_LISTID | 待辦清單編號 | todo_list_no | todo_list_no |   | varchar(20) |  |  |  |  |  |
| FLOW_ID | 流程編號 | workflow_no | flow_no |   | varchar(12) |  |  |  |  |  |
| STEP_ID | 步驟編號 | step_no | step_no |   | varchar(2) |  |  |  |  |  |
| USER_ID | 使用者編號 | user_no | user_no |   | varchar(20) |  |  |  |  |  |
| D_STEP_ID | 代理步驟編號 | delegate_step_no | agent_step_no |   | varchar(2) |  |  |  |  |  |
| SENDTO_KIND | 接收者類別 | receiver_type | receiver_type |   | varchar(4) |  |  |  |  |  |
| SENDTO_ID | 接收者編號 | receiver_no | receiver_no |   | varchar(20) |  |  |  |  |  |
| FLOWIMPORTANT | 流程重要性 | workflow_importance | flow_importance |   | varchar(1) |  |  |  |  |  |
| FLOWURGENT | 流程緊急性 | workflow_urgency | flow_urgency |   | varchar(1) |  |  |  |  |  |
| STATUS | 狀態 | status | status |   | varchar(4) |  |  |  |  |  |
| FORM_TABLE | 表單資料表 | form_table | form_table |   | varchar(30) |  |  |  |  |  |
| FORM_KEYS | 表單鍵值 | form_key | form_key |   | varchar(255) |  |  |  |  |  |
| FORM_PRESENTATION | 表單呈現方式 | form_presentation_method | form_present_mode |   | varchar(255) |  |  |  |  |  |
| REMARK | 備註 | remark | remark |   | varchar(255) |  |  |  |  |  |
| FORM_PRESENT_CT | 表單顯示內容 | form_display_content | form_content |   | varchar(255) |  |  |  |  |  |
| PROVIDER_NAME | 提供者名稱 | provider_name | provider_name |   | varchar(255) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
