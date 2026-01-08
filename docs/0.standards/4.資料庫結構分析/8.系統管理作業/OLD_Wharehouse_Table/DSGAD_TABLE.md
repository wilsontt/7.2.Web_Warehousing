# DSGAD
**中文名稱：** 文件掃描_日結

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| GA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| GA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| DSGAD01 | 分行名稱 | branch_name | branch_name |   | char(60) |  |  |  |  |  |
| DSGAD02 | 工作日期 | work_date | work_date |   | int(4) |  |  | Y |  |  |
| DSGAD03 | 整理抽調_件數 | sorting_extraction_item_count | arrange_extract_item_qty |   | float(8) |  |  |  |  |  |
| DSGAD04 | 文件掃描加密_張數 | document_scan_encrypt_page_count | doc_scan_encrypt_qty |   | float(8) |  |  |  |  |  |
| DSGAD05 | 加密影像傳送_張數 | encrypted_image_transfer_page_count | enc_img_transfer_qty |   | float(8) |  |  |  |  |  |
| DSGAD06 | 裝箱整理_箱數 | boxing_sorting_box_count | box_sort_box_qty |   | float(8) |  |  |  |  |  |
| DSGAD07 | 掃描專區急件_工單單數 | scan_area_urgent_order_count | scan_zone_urgent_order_count |   | float(8) |  |  |  |  |  |
| id | 日結序號 | daily_closing_id | daily_close_id |   | bigint(8) | Y | Y | Y |  |  |
| dsga_id | 月結序號 | monthly_closing_id | monthly_close_id |   | bigint(8) |  |  | Y |  |  |
