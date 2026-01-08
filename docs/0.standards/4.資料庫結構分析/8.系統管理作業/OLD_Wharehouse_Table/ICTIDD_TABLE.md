# ICTIDD
**中文名稱：** 調整物件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTI00 | 調整單號 | adjustment_order_number | adjust_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CAN00 | 正確箱號 | correct_box_number | correct_box_no |   | char(17) |  |  | Y |  |  |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| CAD07 | 目前狀態 | current_status | curr_status |   | char(3) |  |  |  |  |  |
| WH100 | 正確倉別 | correct_warehouse | correct_wh |   | char(1) |  |  |  |  |  |
| WH300 | 正確儲位 | correct_storage_location | correct_location |   | char(8) |  |  |  |  |  |
| ICTFDD01 | 初盤人員 | first_checker | fst_chk_user |   | char(8) |  |  |  |  |  |
| ICTFDD02 | 初盤日期時間 | first_check_datetime | fst_chk_dt |   | char(17) |  |  |  |  |  |
| ICTFDD03 | 初盤儲位 | first_check_location | fst_chk_loc |   | char(8) |  |  |  |  |  |
| ICTFDD04 | 初盤箱號 | first_check_box_no | fst_chk_box_no |   | char(17) |  |  |  |  |  |
| ICTFDD05 | 初盤狀態 | first_check_status | fst_chk_status |   | char(10) |  |  |  |  |  |
| ICTFDD06 | 初盤說明 | first_check_desc | fst_chk_note |   | char(14) |  |  |  |  |  |
| ICTFDD07 | 複盤人員 | second_checker | snd_chk_user |   | char(3) |  |  |  |  |  |
| ICTFDD08 | 複盤日期時間 | second_check_datetime | snd_chk_dt |   | varchar(254) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTFDD09 | 複盤儲位 | second_check_location | snd_chk_loc |   | varchar(40) |  |  |  |  |  |
| id | 調整單件明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  |  |  |
| cad_id | 物件序號 | object_id | obj_id |   | bigint(8) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| icti_id | 調整單序號 | adjustment_order_id | adjust_order_id |   | bigint(8) |  |  | Y |  |  |
