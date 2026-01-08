# GA
**中文名稱：** 總帳

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| GA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| GA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| GA03 | 公司銀行 | company_bank | company_bank |   | char(30) |  |  |  |  |  |
| GA04 | 地址 | address | address |   | varchar(80) |  |  |  |  |  |
| GA07 | 本月天數 | days_in_month | month_days |   | int(4) |  |  |  |  |  |
| GA06 | 上月結存 | last_month_balance | last_month_balance |   | float(8) |  |  |  |  |  |
| GA05 | 本月結存 | month_balance | month_balance |   | float(8) |  |  |  |  |  |
| GA08 | 本月未異動箱數 | month_unchanged_boxes | month_no_change_box_qty |   | float(8) |  |  |  |  |  |
| GA09 | 整月存倉費 | full_month_storage_fee | monthly_storage_fee |   | float(8) |  |  |  |  |  |
| GA10 | 異動存倉費 | change_storage_fee | change_storage_fee |   | float(8) |  |  |  |  |  |
| GA11 | 總計費用含稅 | total_fee_incl_tax | total_fee_incl_tax |   | float(8) |  |  |  |  |  |
| GA12 | 取件數量大台北地區 | taipei_pickup_qty | ntp_pick_qty |   | float(8) |  |  |  |  |  |
| GA14 | 調閱數量大台北地區 | taipei_retrieval_qty | ntp_review_qty |   | float(8) |  |  |  |  |  |
| GA18 | 取件調閱費用大台北地區 | taipei_pickup_retrieval_fee | ntp_pick_fee |   | float(8) |  |  |  |  |  |
| GA13 | 取件數量外縣市地區 | pickup_quantity_out_of_town_alt | pickup_qty_outcity |   | float(8) |  |  |  |  |  |
| GA15 | 調閱數量外縣市地區 | access_quantity_nonlocal_alt | review_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GA54 | 取件調閱費用外縣市地區 | pickup_retrieval_fee_out_of_town_alt | pickup_review_fee_outcity_alt |   | float(8) |  |  |  |  |  |
| GA16 | 自行取件數量 | self_pickup_quantity | self_pickup_qty |   | float(8) |  |  |  |  |  |
| GA17 | 自行送倉數量 | self_delivery_total_items | self_send_item_qty |   | float(8) |  |  |  |  |  |
| GA19 | 倉內銷毀數量 | internal_destruction_quantity | inwh_destroy_qty |   | float(8) |  |  |  |  |  |
| GA20 | 倉內銷毀費用 | internal_destruction_fee | inwh_destroy_fee |   | float(8) |  |  |  |  |  |
| GA21 | 倉外銷毀數量大台北地區 | taipei_external_destroy_qty | ntp_ext_destr_qty |   | float(8) |  |  |  |  |  |
| GA22 | 倉外銷毀數量外縣市地區 | external_destruction_quantity_out_of_town_alt | outwh_destroy_outcity_qty_alt |   | float(8) |  |  |  |  |  |
| GA23 | 倉外銷毀費用 | external_destruction_fee | outwh_destroy_fee |   | float(8) |  |  |  |  |  |
| GA24 | 單件存倉費合計 | storage_fee_per_item_total | item_storage_fee_total |   | float(8) |  |  |  |  |  |
| GA25 | 急件送倉數量大台北地區 | taipei_urgent_to_warehouse_qty | ntp_urgent_in_qty |   | float(8) |  |  |  |  |  |
| GA27 | 急件調閱數量大台北地區 | taipei_urgent_retrieval_qty | ntp_urgent_qty |   | float(8) |  |  |  |  |  |
| GA29 | 急件調閱費用大台北地區 | taipei_urgent_retrieval_fee | ntp_urgent_fee |   | float(8) |  |  |  |  |  |
| GA26 | 急件送倉數量外縣市地區 | urgent_delivery_quantity_out_of_town_alt | urgent_pickup_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GA28 | 急件調閱數量外縣市地區 | urgent_retrieval_quantity_out_of_town_alt | urgent_review_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GA55 | 急件調閱費用外縣市地區 | urgent_retrieval_fee_out_of_town_alt | urgent_review_fee_outcity_alt |   | float(8) |  |  |  |  |  |
| GA30 | 現場調閱數量 | onsite_retrieval_quantity | onsite_review_qty |   | float(8) |  |  |  |  |  |
| GA31 | 現場稽核數量 | onsite_audit_quantity | onsite_audit_qty |   | float(8) |  |  |  |  |  |
| GA32 | 現場調閱費用 | onsite_retrieval_fee | onsite_review_fee |   | float(8) |  |  |  |  |  |
| GA56 | 上下架數量 | shelving_quantity | move_qty |   | float(8) |  |  |  |  |  |
| GA57 | 上下架費用 | shelving_fee | move_fee |   | float(8) |  |  |  |  |  |
| GA33 | 膠帶數量大台北地區 | taipei_tape_qty | ntp_tape_qty |   | float(8) |  |  |  |  |  |
| GA34 | 膠帶數量外縣市地區 | tape_quantity_nonlocal | tape_qty_outcity |   | float(8) |  |  |  |  |  |
| GA35 | 膠帶費用 | tape_fee | tape_fee |   | float(8) |  |  |  |  |  |
| GA36 | 條碼箱數量大台北地區 | taipei_barcode_box_qty | ntp_bcode_box_qty |   | float(8) |  |  |  |  |  |
| GA37 | 條碼箱數量外縣市地區 | barcode_box_quantity_out_of_town_alt | barcode_box_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GA38 | 條碼夾數量大台北地區 | taipei_barcode_folder_qty | ntp_bcode_folder_qty |   | float(8) |  |  |  |  |  |
| GA39 | 條碼夾數量外縣市地區 | barcode_folder_quantity_out_of_town_alt | barcode_folder_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GA40 | 條碼費用 | barcode_fee | barcode_fee |   | float(8) |  |  |  |  |  |
| GA41 | 紙箱數量大台北地區 | taipei_carton_qty | ntp_carton_qty |   | float(8) |  |  |  |  |  |
| GA42 | 紙箱數量外縣市地區 | carton_quantity_out_of_town_alt | carton_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GA43 | 紙箱費用 | carton_fee | carton_fee |   | float(8) |  |  |  |  |  |
| GA44 | 銷毀袋數量大台北地區 | taipei_destroy_bag_qty | ntp_destr_bag_qty |   | float(8) |  |  |  |  |  |
| GA45 | 銷毀袋數量外縣市地區 | destruction_bag_quantity_nonlocal_alt | destroy_bag_qty_outcity_alt |   | float(8) |  |  |  |  |  |
| GA46 | 銷毀袋捆數大台北地區 | taipei_destroy_bag_bundle_qty | ntp_destr_bag_bundle |   | float(8) |  |  |  |  |  |
| GA47 | 銷毀袋捆數外縣市地區 | destruction_bag_bundle_count_nonlocal_alt | destroy_bag_bundle_outcity_alt |   | float(8) |  |  |  |  |  |
| GA48 | 銷毀袋費用 | destruction_bag_fee | destroy_bag_fee |   | float(8) |  |  |  |  |  |
| GA49 | 材料運送趟數大台北地區 | taipei_material_delivery_trips | ntp_trip_cnt |   | float(8) |  |  |  |  |  |
| GA50 | 材料運送趟數外縣市地區 | material_transport_trips_out_of_town_alt | material_ship_trip_qty_outcity_region_alt |   | float(8) |  |  |  |  |  |
| GA51 | 材料運送費用 | material_transport_fee | material_ship_fee |   | float(8) |  |  |  |  |  |
| GA52 | 其他費用1 | other_fee_1 | other_fee1 |   | float(8) |  |  |  |  |  |
| GA53 | 其他費用2 | other_fee_2 | other_fee2 |   | float(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 總帳序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
