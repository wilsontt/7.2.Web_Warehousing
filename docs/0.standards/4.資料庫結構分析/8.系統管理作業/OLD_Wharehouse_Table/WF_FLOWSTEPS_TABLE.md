# WF_FLOWSTEPS
**中文名稱：** 工作流程步驟

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| FLOW_ID | 流程編號 | flow_no |  |   | varchar(12) |  | Y | Y |  |  |
| STEP_ID | 步驟編號 | id |  |   | varchar(2) |  | Y | Y |  |  |
| STEP_DESC | 步驟描述 | description |  |   | varchar(255) |  |  |  |  |  |
| STEP_TYPE | 步驟類型 | type |  |   | varchar(4) |  |  |  |  |  |
| MODULE_ID | 模組編號 | module_no |  |   | varchar(12) |  |  |  |  |  |
| MODULE_MODE | 模組模式 | module_mode |  |   | varchar(4) |  |  |  |  |  |
| STEP_PARAM | 步驟參數 | params |  |   | varchar(255) |  |  |  |  |  |
| NEXT_STEP_ID1 | 下一步驟編號1 | next_id1 |  |   | varchar(2) |  |  |  |  |  |
| NEXT_STEP_ID2 | 下一步驟編號2 | next_id2 |  |   | varchar(2) |  |  |  |  |  |
| NEXT_STEP_ID3 | 下一步驟編號3 | next_id3 |  |   | varchar(2) |  |  |  |  |  |
| NEXT_STEP_ID4 | 下一步驟編號4 | next_id4 |  |   | varchar(2) |  |  |  |  |  |
| NEXT1POINT | 下一步位置1 | next_pos1 |  |   | decimal(9) |  |  |  |  |  |
| NEXT2POINT | 下一步位置2 | next_pos2 |  |   | decimal(9) |  |  |  |  |  |
| NEXT3POINT | 下一步位置3 | next_pos3 |  |   | decimal(9) |  |  |  |  |  |
| NEXT4POINT | 下一步位置4 | next_pos4 |  |   | decimal(9) |  |  |  |  |  |
| NEXT1STATUS | 下一步狀態1 | next_status1 |  |   | varchar(2) |  |  |  |  |  |
| NEXT2STATUS | 下一步狀態2 | next_status2 |  |   | varchar(2) |  |  |  |  |  |
| NEXT3STATUS | 下一步狀態3 | next_status3 |  |   | varchar(2) |  |  |  |  |  |
| NEXT4STATUS | 下一步狀態4 | next_status4 |  |   | varchar(2) |  |  |  |  |  |
| SENDBACK_STEP | 退回步驟 | return_no |  |   | varchar(2) |  |  |  |  |  |
| SENDTO_KIND | 指派對象類型 | assign_type |  |   | varchar(4) |  |  |  |  |  |
| SENDTO_ID | 指派對象編號 | assign_no |  |   | varchar(20) |  |  |  |  |  |
| SENDTO_FIELD | 指派欄位 | assign_field |  |   | varchar(20) |  |  |  |  |  |
| CLOSE_MODE | 關閉模式 | close_mode | close_mode |   | varchar(4) |  |  |  |  |  |
| EXP_TIME | 預計時間 | expected_time |  |   | decimal(5) |  |  |  |  |  |
| URGENT_TIME | 緊急時間 | urgent_time |  |   | decimal(5) |  |  |  |  |  |
| TIME_UNIT | 時間單位 | time_unit |  |   | varchar(4) |  |  |  |  |  |
| ISSUE_DATE | 發佈日期 | publish_date |  |   | varchar(8) |  |  |  |  |  |
| LASTUSED_DATE | 最近使用日期 | last_used_date |  |   | varchar(8) |  |  |  |  |  |
| LASTUSED_USERID | 最近使用者編號 | last_user_no |  |   | varchar(20) |  |  |  |  |  |
| USED_COUNT | 使用次數 | usage_count |  |   | decimal(9) |  |  |  |  |  |
| STEP_TOP | 步驟上座標 | pos_top |  |   | decimal(5) |  |  |  |  |  |
| STEP_LEFT | 步驟左座標 | pos_left |  |   | decimal(5) |  |  |  |  |  |
| STEP_HIGHT | 步驟高度 | height |  |   | decimal(5) |  |  |  |  |  |
| STEP_WIDTH | 步驟寬度 | width |  |   | decimal(5) |  |  |  |  |  |
| FUNCTYPE_ID | 功能類型編號 | function_type_no |  |   | varchar(4) |  |  |  |  |  |
| JPEG_ID | 圖片編號 | image_no |  |   | varchar(20) |  |  |  |  |  |
| BRUSH_COLOR | 畫筆顏色 | pen_color | pen_color |   | decimal(9) |  |  |  |  |  |
| BRUSH_COLOR2 | 畫筆顏色2 | pen_color2 | pen_color2 |   | decimal(9) |  |  |  |  |  |
| SHADOW_MODE | 陰影模式 | shadow_mode |  |   | varchar(4) |  |  |  |  |  |
| NF_TYPE | 下一流程類型 | next_flow_type |  |   | varchar(4) |  |  |  |  |  |
| NF_FLOW_ID | 下一流程編號 | next_flow_no |  |   | varchar(12) |  |  |  |  |  |
| NF_STEP_ID | 下一步驟編號 | next_step_no |  |   | varchar(2) |  |  |  |  |  |
| NF_MODULE_ID | 下一模組編號 | next_module_no |  |   | varchar(12) |  |  |  |  |  |
| NF_BR | 下一流程連線 | next_flow_link |  |   | varchar(12) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 註記 | notes | note |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
