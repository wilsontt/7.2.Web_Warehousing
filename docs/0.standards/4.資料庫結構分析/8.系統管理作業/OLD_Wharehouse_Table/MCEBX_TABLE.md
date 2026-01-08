# MCEBX
**中文名稱：** 月結箱子

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MCEBX00 | 結帳年月 | settlement_year_month | settlement_ym |   | char(6) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  | Y |  |  |
| MCEBX01 | 上月在倉箱數 | last_month_in_storage_boxes | last_month_box_qty |   | int(4) |  |  |  |  |  |
| MCEBX02 | 上月在倉件數 | last_month_in_storage_items | last_month_item_qty |   | int(4) |  |  |  |  |  |
| MCEBX03 | 本月在倉箱數 | month_in_storage_boxes | month_inwh_box_qty |   | int(4) |  |  |  |  |  |
| MCEBX04 | 本月在倉件數 | month_in_storage_items | month_inwh_item_qty |   | int(4) |  |  |  |  |  |
| MCEBX05 | 修改次數 | modified_count | modified_count |   | int(4) |  |  |  |  |  |
| id | 月結箱子序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
