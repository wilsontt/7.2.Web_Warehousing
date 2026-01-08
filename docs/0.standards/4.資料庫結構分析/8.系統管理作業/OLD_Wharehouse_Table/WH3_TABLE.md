# WH3
**中文名稱：** 儲位資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| WH100 | 倉庫編號 | warehouse_no | wh_no | warehouseCode  | char(1) |  |  |  | Y |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no | warehouseCode  | char(1) |  |  | Y | Y |  |
| WH200 | 架位編號 | shelf_no | rack_code |   | char(7) |  |  | Y | Y |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  | Y |  |  |
| WH301 | 存倉箱數 | warehouse_box_count | storage_box_qty |   | int(4) |  |  |  |  |  |
| WH302 | 在倉箱數 | in_storage_box_count | inwh_box_qty |   | int(4) |  |  |  |  |  |
| WH303 | 可放箱數 | storable_boxes | can_place_box_qty |   | int(4) |  |  |  |  |  |
| WH304 | 可放件數(停用) | storable_items_disabled | can_place_item_qty_disabled |   | float(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 儲位序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| wh2_id | 架位序號 | shelf_id | rack_id |   | bigint(8) |  |  | Y | Y |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
