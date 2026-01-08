# AUTONUM_IRS
**中文名稱：** 自動編號 (IRS)

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| NUMBERNAME | 編號名稱 | number_name | no_name |   | varchar(20) |  |  | Y |  |  |
| CURRENTPREFIX | 當前編號前綴 | current_number_prefix | curr_no_prefix |   | varchar(20) |  |  | Y |  |  |
| DIGITSWIDTH | 編號位數寬度 | number_digits_width | no_width |   | decimal(9) |  |  |  |  |  |
| CURRENTDIGITS | 當前編號數值 | current_no_value | curr_no_value |   | decimal(9) |  |  |  |  |  |
| VALUEINTERVAL | 編號間隔 | number_interval | no_interval |   | decimal(9) |  |  |  |  |  |
| MINVALUE | 最小值 | min_value | min_value |   | decimal(9) |  |  |  |  |  |
| MAXVALUE | 最大值 | max_value | max_value |   | decimal(9) |  |  |  |  |  |
| id | 自動編號 IRS 主鍵 | id | auto_no_irs_pk |   | bigint(8) | Y | Y | Y |  |  |
