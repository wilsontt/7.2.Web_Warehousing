# CAF
**中文名稱：** 箱子費用設定

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CAF00 | 箱子代碼 | box_code | box_code | boxCode  | char(3) |  |  | Y |  |  |
| CAF01 | 箱子名稱 | box_name | box_name | boxName  | char(20) |  |  |  |  |  |
| CAF02 | 箱子類別 | box_category | box_category | boxType  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='06' AND CDS.CDS00=CAF.CAF02 |
| CAF03 | 長(公分) | length_cm | length_cm | length  | float(8) |  |  |  |  |  |
| CAF04 | 寬(公分) | width_cm | width_cm | width  | float(8) |  |  |  |  |  |
| CAF05 | 高(公分) | height_cm | height_cm | height  | float(8) |  |  |  |  |  |
| CAF06 | 箱子總重(公斤) | box_total_weight_kg | box_total_weight_kg | weight  | float(8) |  |  |  |  |  |
| CAF07 | 超重費用(元/公斤) | overweight_fee_per_kg | fee_overweight_per_kg | overweightFee  | float(8) |  |  |  |  |  |
| CAF08 | 空箱單價(元/箱) | empty_box_unit_price | empty_box_unit_price | emptyBoxPrice  | float(8) |  |  |  |  |  |
| CAF09 | 空箱最低購買箱數 | empty_box_min_purchase_quantity | empty_box_min_qty | emptyBoxMinQty  | int(4) |  |  |  |  |  |
| CAF10 | (箱)條碼單價(元/張) | box_barcode_unit_price | box_barcode_unit_price | barcodePrice  | float(8) |  |  |  |  |  |
| CAF11 | (箱)條碼最低購買張數 | box_barcode_min_purchase_quantity | box_barcode_min_qty | barcodeMinQty  | int(4) |  |  |  |  |  |
| CAF12 | (箱)存倉費用(元/月) | box_storage_fee_per_month | box_storage_fee_month | storageFee  | float(8) |  |  |  |  |  |
| CAF13 | (箱)上/下架單價(元/箱) | box_shelving_unit_price | box_move_unit_price |   | float(8) |  |  |  |  |  |
| CAF14 | (箱)上/下架最低箱數 | box_shelving_min_quantity | box_move_min_qty | handleMinBoxes  | int(4) |  |  |  |  |  |
| CAF15 | (箱)上/下架基本費(元) | box_shelving_base_fee | box_move_base_fee | handleBasicFee  | float(8) |  |  |  |  |  |
| CAF16 | 大台北收送單價(元/箱) | taipei_delivery_unit_price | fee_ntp_unit | taipeiDeliveryPrice  | float(8) |  |  |  |  |  |
| CAF17 | 大台北收送最低箱數 | taipei_delivery_min_boxes | fee_ntp_min_box | taipeiDeliveryMinBoxes  | int(4) |  |  |  |  |  |
| CAF18 | 大台北收送基本費(元) | taipei_delivery_base_fee | fee_ntp_basic | taipeiDeliveryBasicFee  | float(8) |  |  |  |  |  |
| CAF19 | 大台北緊急運送單價(元/箱) | taipei_urgent_unit_price | fee_ntp_urgent_unit | taipeiUrgentPrice  | float(8) |  |  |  |  |  |
| CAF20 | 大台北緊急運送最低箱數 | taipei_urgent_min_boxes | fee_ntp_urgent_min_box | taipeiUrgentMinBoxes  | float(8) |  |  |  |  |  |
| CAF21 | 大台北緊急運送基本費(元) | taipei_urgent_base_fee |  | taipeiUrgentBasicFee  | float(8) |  |  |  |  |  |
| CAF22 | 外縣市收送單價(元/箱) | out_of_town_delivery_unit_price | outcity_delivery_unit_price | outsideDeliveryPrice  | float(8) |  |  |  |  |  |
| CAF23 | 倉內銷毀單價(元/箱) | internal_destruction_unit_price | inwh_destroy_unit_price | inWarehouseDestroyPrice  | float(8) |  |  |  |  |  |
| CAF24 | 倉內銷毀最低箱數 | internal_destruction_min_boxes | inwh_destroy_min_box_qty | inWarehouseDestroyMinBoxes  | int(4) |  |  |  |  |  |
| CAF25 | 倉內銷毀基本費(元) | internal_destruction_base_fee | inwh_destroy_base_fee | inWarehouseDestroyBasicFee  | float(8) |  |  |  |  |  |
| CAF26 | 倉外銷毀大台北地區單價(元/箱) | taipei_external_destroy_unit_price | fee_ntp_ext_destr_unit | taipeiOutWarehouseDestroyPrice  | float(8) |  |  |  |  |  |
| CAF27 | 倉外銷毀大台北地區最低箱數 | taipei_external_destroy_min_boxes | fee_ntp_ext_destr_min_box | taipeiOutWarehouseDestroyMinBoxes  | int(4) |  |  |  |  |  |
| CAF28 | 倉外銷毀大台北地區基本費(元) | taipei_external_destroy_base_fee | fee_ntp_ext_destr_basic | taipeiOutWarehouseDestroyBasicFee  | float(8) |  |  |  |  |  |
| CAF29 | (箱)現場調閱單價(元/箱) | box_on_site_retrieval_unit_price | box_review_unit_price | onsiteRetrievalPrice  | float(8) |  |  |  |  |  |
| CAF30 | (箱)現場調閱最低箱數 | box_on_site_retrieval_min_quantity | box_review_min_qty | onsiteRetrievalMinBoxes  | int(4) |  |  |  |  |  |
| CAF31 | (箱)現場調閱基本費(元) | box_on_site_retrieval_base_fee | box_review_base_fee | onsiteRetrievalBasicFee  | float(8) |  |  |  |  |  |
| CAF32 | 解約下架單價(元/箱) | termination_unshelving_unit_price | terminate_off_shelf_unit_price_box | terminationHandleFee  | float(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CAF.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CAF.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| CAF33 | (件)條碼單價(元/張) | item_barcode_unit_price | item_barcode_unit_price | itemBarcodePrice  | float(8) |  |  |  |  |  |
| CAF34 | (件)條碼最低購買張數 | item_barcode_min_purchase_quantity | item_barcode_min_qty | itemBarcodeMinQty  | int(4) |  |  |  |  |  |
| CAF35 | (件)新進掃瞄單價(元/件) | item_new_scan_unit_price | item_scan_unit_price | itemNewScanPrice  | float(8) |  |  |  |  |  |
| CAF36 | (件)上下架單價(元/件) | item_shelving_unit_price | item_move_unit_price | itemHandlePrice  | float(8) |  |  |  |  |  |
| CAF37 | (件)上下架最低件數 | item_shelving_min_quantity | item_move_min_qty | itemHandleMinQty  | int(4) |  |  |  |  |  |
| CAF38 | (件)上下架基本費 | item_shelving_base_fee | item_move_base_fee | itemHandleBasicFee  | float(8) |  |  |  |  |  |
| CAF39 | (件)現場調閱單價(元/件) | item_on_site_retrieval_unit_price | item_review_unit_price | itemOnsiteRetrievalPrice  | float(8) |  |  |  |  |  |
| CAF40 | (件)現場調閱最低件數 | item_on_site_retrieval_min_quantity | item_review_min_qty | itemOnsiteRetrievalMinQty  | int(4) |  |  |  |  |  |
| CAF41 | (件)現場調閱基本費 | item_on_site_retrieval_base_fee | item_review_base_fee | itemOnsiteRetrievalBasicFee  | float(8) |  |  |  |  |  |
| CAF42 | 外縣市收送最低箱數 | out_of_town_delivery_min_boxes | outcity_delivery_min_box_qty | outsideDeliveryMinBoxes  | int(4) |  |  |  |  |  |
| CAF43 | 外縣市收送基本費(元) | out_of_town_delivery_base_fee | outcity_delivery_base_fee | outsideDeliveryBasicFee  | float(8) |  |  |  |  |  |
| CAF44 | 外縣市緊急運送單價(元/箱) | out_of_town_emergency_transport_unit_price | outcity_urgent_unit_price | outsideUrgentPrice  | float(8) |  |  |  |  |  |
| CAF45 | 外縣市緊急運送最低箱數 | out_of_town_emergency_transport_min_boxes | outcity_urgent_min_box_qty | outsideUrgentMinBoxes  | int(4) |  |  |  |  |  |
| CAF46 | 外縣市緊急運送基本費 | out_of_town_emergency_transport_base_fee | outcity_urgent_base_fee | outsideUrgentBasicFee  | float(8) |  |  |  |  |  |
| CAF47 | 倉外銷毀外縣市地區單價(元/箱) | external_destruction_out_of_town_unit_price | outwh_destroy_outcity_unit_price | outsideOutWarehouseDestroyPrice  | float(8) |  |  |  |  |  |
| CAF48 | 倉外銷毀外縣市地區最低箱數 | external_destruction_out_of_town_min_boxes | outwh_destroy_outcity_min_box_qty | outsideOutWarehouseDestroyMinBoxes  | int(4) |  |  |  |  |  |
| CAF49 | 倉外銷毀外縣市地區基本費(元) | external_destruction_out_of_town_base_fee | outwh_destroy_outcity_base_fee | outsideOutWarehouseDestroyBasicFee  | float(8) |  |  |  |  |  |
| CAF50 | 租金(元/天) | rent_per_day | rent_fee_day |   | float(8) |  |  |  |  |  |
| CAF51 | 箱子轉換比(箱) | box_conversion_ratio | box_convert_ratio |   | float(8) |  |  |  |  |  |
| CAF52 | 箱子文件掃描(元/張) | box_document_scan_price | box_doc_scan_fee_per_page | itemOnsiteScanPrice  | int(4) |  |  |  |  |  |
| CAF53 | 箱子文件掃描上下架費(元/次) | box_document_scan_shelving_fee | box_doc_scan_inout_fee_per_time | itemOnsiteHandlePrice  | float(8) |  |  |  |  |  |
| CAF54 | 物件文件掃描(元/張) | object_document_scan_price | obj_doc_scan_unit_price |   | int(4) |  |  |  |  |  |
| CAF55 | 物件文件掃描上下架費(元/次) | object_document_scan_shelving_fee | obj_doc_scan_move_unit_fee |   | float(8) |  |  |  |  |  |
| CAF56 | 箱子文件加密(元/張) | box_document_encryption_price | box_doc_encrypt_fee_per_page | encryptionFee  | float(8) |  |  |  |  |  |
| CAF57 | 物件文件加密(元/張) | object_document_encryption_price | obj_doc_encrypt_unit_price | itemOnsiteEncryptPrice  | float(8) |  |  |  |  |  |
| CAF58 | 箱子文件抽調費(元/件) | box_document_extraction_price | box_doc_extract_fee_per_item | extractionFee  | float(8) |  |  |  |  |  |
| CAF59 | 箱子裝箱整理費(元/箱) | box_packing_sorting_price | box_pack_sort_fee_per_box | boxOrganizeFee  | float(8) |  |  |  |  |  |
| CAF60 | 掃描專區場地費(元/月)(停用) | scan_area_site_fee_monthly_disabled | scan_zone_site_fee_monthly_disabled |   | float(8) |  |  |  |  |  |
| id | 箱子費用序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
