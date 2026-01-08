# ICTI
**中文名稱：** 調整主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTI00 | 調整單號 | adjustment_order_number | adjust_order_no |   | char(10) |  |  | Y |  |  |
| ICTI01 | 調整日期 | adjustment_date | adjust_date |   | char(8) |  |  |  |  |  |
| ICTF00 | 盤點單號 | stocktaking_order_number | stocktake_order_no |   | char(10) |  |  |  |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| ICTI02 | 確認主管 | confirmation_manager | confirm_mgr |   | char(10) |  |  |  |  |  |
| ICTI03 | 確認日期 | confirmation_date | confirm_date |   | char(8) |  |  |  |  |  |
| ICTI04 | 確認時間 | confirmation_time | confirm_time |   | char(4) |  |  |  |  |  |
| ICTI05 | 應調箱數 | expected_retrieval_boxes | expected_transfer_box_qty |   | float(8) |  |  |  |  |  |
| ICTI06 | 應調件數 | expected_retrieval_items | expected_transfer_item_qty |   | float(8) |  |  |  |  |  |
| ICTI07 | 已調箱數 | retrieved_box_count | adj_box_qty |   | float(8) |  |  |  |  |  |
| ICTI08 | 已調件數 | retrieved_item_count | adj_item_qty |   | float(8) |  |  |  |  |  |
| ICTI09 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  |  |  |
| ICTI10 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  |  |  |
| ICTI11 | 備註 | remarks | remark |   | varchar(254) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 調整單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
