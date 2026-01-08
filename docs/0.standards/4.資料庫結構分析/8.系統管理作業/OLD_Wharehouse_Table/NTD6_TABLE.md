# NTD6
**中文名稱：** 通知現場調閱

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| NTM00 | 通知單號 | notification_order_number | notify_order_no |   | char(12) |  |  | Y | Y | Value：NTM.NTM00，Display：NTM.NTM00，Condition：NTM.NTM00=NTD6.NTM00 |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTD6.CM00 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTD6.CM00 AND CMD.CMD00=NTD6.CMD00 |
| WH100 | 倉庫 | warehouse | warehouse |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=NTD6.WH100 |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=NTD6.CM00 AND CMD.CMD16=NTD6.CTM00 |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=NTD6.CM00 AND CMD.CMD14=NTD6.CMS00 |
| NTD601 | 內容 | content | content |   | varchar(512) |  |  |  |  |  |
| NTD602 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| NTD603 | 自行收送(停用) | self_delivery | self_delivery |   | char(1) |  |  |  |  |  |
| NTD604 | 傳真數 | fax_count | fax_count |   | int(4) |  |  |  |  |  |
| NTD605 | 影印數 | photocopy_count | photocopy_count |   | int(4) |  |  |  |  |  |
| NTD606 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD6.NTD606) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD6.CM00 AND CMP.CMP00=NTD6.NTD606) |
| NTD607 | 預定銷毀日 | scheduled_destruction_date | scheduled_destroy_date |   | char(8) |  |  |  |  |  |
| CUR_DTIME | 實際日期 | actual_date | actual_date |   | datetime(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | varchar(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD6.CRE_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD6.CM00 AND CMP.CMP00=NTD6.CRE_USERID) |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | varchar(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD6.UPD_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD6.CM00 AND CMP.CMP00=NTD6.UPD_USERID) |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| NTD608 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=NTD6.NTD612 AND CMD.CMD14=NTD6.NTD608 |
| NTD609 | 資料編號 | data_no | data_code |   | varchar(40) |  |  |  |  |  |
| NTD610 | 服務單編號 | service_order_no | service_order_no |   | varchar(30) |  |  |  |  |  |
| NTD611 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  | Y | Value：CAM.CAM45，Condition：CAM.CM00=NTD6.CM00 AND CAM.CMD00=NTD6.CMD00 AND CAM.CAN00=NTD6.CAN00 |
| NTD612 | 計價客戶編號 | billing_customer_no | billing_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTD6.NTD612 |
| NTD613 | 計價部門編號 | billing_department_no | billing_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTD6.NTD612 AND CMD.CMD00=NTD6.NTD613 |
| NTD614 | 計價組別編號 | billing_team_no | billing_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=NTD6.NTD612 AND CMD.CMD16=NTD6.NTD614 |
| NTD615 | 現閱原因 | on_site_view_reason | onsite_view_reason |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='17' AND CDS.CDS00=NTD6.NTD615 |
| id | 通知現場調閱序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  | Y | Value：CAM.id，Condition：CAM.CM00=NTD6.CM00 AND CAM.CMD00=NTD6.CMD00 AND CAM.CAN00=NTD6.CAN00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ntm_id | 通知單序號 | notification_order_id | notify_order_id |   | bigint(8) |  |  | Y | Y | Value：NTM.id，Condition：NTM.NTM00=NTD6.NTM00 |
| NTD616 | 存放類型 | storage_type | storage_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='31' AND CDS.CDS00=NTD6. NTD616 |
