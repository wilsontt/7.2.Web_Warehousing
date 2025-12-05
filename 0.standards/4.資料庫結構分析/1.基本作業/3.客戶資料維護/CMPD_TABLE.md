# CMPD
**中文名稱：** 客戶使用者_部門權限

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CM00 | 客戶編號 | customer_no | cust_no | customerId  | char(5) |  |  | Y | Y | Value：CM.CM00，Display：CM.CM01，Condition：CM.CM00=CMPD.CM00 |
| CMP00 | 使用者帳號 | user_no | user_no | userNo  | char(20) |  |  | Y | Y | Value：CMP.CMP00，Display：CMP.CMP01，Condition：CMP.CM00=CMPD.CM00 AND CMP.CMP00=CMPD.CMP00 |
| CMD00 | 部門代碼 | department_no | dept_no | departmentNo  | char(4) |  |  | Y | Y | Value：CMD.CMD00，Display：CMD.CMD01，Condition：CMD.CM00=CMPD.CM00 AND CMD.CMD00=CMPD.CMD00 |
| id | 客戶使用者部門序號 | id | id | id  | bigint(8) | Y | Y | Y |  |  |
| cmp_id | 使用者序號 | user_id | user_id | userId  | bigint(8) |  |  |  | Y | Value：CMP.id，Condition：CMP.CM00=CMPD.CM00 AND CMP.CMP00=CMPD.CMP00 |
| lock_version | 鎖定版本 | lock_version | lock_ver | lockVer  | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time | createdTime  | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time | updatedTime  | datetime(8) |  |  |  |  |  |
