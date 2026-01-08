# JBD
**中文名稱：** 工作箱子

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JBM00 | 工作單號 | work_order_number | work_order_no |   | char(10) |  |  |  | Y | Value：JBM.JBM00，Display：JBM.JBM00，Condition：JBM.CM00=JBD.CM00 AND JBM.JBM00=JBD.JBM00 |
| JBM00 | 工作單號 | work_order_number | work_order_no |   | char(10) |  |  | Y | Y | Value：JBM.JBM00，Display：JBM.JBM00，Condition：JBM.CM00=JBD.CM00 AND JBM.JBM00=JBD.JBM00 |
| CM00 | 通知客戶編號 | notify_customer_no | notify_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBD.CM00 |
| CM00 | 通知客戶編號 | notify_customer_no | notify_cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBD.CM00 |
| CM001 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBD.CM001 |
| CM001 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBD.CM001 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBD.CM001 AND CMD.CMD00=JBD.CMD00 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBD.CM001 AND CMD.CMD00=JBD.CMD00 |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  |  |  |  |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| JBD01 | 工作原因 | work_reason | work_reason |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00=JBD.JBD05 AND CDS.CDS00=JBD.JBD01 |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=JBD.WH100 |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=JBD.CM001 AND CMD.CMD16=JBD.CTM00 |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=JBD.CM001 AND CMD.CMD14=JBD.CMS00 |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  |  | Y | Value：CCAF.CAF00，Display：CCAF.CAF01，Condition：CCAF.CM00=JBD.CM001 AND CCAF.CAF00=JBD.CAS00 |
| JBD02 | 預定銷毀日 | scheduled_destruction_date | scheduled_destroy_date |   | char(8) |  |  |  |  |  |
| JBD03 | 備註 | remarks | remark |   | varchar(1024) |  |  |  |  |  |
| JBD04 | 處理狀態 | process_status | proc_status |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='14' AND CDS.CDS00=JBD.JBD04 |
| JBD05 | 工作項目 | work_task | work_item |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='11' AND CDS.CDS00=JBD.JBD05 |
| JBD06 | 自行收送 | self_delivery | self_delivery |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBD.JBD06 |
| JBD07 | 傳真張數 | fax_page_count | fax_page_qty |   | int(4) |  |  |  |  |  |
| JBD08 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | int(4) |  |  |  |  |  |
| JBD09 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |   |
| JBD10 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD10) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.JBD10) |
| JBD11 | 轉它處理(停用) | transfer_other_processing_disabled | transfer_other_proc_disabled |   | char(1) |  |  |  |  |  |
| JBD12 | 上下架人員 | shelving_staff | move_staff |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD12 |
| JBD13 | 上下架日期時間 | shelving_datetime | move_datetime |   | char(14) |  |  |  |  |  |
| JBD14 | 上下架方式 | shelving_method | move_method |   | char(3) |  |  |  |  |  |
| JBD15 | 稽核人員 | audit_staff | audit_staff |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD15 |
| JBD16 | 稽核日期時間 | audit_datetime | audit_datetime |   | char(14) |  |  |  |  |  |
| JBD17 | 稽核方式 | audit_method | audit_method |   | char(3) |  |  |  |  |  |
| JBD18 | 已結帳 | status_billed | is_settled |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBD.JBD18 |
| JBD19 | 借領貨人 | borrower_cargo_person | borrow_goods_person |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD19) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.JBD19) |
| JBD20 | 借領審核部門主管 | borrower_review_department_manager | borrow_review_dept_mgr |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD20) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.JBD20) |
| JBD21 | 借領審核管理主管 | borrower_review_admin_manager | borrow_review_admin_mgr |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD21) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.JBD21) |
| CUR_DTIME | 實際日期 | actual_date | actual_date |   | datetime(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.CRE_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.CRE_USERID) |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.UPD_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.UPD_USERID) |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| JBD22 | 速別(停用) | delivery_priority_disabled | priority_disabled |   | char(3) |  |  |  |  |  |
| JBD23 | 收送區域(停用) | delivery_region | delivery_region |   | char(3) |  |  |  |  |  |
| JBD24 | 原始進倉日期 | original_entry_date | orig_inwh_date |   | char(8) |  |  |  |  |  |
| JBD25 | 工作通知人員 | work_notification_staff | work_notify_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD25) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.JBD25) |
| JBD26 | 永不銷毀原因 | never_destroy_reason | never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| JBD27 | 書面簽核主管 | document_sign_manager | doc_sign_mgr |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBD.JBD27) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBD.CM001 AND CMP.CMP00=JBD.JBD27) |
| JBD28 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=JBD.JBD33 AND CMD.CMD14=JBD.JBD28 |
| JBD29 | 資料編號 | data_no | data_code |   | varchar(40) |  |  |  |  |  |
| JBD30 | 服務單編號 | service_order_no | service_order_no |   | varchar(30) |  |  |  |  |  |
| JBD31 | 序號 | serial_number | seq_no |   | int(4) |  |  |  |  |  |
| JBD32 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  | Y | Value：CAM.CAM45，Condition：CAM.CM00=JBD.CM001 AND CAM.CMD00=JBD.CMD00 AND CAM.CAN00=JBD.CAN00 |
| JBD33 | 計價客戶編號 | billing_customer_no | billing_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBD.JBD33 |
| JBD34 | 計價部門編號 | billing_department_no | billing_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBD.JBD33 AND CMD.CMD00=JBD.JBD34 |
| JBD35 | 計價組別編號 | billing_team_no | billing_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=JBD.JBD33 AND CMD.CMD16=JBD.JBD35 |
| JBD36 | 儲區種類 | storage_area_type | zone_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='05' AND CDS.CDS00=JBD.JBD36 |
| JBD37 | 存放類型 | storage_type | storage_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='31' AND CDS.CDS00=JBD.JBD37 |
| JBD38 | 掃描張數 | scan_page_count | scan_page_qty |   | int(4) |  |  |  |  |  |
| JBD39 | 抽件件數 | extraction_item_count | extract_item_qty |   | int(4) |  |  |  |  |  |
| JBD46 | 已結案通知 | status_close_notified | is_close_notified |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBD.JBD46 |
| JBD47 | 結案通知時間 | case_close_notification_time | close_notify_time |   | char(14) |  |  |  |  |  |
| JBD48 | 轉出單號 | transfer_out_order_number | transfer_out_order_no |   | char(10) |  |  |  |  |  |
| JBD49 | 轉入單號 | transfer_in_order_number | transfer_in_order_no |   | char(10) |  |  |  |  |  |
| JBD50 | 棧板編號 | pallet_no | pallet_code |   | char(20) |  |  |  |  |  |
| JBD51 | 木箱編號 | wooden_box_no | wood_box_no |   | char(20) |  |  |  |  |  |
| id | 工作單箱子明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  | Y | Value：CAM.id，Condition：CAM.CM00=JBD.CM001 AND CAM.CMD00=JBD.CMD00 AND CAM.CAN00=JBD.CAN00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| jbm_id | 工作單序號 | work_order_id | work_order_id |   | bigint(8) |  |  | Y | Y | Value：JBM.id，Condition：JBM.CM00=JBD.CM00 AND JBM.JBM00=JBD.JBM00 |
