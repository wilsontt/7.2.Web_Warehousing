# HGAOJ
**中文名稱：** 匯豐物件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| HGA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| HGA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| HGAOJ00 | 工作日期 | work_date | work_date |   | int(4) |  |  | Y |  |  |
| HGAOJ01 | 前日結存件數 | previous_day_balance_items | prev_day_balance_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ02 | 本日結存件數 | today_balance_items | today_balance_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ03 | 一般件大台北送倉新進件數 | normal_taipei_store_new_items_objects | tpe_norm_in_qty |   | float(8) |  |  |  |  |  |
| HGAOJ04 | 一般件大台北送倉返倉件數 | normal_taipei_store_return_items_objects | tpe_norm_return_qty |   | float(8) |  |  |  |  |  |
| HGAOJ05 | 一般件大台北送倉件裝箱數 | normal_taipei_store_packed_items_boxes | tpe_norm_send_pack_qty |   | float(8) |  |  |  |  |  |
| HGAOJ06 | 一般件大台北調件件數 | normal_taipei_transfer_items_objects | tpe_norm_adj_qty |   | float(8) |  |  |  |  |  |
| HGAOJ07 | 一般件大台北調件裝箱數 | normal_taipei_transfer_packed_items_boxes | tpe_norm_adj_pack_qty |   | float(8) |  |  |  |  |  |
| HGAOJ08 | 一般件大台北調送件費用 | normal_taipei_transfer_item_fee | tpe_norm_adj_fee |   | float(8) |  |  |  |  |  |
| HGAOJ09 | 一般件外縣市送倉新進件數 | normal_item_out_of_town_new_quantity | gen_outcity_new_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ10 | 一般件外縣市送倉返倉件數 | normal_item_out_of_town_return_quantity | gen_outcity_return_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ11 | 一般件外縣市送倉件裝箱數 | normal_item_out_of_town_delivery_packed_quantity | gen_outcity_send_item_box_qty |   | float(8) |  |  |  |  |  |
| HGAOJ12 | 一般件外縣市調件件數 | normal_item_out_of_town_retrieval_quantity | gen_outcity_adj_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ13 | 一般件外縣市調件裝箱數 | normal_item_out_of_town_retrieval_packed_quantity | gen_outcity_adj_item_box_qty |   | float(8) |  |  |  |  |  |
| HGAOJ14 | 一般件外縣市調送件費用 | normal_item_out_of_town_retrieval_fee | gen_outcity_adj_item_fee |   | float(8) |  |  |  |  |  |
| HGAOJ15 | 急件大台北送倉新進件數 | urgent_taipei_store_new_items_objects | tpe_urgent_in_qty |   | float(8) |  |  |  |  |  |
| HGAOJ16 | 急件大台北送倉返倉件數 | urgent_taipei_store_return_items_objects | tpe_urgent_return_qty |   | float(8) |  |  |  |  |  |
| HGAOJ17 | 急件大台北送倉件裝箱數 | urgent_taipei_store_packed_items_boxes | tpe_urgent_send_pack_qty |   | float(8) |  |  |  |  |  |
| HGAOJ18 | 急件大台北調件件數 | urgent_taipei_transfer_items_objects | tpe_urgent_adj_qty |   | float(8) |  |  |  |  |  |
| HGAOJ19 | 急件大台北調件裝箱數 | urgent_taipei_transfer_packed_items_boxes | tpe_urgent_adj_pack_qty |   | float(8) |  |  |  |  |  |
| HGAOJ20 | 急件大台北調送件費用 | urgent_taipei_transfer_item_fee | tpe_urgent_adj_fee |   | float(8) |  |  |  |  |  |
| HGAOJ21 | 急件外縣市送倉新進件數 | urgent_out_of_town_new_items | urgent_outcity_new_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ22 | 急件外縣市送倉返倉件數 | urgent_out_of_town_return_items | urgent_outcity_return_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ23 | 急件外縣市送倉件裝箱數 | urgent_out_of_town_delivery_packed_items | urgent_outcity_send_item_box_qty |   | float(8) |  |  |  |  |  |
| HGAOJ24 | 急件外縣市調件件數 | urgent_out_of_town_retrieval_items | urgent_outcity_adj_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ25 | 急件外縣市調件裝箱數 | urgent_out_of_town_retrieval_packed_items | urgent_outcity_adj_item_box_qty |   | float(8) |  |  |  |  |  |
| HGAOJ26 | 急件外縣市調送件費用 | urgent_out_of_town_retrieval_fee | urgent_outcity_adj_item_fee |   | float(8) |  |  |  |  |  |
| HGAOJ27 | 現場調閱件數 | onsite_retrieval_item_count | onsite_review_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ28 | 現場調閱件費用 | onsite_retrieval_item_fee | onsite_review_item_fee |   | float(8) |  |  |  |  |  |
| HGAOJ29 | 現場稽核件數 | onsite_audit_item_count | onsite_audit_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ30 | 上下架件數 | shelving_item_quantity | move_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ31 | 上下架件費用 | shelving_item_fee | move_item_fee |   | float(8) |  |  |  |  |  |
| HGAOJ32 | 倉內銷毀銷毀件數 | internal_destruction_item_count | inwh_destroy_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ33 | 倉內銷毀銷毀件裝箱數 | internal_destruction_item_packing_count | inwh_destroy_item_box_qty |   | float(8) |  |  |  |  |  |
| HGAOJ34 | 倉內銷毀銷毀件裝箱費用 | internal_destruction_item_packing_fee | inwh_destroy_item_box_fee |   | float(8) |  |  |  |  |  |
| HGAOJ35 | 它部門送倉件數 | other_department_delivery_items | other_dept_send_item_qty |   | float(8) |  |  |  |  |  |
| HGAOJ36 | 它部門調件件數 | other_department_retrieval_items | other_dept_adj_item_qty |   | float(8) |  |  |  |  |  |
| id | 物件日結序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| hga_id | 總帳序號 | total_account_id | total_account_id |   | bigint(8) |  |  | Y |  |  |
