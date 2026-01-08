# MCEBXU
**中文名稱：** 月結箱子修改記錄

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MCEBX00 | 結帳年月 | settlement_year_month | settlement_ym |   | char(6) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  | Y |  |  |
| MCEBXU00 | 項次 | item_number | item_seq |   | int(4) |  |  | Y |  |  |
| MCEBXU01 | 原本月在倉箱數 | original_month_in_storage_boxes | orig_month_inwh_box_qty |   | int(4) |  |  |  |  |  |
| MCEBXU02 | 原本月在倉件數 | original_month_in_storage_items | orig_month_inwh_item_qty |   | int(4) |  |  |  |  |  |
| MCEBXU03 | 新本月在倉箱數 | new_month_in_storage_boxes | new_month_inwh_box_qty |   | int(4) |  |  |  |  |  |
| MCEBXU04 | 新本月在倉件數 | new_month_in_storage_items | new_month_inwh_item_qty |   | int(4) |  |  |  |  |  |
| MCEBXU05 | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| MCEBXU06 | 修改日期 | modified_date | modified_date |   | char(8) |  |  |  |  |  |
| MCEBXU07 | 修改時間 | modified_time | modified_time |   | char(6) |  |  |  |  |  |
| id | 月結箱子修改記錄序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| mcebx_id | 月結箱子序號 | monthly_closing_box_id | monthly_close_box_id |   | bigint(8) |  |  | Y |  |  |
