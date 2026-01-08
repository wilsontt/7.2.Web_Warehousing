# ICTC
**中文名稱：** 箱子移出主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTC00 | 移出單號 | move_out_order_number | move_out_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| ICTC01 | 移出日期 | move_out_date | move_out_date |   | char(8) |  |  |  |  |  |
| ICTC02 | 移出時間 | move_out_time | move_out_time |   | char(4) |  |  |  |  |  |
| ICTC03 | 移出總箱 | move_out_total_boxes | move_out_total_box |   | float(8) |  |  |  |  |  |
| ICTC04 | 確認主管 | confirmation_manager | confirm_mgr |   | char(10) |  |  |  |  |  |
| ICTC05 | 確認日期 | confirmation_date | confirm_date |   | char(8) |  |  |  |  |  |
| ICTC06 | 確認時間 | confirmation_time | confirm_time |   | char(4) |  |  |  |  |  |
| ICTC07 | 備註 | remarks | remark |   | varchar(1024) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTC08 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  |  |  |
| ICTC09 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  |  |  |
| ICTC10 | 移入倉庫 | move_in_warehouse | move_in_wh |   | char(1) |  |  |  |  |  |
| ICTC11 | 移出倉庫 | move_out_warehouse | move_out_wh |   | char(1) |  |  |  |  |  |
| ICTC12 | 下架總箱 | unshelving_total_boxes | unload_total_box |   | float(8) |  |  |  |  |  |
| ICTC13 | 稽核總箱 | audit_total_boxes | audit_total_box |   | float(8) |  |  |  |  |  |
| ICTC14 | 移出總件 | move_out_total_items | move_out_total_item |   | float(8) |  |  |  |  |  |
| ICTC15 | 下件總件 | retrieval_total_items | unload_total_item |   | float(8) |  |  |  |  |  |
| ICTC16 | 稽核總件 | audit_total_items | audit_total_item |   | float(8) |  |  |  |  |  |
| id | 移出單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
