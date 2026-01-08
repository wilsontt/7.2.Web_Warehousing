# SYS_PARAMS_TABLE
**中文名稱：** 系統參數資料表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| PARAM_KIND | 參數種類 | category | param_kind |   | varchar(4) |  | Y | Y |  |  |
| UNIT_ID | 單位代號 | unit_code | unit_code |   | varchar(20) |  | Y | Y |  |  |
| ITEMTYPE | 項目類型 | item_type | item_type |   | varchar(20) |  | Y | Y |  |  |
| MENUID | 選單編號 | menu_no | menu_no |   | varchar(20) |  | Y | Y |  |  |
| PARAM_ID | 參數代號 | param_code | param_code |   | varchar(20) |  | Y | Y |  |  |
| VALUE_ID | 值代號 | value_code | val_code |   | varchar(20) |  | Y | Y |  |  |
| VALUE_STR | 值內容（字串） | value_text | val_str |   | varchar(255) |  |  |  |  |  |
