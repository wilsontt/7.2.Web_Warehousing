# ICTL
**中文名稱：** 轉籍箱件編號

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ICTL00 | 轉籍單號 | migration_order_number | migration_order_no |   | char(10) |  |  | Y |  |  |
| CM00 | 申請客戶 | application_customer_no | apply_customer_no |   | char(5) |  |  |  |  |  |
| CMD00 | 申請部門 | application_department_no | apply_dept_no |   | char(4) |  |  |  |  |  |
| CTM00 | 申請組別 | application_team_no | apply_team_no |   | char(10) |  |  |  |  |  |
| CMS00 | 申請成本中心 | application_cost_center_no | apply_cost_center_no |   | char(10) |  |  |  |  |  |
| ICTL01 | 申請日期 | application_date | apply_date |   | char(8) |  |  |  |  |  |
| ICTL02 | 申請人員 | applicant_staff | applicant_staff |   | char(30) |  |  |  |  |  |
| ICTL03 | 異動人員 | change_staff | change_staff |   | char(10) |  |  |  |  |  |
| ICTL04 | 異動日期 | change_date | change_date |   | char(8) |  |  |  |  |  |
| ICTL05 | 異動時間 | change_time | change_time |   | char(4) |  |  |  |  |  |
| ICTL06 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  |  |  |
| ICTL07 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  |  |  |
| ICTL08 | 備註 | remarks | remark |   | varchar(254) |  |  |  |  |  |
| ICTL09 | 倉儲審核主管 | storage_review_manager | storage_review_mgr |   | char(10) |  |  |  |  |  |
| ICTL10 | 倉儲審核日期 | storage_review_date | storage_review_date |   | char(8) |  |  |  |  |  |
| ICTL11 | 倉儲審核時間 | storage_review_time | storage_review_time |   | char(4) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| ICTL12 | 預計變更日期 | expected_change_date | expected_change_date |   | char(8) |  |  |  |  |  |
| ICTL13 | 倉庫主管審核 | warehouse_manager_review | wh_mgr_review |   | char(10) |  |  |  |  |  |
| ICTL14 | 倉庫審核日期 | warehouse_review_date | wh_review_date |   | char(8) |  |  |  |  |  |
| ICTL15 | 倉庫審核時間 | warehouse_review_time | wh_review_time |   | char(4) |  |  |  |  |  |
| id | 轉籍單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
