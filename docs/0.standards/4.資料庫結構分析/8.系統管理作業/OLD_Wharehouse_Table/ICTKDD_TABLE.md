# ICTKDD
**中文名稱：** 異動物件內容

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTK00 | 異動單號 | change_order_number | change_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CTM00 | 原組別編號 | original_team_no | orig_team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 原成本中心 | original_cost_center_no | orig_cost_center_no |   | char(10) |  |  |  |  |  |
| CAD15 | 原對應箱號 | original_related_box_number | orig_ref_box_no |   | char(17) |  |  |  |  |  |
| CAD36 | 原件序 | original_item_seq | orig_item_seq |   | char(20) |  |  |  |  |  |
| CAD12 | 原預定銷毀日 | original_scheduled_destruction_date | orig_plan_destroy_date |   | char(8) |  |  |  |  |  |
| CAD17 | 原原始進倉人 | original_original_entry_staff | orig_orig_inwh_staff |   | char(30) |  |  |  |  |  |
| CAD27 | 原原始進倉日期 | original_original_entry_date | orig_orig_inwh_date |   | char(8) |  |  |  |  |  |
| CAD37 | 原永不銷毀原因 | original_never_destroy_reason | orig_never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| CAD38 | 原書面簽核主管 | original_document_sign_manager | orig_doc_sign_mgr |   | char(30) |  |  |  |  |  |
| CAD34 | 原進倉類型 | original_entry_type | orig_inwh_type |   | char(3) |  |  |  |  |  |
| CAD11 | 原內容 | original_content | orig_content |   | varchar(512) |  |  |  |  |  |
| ICTKDD01 | 新組別編號 | new_team_no | new_team_no |   | char(10) |  |  |  |  |  |
| ICTKDD02 | 新成本中心 | new_cost_center | new_cost_center |   | char(10) |  |  |  |  |  |
| ICTKDD03 | 新對應箱號 | new_related_box_number | new_ref_box_no |   | char(17) |  |  |  |  |  |
| ICTKDD04 | 新件序 | new_item_seq | new_item_seq |   | char(20) |  |  |  |  |  |
| ICTKDD05 | 新預定銷毀日 | new_scheduled_destruction_date | new_plan_destroy_date |   | char(10) |  |  |  |  |  |
| ICTKDD06 | 新原始進倉人 | new_original_entry_staff | new_orig_inwh_staff |   | char(30) |  |  |  |  |  |
| ICTKDD07 | 新原始進倉日期 | new_original_entry_date | new_orig_inwh_date |   | char(10) |  |  |  |  |  |
| ICTKDD08 | 新永不銷毀原因 | new_never_destroy_reason | new_never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| ICTKDD09 | 新書面審核主管 | new_document_review_manager | new_doc_review_mgr |   | char(30) |  |  |  |  |  |
| ICTKDD10 | 新進倉類型 | new_entry_type | new_inwh_type |   | char(3) |  |  |  |  |  |
| ICTKDD11 | 新內容 | new_content | new_content |   | varchar(512) |  |  |  |  |  |
| ICTKDD12 | 處理狀態 | process_status | proc_status |   | char(3) |  |  |  |  |  |
| ICTKDD13 | 件識別碼 | item_guid | item_guid |   | char(40) |  |  |  |  |  |
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
| ictk_id | 異動單序號 | change_order_id | change_order_id |   | bigint(8) |  |  | Y |  |  |
