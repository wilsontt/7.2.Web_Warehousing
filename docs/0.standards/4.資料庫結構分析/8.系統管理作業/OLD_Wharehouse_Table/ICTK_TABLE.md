# ICTK
**中文名稱：** 異動箱件內容

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTK00 | 異動單號 | change_order_number | change_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 申請客戶 | application_customer_no | apply_customer_no |   | char(5) |  |  |  |  |  |
| CMD00 | 申請部門 | application_department_no | apply_dept_no |   | char(4) |  |  |  |  |  |
| CTM00 | 申請組別 | application_team_no | apply_team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 申請成本中心 | application_cost_center_no | apply_cost_center_no |   | char(10) |  |  |  |  |  |
| ICTK01 | 申請日期 | application_date | apply_date |   | char(8) |  |  |  |  |  |
| ICTK02 | 申請人員 | applicant_staff | applicant_staff |   | char(30) |  |  |  |  |  |
| ICTK03 | 異動人員 | change_staff | change_staff |   | char(10) |  |  |  |  |  |
| ICTK04 | 異動日期 | change_date | change_date |   | char(8) |  |  |  |  |  |
| ICTK05 | 異動時間 | change_time | change_time |   | char(4) |  |  |  |  |  |
| ICTK06 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  |  |  |
| ICTK07 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  |  |  |
| ICTK08 | 備註 | remarks | remark |   | varchar(254) |  |  |  |  |  |
| ICTK09 | 箱子_組別編號 | box_team_no | box_team_no |   | char(3) |  |  |  |  |  |
| ICTK10 | 箱子_成本中心 | box_cost_center | box_cost_center |   | char(3) |  |  |  |  |  |
| ICTK11 | 箱子_箱子種類 | box_type_alt | box_type |   | char(3) |  |  |  |  |  |
| ICTK12 | 箱子_對應箱號 | box_related_box_number | box_ref_box_no |   | char(3) |  |  |  |  |  |
| ICTK13 | 箱子_預定銷毀日 | box_scheduled_destruction_date | box_scheduled_destroy_date |   | char(3) |  |  |  |  |  |
| ICTK14 | 箱子_原始進倉人 | box_original_entry_staff | box_orig_inwh_staff |   | char(3) |  |  |  |  |  |
| ICTK15 | 箱子_原始進倉日期 | box_original_entry_date | box_orig_inwh_date |   | char(3) |  |  |  |  |  |
| ICTK16 | 箱子_永不銷毀原因 | box_never_destroy_reason | box_never_destroy_reason |   | char(3) |  |  |  |  |  |
| ICTK17 | 箱子_書面審核主管 | box_document_review_manager | box_doc_review_mgr |   | char(3) |  |  |  |  |  |
| ICTK18 | 箱子_內容 | box_content | box_content |   | char(3) |  |  |  |  |  |
| ICTK19 | 物件_組別編號 | object_team_no | obj_team_no |   | char(3) |  |  |  |  |  |
| ICTK20 | 物件_成本中心 | object_cost_center | obj_cost_center |   | char(3) |  |  |  |  |  |
| ICTK21 | 物件_對應箱號 | object_related_box_number | obj_ref_box_no |   | char(3) |  |  |  |  |  |
| ICTK22 | 物件_件序 | object_item_seq | obj_item_seq |   | char(3) |  |  |  |  |  |
| ICTK23 | 物件_預定銷毀日 | object_scheduled_destruction_date | obj_plan_destroy_date |   | char(3) |  |  |  |  |  |
| ICTK24 | 物件_原始進倉人 | object_original_entry_staff | obj_orig_inwh_staff |   | char(3) |  |  |  |  |  |
| ICTK25 | 物件_原始進倉日期 | object_original_entry_date | obj_orig_inwh_date |   | char(3) |  |  |  |  |  |
| ICTK26 | 物件_永不銷毀原因 | object_never_destroy_reason | obj_never_destroy_reason |   | char(3) |  |  |  |  |  |
| ICTK27 | 物件_書面審核主管 | object_document_review_manager | obj_doc_review_mgr |   | char(3) |  |  |  |  |  |
| ICTK28 | 物件_進倉類型 | object_entry_type | obj_inwh_type |   | char(3) |  |  |  |  |  |
| ICTK29 | 物件_內容 | object_content | obj_content |   | char(3) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTK31 | 審核主管 | review_manager | review_mgr |   | char(10) |  |  |  |  |  |
| ICTK32 | 審核日期 | review_date | review_date |   | char(8) |  |  |  |  |  |
| ICTK33 | 審核時間 | review_time | review_time |   | char(4) |  |  |  |  |  |
| ICTK34 | 預計變更日期 | expected_change_date | expected_change_date |   | char(8) |  |  |  |  |  |
| ICTK35 | 倉庫審核主管 | warehouse_review_manager | wh_review_mgr |   | char(10) |  |  |  |  |  |
| ICTK36 | 倉庫審核日期 | warehouse_review_date | wh_review_date |   | char(8) |  |  |  |  |  |
| ICTK37 | 倉庫審核時間 | warehouse_review_time | wh_review_time |   | char(4) |  |  |  |  |  |
| id | 異動單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
