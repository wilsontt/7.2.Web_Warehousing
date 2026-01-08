# JBDD
**中文名稱：** 工作物件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JBM00 | 工作單號 | work_order_number | work_order_no |   | char(10) |  |  | Y | Y | Value：JBM.JBM00，Display：JBM.JBM00，Condition：JBM.CM00=JBDD.CM00 AND JBM.JBM00=JBDD.JBM00 |
| CM00 | 通知客戶編號 | notify_customer_no | notify_cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBDD.CM00 |
| CM001 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBDD.CM001 |
| CM001 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBDD.CM001 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBDD.CM001 AND CMD.CMD00=JBDD.CMD00 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBDD.CM001 AND CMD.CMD00=JBDD.CMD00 |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  |  |  |  |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| JBDD01 | 工作原因 | work_reason | work_reason |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00=JBDD.JBD06 AND CDS.CDS00=JBDD.JBD01 |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  |  |  |  |
| WH100 | 倉庫編號 | warehouse_no | wh_no |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=JBDD.WH100 |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=JBDD.CM001 AND CMD.CMD14=JBDD.CMS00 |
| JBDD02 | 備註 | remarks | remark |   | varchar(512) |  |  |  |  |  |
| JBDD03 | 調件類型 | retrieval_type | retrieval_item_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='10' AND CDS.CDS00=JBDD.JBDD03 |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| JBDD04 | 處理狀態 | process_status | proc_status |   | char(3) |  |  |  | Y |  |
| JBDD05 | 預定銷毀日 | scheduled_destruction_date | scheduled_destroy_date |   | char(8) |  |  |  |  |  |
| JBDD06 | 工作項目 | work_task | work_item |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='11' AND CDS.CDS00=JBDD.JBDD06 |
| CAS00 | 箱子種類 | box_type | box_type |   | char(3) |  |  |  | Y | Value：CCAF.CAF00，Display：CCAF.CAF01，Condition：CCAF.CM00=JBDD.CM001 AND CCAF.CAF00=JBDD.CAS00 |
| JBDD07 | 自行收送 | self_delivery | self_delivery |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBDD.JBDD06 |
| JBDD08 | 傳真張數 | fax_page_count | fax_page_qty |   | int(4) |  |  |  |  |  |
| JBDD09 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | int(4) |  |  |  |  |  |
| JBDD10 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |   |
| JBDD11 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD11) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CAD.CM00 AND CMP.CMP00=JBDD.JBDD11) |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=JBDD.CM001 AND CMD.CMD16=JBDD.CTM00 |
| CUR_DTIME | 實際日期 | actual_date | actual_date |   | datetime(8) |  |  |  |  |  |
| JBDD12 | 轉它處理(停用) | transfer_other_processing_disabled | transfer_other_proc_disabled |   | char(1) |  |  |  |  |  |
| JBDD13 | 上下架人員 | shelving_staff | move_staff |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD13 |
| JBDD14 | 上下架日期時間 | shelving_datetime | move_datetime |   | char(14) |  |  |  |  |  |
| JBDD15 | 上下架方式 | shelving_method | move_method |   | char(3) |  |  |  |  |  |
| JBDD16 | 稽核人員 | audit_staff | audit_staff |   | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD16 |
| JBDD17 | 稽核日期時間 | audit_datetime | audit_datetime |   | char(14) |  |  |  |  |  |
| JBDD18 | 稽核方式 | audit_method | audit_method |   | char(3) |  |  |  |  |  |
| JBDD19 | 已結帳 | status_billed | is_settled |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBDD.JBDD19 |
| JBDD20 | 借領貨人 | borrower_cargo_person | borrow_goods_person |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD20) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBDD.CM001 AND CMP.CMP00=JBDD.JBDD20) |
| JBDD21 | 借領審核部門主管 | borrower_review_department_manager | borrow_review_dept_mgr |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD21) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBDD.CM001 AND CMP.CMP00=JBDD.JBDD21) |
| JBDD22 | 借領審核管理主管 | borrower_review_admin_manager | borrow_review_admin_mgr |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD22) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBDD.CM001 AND CMP.CMP00=JBDD.JBDD22) |
| JBDD23 | 進出型式 | in_out_type | io_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='10' AND CDS.CDS00=JBDD.JBDD23 |
| JBDD24 | 收送區域(停用) | delivery_region | delivery_region |   | char(3) |  |  |  |  |  |
| JBDD25 | 進倉類型 | inbound_type | inwh_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='13' AND CDS.CDS00=JBDD.JBDD25 |
| JBDD26 | 原始進倉日期 | original_entry_date | orig_inwh_date |   | char(8) |  |  |  |  |  |
| JBDD27 | 工作通知人員 | work_notification_staff | work_notify_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD27) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBDD.CM001 AND CMP.CMP00=JBDD.JBDD27) |
| JBDD28 | 件序 | item_sequence | item_seq |   | char(20) |  |  |  |  | Value：CAD.CAD36，Condition：CAD.CM00=JBDD.CM001 AND CAD.CMD00=JBDD.CMD00 AND CAD.CAN00=JBDD.CAN00 AND CAD.OBJ00=JBDD.OBJ00 |
| JBDD29 | 永不銷毀原因 | never_destroy_reason | never_destroy_reason |   | varchar(254) |  |  |  |  |  |
| JBDD30 | 書面簽核主管 | document_sign_manager | doc_sign_mgr |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=JBDD.JBDD30) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=JBDD.CM001 AND CMP.CMP00=JBDD.JBDD30) |
| JBDD31 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=JBDD.JBDD36 AND CMD.CMD14=JBDD.JBDD31 |
| JBDD32 | 資料編號 | data_no | data_code |   | varchar(40) |  |  |  |  |  |
| JBDD33 | 服務單編號 | service_order_no | service_order_no |   | varchar(30) |  |  |  |  |  |
| JBDD34 | 序號(停用) | serial_number | seq_no |   | int(4) |  |  |  |  |  |
| JBDD35 | 件識別碼 | item_guid | item_guid |   | varchar(40) |  |  |  | Y | Value：CAD.CAD45，Condition：CAD.CM00=JBDD.CM001 AND CAD.CMD00=JBDD.CMD00 AND CAD.CAN00=JBDD.CAN00 AND CAD.OBJ00=JBDD.OBJ00 |
| JBDD36 | 計價客戶編號 | billing_customer_no | billing_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBDD.JBDD36 |
| JBDD37 | 計價部門編號 | billing_department_no | billing_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBDD.JBDD36 AND CMD.CMD00=JBDD.JBDD37 |
| JBDD38 | 計價組別編號 | billing_team_no | billing_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=JBDD.JBDD36 AND CMD.CMD16=JBDD.JBDD38 |
| JBDD39 | 掃描張數 | scan_page_count | scan_page_qty |   | int(4) |  |  |  |  |  |
| JBDD40 | 抽件件數 | extraction_item_count | extract_item_qty |   | int(4) |  |  |  |  |  |
| JBDD47 | 已結案通知 | status_close_notified | is_close_notified |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=JBDD.JBDD47 |
| JBDD48 | 結案通知時間 | case_close_notification_time | close_notify_time |   | char(14) |  |  |  |  |  |
| JBDD49 | 轉出單號 | transfer_out_order_number | transfer_out_order_no |   | char(10) |  |  |  |  |  |
| JBDD50 | 轉入單號 | transfer_in_order_number | transfer_in_order_no |   | char(10) |  |  |  |  |  |
| JBDD51 | 裝袋編號 | bagging_no | bag_code |   | char(20) |  |  |  |  |  |
| JBDD52 | 裝箱編號 | boxing_no | box_code |   | char(20) |  |  |  |  |  |
| JBDD53 | 棧板編號 | pallet_no | pallet_code |   | char(20) |  |  |  |  |  |
| JBDD54 | 木箱編號 | wooden_box_no | wood_box_no |   | char(20) |  |  |  |  |  |
| JBDD55 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  | Y | Value：CAM.CAM45，Condition：CAM.CM00=JBDD.CM001 AND CAM.CMD00=JBDD.CMD00 AND CAM.CAN00=JBDD.CAN00 |
| id | 工作單物件明細序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  | Y | Value：CAM.id，Condition：CAM.CM00=JBDD.CM001 AND CAM.CMD00=JBDD.CMD00 AND CAM.CAN00=JBDD.CAN00 |
| cad_id | 物件序號 | object_id | obj_id |   | bigint(8) |  |  |  | Y | Value：CAD.id，Condition：CAD.CM00=JBDD.CM001 AND CAD.CMD00=JBDD.CMD00 AND CAD.CAN00=JBDD.CAN00 AND CAD.OBJ00=JBDD.OBJ00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| jbm_id | 工作單序號 | work_order_id | work_order_id |   | bigint(8) |  |  | Y | Y | Value：JBM.id，Condition：JBM00.CM00=JBDD.CM00 AND JBM00.JBM00=JBDD.JBM00 |
