# SYS_EXCELPLATE_M
**中文名稱：** 系統 Excel 範本主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| Excel_ID | Excel 樣板編號 | template_no | excel_template_no |   | varchar(10) |  | Y | Y |  |  |
| Execl_Desc | Excel 描述 | description | excel_desc |   | varchar(50) |  |  |  |  |  |
| Active | 啟用狀態 | enabled | enable_status |   | varchar(1) |  |  |  |  |  |
| AutoVersion | 自動版本 | auto_version | auto_version |   | varchar(1) |  |  |  |  |  |
| DefaultFileHead | 預設檔案表頭 | default_header | default_file_header |   | varchar(20) |  |  |  |  |  |
| EmailAddress | 郵件地址 | email | email_addr |   | varchar(100) |  |  |  |  |  |
| EmailTitle | 郵件標題 | email_subject | email_subject |   | varchar(100) |  |  |  |  |  |
| ExcelFile | Excel 檔案 | file | excel_file |   | varchar(100) |  |  |  |  |  |
| Name | 名稱 | name | name |   | varchar(20) |  |  |  |  |  |
| OutPutFileName | 輸出檔名 | output_filename | output_filename |   | varchar(30) |  |  |  |  |  |
| OutPutMode | 輸出模式 | output_mode | output_mode |   | varchar(1) |  |  |  |  |  |
| OutputPath | 輸出路徑 | output_path | output_path |   | varchar(20) |  |  |  |  |  |
| ShowAction | 顯示動作 | display_action | display_action |   | varchar(1) |  |  |  |  |  |
