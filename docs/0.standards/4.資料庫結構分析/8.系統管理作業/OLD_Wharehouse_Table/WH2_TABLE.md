# WH2
**中文名稱：** 架位資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| WH100 | 倉庫編號 | warehouse_no | wh_no | warehouseCode  | char(1) |  |  | Y | Y |  |
| WH200 | 架位編號 | shelf_no | rack_code |   | char(7) |  |  | Y |  |  |
| WH201 | 區域(1碼) | area_code_1digit | region_code1 |   | char(1) |  |  |  |  |  |
| WH202 | 樓排(3碼) | rack_row | floor_row3 |   | char(3) |  |  |  |  |  |
| WH203 | 大格(2碼) | major_slot_code | major_grid_code |   | char(2) |  |  |  |  |  |
| WH204 | 架位種類 | shelf_type | rack_type |   | char(3) |  |  |  | Y |  |
| WH205 | 架位箱數 | shelf_box_count | rack_box_qty |   | int(4) |  |  |  |  |  |
| WH206 | 每格列數 | rows_per_slot | per_grid_row_qty |   | int(4) |  |  |  |  |  |
| WH207 | 每列箱數 | boxes_per_row | per_row_box_qty |   | int(4) |  |  |  |  |  |
| WH208 | 存倉箱數 | warehouse_box_count | storage_box_qty |   | int(4) |  |  |  |  |  |
| WH209 | 在倉箱數 | in_storage_box_count | inwh_box_qty |   | int(4) |  |  |  |  |  |
| WH210 | 可放件數(停用) | storable_items_disabled | can_place_item_qty_disabled |   | float(8) |  |  |  |  |  |
| WH211 | 樓層(1碼) | rack_floor | floor1 |   | char(1) |  |  |  |  |  |
| WH212 | 排數(2碼) | row_number_2digit | row_code2 |   | char(2) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by | createdBy  | char(10) |  |  |  | Y |  |
| CRE_DTIME | 建檔日期 | created_date | created_date | createdAt  | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by | updatedBy  | char(10) |  |  |  | Y |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date | updatedAt  | char(14) |  |  |  |  |  |
| id | 架位序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| wh1_id | 倉庫序號 | warehouse_id | wh_id |   | bigint(8) |  |  | Y | Y |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
