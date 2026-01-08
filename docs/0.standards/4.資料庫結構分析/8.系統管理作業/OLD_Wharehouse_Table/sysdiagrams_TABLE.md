# sysdiagrams
**中文名稱：** 系統圖表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| name | 圖表名稱 | chart_name | chart_name |   | sysname(256) |  |  | Y |  |  |
| principal_id | 擁有者 ID | chart_owner_no | owner_no |   | int(4) |  |  | Y |  |  |
| diagram_id | 圖表編號 | chart_no | chart_no |   | int(4) | Y | Y | Y |  |  |
| version | 版本 | version | version |   | int(4) |  |  |  |  |  |
| definition | 圖表定義 | chart_definition | chart_def |   | varbinary(-1) |  |  |  |  |  |
