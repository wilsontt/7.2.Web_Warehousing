# NTD4
**中文名稱：** 通知出倉物件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| NTM00 | 通知單號 | notification_order_number | notify_order_no |   | char(12) |  |  | Y | Y | Value：NTM.id，Condition：NTM.NTM00=NTD4.NTM00 |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTD4.CM00 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTD4.CM00 AND CMD.CMD00=NTD4.CMD00 |
| OBJ00 | 物件編號 | object_no | obj_no |   | char(20) |  |  | Y |  |  |
| NTD401 | 出倉原因 | outbound_reason | outbound_reason |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='08' AND CDS.CDS00=NTD4.NTD401 |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  |  |  |  |
| WH100 | 倉庫 | warehouse | warehouse |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=NTD4.WH100 |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=NTD4.CM00 AND CMD.CMD16=NTD4.CTM00 |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=NTD4.CM00 AND CMD.CMD14=NTD4.CMS00 |
| NTD402 | 內容 | content | content |   | varchar(512) |  |  |  |  |  |
| NTD403 | 調件類型 | retrieval_type | retrieval_item_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='13' AND CDS.CDS00=NTD4.NTD403 |
| NTD404 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| NTD405 | 自行收送 | self_delivery | self_delivery |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=NTD4.NTD405 |
| NTD406 | 傳真張數 | fax_page_count | fax_page_qty |   | int(4) |  |  |  |  |  |
| NTD407 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | int(4) |  |  |  |  |  |
| NTD408 | 預定銷毀日 | scheduled_destruction_date | scheduled_destroy_date |   | char(8) |  |  |  |  |  |
| NTD409 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD4.NTD409) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD4.CM00 AND CMP.CMP00=NTD.NTD409) |
| NTD410 | 借領件人 | borrower_person | borrow_person |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD4.NTD410) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD4.CM00 AND CMP.CMP00=NTD.NTD410) |
| CUR_DTIME | 實際日期 | actual_date | actual_date |   | datetime(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD4.CRE_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD4.CM00 AND CMP.CMP00=NTD.CRE_USERID) |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD4.UPD_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD4.CM00 AND CMP.CMP00=NTD.UPD_USERID) |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| NTD411 | 進出型式 | in_out_type | io_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='10' AND CDS.CDS00=NTD4.NTD411 |
| NTD412 | 收送區域(停用) | delivery_region | delivery_region |   | char(3) |  |  |  |  |  |
| NTD413 | 進倉類型 | inbound_type | inwh_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='13' AND CDS.CDS00=NTD4.NTD413 |
| NTD414 | 序號 | serial_number | seq_no |   | char(20) |  |  |  |  |  |
| NTD415 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=NTD4.NTD419 AND CMD.CMD14=NTD4.NTD415 |
| NTD416 | 資料編號 | data_no | data_code |   | varchar(40) |  |  |  |  |  |
| NTD417 | 服務單編號 | service_order_no | service_order_no |   | varchar(30) |  |  |  |  |  |
| NTD418 | 件識別碼 | item_guid | item_guid |   | varchar(40) |  |  |  | Y | Value：CAD.CAD45，Condition：CAD.CM00=NTD4.CM00 AND CAD.CMD00=NTD4.CMD00 AND CAD.CAN00=NTD4.CAN00 AND CAD.OBJ00=NTD4.OBJ00 |
| id | 通知出倉物件序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  | Y | Value：CAM.id，Condition：CAM.CM00=NTD4.CM00 AND CAM.CMD00=NTD4.CMD00 AND CAM.CAN00=NTD4.CAN00 |
| cad_id | 物件序號 | object_id | obj_id |   | bigint(8) |  |  |  | Y | Value：CAD.id，Condition：CAD.CM00=NTD4.CM00 AND CAD.CMD00=NTD4.CMD00 AND CAD.CAN00=NTD4.CAN00 AND CAD.OBJ00=NTD4.OBJ00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ntm_id | 通知單序號 | notification_order_id | notify_order_id |   | bigint(8) |  |  | Y | Y | Value：NTM.id，Condition：NTM.NTM00=NTD4.NTM00 |
| NTD419 | 計價客戶編號 | billing_customer_no | billing_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTD4.NTD419 |
| NTD420 | 計價部門編號 | billing_department_no | billing_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTD4.NTD419 AND CMD.CMD00=NTD4.NTD420 |
| NTD421 | 計價組別編號 | billing_team_no | billing_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=NTD4.NTD419 AND CMD.CMD16=NTD4.NTD421 |
| NTD422 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  |  |  |
