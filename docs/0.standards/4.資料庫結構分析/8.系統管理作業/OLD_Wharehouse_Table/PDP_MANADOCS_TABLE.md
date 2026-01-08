# PDP_MANADOCS
**中文名稱：** 管理文件

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| FILE_ID | 檔案編號 | file_no |  |   | varchar(38) |  | Y | Y |  |  |
| PATH | 檔案路徑 | file_path |  |   | varchar(255) |  |  |  |  |  |
| ORI_FILENAME | 原始檔案名稱 | original_filename |  |   | varchar(255) |  |  |  |  |  |
| FILE_DESC | 檔案描述 | file_desc |  |   | varchar(255) |  |  |  |  |  |
| CREATOR | 建檔人員 | created_by | created_by |   | varchar(20) |  |  |  |  |  |
| CREATDATE | 建立日期 | create_date | created_date |   | varchar(12) |  |  |  |  |  |
| STATE | 狀態 | status |  |   | varchar(4) |  |  |  |  |  |
| CUR_LOCKER | 目前鎖定人 | locked_by |  |   | varchar(20) |  |  |  |  |  |
| LOCK_DATE | 鎖定日期 | lock_date |  |   | varchar(12) |  |  |  |  |  |
| ROLE_ID | 角色編號 | role_no |  |   | varchar(12) |  |  |  |  |  |
| CONSTRAINT_TYPE | 限制類型 | restrict_type |  |   | varchar(4) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by |  |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date |  |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time |  |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag |  |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time |  |   | varchar(14) |  |  |  |  |  |
