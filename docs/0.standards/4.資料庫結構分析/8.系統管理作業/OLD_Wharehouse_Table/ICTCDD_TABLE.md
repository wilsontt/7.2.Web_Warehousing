# ICTCDD
**中文名稱：** 物件移出明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTC00 | 移出單號 | move_out_order_number | move_out_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| CAD15 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| CAD36 | 件序 | item_sequence | item_seq |   | char(20) |  |  |  |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| ICTCDD01 | 備註 | remarks | remark |   | varchar(512) |  |  |  |  |  |
| CAM45 | 箱識別碼 | box_guid | box_guid |   | char(40) |  |  |  |  |  |
| CAD45 | 件識別碼 | item_guid | item_guid |   | char(40) |  |  |  |  |  |
| ICTCDD02 | 已下架 | status_unshelved | is_unloaded |   | char(1) |  |  |  |  |  |
| ICTCDD03 | 已稽核 | status_audited | is_audited |   | char(1) |  |  |  |  |  |
| ICTCDD04 | 下架人員 | unshelving_staff | unload_staff |   | char(10) |  |  |  |  |  |
| ICTCDD05 | 下架日期時間 | unshelving_datetime | unload_datetime |   | char(14) |  |  |  |  |  |
| ICTCDD06 | 下架方式 | unshelving_method | unload_method |   | char(3) |  |  |  |  |  |
| ICTCDD07 | 稽核人員 | audit_staff | audit_staff |   | char(10) |  |  |  |  |  |
| ICTCDD08 | 稽核日期時間 | audit_datetime | audit_datetime |   | char(14) |  |  |  |  |  |
| ICTCDD09 | 稽核方式 | audit_method | audit_method |   | char(3) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTCDD10 | 轉出單號 | transfer_out_order_number | transfer_out_order_no |   | char(10) |  |  |  |  |  |
| ICTCDD11 | 轉入單號 | transfer_in_order_number | transfer_in_order_no |   | char(10) |  |  |  |  |  |
| ICTCDD12 | 棧板編號 | pallet_no | pallet_code |   | char(20) |  |  |  |  |  |
| ICTCDD13 | 木箱編號 | wooden_box_no | wood_box_no |   | char(20) |  |  |  |  |  |
| id | 移出單明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| cad_id | 物件序號 | object_id | obj_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ictc_id | 移出單序號 | move_out_order_id | move_out_order_id |   | bigint(8) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  |  |  |
