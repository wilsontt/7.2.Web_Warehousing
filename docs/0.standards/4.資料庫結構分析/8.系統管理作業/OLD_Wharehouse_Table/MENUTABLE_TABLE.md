# MENUTABLE
**中文名稱：** 選單資料表

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| MENUID | 選單編號 |  | menu_no |   | varchar(20) |  | Y | Y |  |  |
| CAPTION | 標題 | title | title |   | varchar(50) |  | Y | Y |  |  |
| PARENT | 父項目 |  | parent_item |   | varchar(20) |  |  |  |  |  |
| PACKAGE | 套件 |  | package |   | varchar(20) |  |  |  |  |  |
| PACKAGECLA | 套件分類 |  | pkg_class |   | varchar(20) |  |  |  |  |  |
| ITEMPARAM | 項目參數 |  | item_param |   | varchar(200) |  |  |  |  |  |
| FORM | 表單 |  | form |   | varchar(32) |  |  |  |  |  |
| ISSHOWMODAL | 是否顯示為彈窗 |  | is_popup |   | varchar(1) |  |  |  |  |  |
| FUNCTIONS | 功能 |  | func |   | varchar(12) |  |  |  |  |  |
| ITEMTYPE | 項目類型 |  | item_type |   | varchar(3) |  |  |  |  |  |
| SEQ_NO | 序號 |  | seq_no |   | varchar(4) |  |  |  |  |  |
