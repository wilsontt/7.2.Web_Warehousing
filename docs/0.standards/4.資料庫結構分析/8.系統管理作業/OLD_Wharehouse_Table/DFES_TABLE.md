# DFES
**中文名稱：** 每日其他費用統計

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| DFES00 | 統計日期 | statistics_date | stat_date |   | char(8) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| DFES01 | 收送速別 | delivery_speed | delivery_priority |   | char(3) |  |  | Y |  |  |
| DFES02 | 收送地區 | delivery_region | delivery_region |   | char(3) |  |  | Y |  |  |
| DFES04 | 空箱數量 | empty_box_quantity | empty_box_qty |   | float(8) |  |  |  |  |  |
| DFES05 | 膠帶數量 | tape_quantity | tape_qty |   | float(8) |  |  |  |  |  |
| DFES06 | 防潮袋數量 | desiccant_quantity | mbag_qty |   | float(8) |  |  |  |  |  |
| DFES07 | 乾燥劑數量 | desiccant_quantity | desiccant_qty |   | float(8) |  |  |  |  |  |
| DFES08 | 大條碼數量 | large_barcode_quantity | major_barcode_qty |   | float(8) |  |  |  |  |  |
| DFES09 | 小條碼數量 | small_barcode_quantity | minor_barcode_qty |   | float(8) |  |  |  |  |  |
| DFES10 | 影印數量 | photocopy_quantity | photocopy_qty |   | float(8) |  |  |  |  |  |
| DFES11 | 傳真數量 | fax_quantity | fax_qty |   | float(8) |  |  |  |  |  |
| DFES12 | 倉庫專車趟數 | warehouse_shuttle_trip_count | wh_express_trip_qty |   | float(8) |  |  |  |  |  |
| DFES13 | 到府專車趟數 | home_exclusive_trip_count | home_express_trip_qty |   | float(8) |  |  |  |  |  |
| DFES14 | 倉庫合併箱數 | warehouse_merge_box_count | wh_merge_box_qty |   | float(8) |  |  |  |  |  |
| DFES15 | 到府合併箱數 | home_merge_box_count | home_merge_box_qty |   | float(8) |  |  |  |  |  |
| DFES16 | 收回收筒數量 | recycle_bin_quantity | recycle_bin_count |   | float(8) |  |  |  |  |  |
| DFES17 | 送回收筒數量 | recycle_bin_sent_quantity | send_recycle_bin_count |   | float(8) |  |  |  |  |  |
| DFES18 | 裁碎箱數 | shredding_box_count | shred_box_qty |   | float(8) |  |  |  |  |  |
| DFES19 | 其他費用一 | other_fee_one | other_fee_a |   | float(8) |  |  |  |  |  |
| DFES20 | 其他費用二 | other_fee_two | other_fee_b |   | float(8) |  |  |  |  |  |
| DFES21 | 收物件箱數 | received_object_box_count | receive_obj_box_qty |   | float(8) |  |  |  |  |  |
| DFES22 | 送物件箱數 | delivery_object_box_count | send_obj_box_qty |   | float(8) |  |  |  |  |  |
| id | 每日其他費用序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
