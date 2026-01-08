# CBEX
**中文名稱：** 客戶基本費用

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CBEX.CM00 |
| CBEX01 | 大條碼(元/張) | large_barcode_price | major_barcode_unit_price |   | float(8) |  |  |  |  |  |
| CBEX02 | 小條碼(元/張) | small_barcode_price | minor_barcode_unit_price |   | float(8) |  |  |  |  |  |
| CBEX03 | 封條紙(元/張) | seal_paper_price_per_sheet | seal_paper_unit_price |   | float(8) |  |  |  |  |  |
| CBEX04 | 封箱膠帶(元/條) | seal_tape_price_per_roll | seal_box_tape_unit_price |   | float(8) |  |  |  |  |  |
| CBEX05 | 防潮袋(元/個) | desiccant_price_per_unit | mbag_unit_price_piece |   | float(8) |  |  |  |  |  |
| CBEX06 | 乾燥劑(元/包) | desiccant_price_per_pack | desiccant_unit_price |   | float(8) |  |  |  |  |  |
| CBEX07 | 影印費(元/張) | photocopy_fee_per_page | photocopy_fee_per_page |   | float(8) |  |  |  |  |  |
| CBEX08 | 傳真費(元/張) | fax_fee_per_page | fax_fee_per_page |   | float(8) |  |  |  |  |  |
| CBEX09 | 銷毀外縣市到府合併(元/箱) | destruction_nonlocal_home_merge_fee_per_box | destroy_outcity_home_merge_fee_box |   | float(8) |  |  |  |  |  |
| CBEX10 | 銷毀倉庫專車(元/趟) | destruction_warehouse_special_vehicle_fee_per_trip | destroy_wh_truck_fee_trip |   | float(8) |  |  |  |  |  |
| CBEX11 | 銷毀到府專車(元/趟) | destruction_home_special_vehicle_fee_per_trip | destroy_home_truck_fee_trip |   | float(8) |  |  |  |  |  |
| CBEX12 | 銷毀倉庫合併(元/箱) | destruction_warehouse_merge_fee_per_box | destroy_wh_merge_fee_box |   | float(8) |  |  |  |  |  |
| CBEX13 | 銷毀大台北到府合併(元/箱) | tpe_box_disposal | taipei_destroy_home_price |   | float(8) |  |  |  |  |  |
| CBEX14 | 銷毀庫存專車基本箱數(箱) | destruction_inventory_special_vehicle_base_boxes | destroy_stock_truck_base_box_qty |   | float(8) |  |  |  |  |  |
| CBEX15 | 銷毀到府專車基本箱數(箱) | destruction_home_special_vehicle_base_boxes | destroy_home_truck_base_box_qty |   | float(8) |  |  |  |  |  |
| CBEX16 | 銷毀庫存專車超出費用(元/箱) | destruction_inventory_special_vehicle_extra_fee_per_box | destroy_stock_truck_excess_fee_box |   | float(8) |  |  |  |  |  |
| CBEX17 | 銷毀到府專車超出費用(元/箱) | destruction_home_special_vehicle_extra_fee_per_box | destroy_home_truck_excess_fee_box |   | float(8) |  |  |  |  |  |
| CBEX18 | 回收筒費(停用) | recycle_bin_fee_disabled | recycle_bin_fee_disabled |   | float(8) |  |  |  |  |  |
| CBEX19 | 箱裁碎費(停用) | box_shredding_fee_disabled | box_shred_fee_disabled |   | float(8) |  |  |  |  |  |
| CBEX20 | 銷毀袋(元/袋) | destruction_bag_fee_per_bag | destroy_bag_fee_per_bag |   | float(8) |  |  |  |  |  |
| CBEX21 | 現場調閱場地費(元/天) | onsite_retrieval_site_fee_per_day | onsite_review_site_fee_day |   | float(8) |  |  |  |  |  |
| CBEX22 | 大台北收銷毀袋單價(元/袋) | tpe_bag_unit_price | taipei_destroy_bag_price |   | float(8) |  |  |  |  |  |
| CBEX23 | 大台北收銷毀袋最低袋數 | tpe_bag_min_qty | taipei_destroy_bag_min |   | float(8) |  |  |  |  |  |
| CBEX24 | 大台北收銷毀袋基本費 | tpe_bag_basic | taipei_destroy_bag_fee |   | float(8) |  |  |  |  |  |
| CBEX25 | 外縣市收銷毀袋單價(元/袋) | out_of_town_destruction_bag_unit_price | outcity_destroy_bag_unit_price |   | float(8) |  |  |  |  |  |
| CBEX26 | 外縣市收銷毀袋最低袋數 | out_of_town_destruction_bag_min_count | outcity_destroy_bag_min_qty |   | float(8) |  |  |  |  |  |
| CBEX27 | 外縣市收銷毀袋基本費 | out_of_town_destruction_bag_base_fee | outcity_destroy_bag_base_fee |   | float(8) |  |  |  |  |  |
| id | 客戶基本費用序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cm_id | 客戶序號 | customer_id | cust_id |   | bigint(8) |  |  | Y | Y | Value：CM.id，Condition：CM.CM00=CBEX.CM00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
