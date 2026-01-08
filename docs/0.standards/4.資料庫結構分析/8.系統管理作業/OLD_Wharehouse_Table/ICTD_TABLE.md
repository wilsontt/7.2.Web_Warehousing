# ICTD
**中文名稱：** 箱子移入主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTD00 | 移入單號 | move_in_order_number | move_in_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| ICTC00 | 移出單號 | move_out_order_number | move_out_order_no |   | char(10) |  |  |  |  |  |
| ICTD01 | 移入日期 | move_in_date | move_in_date |   | char(8) |  |  |  |  |  |
| ICTD02 | 移入時間 | move_in_time | move_in_time |   | char(4) |  |  |  |  |  |
| ICTD03 | 上架總箱 | shelving_in_total_boxes | load_total_box |   | float(8) |  |  |  |  |  |
| ICTD04 | 稽核總箱 | audit_total_boxes | audit_total_box |   | float(8) |  |  |  |  |  |
| ICTD05 | 確認主管 | confirmation_manager | confirm_mgr |   | char(10) |  |  |  |  |  |
| ICTD06 | 確認日期 | confirmation_date | confirm_date |   | char(8) |  |  |  |  |  |
| ICTD07 | 確認時間 | confirmation_time | confirm_time |   | char(4) |  |  |  |  |  |
| ICTD08 | 備註 | remarks | remark |   | varchar(1024) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTD09 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  |  |  |
| ICTD10 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  |  |  |
| ICTD11 | 移入總箱 | move_in_total_boxes | move_in_total_box |   | float(8) |  |  |  |  |  |
| ICTD12 | 移入倉庫 | move_in_warehouse | move_in_wh |   | char(1) |  |  |  |  |  |
| ICTD13 | 移入總件 | move_in_total_items | move_in_total_item |   | float(8) |  |  |  |  |  |
| ICTD14 | 上架總件 | shelving_in_total_items | load_total_item |   | float(8) |  |  |  |  |  |
| ICTD15 | 稽核總件 | audit_total_items | audit_total_item |   | float(8) |  |  |  |  |  |
| id | 移入單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
