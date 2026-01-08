# ICTDD
**中文名稱：** 箱子移入明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTD00 | 移入單號 | move_in_order_number | move_in_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| WH100 | 原倉庫編號 | original_warehouse_no | orig_wh_no |   | char(1) |  |  |  |  |  |
| WH300 | 原儲位編號 | original_location_no | orig_location_code |   | char(8) |  |  |  |  |  |
| ICTDD01 | 新倉庫編號 | new_warehouse_no | new_wh_code |   | char(1) |  |  |  |  |  |
| ICTDD02 | 新儲位編號 | new_location_no | new_location_code |   | char(8) |  |  |  |  |  |
| ICTDD03 | 已上架 | status_shelved | is_loaded |   | char(1) |  |  |  |  |  |
| ICTDD04 | 已稽核 | status_audited | is_audited |   | char(1) |  |  |  |  |  |
| ICTDD05 | 備註 | remarks | remark |   | varchar(512) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTDD06 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| ICTDD07 | 上架人員 | shelving_in_staff | load_staff |   | char(10) |  |  |  |  |  |
| ICTDD08 | 上架日期時間 | shelving_in_datetime | load_datetime |   | char(14) |  |  |  |  |  |
| ICTDD09 | 上架方式 | shelving_in_method | load_method |   | char(3) |  |  |  |  |  |
| ICTDD10 | 稽核人員 | audit_staff | audit_staff |   | char(10) |  |  |  |  |  |
| ICTDD11 | 稽核日期時間 | audit_datetime | audit_datetime |   | char(14) |  |  |  |  |  |
| ICTDD12 | 稽核方式 | audit_method | audit_method |   | char(3) |  |  |  |  |  |
| ICTDD13 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
| ICTDD16 | 轉出單號 | transfer_out_order_number | transfer_out_order_no |   | char(10) |  |  |  |  |  |
| ICTDD17 | 轉入單號 | transfer_in_order_number | transfer_in_order_no |   | char(10) |  |  |  |  |  |
| ICTDD18 | 原棧板編號 | original_pallet_no | orig_pallet_no |   | char(20) |  |  |  |  |  |
| ICTDD19 | 原木箱編號 | original_wooden_box_no | orig_wood_box_no |   | char(20) |  |  |  |  |  |
| ICTDD20 | 新棧板編號 | new_pallet_no | new_pallet_code |   | char(20) |  |  |  |  |  |
| ICTDD21 | 新木箱編號 | new_wooden_box_no | new_wood_box_no |   | char(20) |  |  |  |  |  |
| ICTDD22 | 存放類型 | storage_type | storage_type |   | char(3) |  |  |  |  |  |
| id | 移入單明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ictd_id | 移入單序號 | move_in_order_id | move_in_order_id |   | bigint(8) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  |  |  |
