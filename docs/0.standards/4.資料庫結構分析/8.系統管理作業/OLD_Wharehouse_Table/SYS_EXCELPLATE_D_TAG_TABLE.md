# SYS_EXCELPLATE_D_TAG
**中文名稱：** 系統 Excel 範本明細 (TAG)

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| Excel_ID | Excel 樣板編號 | tag_excel_template_no | excel_template_no |   | varchar(10) |  | Y | Y |  |  |
| TagName | 標籤名稱 | tag_name | tag_name |   | varchar(30) |  | Y | Y |  |  |
| DataField | 資料欄位 | tag_column | data_field |   | varchar(20) |  |  |  |  |  |
| FieldStyle | 欄位樣式 | tag_style | field_style |   | varchar(1) |  |  |  |  |  |
| ImageField | 圖片欄位 | tag_image_column | image_field |   | varchar(1) |  |  |  |  |  |
| MaskID | 遮罩 ID | tag_mask_no | mask_no |   | varchar(5) |  |  |  |  |  |
| Pict | 圖像 | tag_image | image |   | varchar(20) |  |  |  |  |  |
| SheetIndex | 工作表索引 | tag_sheet_index | sheet_index |   | decimal(5) |  |  |  |  |  |
| TagType | 標籤類型 | tag_type | tag_type |   | varchar(1) |  |  |  |  |  |
| Value | 值 | tag_value | value |   | varchar(20) |  |  |  |  |  |
