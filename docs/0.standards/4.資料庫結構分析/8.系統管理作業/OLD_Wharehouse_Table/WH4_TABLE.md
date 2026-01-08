# WH4
**中文名稱：** 倉庫收送區域

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| WH100 | 倉庫編號 | warehouse_no | wh_no | warehouseCode  | char(1) |  |  | Y | Y |  |
| WH400 | 收送區域 | delivery_region | delivery_region |   | char(3) |  |  | Y | Y |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 倉庫收送區域序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| wh1_id | 倉庫序號 | warehouse_id | wh_id |   | bigint(8) |  |  | Y | Y |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
