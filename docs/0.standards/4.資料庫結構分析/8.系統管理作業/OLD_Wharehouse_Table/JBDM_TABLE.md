# JBDM
**中文名稱：** 職務代碼

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JBM35 | 實際收送日期 | actual_delivery_date | act_ship_date |   | char(8) |  |  |  |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBDM.CM00 |
| CM001 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  |  | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=JBDM.CM001 |
| CMD00 | 部門編號 | department_no | dept_no |   | char(4) |  |  |  | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=JBDM.CM001 AND CMD.CMD00=JBDM.CMD00 |
| CTM00 | 申請組別 | apply_team_no | apply_team_no |   | char(10) |  |  |  | Y | Value：CMD.CMD16，Display：CMD.CMD16，Condition：CMD.CM00=JBDM.CM001 AND CMD.CMD16=JBDM.CTM00 |
| CMS00 | 原成本中心 | original_cost_center_no | orig_cost_center_no |   | char(10) |  |  |  | Y | Value：CMD.CMD14，Display：CMD.CMD14，Condition：CMD.CM00=JBDM.CM001 AND CMD.CMD14=JBDM.CMS00 |
| WH100 | 原倉庫編號 | original_warehouse_no | orig_wh_no |   | char(1) |  |  |  | Y | Value：WH1.WH100，Display：WH1.WH101，Condition：WH1.WH100=JBDM.WH100 |
| JBD05 | 工作項目 | task_item |  |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='11' AND CDS.CDS00=JBDM.JBD05 |
| JBD01 | 工作原因 | task_reason |  |   | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00=JBDM.JBD05 AND CDS.CDS00=JBDM.JBD01 |
| CNT | 數量 | qty | qty |   | int(4) |  |  |  |  |  |
| id | 驗證程式序號 | validation_program_no | ver_prog_seq |   | bigint(8) | Y | Y | Y |  |  |
