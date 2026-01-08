# CCAF
**中文名稱：** 客戶箱子費用設定

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CCAF.CM00 |
| CCAF00 | 啟用年份 | activation_year | enabled_year | enableYear  | char(4) |  |  | Y |  |  |
| CAF00 | 箱子代碼 | box_code | box_code | boxCode  | char(3) |  |  | Y |  |  |
| CAF01 | 箱子名稱 | box_name | box_name | boxName  | char(20) |  |  |  |  |  |
| CAF02 | 箱子類別 | box_category | box_category | boxType  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='06' AND CDS.CDS00=CCAF.CAF02 |
| CAF03 | 長(公分) | length_cm | length_cm | length  | float(8) |  |  |  |  |  |
| CAF04 | 寬(公分) | width_cm | width_cm | width  | float(8) |  |  |  |  |  |
| CAF05 | 高(公分) | height_cm | height_cm | height  | float(8) |  |  |  |  |  |
| CAF06 | 箱子總重(公斤) | box_total_weight_kg | box_total_weight_kg | weight  | float(8) |  |  |  |  |  |
| CAF07 | 超重費用(元/公斤) | overweight_fee_per_kg | fee_overweight_per_kg |   | float(8) |  |  |  |  |  |
| CAF08 | 空箱單價(元/箱) | empty_box_unit_price | empty_box_unit_price |   | float(8) |  |  |  |  |  |
| CAF09 | 空箱最低購買箱數 | empty_box_min_purchase_quantity | empty_box_min_qty |   | int(4) |  |  |  |  |  |
| CAF10 | 箱子條碼單價(元/張) | box_barcode_unit_price | box_barcode_unit_price_page |   | float(8) |  |  |  |  |  |
| CAF11 | 箱子條碼最低購買張數 | box_barcode_min_purchase_qty | box_barcode_min_purchase_page_qty |   | int(4) |  |  |  |  |  |
| CAF12 | 存倉費用(元/月/箱) | warehouse_fee_per_month_box | storage_fee_month_box | storageMonthlyFee  | float(8) |  |  |  |  |  |
| CAF13 | 上/下架單價(元/箱) | shelving_unit_price | move_unit_price_box |   | float(8) |  |  |  |  |  |
| CAF14 | 上/下架最低箱數 | shelving_min_boxes | move_min_box_qty |   | int(4) |  |  |  |  |  |
| CAF15 | 上/下架基本費(元) | shelving_base_fee | move_base_fee |   | float(8) |  |  |  |  |  |
| CAF16 | 大台北收送單價(元/箱) | taipei_delivery_unit_price | taipei_box_price |   | float(8) |  |  |  |  |  |
| CAF17 | 大台北收送最低箱數 | tpe_min_qty | taipei_box_min |   | int(4) |  |  |  |  |  |
| CAF18 | 大台北收送基本費(元) | taipei_delivery_base_fee | taipei_box_base_fee |   | float(8) |  |  |  |  |  |
| CAF19 | 大台北緊急運送單價(元/箱) | tpe_emergency_unit_price | taipei_emg_ship_price |   | float(8) |  |  |  |  |  |
| CAF20 | 大台北緊急運送最低箱數 | tpe_emergency_min_qty | taipei_emg_ship_min |   | float(8) |  |  |  |  |  |
| CAF21 | 大台北緊急運送基本費 | tpe_emergency_basic | taipei_emg_ship_fee |   | float(8) |  |  |  |  |  |
| CAF22 | 外縣市收送單價(元/箱) | out_of_town_delivery_unit_price | outcity_delivery_unit_price |   | float(8) |  |  |  |  |  |
| CAF23 | 倉內銷毀單價(元/箱) | internal_destruction_unit_price | inwh_destroy_unit_price |   | float(8) |  |  |  |  |  |
| CAF24 | 倉內銷毀最低箱數 | internal_destruction_min_boxes | inwh_destroy_min_box_qty |   | int(4) |  |  |  |  |  |
| CAF25 | 倉內銷毀基本費(元) | internal_destruction_base_fee | inwh_destroy_base_fee |   | float(8) |  |  |  |  |  |
| CAF26 | 大台北倉外銷毀單價(元/箱) | tpe_out_dispose_unit_price | taipei_out_destroy_price |   | float(8) |  |  |  |  |  |
| CAF27 | 大台北倉外銷毀最低數量 | tpe_out_dispose_min_qty | taipei_out_destroy_min |   | int(4) |  |  |  |  |  |
| CAF28 | 大台北倉外銷毀基本費(元) | tpe_out_dispose_basic | taipei_out_destroy_base_fee |   | float(8) |  |  |  |  |  |
| CAF29 | 現場調閱單價(元/箱) | onsite_retrieval_unit_price | onsite_review_unit_price_box |   | float(8) |  |  |  |  |  |
| CAF30 | 現場調閱最低箱數 | onsite_retrieval_min_boxes | onsite_review_min_box_qty |   | int(4) |  |  |  |  |  |
| CAF31 | 現場調閱基本費(元) | onsite_retrieval_base_fee | onsite_review_base_fee |   | float(8) |  |  |  |  |  |
| CAF32 | 解約下架單價(元/箱) | termination_unshelving_unit_price | terminate_off_shelf_unit_price_box |   | float(8) |  |  |  |  |  |
| CCAF01 | 正式啟用 | officially_enabled | is_enabled |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CCAF01 |
| CCAF02 | 啟用日期 | activation_date | enabled_date |   | char(8) |  |  |  |  |  |
| CCAF03 | 啟用人員 | activated_by | enabled_by_staff |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CCAF.CCAF03 |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CCAF.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CCAF.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| CAF33 | 物件條碼單價(元/張) | object_barcode_unit_price | obj_barcode_unit_price |   | float(8) |  |  |  |  |  |
| CAF34 | 物件條碼最低購買張數 | object_barcode_min_purchase_quantity | obj_barcode_min_qty |   | int(4) |  |  |  |  |  |
| CAF35 | 物件新進掃瞄單價(元/件) | object_new_scan_unit_price | obj_new_scan_unit_price |   | float(8) |  |  |  |  |  |
| CAF36 | 物件上下架單價(元/件) | object_shelving_unit_price | obj_move_unit_price_item |   | float(8) |  |  |  |  |  |
| CAF37 | 物件最低上下架件數 | object_min_shelving_items | obj_move_min_item_qty |   | int(4) |  |  |  |  |  |
| CAF38 | 物件上下架基本費 | object_shelving_base_fee | obj_move_base_fee |   | float(8) |  |  |  |  |  |
| CAF39 | 物件現場調閱單價(元/件) | object_on_site_retrieval_unit_price | obj_onsite_review_unit_price |   | float(8) |  |  |  |  |  |
| CAF40 | 物件現場調閱最低件數 | object_on_site_retrieval_min_items | obj_onsite_review_min_qty |   | int(4) |  |  |  |  |  |
| CAF41 | 物件現場調閱基本費 | object_on_site_retrieval_base_fee | obj_onsite_review_base_fee |   | float(8) |  |  |  |  |  |
| CAF42 | 外縣市收送最低箱數 | out_of_town_delivery_min_boxes | outcity_delivery_min_box_qty |   | int(4) |  |  |  |  |  |
| CAF43 | 外縣市收送基本費(元) | out_of_town_delivery_base_fee | outcity_delivery_base_fee |   | float(8) |  |  |  |  |  |
| CAF44 | 外縣市緊急運送單價(元/箱) | out_of_town_emergency_transport_unit_price | outcity_urgent_unit_price |   | float(8) |  |  |  |  |  |
| CAF45 | 外縣市緊急運送最低箱數 | out_of_town_emergency_transport_min_boxes | outcity_urgent_min_box_qty |   | int(4) |  |  |  |  |  |
| CAF46 | 外縣市緊急運送基本費 | out_of_town_emergency_transport_base_fee | outcity_urgent_base_fee |   | float(8) |  |  |  |  |  |
| CAF47 | 外縣市倉外銷毀單價(元/箱) | out_of_town_warehouse_destruction_unit_price | outcity_wh_destroy_unit_price |   | float(8) |  |  |  |  |  |
| CAF48 | 外縣市倉外銷毀最低箱數 | out_of_town_warehouse_destruction_min_boxes | outcity_wh_destroy_min_box_qty |   | int(4) |  |  |  |  |  |
| CAF49 | 外縣市倉外銷毀基本費(元) | out_of_town_warehouse_destruction_base_fee | outcity_wh_destroy_base_fee |   | float(8) |  |  |  |  |  |
| CAF50 | 租金(元/天) | rent_per_day | rent_fee_day |   | float(8) |  |  |  |  |  |
| CAF51 | 箱子轉換比(箱) | box_conversion_ratio | box_convert_ratio |   | float(8) |  |  |  |  |  |
| CAF52 | 箱子文件掃描費用(元/張) | box_document_scan_fee | box_doc_scan_fee_page |   | int(4) |  |  |  |  |  |
| CAF53 | 箱子文件掃描上下架費用(元/箱) | box_document_scan_shelving_fee_per_box | box_doc_scan_inout_fee_box |   | float(8) |  |  |  |  |  |
| CAF54 | 物件文件掃描費用(元/張) | object_document_scan_fee | obj_doc_scan_fee |   | int(4) |  |  |  |  |  |
| CAF55 | 物件文件掃描上下架費用(元/本) | object_document_scan_shelving_fee_per_book | obj_doc_scan_move_fee_book |   | float(8) |  |  |  |  |  |
| CAF56 | 箱子文件加密費用(元/張) | box_document_encryption_fee | box_doc_encrypt_fee_page |   | float(8) |  |  |  |  |  |
| CAF57 | 物件文件加密費用(元/張) | object_document_encryption_fee | obj_doc_encrypt_fee |   | float(8) |  |  |  |  |  |
| CAF58 | 箱子文件抽調費用(元/件) | box_document_extraction_fee | box_doc_extract_fee_item |   | float(8) |  |  |  |  |  |
| CAF59 | 箱子裝箱整理費用(元/箱) | box_packing_sorting_fee | box_pack_sort_fee_box |   | float(8) |  |  |  |  |  |
| CAF60 | 掃描專區場地費用(元/月) | scan_area_site_fee_monthly | scan_zone_site_fee_monthly |   | float(8) |  |  |  |  |  |
| id | 客戶箱子費用序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cm_id | 客戶序號 | customer_id | cust_id |   | bigint(8) |  |  | Y | Y | Value：CM.id，Condition：CM.CM00=CBEX.CM00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
