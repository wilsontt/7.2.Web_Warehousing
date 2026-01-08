# GASC
**中文名稱：** 總帳(文件掃描)

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| GA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| GA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| CMD01 | 分行名稱 | branch_name | branch_name |   | char(30) |  |  |  |  |  |
| GA03 | 本月天數 | days_in_month | month_days |   | int(4) |  |  |  |  |  |
| GA04 | 文件抽件件數 | document_extraction_item_count | doc_extract_item_qty |   | float(8) |  |  |  |  |  |
| GA05 | 文件抽件費用 | document_extraction_fee | doc_extract_fee |   | float(8) |  |  |  |  |  |
| GA06 | 文件掃描張數 | document_scan_page_count | doc_scan_qty |   | float(8) |  |  |  |  |  |
| GA07 | 文件掃描費用 | document_scan_fee | doc_scan_fee |   | float(8) |  |  |  |  |  |
| GA08 | 文件加密費用 | document_encryption_fee | doc_encrypt_fee |   | float(8) |  |  |  |  |  |
| GA09 | 文件箱上下架箱數 | document_box_shelving_total_boxes | doc_box_move_qty_alt（? 建議合併） |   | float(8) |  |  |  |  |  |
| GA10 | 文件箱上下架費用 | document_box_shelving_total_fee | doc_box_move_fee_alt（? 建議統一命名，避免 fee/fee_alt 混淆） |   | float(8) |  |  |  |  |  |
| GA11 | 掃描後箱整理費用 | scan_post_box_sorting_fee | scan_post_box_sort_fee |   | float(8) |  |  |  |  |  |
| GA12 | 場地費 | site_fee | site_fee |   | float(8) |  |  |  |  |  |
| GA13 | 總額 | total_amount | total_amount |   | float(8) |  |  |  |  |  |
| id | 總帳序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
