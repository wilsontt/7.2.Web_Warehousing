# CSES
**中文名稱：** 客戶服務費用設定

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| CSES00 | 客戶編號 | customer_no | cust_no |   | char(5) |  |  | Y |  |  |
| CSES01 | 啟用年月 | activation_year_month | enabled_ym |   | char(6) |  |  | Y |  |  |
| CSES02 | 終止年月 | termination_year_month | terminate_ym |   | char(6) |  |  | Y |  |  |
| BSES00 | 收費流水號 | billing_serial_number | payment_serial_no |   | float(8) |  |  | Y |  |  |
| BSES01 | 服務種類 | service_type | service_type |   | char(3) |  |  | Y |  |  |
| BSES02 | 服務代碼 | service_code | service_code |   | char(3) |  |  | Y |  |  |
| BSES03 | 起始數 | start_count | start_count |   | float(8) |  |  |  |  |  |
| BSES04 | 終止數 | termination_count | terminate_count |   | float(8) |  |  |  |  |  |
| BSES05 | 地區代碼_從 | area_code_from | area_code_from |   | char(3) |  |  |  |  |  |
| BSES06 | 地區代碼_到 | area_code_to | area_code_to |   | char(3) |  |  |  |  |  |
| BSES07 | 單價價格(未稅) | unit_price_excl_tax | unit_price_excl_tax |   | float(8) |  |  |  |  |  |
| BSES08 | 單價價單(含稅) | unit_price_list_incl_tax | unit_price_list_incl_tax |   | float(8) |  |  |  |  |  |
| BSES09 | 每次費用(未稅) | fee_per_time_excl_tax | per_use_fee_excl_tax |   | float(8) |  |  |  |  |  |
| BSES10 | 每次費用(含稅) | fee_per_time_incl_tax | per_use_fee_incl_tax |   | float(8) |  |  |  |  |  |
| CRE_USERID | 建檔人員 | created_by | created_by |   | char(10) |  |  |  |  |  |
| CRE_DTIME | 新增日期 | created_date | created_date |   | char(14) |  |  |  |  |  |
| UPD_USERID | 修改人員 | modified_by | modified_by |   | char(10) |  |  |  |  |  |
| UPD_DTIME | 修改日期 | modified_date | modified_date |   | char(14) |  |  |  |  |  |
| BSES11 | 計價單位 | billing_unit | billing_unit |   | char(3) |  |  |  |  |  |
| id | 客戶服務費用序號 | id | id |   | bigint(8) | Y | Y | Y |  |  |
