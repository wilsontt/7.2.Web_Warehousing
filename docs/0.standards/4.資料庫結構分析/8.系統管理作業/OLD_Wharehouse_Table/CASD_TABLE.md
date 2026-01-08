# CASD
**中文名稱：** 每日物件進出統計

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CASD00 | 統計日期 | statistics_date | stat_date |   | char(8) |  |  | Y |  |  |
| CM00 | 通知客戶 | notification_customer_no | notify_cust_no |   | char(5) |  |  | Y |  |  |
| CM001 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| CASD01 | 收送速別 | delivery_speed | delivery_priority |   | char(3) |  |  | Y |  |  |
| CASD02 | 收送地區 | delivery_region | delivery_region |   | char(3) |  |  | Y |  |  |
| CASD03 | 自行收送 | self_delivery | self_delivery |   | char(3) |  |  | Y |  |  |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  | Y |  |  |
| CASD04 | 前日結餘 | previous_day_surplus | prev_day_surplus |   | float(8) |  |  |  |  |  |
| CASD05 | 本日結餘 | today_surplus | today_surplus |   | float(8) |  |  |  |  |  |
| CASD06 | 新進件數 | new_entry_item_count | new_in_item_qty |   | float(8) |  |  |  |  |  |
| CASD07 | 返倉件數 | return_to_storage_item_count | return_item_qty |   | float(8) |  |  |  |  |  |
| CASD08 | 領回新進件數 | return_new_item_count | retrieve_new_item_qty |   | float(8) |  |  |  |  |  |
| CASD09 | 銷毀新進件數 | destruction_new_item_count | destroy_new_item_qty |   | float(8) |  |  |  |  |  |
| CASD10 | 領回返倉件數 | return_to_storage_item_count | retrieve_return_item_qty |   | float(8) |  |  |  |  |  |
| CASD11 | 銷毀返倉件數 | destruction_return_item_count | destroy_return_item_qty |   | float(8) |  |  |  |  |  |
| CASD12 | 正本借出件數 | original_borrowed_items | orig_borrow_item_qty |   | float(8) |  |  |  |  |  |
| CASD13 | 影本借出件數 | copy_borrowed_item_count | copy_borrow_item_qty |   | float(8) |  |  |  |  |  |
| CASD14 | 在倉領回件數 | in_storage_return_item_count | inwh_return_item_qty |   | float(8) |  |  |  |  |  |
| CASD15 | 傳真件數 | fax_item_count | fax_item_qty |   | float(8) |  |  |  |  |  |
| CASD16 | 借出領回件數 | borrowed_return_items | borrow_return_item_qty |   | float(8) |  |  |  |  |  |
| CASD17 | 在倉銷毀件數 | in_storage_destruction_item_count | inwh_destroy_item_qty |   | float(8) |  |  |  |  |  |
| CASD18 | 借出銷毀件數 | borrowed_destruction_items | borrow_destroy_item_qty |   | float(8) |  |  |  |  |  |
| CASD19 | 現閱件數 | on_site_view_item_count | onsite_view_item_qty |   | float(8) |  |  |  |  |  |
| CASD20 | 在倉解領件數 | in_storage_release_item_count | inwh_release_item_qty |   | float(8) |  |  |  |  |  |
| CASD21 | 借出解領件數 | borrowed_release_items | borrow_release_item_qty |   | float(8) |  |  |  |  |  |
| CASD22 | 傳真張數 | fax_page_count | fax_page_qty |   | float(8) |  |  |  |  |  |
| CASD23 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | float(8) |  |  |  |  |  |
| id | 每日物件進出序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
