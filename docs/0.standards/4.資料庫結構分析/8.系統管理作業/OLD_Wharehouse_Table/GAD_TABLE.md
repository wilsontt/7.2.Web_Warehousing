# GAD
**中文名稱：** 箱明細帳

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| GA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| GA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| GAD00 | 工作日期 | work_date | work_date |   | int(4) |  |  | Y |  |  |
| GAD01 | 前日結存 | previous_day_balance | prev_day_balance |   | float(8) |  |  |  |  |  |
| GAD02 | 本日結存 | today_balance | today_balance |   | float(8) |  |  |  |  |  |
| GAD03 | 取件數量一般件大台北地區 | taipei_normal_pickup_qty | ntp_pick_norm_qty |   | float(8) |  |  |  |  |  |
| GAD05 | 調閱數量一般件大台北地區 | taipei_normal_retrieval_qty | ntp_review_norm_qty |   | float(8) |  |  |  |  |  |
| GAD09 | 取件調閱費用大台北地區 | taipei_pickup_retrieval_fee | ntp_pick_fee |   | float(8) |  |  |  |  |  |
| GAD04 | 取件數量一般件外縣市地區 | pickup_quantity_normal_out_of_town_alt | pickup_qty_general_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD06 | 調閱數量一般件外縣市地區 | access_quantity_general_nonlocal_alt | review_qty_general_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD46 | 取件調閱費用外縣市地區 | pickup_retrieval_fee_out_of_town_alt | pickup_review_fee_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD07 | 自行取件數量 | self_pickup_quantity | self_pickup_qty |   | float(8) |  |  |  |  |  |
| GAD08 | 自行送倉數量 | self_delivery_total_items | self_send_item_qty |   | float(8) |  |  |  |  |  |
| GAD10 | 倉內銷毀數量 | internal_destruction_quantity | inwh_destroy_qty |   | float(8) |  |  |  |  |  |
| GAD11 | 倉內銷毀費用 | internal_destruction_fee | inwh_destroy_fee |   | float(8) |  |  |  |  |  |
| GAD12 | 倉外銷毀數量大台北地區 | taipei_external_destroy_qty | ntp_ext_destr_qty |   | float(8) |  |  |  |  |  |
| GAD13 | 倉外銷毀數量外縣市地區 | external_destruction_quantity_out_of_town_alt | outwh_destroy_outcity_qty_alt |   | float(8) |  |  |  |  |  |
| GAD14 | 倉外銷毀費用 | external_destruction_fee | outwh_destroy_fee |   | float(8) |  |  |  |  |  |
| GAD15 | 單件存倉費合計 | storage_fee_per_item_total | item_storage_fee_total |   | float(8) |  |  |  |  |  |
| GAD16 | 急件送倉數量大台北地區 | taipei_urgent_to_warehouse_qty | ntp_urgent_in_qty |   | float(8) |  |  |  |  |  |
| GAD18 | 急件調閱數量大台北地區 | taipei_urgent_retrieval_qty | ntp_urgent_qty |   | float(8) |  |  |  |  |  |
| GAD20 | 急件調閱費用大台北地區 | taipei_urgent_retrieval_fee | ntp_urgent_fee |   | float(8) |  |  |  |  |  |
| GAD17 | 急件送倉數量外縣市地區 | urgent_delivery_quantity_out_of_town_alt | urgent_pickup_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD19 | 急件調閱數量外縣市地區 | urgent_retrieval_quantity_out_of_town_alt | urgent_review_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD47 | 急件調閱費用外縣市地區 | urgent_retrieval_fee_out_of_town_alt | urgent_review_fee_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD21 | 現場調閱數量 | onsite_retrieval_quantity | onsite_review_qty |   | float(8) |  |  |  |  |  |
| GAD22 | 現場稽核數量 | onsite_audit_quantity | onsite_audit_qty |   | float(8) |  |  |  |  |  |
| GAD23 | 現場調閱費用 | onsite_retrieval_fee | onsite_review_fee |   | float(8) |  |  |  |  |  |
| GAD48 | 上下架數量 | shelving_quantity | move_qty |   | float(8) |  |  |  |  |  |
| GAD49 | 上下架費用 | shelving_fee | move_fee |   | float(8) |  |  |  |  |  |
| GAD24 | 膠帶數量大台北地區 | taipei_tape_qty | ntp_tape_qty |   | float(8) |  |  |  |  |  |
| GAD25 | 膠帶數量外縣市地區 | tape_quantity_nonlocal | tape_qty_outcity |   | float(8) |  |  |  |  |  |
| GAD26 | 膠帶費用 | tape_fee | tape_fee |   | float(8) |  |  |  |  |  |
| GAD27 | 條碼箱數量大台北地區 | taipei_barcode_box_qty | ntp_bcode_box_qty |   | float(8) |  |  |  |  |  |
| GAD28 | 條碼箱數量外縣市地區 | barcode_box_quantity_out_of_town_alt | barcode_box_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD29 | 條碼夾數量大台北地區 | taipei_barcode_folder_qty | ntp_bcode_folder_qty |   | float(8) |  |  |  |  |  |
| GAD30 | 條碼夾數量外縣市地區 | barcode_folder_quantity_out_of_town_alt | barcode_folder_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD31 | 條碼費用 | barcode_fee | barcode_fee |   | float(8) |  |  |  |  |  |
| GAD32 | 紙箱數量大台北地區 | taipei_carton_qty | ntp_carton_qty |   | float(8) |  |  |  |  |  |
| GAD33 | 紙箱數量外縣市地區 | carton_quantity_out_of_town_alt | carton_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD34 | 紙箱費用 | carton_fee | carton_fee |   | float(8) |  |  |  |  |  |
| GAD35 | 銷毀袋數量大台北地區 | taipei_destroy_bag_qty | ntp_destr_bag_qty |   | float(8) |  |  |  |  |  |
| GAD36 | 銷毀袋數量外縣市地區 | destruction_bag_quantity_nonlocal_alt | destroy_bag_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD37 | 銷毀袋捆數大台北地區 | taipei_destroy_bag_bundle_qty | ntp_destr_bag_bundle |   | float(8) |  |  |  |  |  |
| GAD38 | 銷毀袋捆數外縣市地區 | destruction_bag_bundle_count_nonlocal_alt | destroy_bag_bundle_outcity_alt |   | float(8) |  |  |  |  |  |
| GAD39 | 銷毀袋費用 | destruction_bag_fee | destroy_bag_fee |   | float(8) |  |  |  |  |  |
| GAD40 | 材料運送趟數大台北地區 | taipei_material_delivery_trips | ntp_trip_cnt |   | float(8) |  |  |  |  |  |
| GAD41 | 材料運送趟數外縣市地區 | material_transport_trips_out_of_town_alt | material_ship_trip_qty_outcity_region_alt |   | float(8) |  |  |  |  |  |
| GAD42 | 材料運送費用 | material_transport_fee | material_ship_fee |   | float(8) |  |  |  |  |  |
| GAD43 | 費用合計 | total_fee | fee_total |   | float(8) |  |  |  |  |  |
| GAD44 | 其他費用1 | other_fee_1 | other_fee1 |   | float(8) |  |  |  |  |  |
| GAD45 | 其他費用2 | other_fee_2 | other_fee2 |   | float(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 箱明細帳序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| ga_id | 總帳序號 | total_account_id | total_account_id |   | bigint(8) |  |  | Y |  |  |
