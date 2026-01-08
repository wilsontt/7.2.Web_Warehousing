# SSNH
**中文名稱：** 封箱條碼列印歷史

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  | Y |  |  |
| SNM01 | 編製日期 | prepared_date | compiled_date |   | char(8) |  |  | Y |  |  |
| SNM02 | 編製時間 | prepared_time | compiled_time |   | char(6) |  |  | Y |  |  |
| SSN00 | 封箱條碼 | seal_box_barcode | seal_box_barcode |   | char(10) |  |  | Y |  |  |
| SSNH01 | 列印日期 | print_date | print_date |   | char(8) |  |  | Y |  |  |
| SSNH02 | 列印時間 | print_time | print_time |   | char(6) |  |  | Y |  |  |
| SSNH03 | 列印人員 | print_staff | print_staff |   | char(10) |  |  |  |  |  |
| id | 封箱條碼列印歷史序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| ssn_id | 封箱條碼明細序號 | seal_box_barcode_detail_id | seal_box_barcode_detail_id |   | bigint(8) |  |  | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
