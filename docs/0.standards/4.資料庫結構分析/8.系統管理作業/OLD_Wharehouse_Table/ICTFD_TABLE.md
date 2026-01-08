# ICTFD
**中文名稱：** 盤點箱子

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTF00 | 盤點單號 | stocktaking_order_number | stocktake_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| CAM10 | 目前狀態 | current_status | curr_status |   | char(3) |  |  |  |  |  |
| CAM20 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| WH100 | 目前倉別 | current_warehouse | curr_wh |   | char(1) |  |  |  |  |  |
| WH300 | 目前儲位 | current_storage_location | curr_loc |   | char(8) |  |  |  |  |  |
| ICTFD01 | 初盤人員 | initial_inventory_staff | init_count_staff |   | char(10) |  |  |  |  |  |
| ICTFD02 | 初盤日期時間 | initial_inventory_datetime | init_count_datetime |   | char(14) |  |  |  |  |  |
| ICTFD03 | 初盤儲位 | initial_inventory_storage_location | init_count_location |   | char(8) |  |  |  |  |  |
| ICTFD04 | 初盤狀態 | initial_inventory_status | init_count_status |   | char(3) |  |  |  |  |  |
| ICTFD05 | 初盤說明 | initial_inventory_description | init_count_note |   | varchar(254) |  |  |  |  |  |
| ICTFD06 | 複盤人員 | recount_staff | recount_staff |   | char(10) |  |  |  |  |  |
| ICTFD07 | 複盤日期時間 | recount_datetime | recount_datetime |   | char(14) |  |  |  |  |  |
| ICTFD08 | 複盤儲位 | recount_storage_location | recount_location |   | char(8) |  |  |  |  |  |
| ICTFD09 | 複盤狀態 | recount_status | recount_status |   | char(3) |  |  |  |  |  |
| ICTFD10 | 複盤說明 | recount_description | recount_note |   | varchar(254) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTFD11 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
| ICTFD12 | 初盤倉庫 | initial_inventory_warehouse | init_count_wh |   | char(1) |  |  |  |  |  |
| ICTFD13 | 複盤倉庫 | recount_warehouse | recount_wh |   | char(1) |  |  |  |  |  |
| ICTFD14 | 箱總件數 | box_total_item_quantity | box_total_item_qty |   | int(4) |  |  |  |  |  |
| ICTFD15 | 在倉件數 | in_storage_item_count | inwh_item_qty |   | int(4) |  |  |  |  |  |
| ICTFD16 | 借出件數 | borrowed_item_count | borrow_item_qty |   | int(4) |  |  |  |  |  |
| CAM11 | 進倉前狀態 | pre_inbound_status | inwh_before_status |   | char(3) |  |  |  |  |  |
| ICTFD17 | 差異處理 | discrepancy_handling | diff_proc |   | char(3) |  |  |  |  |  |
| ICTFD18 | 存放類型 | storage_type | storage_type |   | char(3) |  |  |  |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  |  |  |
| CAM13 | 內容 | content | content |   | varchar(1024) |  |  |  |  |  |
| CAM22 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  |  |  |
| CAM31 | 原始進倉日期 | original_entry_date | orig_inwh_date |   | char(8) |  |  |  |  |  |
| id | 盤點單箱明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ictf_id | 盤點單序號 | stocktaking_order_id | stocktake_order_id |   | bigint(8) |  |  | Y |  |  |
