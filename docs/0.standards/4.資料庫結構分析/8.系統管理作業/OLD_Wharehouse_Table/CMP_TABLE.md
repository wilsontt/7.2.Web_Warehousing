# CMP
**中文名稱：** 客戶使用者

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no | customerId  | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CMP.CM00 |
| CMP00 | 使用者帳號 | user_no | user_no |   | char(20) |  |  | Y |  |  |
| CMP01 | 姓名 | full_name | name | name  | char(30) |  |  |  |  |  |
| CMP03 | 職稱 | job_title | job_title | jobTitle  | char(20) |  |  |  |  |  |
| CMP04 | 收貨電話 | consignee_phone | goods_recv_phone | phone  | char(20) |  |  |  |  |  |
| CMP05 | 行動電話 | mobile_phone | mobile_phone | mobile  | char(20) |  |  |  |  |  |
| CMP06 | 收貨傳真 | consignee_fax | goods_recv_fax | fax  | char(20) |  |  |  |  |  |
| CMP07 | EMAIL | email | email | email  | varchar(40) |  |  |  |  |  |
| CMP08 | 收貨分機 | consignee_extension | goods_recv_ext | ext  | char(10) |  |  |  |  |  |
| CMP09 | 備註 | remarks | remark | remark  | varchar(60) |  |  |  |  |  |
| CMP10 | 收貨地址 | consignee_address | goods_recv_addr | deliveryAddress  | varchar(80) |  |  |  |  |  |
| CMP11 | 是否分行主管 | is_branch_manager | is_branch_mgr | isBranchMgr  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP11 |
| CMP12 | 是否分行主管審核 | is_branch_manager_reviewed | is_branch_mgr_reviewed | first-level  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP12 |
| CMP13 | 是否管理部主管 | is_admin_manager | is_admin_mgr | isAdminMgr  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP13 |
| CMP14 | 是否管理部主管審核 | is_admin_manager_reviewed | is_admin_mgr_reviewed | second-level  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP14 |
| CMP15 | 分行主管審核轉單 | branch_manager_review_transfer_order | branch_mgr_review_transfer | SAME_DEPARTMENT  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP15 |
| CMP16 | 管理主管審核轉單 | management_manager_review_transfer | mgmt_mgr_review_forward | ALL_DEPARTMENTS  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP16 |
| CMP17 | 共用密碼 | shared_password | shared_pwd | sharedPwd  | char(10) |  |  |  |  |  |
| CMP18 | 臨時密碼 | temp_password | temp_password | tempPassword  | char(10) |  |  |  |  |  |
| CMP19 | 歸屬部門 | belonging_department_no | belong_dept_no | departmentId  | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=CMP.CM00 AND CMD.CMD00=CMP.CMP19 |
| CMP20 | 是否停用 | is_disabled | is_disabled | isDisabled  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP20 |
| CMP21 | 停用日期 | disabled_date | disabled_date | disabledDate  | char(8) |  |  |  |  |  |
| CMP22 | 收送區域 | delivery_region | delivery_region | deliveryRegion  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='29' AND CDS.CDS00=CMP.CMP22 |
| CMP27 | 申請日期 | application_date | apply_date | applyDate  | char(8) |  |  |  |  |  |
| CMP28 | 可否下單 | order_allowed | can_place_order | canPlaceOrder  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP28 |
| CMP29 | 是否工單結案通知 | is_work_order_close_notice | is_workorder_close_notified | isWorkorderCloseNotified  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMP29 |
| id | 客戶使用者序號 | id | id | id  | bigint(8) | Y | Y | Y |  |  |
| cm_id | 客戶序號 | customer_id | cust_id | custId  | bigint(8) |  |  | Y | Y | Value：CM.id，Condition：CM.CM00=CMP.CM00 |
| lock_version | 鎖定版本 | lock_version | lock_ver | lockVer  | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time | createdTime  | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time | updatedTime  | datetime(8) |  |  |  |  |  |
