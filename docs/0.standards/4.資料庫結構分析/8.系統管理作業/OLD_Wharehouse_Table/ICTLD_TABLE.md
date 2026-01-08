# ICTLD
**中文名稱：** 轉籍箱號

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTL00 | 轉籍單號 | migration_order_number | migration_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 原客戶編號 | original_customer_no | orig_cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 原部門編號 | original_department_no | orig_dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 原箱號 | original_box_number | orig_box_no |   | char(17) |  |  | Y |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CAM10 | 庫存狀態 | inventory_status | stock_status |   | char(3) |  |  |  |  |  |
| CAM20 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| CAM22 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  |  |  |
| CAM31 | 原始進倉日期 | original_entry_date | orig_inwh_date |   | char(8) |  |  |  |  |  |
| CAM13 | 內容 | content | content |   | varchar(1024) |  |  |  |  |  |
| ICTLD01 | 新客戶編號 | new_customer_no | new_cust_code |   | char(5) |  |  |  |  |  |
| ICTLD02 | 新部門編號 | new_department_no | new_dept_code |   | char(4) |  |  |  |  |  |
| ICTLD03 | 新箱號 | new_box_number | new_box_no |   | char(17) |  |  |  |  |  |
| ICTLD04 | 更新狀態 | update_status | update_status |   | char(3) |  |  |  |  |  |
| ICTLD05 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
| ICTLD06 | 檢查狀態 | inspection_status | check_status |   | char(3) |  |  |  |  |  |
| ICTLD07 | 處理狀態 | process_status | proc_status |   | char(3) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 轉籍單箱明細 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ictl_id | 轉籍單序號 | migration_order_id | migration_order_id |   | bigint(8) |  |  | Y |  |  |
