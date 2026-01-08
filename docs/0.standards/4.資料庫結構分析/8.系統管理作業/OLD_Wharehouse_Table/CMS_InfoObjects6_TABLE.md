# CMS_InfoObjects6
**中文名稱：** 

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| ObjectID |  |  |  |   | int(4) |  |  | Y |  |  |
| ParentID |  |  |  |   | int(4) |  |  |  |  |  |
| TypeID |  |  |  |   | int(4) |  |  |  |  |  |
| OwnerID |  |  |  |   | int(4) |  |  |  |  |  |
| Version |  |  |  |   | int(4) |  |  |  |  |  |
| LastModifyTime |  |  |  |   | varbinary(32) |  |  |  |  |  |
| ScheduleStatus |  |  |  |   | int(4) |  |  |  |  |  |
| NextRunTime |  |  |  |   | varbinary(32) |  |  |  |  |  |
| CRC |  |  |  |   | varbinary(30) |  |  |  |  |  |
| Properties |  |  |  |   | image(16) |  |  |  |  |  |
| SI_GUID |  |  |  |   | varbinary(56) |  |  | Y |  |  |
| SI_CUID |  |  |  |   | varbinary(56) |  |  | Y |  |  |
| SI_RUID |  |  |  |   | varbinary(56) |  |  |  |  |  |
| SI_INSTANCE_OBJECT |  |  |  |   | int(4) |  |  |  |  |  |
| SI_PLUGIN_OBJECT |  |  |  |   | int(4) |  |  |  |  |  |
| SI_TABLE |  |  |  |   | int(4) |  |  |  |  |  |
| SI_HIDDEN_OBJECT |  |  |  |   | int(4) |  |  |  |  |  |
| SI_NAMEDUSER |  |  |  |   | int(4) |  |  |  |  |  |
| SI_RECURRING |  |  |  |   | int(4) |  |  |  |  |  |
| SI_RUNNABLE_OBJECT |  |  |  |   | int(4) |  |  |  |  |  |
| SI_PSS_SERVICE_ID |  |  |  |   | int(4) |  |  |  |  |  |
| ObjName |  |  |  |   | varbinary(255) |  |  |  |  |  |
| ObjName_TR |  |  |  |   | int(4) |  |  |  |  |  |
| SI_KEYWORD |  |  |  |   | varbinary(255) |  |  |  |  |  |
| SI_KEYWORD_TR |  |  |  |   | int(4) |  |  |  |  |  |
| LOV_KEY |  |  |  |   | varbinary(18) |  |  |  |  |  |
