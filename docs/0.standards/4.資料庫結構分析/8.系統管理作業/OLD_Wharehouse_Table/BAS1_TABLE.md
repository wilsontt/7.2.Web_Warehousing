# BAS1
**中文名稱：** 基本費用

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| BAS100 | 序號 | serial_number | seq_no |   | float(8) |  |  | Y |  |  |
| BAS101 | 大條碼(元/張) | large_barcode_price | major_barcode_unit_price |   | float(8) |  |  |  |  |  |
| BAS102 | 小條碼(元/張) | small_barcode_price | minor_barcode_unit_price |   | float(8) |  |  |  |  |  |
| BAS103 | 封條紙(元/張) | seal_paper_price_per_sheet | seal_paper_unit_price |   | float(8) |  |  |  |  |  |
| BAS104 | 封箱膠帶(元/條) | seal_tape_price_per_roll | seal_box_tape_unit_price |   | float(8) |  |  |  |  |  |
| BAS105 | 防潮袋(元/袋) | desiccant_price_per_bag | mbag_unit_price_bag |   | float(8) |  |  |  |  |  |
| BAS106 | 乾燥劑(元/包) | desiccant_price_per_pack | desiccant_unit_price |   | float(8) |  |  |  |  |  |
| BAS107 | 影印費(元/張) | photocopy_fee_per_page | photocopy_fee_per_page |   | float(8) |  |  |  |  |  |
| BAS108 | 傳真費(元/張) | fax_fee_per_page | fax_fee_per_page |   | float(8) |  |  |  |  |  |
| BAS109 | 銷毀外縣市到府合併(元/箱) | destruction_nonlocal_home_merge_fee_per_box | destroy_outcity_home_merge_fee_box |   | float(8) |  |  |  |  |  |
| BAS110 | 銷毀倉庫專車(元/趟) | destruction_warehouse_special_vehicle_fee_per_trip | destroy_wh_truck_fee_trip |   | float(8) |  |  |  |  |  |
| BAS111 | 銷毀到府專車(元/趟) | destruction_home_special_vehicle_fee_per_trip | destroy_home_truck_fee_trip |   | float(8) |  |  |  |  |  |
| BAS112 | 銷毀倉庫合併(元/箱) | destruction_warehouse_merge_fee_per_box | destroy_wh_merge_fee_box |   | float(8) |  |  |  |  |  |
| BAS113 | 銷毀大台北到府合併(元/箱) | taipei_destroy_box_merge_price | tpe_destr_home_merge_fee |   | float(8) |  |  |  |  |  |
| BAS114 | 銷毀倉庫專車基本箱數(箱) | destruction_warehouse_special_vehicle_base_boxes | destroy_wh_truck_base_box_qty |   | float(8) |  |  |  |  |  |
| BAS115 | 銷毀到府專車基本箱數(箱) | destruction_home_special_vehicle_base_boxes | destroy_home_truck_base_box_qty |   | float(8) |  |  |  |  |  |
| BAS116 | 銷毀倉庫專車超出費用(元/箱) | destruction_warehouse_special_vehicle_extra_fee_per_box | destroy_wh_truck_excess_fee_box |   | float(8) |  |  |  |  |  |
| BAS117 | 銷毀倉到府車超出費用(元/箱) | destruction_warehouse_home_vehicle_extra_fee_per_box | destroy_wh_home_truck_excess_fee_box |   | float(8) |  |  |  |  |  |
| BAS118 | 銷毀袋(元/袋) | destruction_bag_fee_per_bag | destroy_bag_fee_per_bag |   | float(8) |  |  |  |  |  |
| BAS119 | 現場調閱場地費(元/天) | onsite_retrieval_site_fee_per_day | onsite_review_site_fee_day |   | float(8) |  |  |  |  |  |
| BAS120 | 大台北收銷毀袋單價(元/袋) | taipei_destroy_bag_unit_price | tpe_destr_bag_price |   | float(8) |  |  |  |  |  |
| BAS121 | 大台北收銷毀袋最低袋數 | taipei_destroy_bag_min_bags | tpe_destr_bag_min_qty |   | float(8) |  |  |  |  |  |
| BAS122 | 大台北收銷毀袋基本費 | taipei_destroy_bag_base_fee | tpe_destr_bag_fee |   | float(8) |  |  |  |  |  |
| BAS123 | 外縣市收銷毀袋單價(元/袋) | out_of_town_destruction_bag_unit_price | outcity_destroy_bag_unit_price |   | float(8) |  |  |  |  |  |
| BAS124 | 外縣市收銷毀袋最低袋數 | out_of_town_destruction_bag_min_count | outcity_destroy_bag_min_qty |   | float(8) |  |  |  |  |  |
| BAS125 | 外縣市收銷毀袋基本費 | out_of_town_destruction_bag_base_fee | outcity_destroy_bag_base_fee |   | float(8) |  |  |  |  |  |
| id | 基本費用序號 | basic_fee_id | base_fee_id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
