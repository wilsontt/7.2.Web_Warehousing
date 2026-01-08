# SYS_ORG
**中文名稱：** 系統組織

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ORG_NO | 組織代號 | org_code | org_code |   | varchar(8) |  | Y | Y |  |  |
| ORG_DESC | 組織描述 | org_description | org_desc |   | varchar(40) |  |  |  |  |  |
| ORG_KIND | 組織類別 | org_category | org_category |   | varchar(4) |  |  |  |  |  |
| UPPER_ORG | 上層組織 | parent | parent_org |   | varchar(8) |  |  |  |  |  |
| ORG_MAN | 組織負責人 | org_manager | org_manager |   | varchar(20) |  |  |  |  |  |
| LEVEL_NO | 組織層級 | org_level | org_level |   | varchar(6) |  |  |  |  |  |
| ORG_TREE | 組織樹 | org_tree | org_tree |   | varchar(40) |  |  |  |  |  |
| END_ORG | 是否末端組織 | is_leaf | is_leaf |   | varchar(4) |  |  |  |  |  |
| ORG_FULLNAME | 組織全名 | org_full_name | org_fullname |   | varchar(255) |  |  |  |  |  |
| CD_ACNT_CG2 | 科目代號 | subject_code | subj_code |   | varchar(2) |  |  |  |  |  |
| ID_DEPT_BUDG | 部門預算編號 | org_budget_no | dept_budget_no |   | varchar(8) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
