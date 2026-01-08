# DSGAC
**中文名稱：** 文件掃描帳單

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| GA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| GA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| DSGAC01 | 整理抽調_總件數 | sorting_extraction_total_items | arrange_extract_total_item_qty |   | float(8) |  |  |  |  |  |
| DSGAC02 | 整理抽調_800件以內_費用 | sorting_extraction_fee_within_800_items | arrange_extract_le800_fee |   | float(8) |  |  |  |  |  |
| DSGAC03 | 整理抽調_801件起_費用 | sorting_extraction_fee_over_801_items | arrange_extract_ge801_fee |   | float(8) |  |  |  |  |  |
| DSGAC04 | 整理抽調_費用比 | sorting_extraction_fee_ratio | arrange_extract_fee_ratio |   | float(8) |  |  |  |  |  |
| DSGAC05 | 文件掃描加密_總張數 | document_scan_encrypt_total_pages | doc_scan_encrypt_total_qty |   | float(8) |  |  |  |  |  |
| DSGAC06 | 文件掃描加密_8000張以內_費用 | document_scan_encrypt_fee_within_8000 | doc_scan_encrypt_fee_8000 |   | float(8) |  |  |  |  |  |
| DSGAC07 | 文件掃描加密_8001張起_費用 | document_scan_encrypt_fee_over_8000 | doc_scan_encrypt_fee_8001 |   | float(8) |  |  |  |  |  |
| DSGAC08 | 文件掃描加密_費用比 | document_scan_encrypt_fee_ratio | doc_scan_encrypt_fee_ratio |   | float(8) |  |  |  |  |  |
| DSGAC09 | 加密影像傳送_總張數 | encrypted_image_transfer_total_pages | enc_img_transfer_total_qty |   | float(8) |  |  |  |  |  |
| DSGAC10 | 加密影像傳送_8000張以內_費用 | encrypted_image_transfer_fee_within_8000 | enc_img_transfer_fee_8000 |   | float(8) |  |  |  |  |  |
| DSGAC11 | 加密影像傳送_8001張起_費用 | encrypted_image_transfer_fee_over_8000 | enc_img_transfer_fee_8001 |   | float(8) |  |  |  |  |  |
| DSGAC12 | 加密影像傳送_費用比 | encrypted_image_transfer_fee_ratio | enc_img_transfer_fee_ratio |   | float(8) |  |  |  |  |  |
| DSGAC13 | 裝箱整理_總箱數 | boxing_sorting_total_boxes | box_sort_total_box_qty |   | float(8) |  |  |  |  |  |
| DSGAC14 | 裝箱整理_400箱以內_費用 | boxing_sorting_fee_within_400 | box_sort_le400_fee |   | float(8) |  |  |  |  |  |
| DSGAC15 | 裝箱整理_401箱起_費用 | boxing_sorting_fee_over_401 | box_sort_ge401_fee |   | float(8) |  |  |  |  |  |
| DSGAC16 | 裝箱整理_費用比 | boxing_sorting_fee_ratio | box_sort_fee_ratio |   | float(8) |  |  |  |  |  |
| DSGAC17 | 掃描專區急件_總工單數 | scan_area_urgent_total_orders | scan_zone_urgent_total_order |   | float(8) |  |  |  |  |  |
| DSGAC18 | 掃描專區急件_30張單以內_費用 | scan_area_urgent_within30_fee | scan_zone_urgent_le30_fee |   | float(8) |  |  |  |  |  |
| DSGAC19 | 掃描專區急件_31張單起_費用 | scan_area_urgent_over31_fee | scan_zone_urgent_ge31_fee |   | float(8) |  |  |  |  |  |
| DSGAC20 | 掃描專區急件_費用比 | scan_area_urgent_fee_ratio | scan_zone_urgent_fee_ratio |   | float(8) |  |  |  |  |  |
| id | 帳單序號 | invoice_id | bill_id |   | bigint(8) | Y | Y | Y |  |  |
