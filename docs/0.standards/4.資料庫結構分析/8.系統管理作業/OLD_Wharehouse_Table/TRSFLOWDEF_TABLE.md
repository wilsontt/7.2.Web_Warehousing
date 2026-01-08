# TRSFLOWDEF
**中文名稱：** 交易流程定義

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| TF_ID | 流程編號 | flow_no | flow_no |   | varchar(50) |  | Y | Y |  |  |
| TF_NAME | 流程名稱 | flow_name | flow_name |   | varchar(255) |  |  |  |  |  |
| S_PACKAGE_NAME | 來源套件名稱 | source_package_name | source_package_name |   | varchar(40) |  |  |  |  |  |
| S_TABLE_NAME | 來源表格名稱 | source_table_name | source_table_name |   | varchar(40) |  |  |  |  |  |
| PACKAGE_NAME | 套件名稱 | package_name | package_name |   | varchar(40) |  |  |  |  |  |
| TF_FLAG | 流程旗標 | flow_flag | flow_flag |   | varchar(1) |  |  |  |  |  |
| AUDITOR_ID | 審核人員編號 | auditor_no | approver_no |   | varchar(20) |  |  |  |  |  |
| CAN_EXEC | 是否可執行 | is_executable | is_executable |   | varchar(1) |  |  |  |  |  |
| SYNC_TYPE | 同步類型 | sync_type | sync_type |   | varchar(1) |  |  |  |  |  |
