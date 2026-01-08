# NTD2
**中文名稱：** 通知出倉箱子

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| NTM00 | 通知單號 | notification_order_number | notify_order_no |   | char(12) |  |  | Y | Y | Value：NTM.NTM00，Display：NTM.NTM00，Condition：NTM.NTM00=NTD2.NTM00 |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTD2.CM00 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTD2.CM00 AND CMD.CMD00=NTD2.CMD00 |
| CAN00 | 箱號 | box_number | box_no |   | char(17) |  |  | Y |  |  |
| NTD201 | 出倉原因 | outbound_reason | outbound_reason |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='08' AND CDS.CDS00=NTD2.NTD201 |
| WH100 | 倉庫 | warehouse | warehouse |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=NTD2.WH100 |
| WH300 | 儲位編號 | location_no | loc_code |   | char(8) |  |  |  |  |  |
| CTM00 | 組別編號 | team_no | team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=NTD2.CM00 AND CMD.CMD16=NTD2.CTM00 |
| CMS00 | 成本中心 | cost_center_no | cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=NTD2.CM00 AND CMD.CMD14=NTD2.CMS00 |
| NTD202 | 內容 | content | content |   | varchar(512) |  |  |  |  |  |
| NTD203 | 對應箱號 | related_box_number | ref_box_no |   | char(17) |  |  |  |  |  |
| NTD204 | 自行收送 | self_delivery | self_delivery |   | char(1) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='24' AND CDS.CDS00=NTD2.NTD204 |
| NTD205 | 原始進倉人 | original_entry_staff | orig_inwh_staff |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD2.NTD205) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD2.CM00 AND CMP.CMP00=NTD2.NTD205) |
| NTD206 | 預定銷毀日 | scheduled_destruction_date | scheduled_destroy_date |   | char(8) |  |  |  |  |  |
| NTD207 | 借領貨人 | borrower_cargo_person | borrow_goods_person |   | char(30) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD2.NTD207) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD2.CM00 AND CMP.CMP00=NTD2.NTD207) |
| NTD208 | 傳真張數 | fax_page_count | fax_page_qty |   | int(4) |  |  |  |  |  |
| NTD209 | 影印張數 | photocopy_page_count | photocopy_page_qty |   | int(4) |  |  |  |  |  |
| CUR_DTIME | 實際日期 | actual_date | actual_date |   | datetime(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD2.CRE_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD2.CM00 AND CMP.CMP00=NTD2.CRE_USERID) |
| CRE_DTIME | 建檔日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  | Y | (Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=NTD2.UPD_USERID) OR (Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=NTD2.CM00 AND CMP.CMP00=NTD2.UPD_USERID) |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| NTD210 | 速別(停用) | delivery_priority_disabled | priority_disabled |   | char(3) |  |  |  |  |  |
| NTD211 | 收送區域(停用) | delivery_region | delivery_region |   | char(3) |  |  |  |  |  |
| NTD212 | 計價成本中心 | billing_cost_center_no | billing_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=NTD2.NTD216 AND CMD.CMD14=NTD2.NTD212 |
| NTD213 | 資料編號 | data_no | data_code |   | varchar(40) |  |  |  |  |  |
| NTD214 | 服務單編號 | service_order_no | service_order_no |   | varchar(30) |  |  |  |  |  |
| NTD215 | 箱識別碼 | box_guid | box_guid |   | varchar(40) |  |  |  | Y | Value：CAM.CAM45，Condition：CAM.CM00=NTD2.CM00 AND CAM.CMD00=NTD2.CMD00 AND CAM.CAN00=NTD2.CAN00 |
| id | 通知出倉箱子序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
| cam_id | 箱號序號 | box_id | box_id |   | bigint(8) |  |  |  | Y | Value：CAM.id，Condition：CAM.CM00=NTD2.CM00 AND CAM.CMD00=NTD2.CMD00 AND CAM.CAN00=NTD2.CAN00 |
| lock_version | 鎖定版本 | lock_version | lock_ver |   | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time |   | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time |   | datetime(8) |  |  |  |  |  |
| ntm_id | 通知單序號 | notification_order_id | notify_order_id |   | bigint(8) |  |  | Y | Y | Value：NTM.id，Condition：NTM.NTM00=NTD2.NTM00 |
| NTD216 | 計價客戶編號 | billing_customer_no | billing_cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=NTD2.NTD216 |
| NTD217 | 計價部門編號 | billing_department_no | billing_dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=NTD2.NTD216 AND CMD.CMD00=NTD2.NTD217 |
| NTD218 | 計價組別編號 | billing_team_no | billing_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=NTD2.NTD216 AND CMD.CMD16=NTD2.NTD218 |
| NTD219 | 存放類型 | storage_type | storage_type |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='31' AND CDS.CDS00=NTD2.NTD219 |
