# HGABX
**中文名稱：** 匯豐箱子

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| HGA01 | 年度 | fiscal_year | year_no |   | int(4) |  |  | Y |  |  |
| HGA02 | 月份 | month | month_no |   | int(4) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  | Y |  |  |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  | Y |  |  |
| HGABX00 | 工作日期 | work_date | work_date |   | int(4) |  |  | Y |  |  |
| HGABX01 | 前日結存箱數 | previous_day_balance_boxes | prev_day_balance_box_qty |   | float(8) |  |  |  |  |  |
| HGABX02 | 本日結存箱數 | today_balance_boxes | today_balance_box_qty |   | float(8) |  |  |  |  |  |
| HGABX03 | 存倉費 | warehouse_fee | storage_fee |   | float(8) |  |  |  |  |  |
| HGABX04 | 一般件大台北送倉新進箱數 | normal_taipei_store_new_boxes | tpe_norm_in_box_qty |   | float(8) |  |  |  |  |  |
| HGABX05 | 一般件大台北送倉返倉箱數 | normal_taipei_store_return_boxes | tpe_norm_return_box_qty |   | float(8) |  |  |  |  |  |
| HGABX06 | 一般件大台北調箱箱數 | normal_taipei_transfer_boxes | tpe_norm_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGABX07 | 一般件大台北調送箱費用 | normal_taipei_transfer_box_fee | tpe_norm_adj_box_fee |   | float(8) |  |  |  |  |  |
| HGABX08 | 一般件外縣市送倉新進箱數 | normal_box_out_of_town_new_quantity | gen_outcity_new_box_qty |   | float(8) |  |  |  |  |  |
| HGABX09 | 一般件外縣市送倉返倉箱數 | normal_box_out_of_town_return_quantity | gen_outcity_return_box_qty |   | float(8) |  |  |  |  |  |
| HGABX10 | 一般件外縣市調箱箱數 | normal_box_out_of_town_retrieval_quantity | gen_outcity_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGABX11 | 一般件外縣市調送箱費用 | normal_box_out_of_town_retrieval_fee | gen_outcity_adj_box_fee |   | float(8) |  |  |  |  |  |
| HGABX12 | 急件大台北送倉新進箱數 | urgent_taipei_store_new_boxes | tpe_urgent_in_box_qty |   | float(8) |  |  |  |  |  |
| HGABX13 | 急件大台北送倉返倉箱數 | urgent_taipei_store_return_boxes | tpe_urgent_return_box_qty |   | float(8) |  |  |  |  |  |
| HGABX14 | 急件大台北調箱箱數 | urgent_taipei_transfer_boxes | tpe_urgent_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGABX15 | 急件大台北費用 | urgent_taipei_fee | tpe_urgent_fee |   | float(8) |  |  |  |  |  |
| HGABX16 | 急件外縣市送倉新進箱數 | urgent_out_of_town_new_boxes | urgent_outcity_new_box_qty |   | float(8) |  |  |  |  |  |
| HGABX17 | 急件外縣市送倉返倉箱數 | urgent_out_of_town_return_boxes | urgent_outcity_return_box_qty |   | float(8) |  |  |  |  |  |
| HGABX18 | 急件外縣市調箱箱數 | urgent_out_of_town_retrieval_boxes | urgent_outcity_adj_box_qty |   | float(8) |  |  |  |  |  |
| HGABX19 | 急件外縣市費用 | urgent_out_of_town_fee | urgent_outcity_fee |   | float(8) |  |  |  |  |  |
| HGABX20 | 現場調閱箱數 | onsite_retrieval_box_count | onsite_review_box_qty |   | float(8) |  |  |  |  |  |
| HGABX21 | 現場調閱箱費用 | onsite_retrieval_box_fee | onsite_review_box_fee |   | float(8) |  |  |  |  |  |
| HGABX22 | 現場稽核箱數 | onsite_audit_box_count | onsite_audit_box_qty |   | float(8) |  |  |  |  |  |
| HGABX23 | 上下架箱數 | shelving_box_quantity | move_box_qty |   | float(8) |  |  |  |  |  |
| HGABX24 | 上下架箱費用 | shelving_box_cost | move_box_fee_alt |   | float(8) |  |  |  |  |  |
| HGABX25 | 倉內銷毀箱數 | internal_destruction_boxes | inwh_destroy_box_qty |   | float(8) |  |  |  |  |  |
| HGABX26 | 倉內銷毀費用 | internal_destruction_fee | inwh_destroy_fee |   | float(8) |  |  |  |  |  |
| HGABX27 | 大台北倉外銷毀箱數(停用) | taipei_offsite_destroy_boxes | tpe_out_destr_qty (deprecated) |   | float(8) |  |  |  |  |  |
| HGABX28 | 大台北倉外銷毀費用(停用) | taipei_offsite_destroy_fee | tpe_out_destr_fee (deprecated) |   | float(8) |  |  |  |  |  |
| HGABX29 | 外縣市倉外銷毀箱數(停用) | out_of_town_warehouse_destruction_boxes_disabled | outcity_wh_destroy_box_qty_disabled |   | float(8) |  |  |  |  |  |
| HGABX30 | 外縣市倉外銷毀費用(停用) | out_of_town_warehouse_destruction_fee_disabled | outcity_wh_destroy_fee_disabled |   | float(8) |  |  |  |  |  |
| HGABX31 | 它部門送倉箱數 | other_department_delivery_boxes | other_dept_send_box_qty |   | float(8) |  |  |  |  |  |
| HGABX32 | 它部門調箱箱數 | other_department_retrieval_boxes | other_dept_adj_box_qty |   | float(8) |  |  |  |  |  |
| id | 箱日結序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| hga_id | 總帳序號 | total_account_id | total_account_id |   | bigint(8) |  |  | Y |  |  |
