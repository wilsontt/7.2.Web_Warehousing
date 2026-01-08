# SYS_WORDPLATE_M
**中文名稱：** 系統 Word 範本主檔

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| Word_ID | 樣板編號 |  | template_no |   | varchar(10) |  | Y | Y |  |  |
| Word_Desc | 樣板描述 |  | template_desc |   | varchar(50) |  |  |  |  |  |
| Active | 啟用狀態 |  | enable_status |   | varchar(1) |  |  |  |  |  |
| AutoVersion | 自動版號 | auto_version | auto_version |   | varchar(1) |  |  |  |  |  |
| DataSet | 資料集 |  | dataset |   | varchar(20) |  |  |  |  |  |
| DefaultFileHead | 預設檔頭 |  | default_header |   | varchar(20) |  |  |  |  |  |
| EmailAddress | 郵件地址 |  | email_addr |   | varchar(100) |  |  |  |  |  |
| EmailTitle | 郵件標題 |  | email_subject |   | varchar(100) |  |  |  |  |  |
| RTFFile | RTF 檔 |  | rtf_file |   | varchar(100) |  |  |  |  |  |
| Name | 樣板名稱 |  | template_name |   | varchar(20) |  |  |  |  |  |
| MasterKeyFields | 主鍵欄位 |  | pk_field |   | varchar(100) |  |  |  |  |  |
| NeedSingleDoc | 是否單一文件 |  | is_single_doc |   | varchar(1) |  |  |  |  |  |
| OutPutFileName | 輸出檔名 |  | output_filename |   | varchar(30) |  |  |  |  |  |
| OutPutMode | 輸出模式 |  | output_mode |   | varchar(1) |  |  |  |  |  |
| OutputPath | 輸出路徑 |  | output_path |   | varchar(20) |  |  |  |  |  |
| RePaste | 重新套印 |  | reprint_flag |   | varchar(1) |  |  |  |  |  |
| ShowAction | 顯示動作 |  | display_action |   | varchar(1) |  |  |  |  |  |
