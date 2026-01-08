# REPORTLAYOUT
**中文名稱：** 報表版面

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| LAYOUT_TYPE | 版面類型 | layout_type | layout_type |   | varchar(2) |  | Y | Y |  |  |
| OWNER | 擁有者 | owner | owner |   | varchar(8) |  | Y | Y |  |  |
| GROUP_NA | 群組名稱 | group_name | group_name |   | varchar(50) |  | Y | Y |  |  |
| LAYOUT_NA | 版面名稱 | layout_name | layout_name |   | varchar(30) |  | Y | Y |  |  |
| INFOCOMP | 資訊內容 | infomation_content | info_content |   | image(16) |  |  |  |  |  |
| DEFAULT_FLAG | 預設旗標 | default_flag | def_flag |   | varchar(1) |  |  |  |  |  |
