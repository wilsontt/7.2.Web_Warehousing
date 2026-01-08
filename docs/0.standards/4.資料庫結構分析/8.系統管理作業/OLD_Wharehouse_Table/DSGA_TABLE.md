# DSGA
**中文名稱：** 文件掃描_月結帳

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| GA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| GA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| DSGA01 | 分行名稱 | branch_name | branch_name |   | char(60) |  |  |  |  |  |
| DSGA02 | 本月天數 | days_in_month | month_days |   | int(4) |  |  |  |  |  |
| DSGA03 | 整理抽調_件數 | sorting_extraction_item_count | arrange_extract_item_qty |   | float(8) |  |  |  |  |  |
| DSGA04 | 整理抽調_費用 | sorting_extraction_fee | arrange_extract_fee |   | float(8) |  |  |  |  |  |
| DSGA05 | 文件掃描加密_張數 | document_scan_encrypt_page_count | doc_scan_encrypt_qty |   | float(8) |  |  |  |  |  |
| DSGA06 | 文件掃描加密_費用 | document_scan_encrypt_fee | doc_scan_encrypt_fee |   | float(8) |  |  |  |  |  |
| DSGA07 | 加密影像傳送_張數 | encrypted_image_transfer_page_count | enc_img_transfer_qty |   | float(8) |  |  |  |  |  |
| DSGA08 | 加密影像傳送_費用 | encrypted_image_transfer_fee | enc_img_transfer_fee |   | float(8) |  |  |  |  |  |
| DSGA09 | 文件箱上下架_箱數 | document_box_shelving_box_count | doc_box_move_qty |   | float(8) |  |  |  |  |  |
| DSGA10 | 文件箱上下架_費用 | document_box_shelving_fee | doc_box_move_fee |   | float(8) |  |  |  |  |  |
| DSGA11 | 裝箱整理_箱數 | boxing_sorting_box_count | box_sort_box_qty |   | float(8) |  |  |  |  |  |
| DSGA12 | 裝箱整理_費用 | boxing_sorting_fee | box_sort_fee |   | float(8) |  |  |  |  |  |
| DSGA13 | 掃描專區急件費_工單單數 | scan_area_urgent_fee_order_count | scan_zone_urgent_fee_order_count |   | float(8) |  |  |  |  |  |
| DSGA14 | 掃描專區急件費_費用 | scan_area_urgent_fee_amount | scan_zone_urgent_fee |   | float(8) |  |  |  |  |  |
| DSGA15 | 掃描專區月租費 | scan_area_monthly_rent | scan_zone_monthly_fee |   | float(8) |  |  |  |  |  |
| DSGA16 | 費用合計 | total_fee | fee_total |   | float(8) |  |  |  |  |  |
| id | 月結序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| dsgac_id | 帳單序號 | invoice_id | bill_id |   | bigint(8) |  |  | Y |  |  |
