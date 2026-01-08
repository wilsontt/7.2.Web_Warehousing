# CAM
**中文名稱：** 箱子庫存

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CAM.CM00 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=CAM.CM00 AND CMD.CMD00=CAM.CMD00 |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  |  | Y | Value：CCAF.CAF00，Display：CCAF.CAF01，Condition：CCAF.CM00=CAM.CM00 AND CCAF.CAF00=CAM.CAS00 |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=CAM.WH100 |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=CAM.CM00 AND CMD.CMD14=CAM.CMS00 |
| CAM01 | 新進日期 | new_entry_date | new_in_date |   | char(8) |  |  |  |  |  |
| CAM02 | 新進單號 | new_entry_order_number | new_in_order_no |   | char(10) |  |  |  |  |  |
| CAM03 | 出倉日期 | outbound_date | outbound_date |   | char(8) |  |  |  |  |  |
| CAM04 | 出倉單號 | outbound_order_number | outbound_order_no |   | char(10) |  |  |  |  |  |
| CAM05 | 返倉日期 | return_to_storage_date | return_date |   | char(8) |  |  |  |  |  |
| CAM06 | 返倉單號 | return_to_storage_order_number | return_order_no |   | char(10) |  |  |  |  |  |
| CAM07 | 銷毀日期 | destruction_date | destroy_date |   | char(8) |  |  |  |  |  |
| CAM08 | 銷毀單號 | destruction_order_number | destroy_order_no |   | char(10) |  |  |  |  |  |
| CAM09 | 預定銷毀日 | scheduled_destruction_date | scheduled_destroy_date |   | char(8) |  |  |  |  |  |
| CAM10 | 目前狀態 | current_status | curr_status |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='09' AND CDS.CDS00=CAM.CAM10 |
| CAM11 | 進倉前狀態 | pre_inbound_status | inwh_before_status |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='09' AND CDS.CDS00=CAM.CAM11 |
| CAM12 | 銷毀前狀態 | destruction_previous_status | destroy_before_status |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='09' AND CDS.CDS00=CAM.CAM12 |
| CAM13 | 內容 | content | content |   | varchar(1024) |  |  |  |  |  |
| CAM14 | 現閱日期 | on_site_view_date | onsite_view_date |   | char(8) |  |  |  |  |  |
| CAM15 | 現閱單號 | on_site_view_order_number | onsite_view_order_no |   | char(10) |  |  |  |  |  |
| CAM16 | 移出日期 | move_out_date | move_out_date |   | char(8) |  |  |  |  |  |
| CAM17 | 移出單號 | move_out_order_number | move_out_order_no |   | char(10) |  |  |  |  |  |
| CAM18 | 移入日期 | move_in_date | move_in_date |   | char(8) |  |  |  |  |  |
| CAM19 | 移入單號 | move_in_order_number | move_in_order_no |   | char(10) |  |  |  |  |  |
| CAM20 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| CAM21 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=CAM.CM00 AND CMD.CMD14=CAM.CAM21 |
| CAM22 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAM.CM00 AND CMP.CMP00=CAM.CAM22 |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=CAM.CM00 AND CMD.CMD16=CAM.CTM00 |
| CAM23 | 工作原因 | work_reason | work_reason |   | char(2) |  |  |  |  |  |
| CAM24 | 前工作原因 | previous_work_reason | prev_work_reason |   | char(2) |  |  |  |  |  |
| CAM25 | 異動日期 | change_date | change_date |   | char(8) |  |  |  |  |  |
| CAM26 | 異動單號 | change_order_number | change_order_no |   | char(10) |  |  |  |  |  |
| CAM27 | 在倉件數 | in_storage_item_count | inwh_item_qty |   | float(8) |  |  |  |  |  |
| CAM28 | 最近借領箱人 | latest_borrow_box_person | last_borrow_box_person |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAM.CM00 AND CMP.CMP00=CAM.CAM28 |
| CAM29 | 最近借領審核主管 | latest_borrow_review_manager | last_borrow_review_mgr |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAM.CM00 AND CMP.CMP00=CAM.CAM29 |
| CAM30 | 最近借領審核管理主管 | latest_borrow_review_admin_manager | last_borrow_review_admin_mgr |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAM.CM00 AND CMP.CMP00=CAM.CAM30 |
| CAM31 | 原始進倉日期 | original_entry_date | orig_inwh_date |   | char(8) |  |  |  |  |  |
| CAM32 | 盤點日期 | stocktaking_date | stocktake_date |   | char(8) |  |  |  |  |  |
| CAM33 | 盤點單號 | stocktaking_order_number | stocktake_order_no |   | char(10) |  |  |  |  |  |
| CAM34 | 調整日期 | adjustment_date | adjust_date |   | char(8) |  |  |  |  |  |
| CAM35 | 調整單號 | adjustment_order_number | adjust_order_no |   | char(10) |  |  |  |  |  |
| CAM36 | 傳真日期 | fax_date | fax_date |   | char(8) |  |  |  |  |  |
| CAM37 | 傳真單號 | fax_order_number | fax_order_no |   | char(10) |  |  |  |  |  |
| CAM38 | 最近借領通知人 | latest_borrow_notification_person | last_borrow_notify |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAM.CM00 AND CMP.CMP00=CAM.CAM38 |
| CAM39 | 已放件數 | placed_item_quantity | placed_item_qty |   | int(4) |  |  |  |  |  |
| CAM40 | 封箱編號 | seal_box_no | seal_box_no |   | char(10) |  |  |  |  |  |
| CAM41 | 永不銷毀原因 | never_destroy_reason | never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| CAM42 | 書面簽核主管 | document_sign_manager | doc_sign_mgr |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAM.CM00 AND CMP.CMP00=CAM.CAM42 |
| CAM43 | 處理狀態 | process_status | proc_status |   | char(3) |  |  |  |  |  |
| CAM44 | 處理單號 | process_order_number | proc_order_no |   | char(10) |  |  |  |  |  |
| STP00 | 存放類型 | storage_type | storage_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='31' AND CDS.CDS00=CAM.STP00 |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CAM.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CAM.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| CAM45 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
| CAM46 | 處理鎖定(保留) | process_lock | proc_lock |   | char(3) |  |  |  |  |  |
| CAM47 | 新預定銷毀日期(停用) | new_scheduled_destruction_date_disabled | new_plan_destroy_date_disabled |   | char(8) |  |  |  |  |  |
| CAM48 | 是否已解Hold | is_hold_released | is_hold_released |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=CAM.CAM48 |
| CAM49 | LegalHold備註 | legal_hold_note | legal_hold_note |   | varchar(254) |  |  |  |  |  |
| CAM50 | 棧板編號 | pallet_no | pallet_code |   | char(20) |  |  |  |  |  |
| CAM51 | 木箱編號 | wooden_box_no | wood_box_no |   | char(20) |  |  |  |  |  |
| CAM52 | 轉出單號 | transfer_out_order_number | transfer_out_order_no |   | char(10) |  |  |  |  |  |
| CAM54 | 轉入單號 | transfer_in_order_number | transfer_in_order_no |   | char(10) |  |  |  |  |  |
| CAM53 | 轉出日期 | transfer_out_date | transfer_out_date |   | char(8) |  |  |  |  |  |
| CAM55 | 轉入日期 | transfer_in_date | transfer_in_date |   | char(8) |  |  |  |  |  |
| id | 存倉(箱子)工作單箱子暫存序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
