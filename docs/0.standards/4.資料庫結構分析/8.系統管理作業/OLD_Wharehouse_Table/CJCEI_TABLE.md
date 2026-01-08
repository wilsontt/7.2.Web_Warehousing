# CJCEI
**中文名稱：** 客戶工單結案郵件通知

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CMP00 | 使用者帳號 | user_no | user_no |   | char(20) |  |  | Y |  |  |
| CM00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CMD00 | 部門代碼 | department_no | dept_no |   | char(4) |  |  |  |  |  |
| JBM00 | 工作單號 | work_order_number | work_order_no |   | char(10) |  |  | Y |  |  |
| JBM35 | 實際收送日期 | actual_delivery_date | actual_delivery_date |   | char(8) |  |  |  |  |  |
| JBM36 | 收送時間 | delivery_time | delivery_time |   | char(1) |  |  |  |  |  |
| JBM111 | 已結案通知 | status_close_notified | is_close_notified |   | char(3) |  |  |  |  |  |
| JBM112 | 結案通知時間 | case_close_notification_time | close_notify_time |   | char(14) |  |  |  |  |  |
| id | 客戶工單結案郵件序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
