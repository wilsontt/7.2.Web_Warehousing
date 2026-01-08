# SSN
**中文名稱：** 封箱條碼

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  | Y |  |  |
| SNM01 | 編製日期 | prepared_date | compiled_date |   | char(8) |  |  | Y |  |  |
| SNM02 | 編製時間 | prepared_time | compiled_time |   | char(6) |  |  | Y |  |  |
| SSN00 | 封箱條碼 | seal_box_barcode | seal_box_barcode |   | char(10) |  |  | Y |  |  |
| SSN01 | 列印次數 | print_count | print_count |   | int(4) |  |  |  |  |  |
| id | 封箱條碼明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| snm_id | 封箱條碼序號 | seal_box_barcode_id | seal_box_barcode_id |   | bigint(8) |  |  | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
