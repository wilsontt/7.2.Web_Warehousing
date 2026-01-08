# BAS_SITE
**中文名稱：** 基本站點

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| SITE_NO | 單位編號 | unit_no | unit_no |   | varchar(4) |  | Y | Y |  |  |
| SITE_TC | 名稱 (中文) | site_name_zh | site_name_c |   | varchar(60) |  |  |  |  |  |
| SITE_EN | 名稱 (英文) | site_name_en | site_name_e |   | varchar(60) |  |  |  |  |  |
| SITE_GEN | 單位性質 | unit_type | unit_type |   | varchar(12) |  |  |  |  |  |
| SITE_IVC_ADR_TC | 發票地址 (中文) | invoice_address_zh | inv_addr_c |   | varchar(120) |  |  |  |  |  |
| SITE_IVC_ADR_EN | 發票地址 (英文) | invoice_address_en | inv_addr_e |   | varchar(120) |  |  |  |  |  |
| SITE_ADR_TC | 地址 (中文) | address_zh | addr_c |   | varchar(120) |  |  |  |  |  |
| SITE_ADR_EN | 地址 (英文) | address_en | addr_e |   | varchar(120) |  |  |  |  |  |
| SITE_BOSS_TC | 負責人 (中文) | owner_zh | owner_c |   | varchar(20) |  |  |  |  |  |
| SITE_BOSS_EN | 負責人 (英文) | owner_en | owner_e |   | varchar(30) |  |  |  |  |  |
| SITE_TEL | 電話號碼 | phone | tel_no |   | varchar(20) |  |  |  |  |  |
| SITE_FAX | 傳真號碼 | fax | fax_no |   | varchar(20) |  |  |  |  |  |
| SITE_TAX_NO | 統一編號 | tax_no | tax_no |   | varchar(20) |  |  |  |  |  |
| WEBADDR | 網站地址 | website | website |   | varchar(60) |  |  |  |  |  |
| EMAIL | 電子郵件 | email | email |   | varchar(60) |  |  |  |  |  |
| LABOR_KEY1 | 勞保代碼1 | labor_code1 | lb_code1 |   | varchar(8) |  |  |  |  |  |
| LABOR_KEY2 | 勞保代碼2 | labor_code2 | lb_code2 |   | varchar(10) |  |  |  |  |  |
| HEALTH_KEY | 健保代碼 | nhi_code | nh_code |   | varchar(8) |  |  |  |  |  |
| SENDTO_NHI | 傳送至健保署 | send_to_nhi | send_nh |   | varchar(6) |  |  |  |  |  |
| SYSSTATE | 系統狀態 | system_status | sys_status |   | varchar(8) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
