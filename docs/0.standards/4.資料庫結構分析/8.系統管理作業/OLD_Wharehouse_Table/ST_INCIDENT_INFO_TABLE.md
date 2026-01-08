# ST_INCIDENT_INFO
**中文名稱：** 服務單資料交換檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| NO | 資料編號 | data_no | data_code |   | nvarchar(80) |  | Y | Y |  |  |
| INFO_DATE | 異動時間 | change_time | change_time |   | nvarchar(40) |  |  |  |  |  |
| INCIDENT_NO | 服務單編號 | service_order_no | service_order_no |   | nvarchar(60) |  |  |  |  |  |
| INCIDENT_TYPE | 服務類別代號 | service_category_code | service_category_code |   | nvarchar(40) |  |  |  |  |  |
| STATUS_ID | 服務單狀態代號 | service_order_status_code | service_order_status_code |   | nvarchar(40) |  |  |  |  |  |
| CODE | 條碼號 | barcode_number | barcode_no |   | nvarchar(100) |  |  |  |  |  |
| BOX_NO | 舊箱號 | old_box_number | old_box_no |   | nvarchar(100) |  |  |  |  |  |
| URGENT | 急件 | urgent_item | urgent_item |   | nvarchar(2) |  |  |  |  |  |
| NAME | 申請人員 | applicant_staff | applicant_staff |   | nvarchar(40) |  |  |  |  |  |
| ID | 事件編號 | event_no | event_no |   | nvarchar(40) |  |  |  |  |  |
| TEL | 聯絡電話 | contact_phone | contact_phone |   | nvarchar(40) |  |  |  |  |  |
| EXT_NO | 分機 | extension_number | extension |   | nvarchar(40) |  |  |  |  |  |
| ADDRESS | 地址 | address | address |   | nvarchar(200) |  |  |  |  |  |
| ORGANIZE_CODE | 組別 | team | team |   | nvarchar(20) |  |  |  |  |  |
| COST_CENTER | 箱子所屬成本中心 | box_cost_center | box_belong_cost_center |   | nvarchar(40) |  |  |  |  |  |
| DEPT_NAME | 單位名稱 | unit_name | unit_name |   | nvarchar(100) |  |  |  |  |  |
| CO_COST_CENTER | 計價成本中心代號 | billing_cost_center_no | billing_cost_center_no |   | nvarchar(40) |  |  |  |  |  |
| CO_DEPT_NAME | 計價單位名稱 | billing_unit_name | billing_unit_name |   | nvarchar(100) |  |  |  |  |  |
| BUY_BOX | 採購箱子數量 | procurement_box_quantity | purchase_box_qty |   | nvarchar(10) |  |  |  |  |  |
| BAR_CODE | 採購條碼數量 | procurement_barcode_quantity | purchase_barcode_qty |   | nvarchar(10) |  |  |  |  |  |
| FACTORY_ID | 廠商代號 | vendor_code | vendor_code |   | nvarchar(20) |  |  |  |  |  |
| HOPE_FINISH_DATE | 希望完成日期 | expected_completion_date | delivery_target_date |   | nvarchar(40) |  |  |  |  |  |
| RECEIVE_DATE | 廠商收單日期 | vendor_order_received_date | vendor_order_recv_date |   | nvarchar(40) |  |  |  |  |  |
| EXP_FINISH_DATE | 廠商預計完成日期 | vendor_expected_completion_date | vendor_expected_complete_date |   | nvarchar(40) |  |  |  |  |  |
| FINISH_DATE | 廠商實際完成日期 | vendor_actual_completion_date | vendor_actual_complete_date |   | nvarchar(40) |  |  |  |  |  |
| EXP_DESTROY_DATE | 預計銷毀日期 | expected_destruction_date | expected_destroy_date |   | nvarchar(40) |  |  |  |  |  |
| DESCRIPTION | 備註 | remarks | remark |   | nvarchar(520) |  |  |  |  |  |
| INFORM_NO | 通知單號 | notification_order_number | notify_order_no |   | nvarchar(24) |  |  |  |  |  |
| WORK_NO | 工作單號 | work_order_number | work_order_no |   | nvarchar(20) |  |  |  |  |  |
| IS_CHECKED | 是否已檢查 | is_checked | is_checked |   | nvarchar(2) |  |  |  |  |  |
| IS_UPLOADED | 是否已上傳 | is_uploaded | is_uploaded |   | nvarchar(2) |  |  |  |  |  |
| INFORM_CUST_NO | 申請客戶編號 | application_customer_no | apply_customer_code |   | nvarchar(10) |  |  |  |  |  |
| INFORM_DEPT_NO | 申請部門編號 | application_department_no | apply_dept_code |   | nvarchar(8) |  |  |  |  |  |
| INFORM_TEAM_NO | 申請組別編號 | application_team_no | apply_team_no |   | nvarchar(20) |  |  |  |  |  |
| CO_CUST_NO | 計價客戶編號 | billing_customer_no | billing_cust_no |   | nvarchar(10) |  |  |  |  |  |
| CO_DEPT_NO | 計價部門編號 | billing_department_no | billing_dept_no |   | nvarchar(8) |  |  |  |  |  |
| CO_TEAM_NO | 計價組別編號 | billing_team_no | billing_team_no |   | nvarchar(20) |  |  |  |  |  |
| CST_DX_FILENAME | 客戶交換檔案名稱 | customer_exchange_file_name | cust_exchange_file_name |   | nvarchar(100) |  |  |  |  |  |
| CST_DX_FILETIME | 客戶交換檔案時間 | customer_exchange_file_time | cust_exchange_file_time |   | nvarchar(28) |  |  |  |  |  |
| CV_DX_FILENAME | 海灣交換檔案名稱 | gulf_exchange_file_name | cv_exchange_file_name |   | nvarchar(100) |  |  |  |  |  |
| CV_DX_FILETIME | 海灣交換檔案時間 | gulf_exchange_file_time | cv_exchange_file_time |   | nvarchar(28) |  |  |  |  |  |
