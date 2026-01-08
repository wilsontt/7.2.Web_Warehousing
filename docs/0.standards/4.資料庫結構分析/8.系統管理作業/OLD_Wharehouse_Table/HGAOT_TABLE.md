# HGAOT
**中文名稱：** 匯豐其他費用

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| HGA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| HGA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| HGAOT00 | 工作日期 | work_date | work_date |   | int(4) |  |  | Y |  |  |
| HGAOT01 | 膠帶數量 | tape_quantity | tape_qty |   | float(8) |  |  |  |  |  |
| HGAOT02 | 膠帶費用 | tape_fee | tape_fee |   | float(8) |  |  |  |  |  |
| HGAOT03 | 箱條碼數量 | box_barcode_quantity | box_barcode_qty |   | float(8) |  |  |  |  |  |
| HGAOT04 | 箱條碼費用 | box_barcode_fee | box_barcode_fee |   | float(8) |  |  |  |  |  |
| HGAOT05 | 件條碼數量 | item_barcode_quantity | item_barcode_qty |   | float(8) |  |  |  |  |  |
| HGAOT06 | 件條碼費用 | item_barcode_fee | item_barcode_fee |   | float(8) |  |  |  |  |  |
| HGAOT07 | 銷毀袋數量 | destruction_bag_quantity | destroy_bag_qty |   | float(8) |  |  |  |  |  |
| HGAOT08 | 銷毀袋費用 | destruction_bag_fee | destroy_bag_fee |   | float(8) |  |  |  |  |  |
| HGAOT09 | 防潮袋袋數 | desiccant_bag_quantity | mbag_bag_qty |   | float(8) |  |  |  |  |  |
| HGAOT10 | 防潮袋費用 | desiccant_fee | mbag_fee |   | float(8) |  |  |  |  |  |
| HGAOT11 | 乾燥劑包數 | desiccant_pack_count | desiccant_bag_qty |   | float(8) |  |  |  |  |  |
| HGAOT12 | 乾燥劑費用 | desiccant_fee | desiccant_fee |   | float(8) |  |  |  |  |  |
| HGAOT13 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | float(8) |  |  |  |  |  |
| HGAOT14 | 影印費用 | photocopy_fee | photocopy_fee |   | float(8) |  |  |  |  |  |
| HGAOT15 | 傳真張數 | fax_page_count | fax_page_qty |   | float(8) |  |  |  |  |  |
| HGAOT16 | 傳真費用 | fax_fee | fax_fee |   | float(8) |  |  |  |  |  |
| HGAOT17 | 大台北材料運送數量 | taipei_material_transport_qty | tpe_mat_trans_qty |   | float(8) |  |  |  |  |  |
| HGAOT18 | 大台北材料運送費用 | taipei_material_transport_fee | tpe_mat_trans_fee |   | float(8) |  |  |  |  |  |
| HGAOT19 | 外縣市材料運送數量 | out_of_town_material_transport_quantity | outcity_material_ship_qty |   | float(8) |  |  |  |  |  |
| HGAOT20 | 外縣市材料運送費用 | out_of_town_material_transport_fee | outcity_material_ship_fee |   | float(8) |  |  |  |  |  |
| HGAOT21 | 倉庫專車銷毀趟數 | warehouse_shuttle_destruction_trips | wh_express_destroy_trip_qty |   | float(8) |  |  |  |  |  |
| HGAOT22 | 倉庫專車銷毀費用 | warehouse_shuttle_destruction_fee | wh_express_destroy_fee |   | float(8) |  |  |  |  |  |
| HGAOT23 | 大台北到府專車銷毀趟數 | taipei_home_express_destroy_trips | tpe_home_truck_qty |   | float(8) |  |  |  |  |  |
| HGAOT24 | 大台北到府專車銷毀費用 | taipei_home_express_destroy_fee | tpe_home_truck_fee |   | float(8) |  |  |  |  |  |
| HGAOT25 | 外縣市到府專車銷毀趟數 | out_of_town_home_exclusive_destruction_trips | outcity_home_express_destroy_trip_qty |   | float(8) |  |  |  |  |  |
| HGAOT26 | 外縣市到府專車銷毀費用 | out_of_town_home_exclusive_destruction_fee | outcity_home_express_destroy_fee |   | float(8) |  |  |  |  |  |
| HGAOT27 | 大台北到府合併銷毀箱數 | taipei_home_merge_destroy_boxes | tpe_home_merge_qty |   | float(8) |  |  |  |  |  |
| HGAOT28 | 大台北到府合併銷毀費用 | taipei_home_merge_destroy_fee | tpe_home_merge_fee |   | float(8) |  |  |  |  |  |
| HGAOT29 | 外縣市到府合併銷毀箱數 | out_of_town_home_merge_destruction_boxes | outcity_home_merge_destroy_box_qty |   | float(8) |  |  |  |  |  |
| HGAOT30 | 外縣市到府合併銷毀費用 | out_of_town_home_merge_destruction_fee | outcity_home_merge_destroy_fee |   | float(8) |  |  |  |  |  |
| HGAOT31 | 其他費用一 | other_fee_one | other_fee_a |   | float(8) |  |  |  |  |  |
| HGAOT32 | 其他費用二 | other_fee_two | other_fee_b |   | float(8) |  |  |  |  |  |
| HGAOT33 | 空箱數量 | empty_box_quantity | empty_box_qty |   | float(8) |  |  |  |  |  |
| HGAOT34 | 空箱費用 | empty_box_fee | empty_box_fee |   | float(8) |  |  |  |  |  |
| HGAOT35 | 大台北收銷毀袋數 | taipei_destroy_bag_count | tpe_destr_bag_qty |   | float(8) |  |  |  |  |  |
| HGAOT36 | 大台北收銷毀袋費 | taipei_destroy_bag_fee | tpe_destr_bag_fee |   | float(8) |  |  |  |  |  |
| HGAOT37 | 外縣市收銷毀袋數 | out_of_town_destruction_bag_count | outcity_destroy_bag_qty |   | float(8) |  |  |  |  |  |
| HGAOT38 | 外縣市收銷毀袋費 | out_of_town_destruction_bag_fee | outcity_destroy_bag_fee |   | float(8) |  |  |  |  |  |
| id | 其他費用日結序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| hga_id | 總帳序號 | total_account_id | total_account_id |   | bigint(8) |  |  | Y |  |  |
