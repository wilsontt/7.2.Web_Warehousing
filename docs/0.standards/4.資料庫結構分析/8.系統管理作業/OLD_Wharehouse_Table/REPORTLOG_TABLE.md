# REPORTLOG
**中文名稱：** 報表日誌

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| JOBID | 任務編號 | task_no | task_no |   | varchar(10) |  |  |  |  |  |
| OWNER | 擁有者 | owner | owner |   | varchar(10) |  |  |  |  |  |
| CREATEDATE | 建立日期 | create_date | created_date |   | varchar(8) |  |  |  |  |  |
| CREATETIME | 建立時間 | create_time | created_time |   | varchar(6) |  |  |  |  |  |
| PRINTERNAME | 印表機名稱 | printer_name | printer_name |   | varchar(100) |  |  |  |  |  |
| NEEDSHOWDIALOG | 是否需顯示對話框 | show_dialog | show_dialog |   | varchar(1) |  |  |  |  |  |
| CONDITION | 條件 | condition | cond |   | image(16) |  |  |  |  |  |
| PAGECOUNT | 頁數 | pages | pages |   | varchar(3) |  |  |  |  |  |
| MODULE | 模組 | module | module |   | varchar(20) |  |  |  |  |  |
| REPORT | 報表 | report | report |   | varchar(20) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| SYSVER | 系統版本 | system_version | sys_ver |   | varchar(8) |  |  |  |  |  |
