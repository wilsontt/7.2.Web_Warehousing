# ICTEDD
**中文名稱：** 異動物件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTE00 | 異動單號 | change_order_number | change_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 原客戶編號 | original_customer_no | orig_cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 原部門編號 | original_department_no | orig_dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 原箱號 | original_box_number | orig_box_no |   | char(17) |  |  | Y |  |  |
| OBJ00 | 原物件編號 | original_object_no | orig_obj_no |   | char(20) |  |  | Y |  |  |
| CAD15 | 原對應箱號 | original_related_box_number | orig_ref_box_no |   | char(17) |  |  |  |  |  |
| CAD36 | 原件序 | original_item_seq | orig_item_seq |   | char(20) |  |  |  |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CTM00 | 原組別編號 | original_team_no | orig_team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 原成本中心 | original_cost_center_no | orig_cost_center_no |   | char(10) |  |  |  |  |  |
| CAD16 | 原計價成本中心 | original_billing_cost_center_no | orig_billing_cost_center_no |   | char(10) |  |  |  |  |  |
| CAD12 | 原預定銷毀日 | original_scheduled_destruction_date | orig_plan_destroy_date |   | char(8) |  |  |  |  |  |
| CAD17 | 原原始進倉人 | original_original_entry_staff | orig_orig_inwh_staff |   | char(30) |  |  |  |  |  |
| CAD27 | 原原始進倉日期 | original_original_entry_date | orig_orig_inwh_date |   | char(8) |  |  |  |  |  |
| CAD37 | 原永不銷毀原因 | original_never_destroy_reason | orig_never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| CAD34 | 原進倉類型 | original_entry_type | orig_inwh_type |   | char(3) |  |  |  |  |  |
| CAD11 | 原內容 | original_content | orig_content |   | varchar(512) |  |  |  |  |  |
| ICTEDD01 | 新客戶編號 | new_customer_no | new_cust_code |   | char(5) |  |  |  |  |  |
| ICTEDD02 | 新部門編號 | new_department_no | new_dept_code |   | char(4) |  |  |  |  |  |
| ICTEDD03 | 新箱號 | new_box_number | new_box_no |   | char(17) |  |  |  |  |  |
| ICTEDD04 | 新物件編號 | new_object_no | new_obj_code |   | char(20) |  |  |  |  |  |
| ICTEDD05 | 新對應箱號 | new_related_box_number | new_ref_box_no |   | char(17) |  |  |  |  |  |
| ICTEDD06 | 新件序 | new_item_seq | new_item_seq |   | char(20) |  |  |  |  |  |
| ICTEDD07 | 新組別編號 | new_team_no | new_team_no |   | char(10) |  |  |  |  |  |
| ICTEDD08 | 新成本中心 | new_cost_center | new_cost_center |   | char(10) |  |  |  |  |  |
| ICTEDD09 | 新計價成本中心 | new_billing_cost_center | new_billing_cost_center |   | char(10) |  |  |  |  |  |
| ICTEDD10 | 新預定銷毀日 | new_scheduled_destruction_date | new_plan_destroy_date |   | char(8) |  |  |  |  |  |
| ICTEDD11 | 新原始進倉人 | new_original_entry_staff | new_orig_inwh_staff |   | char(30) |  |  |  |  |  |
| ICTEDD12 | 新原始進倉日期 | new_original_entry_date | new_orig_inwh_date |   | char(8) |  |  |  |  |  |
| ICTEDD13 | 新永不銷毀原因 | new_never_destroy_reason | new_never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| ICTEDD14 | 新進倉類型 | new_entry_type | new_inwh_type |   | char(3) |  |  |  |  |  |
| ICTEDD15 | 新內容 | new_content | new_content |   | varchar(512) |  |  |  |  |  |
| ICTEDD16 | 處理狀態 | process_status | proc_status |   | char(3) |  |  |  |  |  |
| ICTEDD17 | 件識別碼 | item_guid | item_guid |   | char(40) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 異動單件明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| cad_id | 物件序號 | object_id | obj_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| icte_id | 異動單序號 | change_order_id | change_order_id |   | bigint(8) |  |  | Y |  |  |
