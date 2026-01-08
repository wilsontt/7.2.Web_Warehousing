# CMD
**中文名稱：** 客戶部門

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no | customerId  | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CMD.CM00 |
| CMD00 | 部門編號 | department_no | dept_no | code  | char(4) |  |  | Y |  |  |
| CMD01 | 部門名稱 | department_name | dept_name | name  | char(60) |  |  |  |  |  |
| CMD02 | 聯絡人 | contact_person | contact_person | contactPerson  | char(30) |  |  |  |  |  |
| CMD03 | 職稱 | job_title | job_title | contactTitle  | char(20) |  |  |  |  |  |
| CMD04 | 收件電話 | recipient_phone | receive_phone | contactPhone  | char(20) |  |  |  |  |  |
| CMD05 | 手機 | mobile_phone | mobile_phone | mobile  | char(20) |  |  |  |  |  |
| CMD06 | 傳真 | fax | fax | fax  | char(20) |  |  |  |  |  |
| CMD07 | 部門主管EMAIL | department_manager_email | dept_mgr_email | notifyDeptManager  | varchar(40) |  |  |  |  |  |
| CMD08 | 收件地址 | recipient_address | receive_addr | deliveryAddress  | varchar(80) |  |  |  |  |  |
| CMD09 | 備註 | remarks | remark | notes  | varchar(60) |  |  |  |  |  |
| CMD10 | 部門代理主管EMAIL | department_proxy_manager_email | dept_proxy_mgr_email | notifyDeptDeputy  | char(40) |  |  |  |  |  |
| CMD11 | 稽核主管EMAIL | audit_manager_email | audit_mgr_email | notifyAuditManager  | char(40) |  |  |  |  |  |
| CMD12 | 收件分機 | recipient_extension | receive_ext | extension  | char(10) |  |  |  |  |  |
| CMD13 | 稽核代理主管EMAIL | audit_proxy_manager_email | audit_proxy_mgr_email | notifyAuditDeputy  | char(40) |  |  |  |  |  |
| CMD14 | 成本中心 | cost_center_no | cost_center_no | costCenter  | char(10) |  |  |  |  |  |
| CMD15 | 統一編號 | tax_no_number | uniform_code | taxId  | char(8) |  |  |  |  |  |
| CMD16 | 組別編號 | team_no | team_no | orgCode  | char(10) |  |  |  |  |  |
| CMD17 | 可收箱 | receivable_boxes | can_receive_box | canReceiveBox  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD17 |
| CMD18 | 可收件 | receivable_items | can_receive_item | canReceiveItem  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD18 |
| CMD19 | 可送箱 | deliverable_boxes | can_send_box | canSendBox  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD19 |
| CMD20 | 可送件 | deliverable_items | can_send_item | canSendItem  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD20 |
| CMD21 | 可銷毀箱 | destructible | can_destroy | canDestroy  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD21 |
| CMD22 | 可現閱箱 | readable_on_site | can_view_on_site | canOnSiteReview  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD22 |
| CMD23 | 收送地址可改 | delivery_address_editable | delivery_addr_editable | canModifyAddress  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD23 |
| CMD24 | 外借未歸通知 | external_borrow_unreturned_notice | loan_unreturned_notify | notifyUnreturned  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD24 |
| CMD25 | 銷毀到期通知 | destruction_due_notification | destroy_expire_notify | notifyDestroyExpiring  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD25 |
| CMD26 | 申請未簽通知 | application_unsigned_notice | apply_unsigned_notify | notifyUnsigned  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD26 |
| CMD27 | 合約到期通知 | contract_expiration_notice | contract_expiry_notify | notifyContractExpiring  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD27 |
| CRE_USERID | 建檔人員 | created_by | created_by | createdBy  | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CMD.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date | createdAt  | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by | updatedBy  | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CMD.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date | updatedAt  | char(14) |  |  |  |  |  |
| CMD28 | 已放箱數 | placed_box_quantity | placed_box_qty | placedBoxQty  | int(4) |  |  |  |  |  |
| CMD29 | 在倉箱數 | in_storage_box_count | inwh_box_qty | boxCount  | int(4) |  |  |  |  |  |
| CMD30 | 已放件數 | placed_item_quantity | placed_item_qty | placedItemQty  | int(4) |  |  |  |  |  |
| CMD31 | 在倉件數 | in_storage_item_count | inwh_item_qty | itemCount  | int(4) |  |  |  |  |  |
| CMD32 | 預銷日期檢查 | pre_destruction_date_check | destroy_date_check | checkPreDestroyDate  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD32 |
| CMD33 | 收送區域 | delivery_region | delivery_region | deliveryArea  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='29' AND CDS.CDS00=CMD.CMD33 |
| CMD34 | 是否停用 | is_disabled | is_disabled | isDisabled  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CMD.CMD34 |
| CMD35 | 停用日期 | disabled_date | disabled_date | disabledDate  | char(8) |  |  |  |  |  |
| CMD36 | 送件電話 | delivery_phone | send_item_phone | sendItemPhone  | char(20) |  |  |  |  |  |
| CMD37 | 送件分機 | delivery_extension | send_item_ext | sendItemExt  | char(10) |  |  |  |  |  |
| CMD38 | 送件地址 | delivery_address | send_item_addr | sendItemAddress  | varchar(80) |  |  |  |  |  |
| CMD39 | 計算方式 | calculation_method | calc_method | calculationMethod  | char(3) |  |  |  |  |  |
| id | 部門序號 | id | id | id  | bigint(8) | Y | Y | Y |  |  |
| cm_id | 客戶序號 | customer_id | cust_id | custId  | bigint(8) |  |  | Y | y | Value：CM.id，Condition：CM.CM00=CMD.CM00 |
| lock_version | 鎖定版本 | lock_version | lock_ver | lockVer  | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time | createdTime  | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time | updatedTime  | datetime(8) |  |  |  |  |  |
