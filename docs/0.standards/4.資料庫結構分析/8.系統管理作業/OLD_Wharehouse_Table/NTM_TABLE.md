# NTM
**中文名稱：** 通知單

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| NTM00 | 通知單號 | notification_order_number | notify_order_no |   | char(12) |  |  | Y |  |  |
| CM00 | 通知客戶編號 | notify_customer_no | notify_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTM.CM00 |
| CMD00 | 通知部門編號 | notify_department_no | notify_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTM.CM00 AND CMD.CMD00=NTM.CMD00 |
| NTM01 | 通知日期 | notification_date | notify_date |   | char(8) |  |  |  |  |  |
| NTM02 | 通知時間 | notification_time | notify_time |   | char(4) |  |  |  |  |  |
| NTM03 | 收送地址 | delivery_address | delivery_addr |   | varchar(80) |  |  |  |  |  |
| NTM04 | 速別 | delivery_priority | priority |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='12' AND CDS.CDS00=NTM.NTM04 |
| NTM05 | 收箱箱數 | received_box_count | receive_box_qty |   | float(8) |  |  |  |  |  |
| NTM06 | 送箱箱數 | delivery_box_count | send_box_qty |   | float(8) |  |  |  |  |  |
| NTM07 | 銷毀箱數 | destruction_box_count | destroy_box_qty |   | float(8) |  |  |  |  |  |
| NTM08 | 送空箱數量 | delivery_empty_box_count | send_empty_box_qty |   | float(8) |  |  |  |  |  |
| NTM09 | 大條碼數量 | large_barcode_quantity | major_barcode_qty |   | float(8) |  |  |  |  |  |
| NTM10 | 小條碼數量 | small_barcode_quantity | minor_barcode_qty |   | float(8) |  |  |  |  |  |
| NTM11 | 送膠帶數量 | delivery_tape_quantity | send_tape_qty |   | float(8) |  |  |  |  |  |
| NTM12 | 其他工作 | other_tasks | other_task |   | varchar(60) |  |  |  |  |  |
| NTM13 | 部門日期確認 | department_date_confirmed | dept_date_confirm |   | char(8) |  |  |  |  |  |
| NTM14 | 部門時間確認 | department_time_confirmed | dept_time_confirm |   | char(4) |  |  |  |  |  |
| NTM15 | 部門主管確認 | department_manager_confirmed | dept_mgr_confirm |   | char(20) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.NTM15) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.NTM15) |
| NTM16 | 指派倉庫 | assigned_warehouse | assign_wh |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=NTM.NTM16 |
| NTM17 | 備註 | remarks | remark |   | varchar(255) |  |  |  |  |  |
| NTM18 | 轉工作單 | transfer_work_order | transfer_to_job_order |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=NTM.NTM18 |
| NTM19 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=NTM.NTM19 |
| NTM20 | 送件件數 | delivery_item_count | send_item_qty |   | float(8) |  |  |  |  |  |
| NTM21 | 收件件數 | recipient_item_count | receive_item_qty |   | float(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(20) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.CRE_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.CRE_USERID) |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(20) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.UPD_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.UPD_USERID) |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| NTM22 | 防潮袋(袋) | desiccant_bag_count | mbag_bag |   | float(8) |  |  |  |  |  |
| NTM23 | 送回收筒(筒) | recycle_bin_sent_count | send_recycle_bin_qty |   | float(8) |  |  |  |  |  |
| NTM24 | 陪同押車 | escort_with_truck | escort_truck |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=NTM.NTM24 |
| NTM25 | 乾燥劑(包) | desiccant_packs | desiccant_bag |   | float(8) |  |  |  |  |  |
| NTM26 | 裁碎箱數(箱) | shredding_box_count_units | shred_box_count |   | float(8) |  |  |  |  |  |
| NTM27 | 倉庫專車(趟) | warehouse_shuttle_trips | wh_express_trip |   | float(8) |  |  |  |  |  |
| NTM28 | 到府專車(趟) | home_exclusive_trips | home_express_trip |   | float(8) |  |  |  |  |  |
| NTM29 | 到府合併(箱) | home_merge_boxes | home_merge_box |   | float(8) |  |  |  |  |  |
| NTM30 | 倉庫合併(箱) | warehouse_merge_boxes | wh_merge_box |   | float(8) |  |  |  |  |  |
| NTM32 | 預定收送日期 | scheduled_delivery_date | scheduled_delivery_date |   | char(8) |  |  |  |  |  |
| NTM31 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=NTM.NTM31 |
| NTM33 | 收送時間 | delivery_time | delivery_time |   | char(1) |  |  |  |  |  |
| NTM34 | 通知人員 | notification_staff | notify_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.NTM34) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.NTM34) |
| NTM35 | 調閱箱數 | access_box_count | review_box_qty |   | float(8) |  |  |  |  |  |
| NTM36 | 收回收筒(筒) | recycle_bin_count | recycle_bin_qty |   | float(8) |  |  |  |  |  |
| NTM37 | 收送貨人 | delivery_person | delivery_person |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.NTM37) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.NTM37) |
| NTM38 | 收送電話 | delivery_phone | delivery_phone |   | char(20) |  |  |  |  |  |
| NTM39 | 收送分機 | delivery_extension | delivery_ext |   | char(10) |  |  |  |  |  |
| CMS00 | 通知成本中心 | notification_cost_center | notify_cost_center_no |   | char(10) |  |  |  | Y |  |
| NTM40 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.NTM40) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.NTM40) |
| NTM41 | 管理主管確認 | management_manager_confirmed | mgmt_mgr_confirm |   | char(20) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.NTM41) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.NTM41) |
| NTM42 | 管理日期確認 | management_date_confirmed | mgmt_date_confirm |   | char(8) |  |  |  |  |  |
| NTM43 | 管理時間確認 | management_time_confirmed | mgmt_time_confirm |   | char(4) |  |  |  |  |  |
| NTM44 | 已通知次數(保留) | notification_count_reserved | notify_count_reserved |   | int(4) |  |  |  |  |  |
| NTM45 | 已產生通知郵件 | status_notice_email_generated | is_notify_mail_sent |   | char(3) |  |  |  |  |  |
| NTM46 | 已寄出通知郵件 | status_notification_email_sent | is_mail_sent |   | char(3) |  |  |  |  |  |
| UPDATE_USER | 更新者 | updated_by |  |   | varchar(20) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.UPDATE_USER) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.UPDATE_USER) |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | char(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
| BILLTPYE | 單據類型 | doc_type |  |   | varchar(10) |  |  |  |  |  |
| FLOWFLAG | 流程旗標 | flow_flag |  |   | char(1) |  |  |  |  |  |
| FLOWIMPORTANT | 流程重要性 | flow_importance |  |   | char(1) |  |  |  |  |  |
| FLOWURGENT | 流程緊急性 | flow_urgency |  |   | char(1) |  |  |  |  |  |
| RECORD_OWNER | 記錄擁有者 | record_owner |  |   | varchar(20) |  |  |  |  |  |
| RECORD_OWNER_R | 記錄次要擁有者 | record_owner_secondary |  |   | varchar(12) |  |  |  |  |  |
| JBM00 | 工作單號 | work_order_number | work_order_no |   | char(10) |  |  |  | Y | Value：JBM.JBM00，Display：JBM.JBM00，Condition：JBM.NTM00=NTM.NTM00 |
| NTM47 | 資料交換收件郵戳 | data_exchange_received_postmark | data_exchange_recv_postmark |   | char(14) |  |  |  |  |  |
| NTM48 | 資料交換寄件郵戳 | data_exchange_sent_postmark | data_exchange_send_postmark |   | char(14) |  |  |  |  |  |
| NTM49 | 資料交換已轉單 | data_exchange_transferred | is_data_exchange_forwarded |   | char(1) |  |  |  |  |  |
| NTM50 | 資料交換已回信 | data_exchange_replied | is_data_exchange_replied |   | char(1) |  |  |  |  |  |
| NTM51 | 資料交換寄件信箱 | data_exchange_sent_mailbox | data_exchange_send_mailbox |   | varchar(80) |  |  |  |  |  |
| NTM52 | 書面簽核主管(Reserved) | document_sign_manager_reserved | doc_sign_mgr_reserved |   | float(8) |  |  |  |  |  |
| NTM53 | 收送區域(Reserved) | delivery_region | delivery_region |   | float(8) |  |  |  |  |  |
| NTM54 | 銷毀件數 | destruction_item_count | destroy_item_qty |   | float(8) |  |  |  |  |  |
| NTM55 | 現閱件數 | on_site_view_item_count | onsite_view_item_qty |   | float(8) |  |  |  |  |  |
| NTM56 | 書面簽核主管 | document_sign_manager | doc_sign_mgr |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTM.NTM56) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTM.CM00 AND CMP.CMP00=NTM.NTM56) |
| NTM57 | 收送區域 | delivery_region | delivery_region |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='29' AND CDS.CDS00=NTM.NTM57 |
| NTM58 | 資料編號 | data_no | data_code |   | varchar(40) |  |  |  |  |  |
| NTM59 | 服務單編號 | service_order_no | service_order_no |   | varchar(30) |  |  |  |  |  |
| NTM60 | 銷毀袋數量 | destruction_bag_quantity | destroy_bag_qty |   | float(8) |  |  |  |  |  |
| NTM61 | 材料運送趟數(Reserved) | material_transport_trips_reserved | material_ship_trip_qty_reserved |   | float(8) |  |  |  |  |  |
| CTM00 | 通知組別編號 | notify_team_no | notify_team_no |   | char(10) |  |  |  | Y |  |
| NTM63 | 計價客戶編號 | billing_customer_no | billing_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTM.NTM63 |
| NTM64 | 計價部門編號 | billing_department_no | billing_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTM.NTM63 AND CMD.CMD00=NTM.NTM64 |
| NTM65 | 計價組別 | billing_team_no | billing_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=NTM.NTM63 AND CMD.CMD16=NTM.NTM65 |
| NTM66 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=NTM.NTM63 AND CMD.CMD14=NTM.NTM66 |
| NTM67 | 業務人員 | sales_staff | sales_staff |   | char(10) |  |  |  | Y | Value：EMP.EMP00，Display：EMP.EMP01，Condition：EMP.EMP00=NTM.NTM67 |
| id | 通知單序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
