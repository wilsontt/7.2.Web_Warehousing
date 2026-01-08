# HGA
**中文名稱：** 匯豐總帳

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| HGA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| HGA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| HGA03 | 統一編號 | tax_no_number | uniform_code |   | char(8) |  |  |  |  |  |
| HGA04 | 公司銀行 | company_bank | company_bank |   | char(30) |  |  |  |  |  |
| HGA05 | 地址 | address | address |   | varchar(80) |  |  |  |  |  |
| HGA06 | 本月天數 | days_in_month | month_days |   | int(4) |  |  |  |  |  |
| HGA07 | 上月結存箱數 | last_month_balance_boxes | last_month_balance_box_qty |   | float(8) |  |  |  |  |  |
| HGA08 | 本月結存箱數 | month_balance_boxes | month_balance_box_qty |   | float(8) |  |  |  |  |  |
| HGA09 | 上月結存件數 | last_month_balance_items | last_month_balance_item_qty |   | float(8) |  |  |  |  |  |
| HGA10 | 本月結存件數 | month_balance_items | month_balance_item_qty |   | float(8) |  |  |  |  |  |
| HGA11 | 總計費用含稅 | total_fee_incl_tax | total_fee_incl_tax |   | float(8) |  |  |  |  |  |
| HGA12 | 存倉費 | warehouse_fee | storage_fee |   | float(8) |  |  |  |  |  |
| HGA13 | 一般件大台北送倉箱數 | normal_taipei_store_boxes | tpe_norm_send_box_qty |   | float(8) |  |  |  |  |  |
| HGA14 | 一般件大台北調箱箱數 | normal_taipei_transfer_boxes | tpe_norm_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGA15 | 一般件大台北調送箱費用 | normal_taipei_transfer_box_fee | tpe_norm_adj_box_fee |   | float(8) |  |  |  |  |  |
| HGA16 | 一般件外縣市送倉箱數 | normal_box_out_of_town_delivery_quantity | gen_outcity_send_box_qty |   | float(8) |  |  |  |  |  |
| HGA17 | 一般件外縣市調箱箱數 | normal_box_out_of_town_retrieval_quantity | gen_outcity_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGA18 | 一般件外縣市調送箱費用 | normal_box_out_of_town_retrieval_fee | gen_outcity_adj_box_fee |   | float(8) |  |  |  |  |  |
| HGA19 | 急件大台北送倉箱數 | urgent_taipei_store_boxes | tpe_urgent_send_box_qty |   | float(8) |  |  |  |  |  |
| HGA20 | 急件大台北調箱箱數 | urgent_taipei_transfer_boxes | tpe_urgent_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGA21 | 急件大台北費用 | urgent_taipei_fee | tpe_urgent_fee |   | float(8) |  |  |  |  |  |
| HGA22 | 急件外縣市送倉箱數 | urgent_out_of_town_boxes | urgent_outcity_send_box_qty |   | float(8) |  |  |  |  |  |
| HGA23 | 急件外縣市調箱箱數 | urgent_out_of_town_retrieval_boxes | urgent_outcity_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGA24 | 急件外縣市費用 | urgent_out_of_town_fee | urgent_outcity_fee |   | float(8) |  |  |  |  |  |
| HGA25 | 一般件大台北送倉件數 | normal_taipei_store_items_objects | tpe_norm_send_qty |   | float(8) |  |  |  |  |  |
| HGA26 | 一般件大台北送倉件裝箱數 | normal_taipei_store_packed_items_boxes | tpe_norm_send_pack_qty |   | float(8) |  |  |  |  |  |
| HGA27 | 一般件大台北調件件數 | normal_taipei_transfer_items_objects | tpe_norm_adj_qty |   | float(8) |  |  |  |  |  |
| HGA28 | 一般件大台北調件裝箱數 | normal_taipei_transfer_packed_items_boxes | tpe_norm_adj_pack_qty |   | float(8) |  |  |  |  |  |
| HGA29 | 一般件大台北調送件費用 | normal_taipei_transfer_item_fee | tpe_norm_adj_fee |   | float(8) |  |  |  |  |  |
| HGA30 | 一般件外縣市送倉件數 | normal_item_out_of_town_delivery_quantity | gen_outcity_send_item_qty |   | float(8) |  |  |  |  |  |
| HGA31 | 一般件外縣市送倉件裝箱數 | normal_item_out_of_town_delivery_packed_quantity | gen_outcity_send_item_box_qty |   | float(8) |  |  |  |  |  |
| HGA32 | 一般件外縣市調件件數 | normal_item_out_of_town_retrieval_quantity | gen_outcity_adj_item_qty |   | float(8) |  |  |  |  |  |
| HGA33 | 一般件外縣市調件裝箱數 | normal_item_out_of_town_retrieval_packed_quantity | gen_outcity_adj_item_box_qty |   | float(8) |  |  |  |  |  |
| HGA34 | 一般件外縣市調送件費用 | normal_item_out_of_town_retrieval_fee | gen_outcity_adj_item_fee |   | float(8) |  |  |  |  |  |
| HGA35 | 急件大台北送倉件數 | urgent_taipei_store_items_objects | tpe_urgent_send_qty |   | float(8) |  |  |  |  |  |
| HGA36 | 急件大台北送倉件裝箱數 | urgent_taipei_store_packed_items_boxes | tpe_urgent_send_pack_qty |   | float(8) |  |  |  |  |  |
| HGA37 | 急件大台北調件件數 | urgent_taipei_transfer_items_objects | tpe_urgent_adj_qty |   | float(8) |  |  |  |  |  |
| HGA38 | 急件大台北調件裝箱數 | urgent_taipei_transfer_packed_items_boxes | tpe_urgent_adj_pack_qty |   | float(8) |  |  |  |  |  |
| HGA39 | 急件大台北調送件費用 | urgent_taipei_transfer_item_fee | tpe_urgent_adj_fee |   | float(8) |  |  |  |  |  |
| HGA40 | 急件外縣市送倉件數 | urgent_out_of_town_delivery_items | urgent_outcity_send_item_qty |   | float(8) |  |  |  |  |  |
| HGA41 | 急件外縣市送倉件裝箱數 | urgent_out_of_town_delivery_packed_items | urgent_outcity_send_item_box_qty |   | float(8) |  |  |  |  |  |
| HGA42 | 急件外縣市調件件數 | urgent_out_of_town_retrieval_items | urgent_outcity_adj_item_qty |   | float(8) |  |  |  |  |  |
| HGA43 | 急件外縣市調件裝箱數 | urgent_out_of_town_retrieval_packed_items | urgent_outcity_adj_item_box_qty |   | float(8) |  |  |  |  |  |
| HGA44 | 急件外縣市調送件費用 | urgent_out_of_town_retrieval_fee | urgent_outcity_adj_item_fee |   | float(8) |  |  |  |  |  |
| HGA45 | 現場調閱箱數 | onsite_retrieval_box_count | onsite_review_box_qty |   | float(8) |  |  |  |  |  |
| HGA46 | 現場調閱箱費用 | onsite_retrieval_box_fee | onsite_review_box_fee |   | float(8) |  |  |  |  |  |
| HGA47 | 現場調閱件數 | onsite_retrieval_item_count | onsite_review_item_qty |   | float(8) |  |  |  |  |  |
| HGA48 | 現場調閱件費用 | onsite_retrieval_item_fee | onsite_review_item_fee |   | float(8) |  |  |  |  |  |
| HGA49 | 現場稽核箱數 | onsite_audit_box_count | onsite_audit_box_qty |   | float(8) |  |  |  |  |  |
| HGA50 | 現場稽核件數 | onsite_audit_item_count | onsite_audit_item_qty |   | float(8) |  |  |  |  |  |
| HGA51 | 上下架箱數 | shelving_box_quantity | move_box_qty |   | float(8) |  |  |  |  |  |
| HGA52 | 上下架箱子費用 | shelving_box_fee | move_box_fee |   | float(8) |  |  |  |  |  |
| HGA53 | 上下架件數 | shelving_item_quantity | move_item_qty |   | float(8) |  |  |  |  |  |
| HGA54 | 上下架物件費用 | shelving_object_fee | move_obj_fee |   | float(8) |  |  |  |  |  |
| HGA55 | 倉內銷毀銷毀箱數 | internal_destruction_box_count | inwh_destroy_box_qty |   | float(8) |  |  |  |  |  |
| HGA56 | 倉內銷毀銷毀件數 | internal_destruction_item_count | inwh_destroy_item_qty |   | float(8) |  |  |  |  |  |
| HGA57 | 倉內銷毀銷毀件裝箱數 | internal_destruction_item_packing_count | inwh_destroy_item_box_qty |   | float(8) |  |  |  |  |  |
| HGA58 | 倉內銷毀總銷毀箱數 | internal_destruction_total_box_count | inwh_destroy_total_box_qty |   | float(8) |  |  |  |  |  |
| HGA59 | 倉內銷毀費用 | internal_destruction_fee | inwh_destroy_fee |   | float(8) |  |  |  |  |  |
| HGA60 | 大台北倉外銷毀箱數 | taipei_offsite_destroy_boxes | tpe_out_destr_qty |   | float(8) |  |  |  |  |  |
| HGA61 | 大台北倉外銷毀費用 | taipei_offsite_destroy_fee | tpe_out_destr_fee |   | float(8) |  |  |  |  |  |
| HGA62 | 外縣市倉外銷毀箱數 | out_of_town_warehouse_destruction_boxes | outcity_wh_destroy_box_qty |   | float(8) |  |  |  |  |  |
| HGA63 | 外縣市倉外銷毀費用 | out_of_town_warehouse_destruction_fee | outcity_wh_destroy_fee |   | float(8) |  |  |  |  |  |
| HGA64 | 它部門送倉箱數 | other_department_delivery_boxes | other_dept_send_box_qty |   | float(8) |  |  |  |  |  |
| HGA65 | 它部門調箱箱數 | other_department_retrieval_boxes | other_dept_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGA66 | 它部門送倉件數 | other_department_delivery_items | other_dept_send_item_qty |   | float(8) |  |  |  |  |  |
| HGA67 | 它部門調件件數 | other_department_retrieval_items | other_dept_adj_item_qty |   | float(8) |  |  |  |  |  |
| HGA68 | 膠帶數量 | tape_quantity | tape_qty |   | float(8) |  |  |  |  |  |
| HGA69 | 膠帶費用 | tape_fee | tape_fee |   | float(8) |  |  |  |  |  |
| HGA70 | 箱條碼數量 | box_barcode_quantity | box_barcode_qty |   | float(8) |  |  |  |  |  |
| HGA71 | 箱條碼費用 | box_barcode_fee | box_barcode_fee |   | float(8) |  |  |  |  |  |
| HGA72 | 件條碼數量 | item_barcode_quantity | item_barcode_qty |   | float(8) |  |  |  |  |  |
| HGA73 | 件條碼費用 | item_barcode_fee | item_barcode_fee |   | float(8) |  |  |  |  |  |
| HGA74 | 紙箱數量 | carton_quantity | carton_qty |   | float(8) |  |  |  |  |  |
| HGA75 | 紙箱費用 | carton_fee | carton_fee |   | float(8) |  |  |  |  |  |
| HGA76 | 銷毀袋數量 | destruction_bag_quantity | destroy_bag_qty |   | float(8) |  |  |  |  |  |
| HGA77 | 銷毀袋費用 | destruction_bag_fee | destroy_bag_fee |   | float(8) |  |  |  |  |  |
| HGA78 | 防潮袋袋數 | desiccant_bag_quantity | mbag_bag_qty |   | float(8) |  |  |  |  |  |
| HGA79 | 防潮袋費用 | desiccant_fee | mbag_fee |   | float(8) |  |  |  |  |  |
| HGA80 | 乾燥劑包數 | desiccant_pack_count | desiccant_bag_qty |   | float(8) |  |  |  |  |  |
| HGA81 | 乾燥劑費用 | desiccant_fee | desiccant_fee |   | float(8) |  |  |  |  |  |
| HGA82 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | float(8) |  |  |  |  |  |
| HGA83 | 影印費用 | photocopy_fee | photocopy_fee |   | float(8) |  |  |  |  |  |
| HGA84 | 傳真張數 | fax_page_count | fax_page_qty |   | float(8) |  |  |  |  |  |
| HGA85 | 傳真費用 | fax_fee | fax_fee |   | float(8) |  |  |  |  |  |
| HGA86 | 大台北材料運送數量 | taipei_material_transport_qty | tpe_mat_trans_qty |   | float(8) |  |  |  |  |  |
| HGA87 | 大台北材料運送費用 | taipei_material_transport_fee | tpe_mat_trans_fee |   | float(8) |  |  |  |  |  |
| HGA88 | 外縣市材料運送數量 | out_of_town_material_transport_quantity | outcity_material_ship_qty |   | float(8) |  |  |  |  |  |
| HGA89 | 外縣市材料運送費用 | out_of_town_material_transport_fee | outcity_material_ship_fee |   | float(8) |  |  |  |  |  |
| HGA90 | 倉庫專車銷毀趟數 | warehouse_shuttle_destruction_trips | wh_express_destroy_trip_qty |   | float(8) |  |  |  |  |  |
| HGA91 | 倉庫專車銷毀費用 | warehouse_shuttle_destruction_fee | wh_express_destroy_fee |   | float(8) |  |  |  |  |  |
| HGA92 | 大台北到府專車銷毀趟數 | taipei_home_express_destroy_trips | tpe_home_truck_qty |   | float(8) |  |  |  |  |  |
| HGA93 | 大台北到府專車銷毀費用 | taipei_home_express_destroy_fee | tpe_home_truck_fee |   | float(8) |  |  |  |  |  |
| HGA94 | 外縣市到府專車銷毀趟數 | out_of_town_home_exclusive_destruction_trips | outcity_home_express_destroy_trip_qty |   | float(8) |  |  |  |  |  |
| HGA95 | 外縣市到府專車銷毀費用 | out_of_town_home_exclusive_destruction_fee | outcity_home_express_destroy_fee |   | float(8) |  |  |  |  |  |
| HGA96 | 大台北到府合併銷毀箱數 | taipei_home_merge_destroy_boxes | tpe_home_merge_qty |   | float(8) |  |  |  |  |  |
| HGA97 | 大台北到府合併銷毀費用 | taipei_home_merge_destroy_fee | tpe_home_merge_fee |   | float(8) |  |  |  |  |  |
| HGA98 | 外縣市到府合併銷毀箱數 | out_of_town_home_merge_destruction_boxes | outcity_home_merge_destroy_box_qty |   | float(8) |  |  |  |  |  |
| HGA99 | 外縣市到府合併銷毀費用 | out_of_town_home_merge_destruction_fee | outcity_home_merge_destroy_fee |   | float(8) |  |  |  |  |  |
| HGA100 | 其他費用一 | other_fee_one | other_fee_a |   | float(8) |  |  |  |  |  |
| HGA101 | 其他費用二 | other_fee_two | other_fee_b |   | float(8) |  |  |  |  |  |
| HGA102 | 大台北收銷毀袋數 | taipei_destroy_bag_count | tpe_destr_bag_qty |   | float(8) |  |  |  |  |  |
| HGA103 | 大台北收銷毀袋費 | taipei_destroy_bag_fee | tpe_destr_bag_fee |   | float(8) |  |  |  |  |  |
| HGA104 | 外縣市收銷毀袋數 | out_of_town_destruction_bag_count | outcity_destroy_bag_qty |   | float(8) |  |  |  |  |  |
| HGA105 | 外縣市收銷毀袋費 | out_of_town_destruction_bag_fee | outcity_destroy_bag_fee |   | float(8) |  |  |  |  |  |
| id | 每日其他費用序號 | daily_other_fee_id | daily_misc_fee_id |   | bigint(8) | Y | Y | Y |  |  |
