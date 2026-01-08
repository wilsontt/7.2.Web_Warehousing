# CAD
**中文名稱：** 存倉(物件)

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CAD.CM00 |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=CAD.CM00 AND CMD.CMD00=CAD.CMD00 |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| CAD01 | 新進日期 | new_entry_date | new_in_date |   | char(8) |  |  |  |  |  |
| CAD02 | 新進單號 | new_entry_order_number | new_in_order_no |   | char(10) |  |  |  |  |  |
| CAD03 | 出倉日期 | outbound_date | outbound_date |   | char(8) |  |  |  |  |  |
| CAD04 | 出倉單號 | outbound_order_number | outbound_order_no |   | char(10) |  |  |  |  |  |
| CAD05 | 返倉日期 | return_to_storage_date | return_date |   | char(8) |  |  |  |  |  |
| CAD06 | 返倉單號 | return_to_storage_order_number | return_order_no |   | char(10) |  |  |  |  |  |
| CAD07 | 目前狀態 | current_status | curr_status |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='09' AND CDS.CDS00=CAD.CAD07 |
| CAD08 | 進出型式 | in_out_type | io_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='10' AND CDS.CDS00=CAD.CAD08 |
| CAD09 | 進倉前狀態 | pre_inbound_status | inwh_before_status |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='09' AND CDS.CDS00=CAD.CAD09 |
| CAD10 | 前次借出型式 | previous_borrowing_type | prev_borrow_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='10' AND CDS.CDS00=CAD.CAD10 |
| CAD11 | 內容 | content | content |   | varchar(512) |  |  |  |  |  |
| CAD12 | 預定銷毀日 | scheduled_destruction_date | scheduled_destroy_date |   | char(8) |  |  |  |  |  |
| CAD13 | 銷毀日期 | destruction_date | destroy_date |   | char(8) |  |  |  |  |  |
| CAD14 | 銷毀單號 | destruction_order_number | destroy_order_no |   | char(10) |  |  |  |  |  |
| CAD15 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| CAD16 | 計價成本中心(停用) | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  |  |  |
| CAD17 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.CAD17 |
| CAD18 | 現閱日期 | on_site_view_date | onsite_view_date |   | char(8) |  |  |  |  |  |
| CAD19 | 現閱單號 | on_site_view_order_number | onsite_view_order_no |   | char(10) |  |  |  |  |  |
| CAD20 | 工作原因 | work_reason | work_reason |   | char(2) |  |  |  |  |  |
| CAD21 | 前工作原因 | previous_work_reason | prev_work_reason |   | char(2) |  |  |  |  |  |
| CAD22 | 異動日期 | change_date | change_date |   | char(8) |  |  |  |  |  |
| CAD23 | 異動單號 | change_order_number | change_order_no |   | char(10) |  |  |  |  |  |
| CAD24 | 最近借領件人 | latest_borrower | last_borrow_person |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.CAD24 |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=CAD.CM00 AND CMD.CMD16=CAD.CTM00 |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=CAD.CM00 AND CMD.CMD14=CAD.CMS00 |
| CAD25 | 最近借領審核主管 | latest_borrow_review_manager | last_borrow_review_mgr |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.CAD25 |
| CAD26 | 最近借領審核管理主管 | latest_borrow_review_admin_manager | last_borrow_review_admin_mgr |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.CAD26 |
| CAD27 | 原始進倉日期 | original_entry_date | orig_inwh_date |   | char(8) |  |  |  |  |  |
| CAD28 | 盤點日期 | stocktaking_date | stocktake_date |   | char(8) |  |  |  |  |  |
| CAD29 | 盤點單號 | stocktaking_order_number | stocktake_order_no |   | char(10) |  |  |  |  |  |
| CAD30 | 調整日期 | adjustment_date | adjust_date |   | char(8) |  |  |  |  |  |
| CAD31 | 調整單號 | adjustment_order_number | adjust_order_no |   | char(10) |  |  |  |  |  |
| CAD32 | 傳真日期 | fax_date | fax_date |   | char(8) |  |  |  |  |  |
| CAD33 | 傳真單號 | fax_order_number | fax_order_no |   | char(10) |  |  |  |  |  |
| CAD34 | 進倉類型 | inbound_type | inwh_type |   | char(3) |  |  |  |  |  |
| CAD35 | 最近借領通知人員 | latest_borrow_notification_staff | last_borrow_notify_staff |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.CAD35 |
| CAD36 | 件序 | item_sequence | item_seq |   | char(20) |  |  |  |  |  |
| CAD37 | 永不銷毀原因 | never_destroy_reason | never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| CAD38 | 書面簽核主管 | document_sign_manager | doc_sign_mgr |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.CAD38 |
| CAD39 | 處理狀態 | process_status | proc_status |   | char(3) |  |  |  |  |  |
| CAD40 | 處理單號 | process_order_number | proc_order_no |   | char(10) |  |  |  |  |  |
| CAD41 | 移出日期 | move_out_date | move_out_date |   | char(8) |  |  |  |  |  |
| CAD42 | 移出單號 | move_out_order_number | move_out_order_no |   | char(10) |  |  |  |  |  |
| CAD43 | 移入日期 | move_in_date | move_in_date |   | char(8) |  |  |  |  |  |
| CAD44 | 移入單號 | move_in_order_number | move_in_order_no |   | char(10) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CAD.CRE_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.CRE_USERID) |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=CAD.UPD_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=CAD.UPD_USERID) |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| CAD45 | 件識別碼 | item_guid | item_guid |   | char(40) |  |  |  |  |  |
| id | 工作單物件庫存暫存序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  | Y | Y | Value：CAM.id，Condition：CAM.CM00=CAD.CM00 AND CAM.CMD00=CAD.CMD00 AND CAM.CAN00=CAD.CAN00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| CAD47 | 轉出單號 | transfer_out_order_number | transfer_out_order_no |   | char(10) |  |  |  |  |  |
| CAD48 | 轉出日期 | transfer_out_date | transfer_out_date |   | char(8) |  |  |  |  |  |
| CAD49 | 轉入單號 | transfer_in_order_number | transfer_in_order_no |   | char(10) |  |  |  |  |  |
| CAD50 | 轉入日期 | transfer_in_date | transfer_in_date |   | char(8) |  |  |  |  |  |
| CAD51 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  | Y | Value：CAM.CAM45，Condition：CAM.CM00=CAD.CM00 AND CAM.CMD00=CAD.CMD00 AND CAM.CAN00=CAD.CAN00 |
