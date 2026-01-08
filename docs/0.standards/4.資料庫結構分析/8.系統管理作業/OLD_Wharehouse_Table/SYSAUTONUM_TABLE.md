# SYSAUTONUM
**中文名稱：** 系統自動編號

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| NUMBERNAME | 編號名稱 |  | num_name |   | varchar(10) |  | Y | Y |  |  |
| CURRENTPREFIX | 當前前綴 |  | curr_prefix |   | varchar(20) |  |  |  |  |  |
| DIGITSWIDTH | 數字長度 |  | num_length |   | decimal(9) |  |  |  |  |  |
| CURRENTDIGITS | 當前數字 |  | curr_number |   | decimal(9) |  |  |  |  |  |
| VALUEINTERVAL | 編號間隔 |  | num_interval |   | decimal(9) |  |  |  |  |  |
| MINVALUE | 最小值 |  | min_val |   | decimal(9) |  |  |  |  |  |
