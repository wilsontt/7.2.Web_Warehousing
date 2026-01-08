# ICTID
**中文名稱：** 調整箱子

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTI00 | 調整單號 | adjustment_order_number | adjust_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| CAM20 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| CAM10 | 目前狀態 | current_status | curr_status |   | char(3) |  |  |  |  |  |
| WH100 | 正確倉別 | correct_warehouse | correct_wh |   | char(1) |  |  |  |  |  |
| WH300 | 正確儲位 | correct_storage_location | correct_location |   | char(8) |  |  |  |  |  |
| ICTID01 | 初盤儲位 | initial_inventory_storage_location | init_count_location |   | char(8) |  |  |  |  |  |
| ICTID02 | 複盤儲位 | recount_storage_location | recount_location |   | char(8) |  |  |  |  |  |
| ICTID03 | 調整人員 | adjustment_staff | adjust_staff |   | char(10) |  |  |  |  |  |
| ICTID04 | 調整日期時間 | adjustment_datetime | adjust_datetime |   | char(14) |  |  |  |  |  |
| ICTID05 | 調整狀態 | adjustment_status | adjust_status |   | char(3) |  |  |  |  |  |
| ICTID06 | 調整說明 | adjustment_description | adjust_note |   | varchar(254) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTID07 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
| id | 調整單箱明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| icti_id | 調整單序號 | adjustment_order_id | adjust_order_id |   | bigint(8) |  |  | Y |  |  |
