# LCBCLG
**中文名稱：** 儲位條碼列印記錄

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LCBCLG00 | 序號 | serial_number | seq_no |   | int(4) | Y | Y | Y |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| LCBCLG01 | 程式編號 | program_no | prog_code |   | char(20) |  |  |  |  |  |
| LCBCLG02 | 大項分類 | major_category | major_cat |   | char(3) |  |  |  |  |  |
| LCBCLG03 | 細項分類 | sub_category_item | subcat_name |   | char(3) |  |  |  |  |  |
| LCBCLG04 | 列印張數 | print_pages | print_page_qty |   | int(4) |  |  |  |  |  |
| LCBCLG05 | 列印人員 | print_staff | print_staff |   | char(10) |  |  |  |  |  |
| LCBCLG06 | 列印日期 | print_date | print_date |   | datetime(8) |  |  |  |  |  |
