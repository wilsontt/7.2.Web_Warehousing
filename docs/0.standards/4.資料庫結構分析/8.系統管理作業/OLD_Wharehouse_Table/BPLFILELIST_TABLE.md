# BPLFILELIST
**中文名稱：** 批次檔案清單

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| FILENAME | 檔案名稱 | file_name | file_name |   | varchar(80) |  | Y | Y |  |  |
| FILEPATH | 檔案路徑 | file_path | file_path |   | varchar(80) |  |  |  |  |  |
| FILESIZE | 檔案大小 | file_size | file_size |   | decimal(9) |  |  |  |  |  |
| FILETIME | 檔案時間 | file_time | file_time |   | decimal(9) |  |  |  |  |  |
| OWNER | 擁有者 | owner | owner |   | varchar(64) |  |  |  |  |  |
| CREATETIME | 建立時間 | create_time | created_time |   | varchar(16) |  |  |  |  |  |
| CREATEDATE | 建立日期 | create_date | created_time |   | varchar(16) |  |  |  |  |  |
| UPDATEMODE | 更新模式 | update_mode | updated_mode |   | varchar(1) |  |  |  |  |  |
| CONTENT | 檔案內容 | file_content | file_content |   | image(16) |  |  |  |  |  |
