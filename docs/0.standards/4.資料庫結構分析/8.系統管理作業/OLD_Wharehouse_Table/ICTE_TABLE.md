# ICTE
**中文名稱：** 異動主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTE00 | 異動單號 | change_order_number | change_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| ICTE01 | 異動日期 | change_date | change_date |   | char(8) |  |  |  |  |  |
| ICTE02 | 確認主管 | confirmation_manager | confirm_mgr |   | char(10) |  |  |  |  |  |
| ICTE03 | 確認日期 | confirmation_date | confirm_date |   | char(8) |  |  |  |  |  |
| ICTE04 | 確認時間 | confirmation_time | confirm_time |   | char(4) |  |  |  |  |  |
| ICTE05 | 修改客戶編號 | modified_customer_no | modified_cust_no |   | char(1) |  |  |  |  |  |
| ICTE06 | 修改部門編號 | modified_department_no | modified_dept_no |   | char(1) |  |  |  |  |  |
| ICTE07 | 修改箱號 | modified_box_number | modified_box_no |   | char(1) |  |  |  |  |  |
| ICTE08 | 修改對應箱號 | modified_related_box_number | modified_ref_box_no |   | char(1) |  |  |  |  |  |
| ICTE09 | 修改件號 | modified_item_number | modified_item_no |   | char(1) |  |  |  |  |  |
| ICTE10 | 修改件序 | modified_item_seq | modified_item_seq |   | char(1) |  |  |  |  |  |
| ICTE11 | 修改組別 | modified_team_no | modified_team_no |   | char(1) |  |  |  |  |  |
| ICTE12 | 修改成本中心 | modified_cost_center_no | modified_cost_center_no |   | char(1) |  |  |  |  |  |
| ICTE13 | 修改計價成本中心 | modified_billing_cost_center_no | modified_billing_cost_center_no |   | char(1) |  |  |  |  |  |
| ICTE14 | 修改箱子種類 | modified_box_type | modified_box_type |   | char(1) |  |  |  |  |  |
| ICTE15 | 修改預定銷毀日 | modified_scheduled_destruction_date | modified_plan_destroy_date |   | char(1) |  |  |  |  |  |
| ICTE16 | 修改原始進倉人 | modified_original_entry_staff | modified_orig_inwh_staff |   | char(1) |  |  |  |  |  |
| ICTE17 | 修改原始進倉日期 | modified_original_entry_date | modified_orig_inwh_date |   | char(1) |  |  |  |  |  |
| ICTE18 | 修改永不銷毀原因 | modified_never_destroy_reason | modified_never_destroy_reason |   | char(1) |  |  |  |  |  |
| ICTE19 | 原進倉類型 | original_entry_type | orig_inwh_type |   | char(1) |  |  |  |  |  |
| ICTE20 | 修改內容 | modified_content | modified_content |   | char(1) |  |  |  |  |  |
| ICTE21 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  |  |  |
| ICTE22 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  |  |  |
| ICTE23 | 備註 | remarks | remark |   | varchar(254) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| id | 異動單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
