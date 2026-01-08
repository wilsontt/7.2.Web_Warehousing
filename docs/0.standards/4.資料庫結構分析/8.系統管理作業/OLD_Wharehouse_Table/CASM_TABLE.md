# CASM
**中文名稱：** 每日箱子進出統計

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CASM00 | 日結日期 | daily_closing_date | daily_close_date |   | char(8) |  |  | Y |  |  |
| CM00 | 通知客戶 | notification_customer_no | notify_cust_no |   | char(5) |  |  | Y |  |  |
| CM001 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| CASM01 | 收送速別 | delivery_speed | delivery_priority |   | char(3) |  |  | Y |  |  |
| CASM02 | 收送地區 | delivery_region | delivery_region |   | char(3) |  |  | Y |  |  |
| CASM03 | 自行收送 | self_delivery | self_delivery |   | char(3) |  |  | Y |  |  |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  | Y |  |  |
| CASM04 | 前日結餘 | previous_day_surplus | prev_day_surplus |   | float(8) |  |  |  |  |  |
| CASM05 | 本日結餘 | today_surplus | today_surplus |   | float(8) |  |  |  |  |  |
| CASM06 | 新進箱數 | new_entry_box_count | new_in_box_qty |   | float(8) |  |  |  |  |  |
| CASM07 | 返倉箱數 | return_to_storage_box_count | return_box_qty |   | float(8) |  |  |  |  |  |
| CASM08 | 領回新進箱數 | return_new_box_count | retrieve_new_box_qty |   | float(8) |  |  |  |  |  |
| CASM09 | 銷毀新進箱數 | destruction_new_box_count | destroy_new_box_qty |   | float(8) |  |  |  |  |  |
| CASM10 | 領回返倉箱數 | return_to_storage_box_count | retrieve_return_box_qty |   | float(8) |  |  |  |  |  |
| CASM11 | 銷毀返倉箱數 | destruction_return_box_count | destroy_return_box_qty |   | float(8) |  |  |  |  |  |
| CASM12 | 借出箱數 | borrowed_box_count | borrow_box_qty |   | float(8) |  |  |  |  |  |
| CASM13 | 在倉領回箱數 | in_storage_return_box_count | inwh_return_box_qty |   | float(8) |  |  |  |  |  |
| CASM14 | 傳真箱數 | fax_box_count | fax_box_qty |   | float(8) |  |  |  |  |  |
| CASM15 | 借出領回箱數 | borrowed_return_boxes | borrow_return_box_qty |   | float(8) |  |  |  |  |  |
| CASM16 | 在倉銷毀箱數 | in_storage_destruction_box_count | inwh_destroy_box_qty |   | float(8) |  |  |  |  |  |
| CASM17 | 借出銷毀箱數 | borrowed_destruction_boxes | borrow_destroy_box_qty |   | float(8) |  |  |  |  |  |
| CASM18 | 現閱箱數 | on_site_view_box_count | onsite_view_box_qty |   | float(8) |  |  |  |  |  |
| CASM19 | 在倉解領箱數 | in_storage_release_box_count | inwh_release_box_qty |   | float(8) |  |  |  |  |  |
| CASM20 | 借出解領箱數 | borrowed_release_boxes | borrow_release_box_qty |   | float(8) |  |  |  |  |  |
| CASM21 | 傳真張數 | fax_page_count | fax_page_qty |   | float(8) |  |  |  |  |  |
| CASM22 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | float(8) |  |  |  |  |  |
| id | 每日箱子進出序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
