# SNM
**中文名稱：** 封箱條碼主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  | Y |  |  |
| SNM01 | 編製日期 | prepared_date | compiled_date |   | char(8) |  |  | Y |  |  |
| SNM02 | 編製時間 | prepared_time | compiled_time |   | char(6) |  |  | Y |  |  |
| SNM03 | 編製人員 | prepared_by | compiled_by |   | char(10) |  |  |  |  |  |
| SNM04 | 發行張數 | issue_page_count | issue_page_qty |   | int(4) |  |  |  |  |  |
| SNM05 | 上次封箱號碼 | last_seal_number | last_seal_no |   | char(10) |  |  |  |  |  |
| SNM06 | 截止封箱號碼 | cutoff_seal_number | end_seal_no |   | char(10) |  |  |  |  |  |
| id | 封箱條碼序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
