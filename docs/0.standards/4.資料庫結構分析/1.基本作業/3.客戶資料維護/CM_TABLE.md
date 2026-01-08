# CM
**中文名稱：** 客戶主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no | customerId  | char(5) |  |  | Y |  |  |
| CM01 | 客戶簡稱 | customer_short_name | cust_short_name | shortName  | char(20) |  |  |  |  |  |
| CM02 | 客戶名稱 | customer_name | cust_name | customerName  | char(60) |  |  |  |  |  |
| CM03 | 發票名稱 | invoice_name | invoice_name | invoiceName  | char(60) |  |  |  |  |  |
| CM04 | 業務人員 | sales_staff | sales_staff | salesPerson  | char(10) |  |  |  | Y | Value：EMP.EMP00，Display：EMP.EMP01，Condition：EMP.EMP00=CM.CM04 |
| CM05 | 客戶類別 | customer_category | cust_category | category  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='02' AND CDS.CDS00=CM.CM05 |
| CM06 | 統一編號 | tax_no_number | uniform_code | taxId  | char(8) |  |  |  |  |  |
| CM07 | 負責人 | responsible_person | responsible_staff | owner  | char(30) |  |  |  |  |  |
| CM08 | 合約起日 | contract_start_date | contract_start_date | contractStartDate  | char(8) |  |  |  |  |  |
| CM09 | 合約止日 | contract_end_date | contract_end_date | contractEndDate  | char(8) |  |  |  |  |  |
| CM10 | 發票種類 | invoice_type | invoice_type | invoiceType  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='21' AND CDS.CDS00=CM.CM10 |
| CM11 | 發票聯式 | invoice_copy_type | invoice_form | invoiceForm  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='22' AND CDS.CDS00=CM.CM11 |
| CM12 | 報價含稅 | quotation_incl_tax | quotation_incl_tax | quotationIncludeTax  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='23' AND CDS.CDS00=CM.CM12 |
| CM13 | 聯絡人 | contact_person | contact_person | contactPerson  | char(30) |  |  |  |  |  |
| CM14 | 聯絡電話 | contact_phone | contact_phone | contactPhone  | char(20) |  |  |  |  |  |
| CM15 | 行動電話 | mobile_phone | mobile_phone | contactMobile  | char(20) |  |  |  |  |  |
| CM16 | 傳真號碼 | fax_number | fax_no | contactFax  | char(20) |  |  |  |  |  |
| CM17 | EMAIL | email | email | contactEmail  | varchar(40) |  |  |  |  |  |
| CM18 | 網路密碼(Reserved) | network_password | net_password | netPassword  | char(10) |  |  |  |  |  |
| CM19 | 公司地址 | company_address | company_addr | companyAddress  | varchar(80) |  |  |  |  |  |
| CM20 | 帳單地址 | invoice_address | bill_addr | billAddress  | varchar(80) |  |  |  |  |  |
| CM21 | 公司郵遞區號 | company_zip_code | company_zip | companyZipCode  | char(5) |  |  |  |  |  |
| CM22 | 帳單郵遞區號 | invoice_zip_code | bill_zip | billZipCode  | char(5) |  |  |  |  |  |
| CM23 | 收款客戶編號 | payment_customer_no | payment_customer_code | paymentCustomerId  | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CM.CM23 |
| CM24 | 付款條件 | payment_terms | payment_terms | paymentTerms  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='22' AND CDS.CDS00=CM.CM24 |
| CM25 | 固定折讓 | fixed_discount | fixed_discount | fixedDiscount  | int(4) |  |  |  |  |  |
| CM26 | 箱號編碼(Reserved) | box_number_code | box_no_code | boxNoCode  | char(3) |  |  |  |  |  |
| CM27 | 借出天數限制 | borrowing_day_limit | borrow_days_limit | borrowDaysLimit  | int(4) |  |  |  |  |  |
| CM28 | 備註 | remarks | remark | remark  | varchar(60) |  |  |  |  |  |
| CM29 | 預設倉庫(Reserved) | default_warehouse | default_wh | defaultWarehouse  | char(1) |  |  |  |  |  |
| CM30 | 分機 | extension_number | extension | extension  | char(10) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by | createdBy  | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CM.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date | createdAt  | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by | updatedBy  | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CM.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date | updatedAt  | char(14) |  |  |  |  |  |
| CM31 | 是否解約 | is_terminated | is_contract_terminated | isContractTerminated  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CM.CM31 |
| CM32 | 箱號唯一(Reserved) | box_number_unique | box_no_unique | boxNoUnique  | char(1) |  |  |  |  |  |
| CM33 | 件號唯一(Reserved) | item_number_unique | item_no_unique | itemNoUnique  | char(1) |  |  |  |  |  |
| CM34 | 自動回信主管 | auto_reply_manager | auto_reply_mgr | autoReplyMgr  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CM.CM34 |
| CM35 | 計算方式 | calculation_method | calc_method | calcMethod  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='39' AND CDS.CDS00=CM.CM35 |
| CM36 | 是否停用 | is_disabled | is_disabled | isInvalid  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CM.CM36 |
| CM37 | 停用日期 | disabled_date | disabled_date | invalidDate  | char(8) |  |  |  |  |  |
| CM38 | 是否顯示個資警語 | is_personal_data_warning_displayed | is_show_privacy_warning | isShowPrivacyWarning  | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CM.CM38 |
| id | 客戶序號 | customer_id | id | id  | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver | lockVer  | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time | createdTime  | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time | updatedTime  | datetime(8) |  |  |  |  |  |
