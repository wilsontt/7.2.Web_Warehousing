# CARVA
**中文名稱：** 客戶收送地區

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CARVA.CM00 |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CARVA.CM00 |
| CDPTA00 | 發車地區 | dispatch_area | dispatch_region |   | char(3) |  |  | Y | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='29' AND CDS.CDS00=CARVA.CPDTA00 |
| CARVA00 | 收送地區 | delivery_region | delivery_region |   | char(3) |  |  | Y | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='29' AND CDS.CDS00=CARVA.CARVA00 |
| CARVA01 | 運輸費 | transport_fee | transport_fee |   | float(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(20) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CARVA.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(20) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CARVA.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 客戶收送地區序號 | id | id |   | bigint(8) | Y |  |  |  |  |
| cdpta_id | 客戶發車地區序號 | customer_dispatch_area_id | cust_dispatch_region_id |   | bigint(8) |  |  |  | Y | Value：CDPTA.id，Condition：CDPTA.CM00=CARVA.CM00 AND CDPTA.CDPTA00=CARVA.CDPTA00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
