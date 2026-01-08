# ICTF
**中文名稱：** 盤點主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTF00 | 盤點單號 | stocktaking_order_number | stocktake_order_no |   | char(10) |  |  | Y |  |  |
| ICTF01 | 盤點日期 | stocktaking_date | stocktake_date |   | char(8) |  |  |  |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  |  |  |
| ICTF02 | 確認主管 | confirmation_manager | confirm_mgr |   | char(10) |  |  |  |  |  |
| ICTF03 | 確認日期 | confirmation_date | confirm_date |   | char(8) |  |  |  |  |  |
| ICTF04 | 確認時間 | confirmation_time | confirm_time |   | char(4) |  |  |  |  |  |
| ICTF05 | 應盤箱數 | expected_stocktaking_boxes | expected_stock_box_qty |   | float(8) |  |  |  |  |  |
| ICTF06 | 應盤件數 | expected_stocktaking_items | expected_stock_item_qty |   | float(8) |  |  |  |  |  |
| ICTF07 | 初盤箱數 | initial_inventory_box_count | init_count_box_qty |   | float(8) |  |  |  |  |  |
| ICTF08 | 初盤件數 | initial_inventory_item_count | init_count_item_qty |   | float(8) |  |  |  |  |  |
| ICTF09 | 複盤箱數 | recount_box_count | recount_box_qty |   | float(8) |  |  |  |  |  |
| ICTF10 | 複盤件數 | recount_item_count | recount_item_qty |   | float(8) |  |  |  |  |  |
| ICTF11 | 初盤箱錯誤率 | initial_inventory_box_error_rate | init_count_box_err_rate |   | float(8) |  |  |  |  |  |
| ICTF12 | 初盤件錯誤率 | initial_inventory_item_error_rate | init_count_item_err_rate |   | float(8) |  |  |  |  |  |
| ICTF13 | 複盤箱錯誤率 | recount_box_error_rate | recount_box_error_rate |   | float(8) |  |  |  |  |  |
| ICTF14 | 複盤件錯誤率 | recount_item_error_rate | recount_item_error_rate |   | float(8) |  |  |  |  |  |
| ICTF15 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  |  |  |
| ICTF16 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  |  |  |
| ICTF17 | 備註 | remarks | remark |   | varchar(254) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 盤點單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
