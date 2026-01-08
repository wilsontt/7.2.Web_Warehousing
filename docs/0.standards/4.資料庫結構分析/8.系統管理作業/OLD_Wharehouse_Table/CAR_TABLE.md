# CAR
**中文名稱：** 車輛資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CAR00 | 車號 | vehicle_number | vehicle_no | vehicleNumber  | char(10) |  |  | Y |  |  |
| CAR01 | 司機 | driver | driver | driverId  | char(10) |  |  |  | Y | Value：EMP.EMP00，Display：EMP.EMP01，Condition：EMP.EMP00=CAR.CAR01 |
| CAR02 | 隨車人員 | escort_staff | escort_staff | escortId  | char(10) |  |  |  | Y | Value：EMP.EMP00，Display：EMP.EMP01，Condition：EMP.EMP00=CAR.CAR02 |
| CAR03 | 備註 | remarks | remark | remarks  | varchar(60) |  |  |  |  |  |
| CAR04 | 車輛狀態 | vehicle_status | vehicle_status | status  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='51' AND CDS.CDS00=CAR.CAR04 |
| CAR05 | 出廠日期 | factory_release_date | ship_date | manufacturingDate  | char(8) |  |  |  |  |  |
| CAR06 | 報廢日期 | scrap_date | scrap_date | scrapDate  | char(8) |  |  |  |  |  |
| CAR07 | 是否委外 | is_outsourced | is_outsourced | isOutsourced  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CAR.CAR07 |
| CAR08 | 帳單內含運費 | invoice_includes_shipping_fee | bill_include_ship_fee | freightIncluded  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CAR.CAR08 |
| CAR09 | 駐點區域 | onsite_area | station_area | residentArea  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='29' AND CDS.CDS00=CAR.CAR09 |
| CAR10 | 駐點倉庫 | onsite_warehouse | station_wh | residentWarehouse  | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=CAR.CAR10 |
| CAR11 | 顯示順序 | display_order | display_order | displayOrder  | int(4) |  |  |  |  |  |
| id | 車輛序號 | vehicle_id | vehicle_id | id  | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver | lock_version  | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time | created_at  | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time | updated_at  | datetime(8) |  |  |  |  |  |
