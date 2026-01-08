# ICTFDD
**中文名稱：** 盤點物件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTF00 | 盤點單號 | stocktaking_order_number | stocktake_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| CAD07 | 目前狀態 | current_status | curr_status |   | char(3) |  |  |  |  |  |
| CAN00 | 目前箱號 | current_box_number | curr_box_no |   | char(17) |  |  |  |  |  |
| WH100 | 目前倉別 | current_warehouse | curr_wh |   | char(1) |  |  |  |  |  |
| WH300 | 目前儲位 | current_storage_location | curr_loc |   | char(8) |  |  |  |  |  |
| ICTFDD01 | 初盤人員 | initial_inventory_staff | init_count_staff |   | char(10) |  |  |  |  |  |
| ICTFDD02 | 初盤日期時間 | initial_inventory_datetime | init_count_datetime |   | char(14) |  |  |  |  |  |
| ICTFDD03 | 初盤儲位 | initial_inventory_storage_location | init_count_location |   | char(8) |  |  |  |  |  |
| ICTFDD04 | 初盤箱號 | initial_inventory_box_number | init_count_box_no |   | char(17) |  |  |  |  |  |
| ICTFDD05 | 初盤狀態 | initial_inventory_status | init_count_status |   | char(3) |  |  |  |  |  |
| ICTFDD06 | 初盤說明 | initial_inventory_description | init_count_note |   | varchar(254) |  |  |  |  |  |
| ICTFDD07 | 複盤人員 | recount_staff | recount_staff |   | char(10) |  |  |  |  |  |
| ICTFDD08 | 複盤日期時間 | recount_datetime | recount_datetime |   | char(14) |  |  |  |  |  |
| ICTFDD09 | 複盤儲位 | recount_storage_location | recount_location |   | char(8) |  |  |  |  |  |
| ICTFDD10 | 複盤箱號 | recount_box_number | recount_box_no |   | char(17) |  |  |  |  |  |
| ICTFDD11 | 複盤狀態 | recount_status | recount_status |   | char(3) |  |  |  |  |  |
| ICTFDD12 | 複盤說明 | recount_description | recount_note |   | varchar(254) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTFDD13 | 件識別碼 | item_guid | item_guid |   | varchar(40) |  |  |  |  |  |
| ICTFDD14 | 目前倉庫(reserved) | current_warehouse_reserved | curr_wh_reserved |   | char(1) |  |  |  |  |  |
| ICTFDD15 | 目前儲位(reserved | current_storage_location | curr_loc |   | char(8) |  |  |  |  |  |
| ICTFDD16 | 初盤倉庫 | initial_inventory_warehouse | init_count_wh |   | char(1) |  |  |  |  |  |
| ICTFDD17 | 複盤倉庫 | recount_warehouse | recount_wh |   | char(1) |  |  |  |  |  |
| CAD08 | 進出型式 | in_out_type | io_type |   | char(3) |  |  |  |  |  |
| CAD09 | 進倉前狀態 | pre_inbound_status | inwh_before_status |   | char(3) |  |  |  |  |  |
| CAD10 | 前次借出型式 | previous_borrowing_type | prev_borrow_type |   | char(3) |  |  |  |  |  |
| ICTFDD18 | 差異處理 | discrepancy_handling | diff_proc |   | char(3) |  |  |  |  |  |
| ICTFDD19 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| ICTFDD20 | 件序 | item_sequence | item_seq |   | char(20) |  |  |  |  |  |
| ICTFDD21 | 初盤對應箱號 | initial_inventory_related_box_number | init_count_ref_box_no |   | char(17) |  |  |  |  |  |
| ICTFDD22 | 複盤對應箱號 | recount_related_box_number | recount_ref_box_no |   | char(17) |  |  |  |  |  |
| ICTFDD23 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  |  |  |
| CAD11 | 內容 | content | content |   | varchar(512) |  |  |  |  |  |
| CAD17 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  |  |  |
| CAD27 | 原始進倉日期 | original_entry_date | orig_inwh_date |   | char(8) |  |  |  |  |  |
| id | 盤點單件明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| cad_id | 物件序號 | object_id | obj_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ictf_id | 盤點單序號 | stocktaking_order_id | stocktake_order_id |   | bigint(8) |  |  | Y |  |  |
| fst_chk_cam_id | 初盤箱號序號 | initial_inventory_box_number_id | init_count_box_id |   | bigint(8) |  |  |  |  |  |
| snd_chk_cam_id | 複盤箱號唯一識別碼 | recheck_box_uuid |  |   | bigint(8) |  |  |  |  |  |
