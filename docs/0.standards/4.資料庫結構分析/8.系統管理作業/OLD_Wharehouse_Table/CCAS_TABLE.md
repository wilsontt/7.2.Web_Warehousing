# CCAS
**中文名稱：** 客戶箱子資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CCAS.CM00 |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  | Y |  |  |
| CAS01 | 箱子名稱 | box_name | box_name |   | char(20) |  |  |  |  |  |
| CAS02 | 箱子類別 | box_category | box_category |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='06' AND CDS.CDS00=CCAS.CAS02 |
| CAS03 | 長 | length | length |   | float(8) |  |  |  |  |  |
| CAS04 | 寬 | width | width |   | float(8) |  |  |  |  |  |
| CAS05 | 高 | height | height |   | float(8) |  |  |  |  |  |
| CAS06 | 存倉費 | warehouse_fee | storage_fee |   | float(8) |  |  |  |  |  |
| CAS07 | 運送費 | delivery_fee | shipping_fee |   | float(8) |  |  |  |  |  |
| CAS08 | 基本運送數量 | basic_delivery_quantity | base_ship_qty |   | float(8) |  |  |  |  |  |
| CAS09 | 調件費 | retrieval_fee | retrieval_item_fee |   | float(8) |  |  |  |  |  |
| CAS10 | 基本調件數量 | basic_retrieval_quantity | base_adj_item_qty |   | float(8) |  |  |  |  |  |
| CAS11 | 銷毀費 | destruction_fee | destroy_fee |   | float(8) |  |  |  |  |  |
| CAS12 | 基本銷毀數量 | basic_destruction_quantity | base_destroy_qty |   | float(8) |  |  |  |  |  |
| CAS13 | 掃瞄費 | scan_fee | scan_fee |   | float(8) |  |  |  |  |  |
| CAS14 | 材料費(空紙箱費) | material_fee_empty_box | material_fee_empty_box |   | float(8) |  |  |  |  |  |
| CAS15 | 折合標準箱數 | equivalent_standard_boxes | eq_standard_box_qty |   | float(8) |  |  |  |  |  |
| CAS16 | 基本訂貨數量 | basic_order_quantity | base_order_qty |   | float(8) |  |  |  |  |  |
| CAS17 | 裁碎費 | shredding_fee | shred_fee |   | float(8) |  |  |  |  |  |
| id | 箱子序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cm_id | 客戶序號 | customer_id | cust_id |   | bigint(8) |  |  | Y | Y | Value：CM.id，Condition：CM.CM00=CCAS.CM00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
