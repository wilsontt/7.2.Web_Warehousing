# EMP
**中文名稱：** 員工資料

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| EMP00 | 員工編號 | employee_no | emp_no | employeeId  | char(10) |  |  | Y |  |  |
| EMP01 | 員工姓名 | employee_name | emp_name | chineseName  | char(30) |  |  |  |  |  |
| EMP02 | 英文姓名 | english_name | eng_name | englishName  | char(30) |  |  |  |  |  |
| EMP03 | 部門代碼 | department_no | dept_no | departmentCode  | char(3) |  |  |  | Y | Value：CDS.CDS00，Display：CDS.CDS01，Condition：CDS.CDF00='01' AND CDS.CDS00=EMP.EMP03 |
| EMP04 | 職稱 | job_title | job_title | position  | char(20) |  |  |  |  |  |
| EMP05 | 聯絡電話 | contact_phone | contact_phone | phone  | char(20) |  |  |  |  |  |
| EMP06 | 行動電話 | mobile_phone | mobile_phone | mobile  | char(20) |  |  |  |  |  |
| EMP07 | 傳真號碼 | fax_number | fax_no | fax  | char(20) |  |  |  |  |  |
| EMP08 | EMAIL | email | email | email  | varchar(40) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by | createdBy  | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=EMP.CRE_USERID |
| CRE_DTIME | 建檔日期 | created_date | created_date | createdAt  | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by | updatedBy  | char(10) |  |  |  | Y | Value：USERS.USERID，Display：USERS.USERNAME, Condition：USERS.USERID=EMP.UPD_USERID |
| UPD_DTIME | 修改日期 | modified_date | modified_date | updatedAt  | char(14) |  |  |  |  |  |
| id | 員工序號 | id | id | id  | bigint(8) | Y | Y | Y |  |  |
| lock_version | 鎖定版本 | lock_version | lock_ver | lock_version  | bigint(8) |  |  |  |  |  |
| created_at | 建立時間 | create_time | created_time | created_at  | datetime(8) |  |  |  |  |  |
| updated_at | 更新時間 | update_time | updated_time | updated_at  | datetime(8) |  |  |  |  |  |
