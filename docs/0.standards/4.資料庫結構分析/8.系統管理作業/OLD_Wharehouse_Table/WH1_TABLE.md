# WH1
**中文名稱：** 倉庫資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| WH100 | 倉庫編號 | warehouse_no | wh_no | warehouseCode  | char(1) |  |  | Y |  |  |
| WH101 | 倉庫名稱 | warehouse_name | wh_name | warehouseName  | char(20) |  |  |  |  |  |
| WH102 | 地址 | address | address | address  | varchar(80) |  |  |  |  |  |
| WH103 | 電話 | warehouse_phone | phone | contactPhone  | char(20) |  |  |  |  |  |
| WH104 | 傳真 | fax | fax | fax  | char(20) |  |  |  |  |  |
| WH105 | 總架位 | warehouse_total_shelves, | total_rack | totalRacks  | real(4) |  |  |  |  |  |
| WH106 | 總儲位 | total_storage_locations | total_loc | totalStorages  | real(4) |  |  |  |  |  |
| WH107 | 可放箱數 | storable_boxes | can_place_box_qty | capacity  | real(4) |  |  |  |  |  |
| WH108 | 存倉箱數 | warehouse_box_count | storage_box_qty | placedBoxes  | real(4) |  |  |  |  |  |
| WH109 | 在倉箱數 | in_storage_box_count | inwh_box_qty | inWarehouseBoxes  | real(4) |  |  |  |  |  |
| WH110 | 可放件數 | capacity | capacity | capacity  | float(8) |  |  |  |  |  |
| WH111 | 存倉件數 | warehouse_item_count | storage_item_qty | storageObjectCount  | float(8) |  |  |  |  |  |
| WH112 | 在倉件數 | in_storage_item_count | inwh_item_qty | objectCountInWarehouse  | float(8) |  |  |  |  |  |
| WH113 | 預設樓排順序 | default_floor_row_order | def_row_order | floorRowOrder  | char(1) |  |  |  | Y |  |
| CRE_USERID | 建檔人員 | created_by | created_by | createdBy  | char(10) |  |  |  | Y |  |
| CRE_DTIME | 建檔日期 | created_date | created_date | createdAt  | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by | updatedBy  | char(10) |  |  |  | Y |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date | updatedAt  | char(14) |  |  |  |  |  |
| WH114 | 發車地區 | dispatch_area | dispatch_region | shippingLocation  | char(3) |  |  |  | Y |  |
| WH115 | 發車倉庫 | dispatch_warehouse | dispatch_wh | shippingWarehouse  | char(1) |  |  |  | Y |  |
| id | 倉庫序號 | id | id | id  | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver | lockVer  | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time | createdTime  | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time | updatedTime  | datetime(8) |  |  |  |  |  |
