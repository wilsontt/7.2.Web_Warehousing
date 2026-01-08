# JBM
**中文名稱：** 工作單

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 通知客戶編號 | notify_customer_no | notify_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBM.CM00 |
| CM00 | 通知客戶編號 | notify_customer_no | notify_cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBM.CM00 |
| JBM00 | 工作單號 | work_order_number | work_order_no |   | char(10) |  |  |  |  |  |
| JBM00 | 工作單號 | work_order_number | work_order_no |   | char(10) |  |  | Y |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=JBM.WH100 |
| JBM01 | 受理日期 | acceptance_date | accept_date |   | char(8) |  |  |  |  |  |
| CMD00 | 通知部門編號 | notify_department_no | notify_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBM.CM00 AND CMD.CMD00=JBM.CMD00 |
| CMS00 | 通知成本中心 | notification_cost_center_no | notify_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=JBM.CM00 AND CMD.CMD14=JBM.CMS00 |
| JBM02 | 速別 | delivery_priority | priority |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='12' AND CDS.CDS00=JBM.JBM02 |
| JBM03 | 工作項目(停用) | work_task_disabled | work_item_disabled |   | char(3) |  |  |  |  |  |
| JBM04 | 收箱箱數 | received_box_count | receive_box_qty |   | float(8) |  |  |  |  |  |
| JBM05 | 送空箱數量 | delivery_empty_box_count | send_empty_box_qty |   | float(8) |  |  |  |  |  |
| JBM06 | 大條碼數量 | large_barcode_quantity | major_barcode_qty |   | float(8) |  |  |  |  |  |
| JBM07 | 小條碼數量 | small_barcode_quantity | minor_barcode_qty |   | float(8) |  |  |  |  |  |
| JBM08 | 送膠帶數量 | delivery_tape_quantity | send_tape_qty |   | float(8) |  |  |  |  |  |
| JBM09 | 其他工作 | other_tasks | other_task |   | varchar(60) |  |  |  |  |  |
| CAR00 | 車號 | vehicle_number | vehicle_no |   | char(10) |  |  |  | Y | Value：CAR.CAR00，Display：CAR.CAR00，Condition：CAR.CAR00=JBM.CAR00 |
| JBM10 | 司機 | driver | driver |   | char(10) |  |  |  | Y | Value：EMP.EMP00，Display：EMP.EMP01，Condition：EMP.EMP00=JBM.JBM10 |
| JBM11 | 隨車人員 | escort_staff | escort_staff |   | char(10) |  |  |  | Y | Value：EMP.EMP00，Display：EMP.EMP01，Condition：EMP.EMP00=JBM.JBM11 |
| JBM12 | 備註 | remarks | remark |   | varchar(1024) |  |  |  |  |  |
| JBM13 | 收件總數 | recipient_total_count | receive_total_qty |   | float(8) |  |  |  |  |  |
| JBM14 | 已作廢 | status_voided | is_void |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM14 |
| NTM00 | 通知單號 | notification_order_number | notify_order_no |   | char(12) |  |  |  | Y | Value：NTM.NTM00，Display：NTM.NTM00，Condition：NTM.NTM00=JBM.NTM00 |
| NTM03 | 收送地址 | delivery_address | delivery_addr |   | varchar(80) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(20) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBM.CRE_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.CRE_USERID) |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(20) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBM.UPD_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.UPD_USERID) |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| JBM15 | 送箱箱數 | delivery_box_count | send_box_qty |   | float(8) |  |  |  |  |  |
| JBM16 | 銷毀箱數 | destruction_box_count | destroy_box_qty |   | float(8) |  |  |  |  |  |
| JBM17 | 送件件數 | delivery_item_count | send_item_qty |   | float(8) |  |  |  |  |  |
| JBM18 | 調閱箱數 | access_box_count | review_box_qty |   | float(8) |  |  |  |  |  |
| JBM19 | 影印(張) | photocopy_pages | photocopy_pages |   | float(8) |  |  |  |  |  |
| JBM20 | 傳真(張) | fax_pages | fax_pages |   | float(8) |  |  |  |  |  |
| JBM21 | 防潮袋(袋) | desiccant_bag_count | mbag_bag |   | float(8) |  |  |  |  |  |
| JBM22 | 送回收筒(筒) | recycle_bin_sent_count | send_recycle_bin_qty |   | float(8) |  |  |  |  |  |
| JBM23 | 陪同押車 | escort_with_truck | escort_truck |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM23 |
| JBM24 | 乾燥劑(包) | desiccant_packs | desiccant_bag |   | float(8) |  |  |  |  |  |
| JBM25 | 裁碎箱數(箱) | shredding_box_count_units | shred_box_count |   | float(8) |  |  |  |  |  |
| JBM26 | 倉庫專車(趟) | warehouse_shuttle_trips | wh_express_trip |   | float(8) |  |  |  |  |  |
| JBM27 | 到府專車(趟) | home_exclusive_trips | home_express_trip |   | float(8) |  |  |  |  |  |
| JBM28 | 大台北到府合併(箱) | greater_taipei_home_merge_boxes | tpe_home_merge_box |   | float(8) |  |  |  |  |  |
| JBM29 | 倉庫合併(箱) | warehouse_merge_boxes | wh_merge_box |   | float(8) |  |  |  |  |  |
| JBM31 | 收送貨人 | delivery_person | delivery_person |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.JBM31 |
| JBM30 | 已結案 | status_closed | is_closed |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM30 |
| JBM32 | 其他費用1 | other_fee_1 | other_fee1 |   | float(8) |  |  |  |  |  |
| JBM33 | 其他費用2 | other_fee_2 | other_fee2 |   | float(8) |  |  |  |  |  |
| JBM34 | 預定收送日期 | scheduled_delivery_date | scheduled_delivery_date |   | char(8) |  |  |  |  |  |
| JBM35 | 實際收送日期 | actual_delivery_date | actual_delivery_date |   | char(8) |  |  |  |  |  |
| JBM36 | 收送時段 | delivery_time_slot | delivery_timeslot |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='15' AND CDS.CDS00=JBM.JBM36 |
| JBM37 | 工作性質(類別)(停用) | work_type_disabled | work_type_disabled |   | char(3) |  |  |  |  |  |
| JBM38 | 不計費用 | no_charge | is_free_of_charge |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM38 |
| JBM39 | 通知人員 | notification_staff | notify_staff |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.JBM39 |
| JBM40 | 收回收筒(筒) | recycle_bin_count | recycle_bin_qty |   | float(8) |  |  |  |  |  |
| JBM41 | 收送電話 | delivery_phone | delivery_phone |   | char(20) |  |  |  |  |  |
| JBM42 | 收送分機 | delivery_extension | delivery_ext |   | char(10) |  |  |  |  |  |
| JBM43 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.JBM43 |
| JBM44 | 部門主管確認 | department_manager_confirmed | dept_mgr_confirm |   | char(20) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.JBM44 |
| JBM45 | 部門日期確認 | department_date_confirmed | dept_date_confirm |   | char(8) |  |  |  |  |  |
| JBM46 | 部門時間確認 | department_time_confirmed | dept_time_confirm |   | char(4) |  |  |  |  |  |
| JBM47 | 管理主管確認 | management_manager_confirmed | mgmt_mgr_confirm |   | char(20) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.JBM47 |
| JBM48 | 管理日期確認 | management_date_confirmed | mgmt_date_confirm |   | char(8) |  |  |  |  |  |
| JBM49 | 管理時間確認 | management_time_confirmed | mgmt_time_confirm |   | char(4) |  |  |  |  |  |
| JBM50 | 外縣市到府合併(箱) | other_city_home_merge_boxes | other_home_merge_box |   | float(8) |  |  |  |  |  |
| JBM51 | 收件箱數(帳) | recipient_box_count_billed | receive_box_qty_acc |   | float(8) |  |  |  |  |  |
| JBM52 | 送件箱數(帳) | delivery_box_count_billed | send_item_box_qty_acc |   | float(8) |  |  |  |  |  |
| JBM53 | 掃描張數 | scan_page_count | scan_page_qty |   | float(8) |  |  |  |  |  |
| JBM54 | 抽件件數 | extraction_item_count | extract_item_qty |   | float(8) |  |  |  |  |  |
| JBM55 | 合計銷毀返倉箱數(停用) | total_destruction_return_boxes_disabled | total_destroy_return_box_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM56 | 合計借出箱數(停用) | total_borrowed_boxes_disabled | total_borrow_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM57 | 合計在倉領回箱數(停用) | total_in_storage_return_boxes_disabled | total_inwh_return_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM58 | 合計傳真箱數(停用) | total_fax_boxes_disabled | total_fax_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM59 | 合計借出領回箱數(停用) | total_borrowed_return_boxes_disabled | total_borrow_return_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM60 | 合計在倉銷毀箱數(停用) | total_in_storage_destruction_boxes_disabled | total_inwh_destroy_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM61 | 合計借出銷毀箱數(停用) | total_borrowed_destruction_boxes_disabled | total_borrow_destroy_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM62 | 合計現閱箱數(停用) | total_on_site_read_boxes_disabled | total_onsite_view_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM63 | 合計在倉解領箱數(停用) | total_in_storage_release_boxes_disabled | total_inwh_release_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM64 | 合計借出解領箱數(停用) | total_borrowed_release_boxes_disabled | total_borrow_release_box_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM65 | 合計新進件數(停用) | total_new_items_disabled | total_new_item_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM66 | 合計返倉件數(停用) | total_return_to_storage_items_disabled | total_return_item_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM67 | 合計領回新進件數(停用) | total_returned_new_items_disabled | total_new_returned_item_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM68 | 合計銷毀新進件數(停用) | total_destruction_new_items_disabled | total_destroy_new_item_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM69 | 合計領回返倉件數(停用) | total_returned_to_storage_items_disabled | total_returned_item_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM70 | 合計銷毀返倉件數(停用) | total_destruction_return_items_disabled | total_destroy_return_item_qty_disabled |   | char(1) |  |  |  |  |  |
| JBM71 | 已產生帳單 | status_invoice_generated | is_billed |   | char(1) |  |  |  |  |  |
| JBM72 | 結案主管確認 | case_close_manager_confirmed | close_mgr_confirm |   | char(10) |  |  |  |  |  |
| JBM73 | 結案日期確認 | case_close_date_confirmed | close_date_confirm |   | char(8) |  |  |  |  |  |
| JBM74 | 結案時間確認 | case_close_time_confirmed | close_time_confirm |   | char(4) |  |  |  |  |  |
| JBM75 | 合計正本借出件數(停用) | total_original_borrowed_items_disabled | total_orig_borrow_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM77 | 收物件箱數 | received_object_box_count | receive_obj_box_qty |   | float(8) |  |  |  |  |  |
| JBM78 | 送物件箱數 | delivery_object_box_count | send_obj_box_qty |   | float(8) |  |  |  |  |  |
| JBM76 | 合計影本借出件數(停用) | total_copy_borrowed_items_disabled | total_copy_borrow_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM79 | 收送區域 | delivery_region | delivery_region |   | char(3) |  |  |  |  |  |
| JBM80 | 合計在倉領回件數(停用) | total_in_storage_return_items_disabled | total_inwh_return_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM81 | 合計傳真件數(停用) | total_fax_items_disabled | total_fax_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM82 | 合計借出領回件數(停用) | total_borrowed_return_items_disabled | total_borrow_return_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM83 | 合計在倉銷毀件數(停用) | total_in_storage_destruction_items_disabled | total_inwh_destroy_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM84 | 合計借出銷毀件數(停用) | total_borrowed_destruction_items_disabled | total_borrow_destroy_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM85 | 合計現閱件數(停用) | total_on_site_read_items_disabled | total_onsite_view_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM86 | 合計在倉解領件數(停用) | total_in_storage_release_items_disabled | total_inwh_release_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM87 | 合計借出解領件數(停用) | total_borrowed_release_items_disabled | total_borrow_release_item_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM88 | 書面簽核主管 | document_sign_manager | doc_sign_mgr |   | char(30) |  |  |  | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBM.CM00 AND CMP.CMP00=JBM.JBM88 |
| JBM89 | 銷毀件數 | destruction_item_count | destroy_item_qty |   | float(8) |  |  |  |  |  |
| JBM90 | 現閱件數 | on_site_view_item_count | onsite_view_item_qty |   | float(8) |  |  |  |  |  |
| JBM91 | 已結帳 | status_billed | is_settled |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM91 |
| JBM92 | 資料編號 | data_no | data_code |   | varchar(40) |  |  |  |  |  |
| JBM93 | 服務單編號 | service_order_no | service_order_no |   | varchar(30) |  |  |  |  |  |
| JBM94 | 銷毀袋數量 | destruction_bag_quantity | destroy_bag_qty |   | float(8) |  |  |  |  |  |
| JBM95 | 材料運送趟數(停用) | material_transport_trips_disabled | material_ship_trip_qty_disabled |   | float(8) |  |  |  |  |  |
| JBM96 | 材料運送數量 | material_transport_quantity | material_ship_qty |   | float(8) |  |  |  |  |  |
| CTM00 | 通知組別編號 | notify_team_no | notify_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=JBM.CM00 AND CMD.CMD16=JBM.CTM00 |
| JBM98 | 計價客戶編號 | billing_customer_no | billing_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBM.JBM98 |
| JBM99 | 計價部門編號 | billing_department_no | billing_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBM.JBM98 AND CMD.CMD00=JBM.JBM99 |
| JBM100 | 計價組別編號 | billing_team_no | billing_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=JBM.JBM98 AND CMD.CMD16=JBM.JBM100 |
| JBM101 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=JBM.JBM98 AND CMD.CMD14=JBM.JBM101 |
| JBM102 | 收銷毀袋(袋) | received_destruction_bag_count | receive_destroy_bag_qty |   | float(8) |  |  |  |  |  |
| JBM103 | 收件裝袋 | recipient_bagging | receive_bagged |   | float(8) |  |  |  |  |  |
| JBM104 | 送件裝袋 | delivery_bagging | send_item_bagged |   | float(8) |  |  |  |  |  |
| JBM109 | 是否貨物 | is_cargo | is_goods |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM109 |
| JBM110 | 是否退回 | is_returned | is_returned |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM110 |
| JBM111 | 已結案通知 | status_close_notified | is_close_notified |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM111 |
| JBM112 | 結案通知時間 | case_close_notification_time | close_notify_time |   | char(14) |  |  |  |  |  |
| JBM113 | 發車倉庫 | dispatch_warehouse | dispatch_wh |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=JBM.JBM113 |
| JBM114 | 發車地區 | dispatch_area | dispatch_region |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='29' AND CDS.CDS00=JBM.JBM114 |
| JBM115 | 是否完成收送 | is_delivery_completed | is_delivery_completed |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBM.JBM115 |
| JBM116 | 完成收送時間 | completed_delivery_time | delivery_complete_time |   | char(14) |  |  |  |  |  |
| JBM117 | 完成收送人員 | completed_delivery_staff | delivery_complete_staff |   | char(20) |  |  |  |  |  |
| JBM118 | 派車人員 | dispatch_staff | dispatch_staff |   | char(20) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBM.JBM118 |
| JBM119 | 派車日期時間 | dispatch_datetime | dispatch_datetime |   | char(14) |  |  |  |  |  |
| id | 工作單序號 | work_order_id | work_order_id |   | bigint(8) | Y | Y | Y |  |  |
| JBM120 | 指定收送時間 | assigned_delivery_time | assign_delivery_time |   | char(3) |  |  |  |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
