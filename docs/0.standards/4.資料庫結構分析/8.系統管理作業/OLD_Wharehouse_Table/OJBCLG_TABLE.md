# OJBCLG
**中文名稱：** 物件條碼列印記錄

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| OJBCLG00 | 序號 | serial_number | seq_no |   | int(4) | Y | Y | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  |  |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  |  |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(21) |  |  |  |  |  |
| OBJ00 | 件號 | item_number | item_no |   | char(20) |  |  |  |  |  |
| OJBCLG01 | 對應箱號 | related_box_number | ref_box_no |   | char(21) |  |  |  |  |  |
| OJBCLG02 | 程式編號 | program_no | prog_code |   | char(20) |  |  |  |  |  |
| OJBCLG03 | 大項分類 | major_category | major_cat |   | char(3) |  |  |  |  |  |
| OJBCLG04 | 細項分類 | sub_category_item | subcat_name |   | char(3) |  |  |  |  |  |
| OJBCLG05 | 列印張數 | print_pages | print_page_qty |   | int(4) |  |  |  |  |  |
| OJBCLG06 | 列印人員 | print_staff | print_staff |   | char(10) |  |  |  |  |  |
| OJBCLG07 | 列印日期 | print_date | print_date |   | datetime(8) |  |  |  |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| cad_id | 物件序號 | object_id | obj_no |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
