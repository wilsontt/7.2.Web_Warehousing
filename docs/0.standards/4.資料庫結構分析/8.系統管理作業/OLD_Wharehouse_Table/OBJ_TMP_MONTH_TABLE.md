# OBJ_TMP_MONTH
**中文名稱：** 物件暫存月份

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 通知客戶編號 | notify_customer_no | notice_cust_no |   | char(5) |  |  |  |  |  |
| WH100 | 原倉庫編號 | origin_warehouse_no | orig_wh_no |   | char(1) |  |  |  |  |  |
| JBM35 | 實際收送日期 | actual_date | act_delv_date |   | char(2) |  |  |  |  |  |
| STATE | 狀態 | status |  |   | char(2) |  |  |  |  |  |
| CNT | 數量 | qty | qty |   | decimal(5) |  |  |  |  |  |
| id | 驗證程式功能序號 | validate_func_id | val_func_no |   | bigint(8) | Y | Y | Y |  |  |
