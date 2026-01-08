# ICTCD
**中文名稱：** 移出箱子明細

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTC00 | 移出單號 | move_out_order_number | move_out_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| ICTCD01 | 備註 | remarks | remark |   | varchar(512) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTCD02 | 已下架 | status_unshelved | is_unloaded |   | char(1) |  |  |  |  |  |
| ICTCD03 | 已稽核 | status_audited | is_audited |   | char(1) |  |  |  |  |  |
| ICTCD04 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| ICTCD05 | 下架人員 | unshelving_staff | unload_staff |   | char(10) |  |  |  |  |  |
| ICTCD06 | 下架日期時間 | unshelving_datetime | unload_datetime |   | char(14) |  |  |  |  |  |
| ICTCD07 | 下架方式 | unshelving_method | unload_method |   | char(3) |  |  |  |  |  |
| ICTCD08 | 稽核人員 | audit_staff | audit_staff |   | char(10) |  |  |  |  |  |
| ICTCD09 | 稽核日期時間 | audit_datetime | audit_datetime |   | char(14) |  |  |  |  |  |
| ICTCD10 | 稽核方式 | audit_method | audit_method |   | char(3) |  |  |  |  |  |
| ICTCD11 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
| ICTCD12 | 儲區類別 | storage_area_category | zone_category |   | char(3) |  |  |  |  |  |
| ICTCD13 | 轉出單號 | transfer_out_order_number | transfer_out_order_no |   | char(10) |  |  |  |  |  |
| ICTCD14 | 轉入單號 | transfer_in_order_number | transfer_in_order_no |   | char(10) |  |  |  |  |  |
| ICTCD15 | 棧板編號 | pallet_no | pallet_code |   | char(20) |  |  |  |  |  |
| ICTCD16 | 木箱編號 | wooden_box_no | wood_box_no |   | char(20) |  |  |  |  |  |
| ICTCD17 | 存放類型 | storage_type | storage_type |   | char(3) |  |  |  |  |  |
| id | 移出單明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ictc_id | 移出單序號 | move_out_order_id | move_out_order_id |   | bigint(8) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  |  |  |
