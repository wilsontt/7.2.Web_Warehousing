# HRS_EMP
**中文名稱：** 人事員工

| 欄位代號 | 中文欄名 | 英文欄名 | 程式欄名 | REACT欄名 | 型態 | Identity | PK | Unique | FK | 備註 |
|----------|----------|----------|----------|-----------|------|----------|----|--------|----|------|
| EMP_NO | 員工編號 | employee_no | emp_no |   | varchar(8) |  | Y | Y |  |  |
| SITE_NO | 所屬單位編號 | department_no | unit_no |   | varchar(4) |  |  |  |  |  |
| NAME | 姓名 | name | name |   | varchar(20) |  |  |  |  |  |
| JOB | 職務 | duty | duty |   | varchar(3) |  |  |  |  |  |
| JOB_CLASS | 職等 | grade | grade |   | varchar(3) |  |  |  |  |  |
| JOB_DEGREE | 職級/職銜 | rank_title | rank_title |   | varchar(2) |  |  |  |  |  |
| SEX | 性別 | gender | gender |   | varchar(1) |  |  |  |  |  |
| EMP_STATUS | 員工狀態 | status | emp_status |   | varchar(2) |  |  |  |  |  |
| HIRED_DAY | 到職日期 | hire_date | hire_date |   | varchar(8) |  |  |  |  |  |
| EFFECT_DAY | 生效日期 | effective_date | effective_date |   | varchar(8) |  |  |  |  |  |
| LEAVE_DAY | 離職日期 | resignation_date | resign_date |   | varchar(8) |  |  |  |  |  |
| FACT | 所屬公司/廠別 | company | company_division |   | varchar(1) |  |  |  |  |  |
| DEPT | 部門 | department | dept |   | varchar(8) |  |  |  |  |  |
| ORG_TREE | 組織樹 | org_tree | org_tree |   | varchar(40) |  |  |  |  |  |
| IDNO | 身分證號 | id_number | id_no |   | varchar(10) |  |  |  |  |  |
| BTH_DAY | 出生日 | birth_date | birth_date |   | varchar(8) |  |  |  |  |  |
| BTH_CITY | 出生城市 | birth_city | birth_city |   | varchar(3) |  |  |  |  |  |
| MILITARY | 兵役狀態 | military_status | military_status |   | varchar(1) |  |  |  |  |  |
| MARRIED | 婚姻狀況 | marital_status | marital_status |   | varchar(1) |  |  |  |  |  |
| NATION | 國籍 | nationality | nationality |   | varchar(3) |  |  |  |  |  |
| EDU | 學歷 | education | education |   | varchar(2) |  |  |  |  |  |
| SCHOOL | 畢業學校 | graduated_school | graduate_school |   | varchar(6) |  |  |  |  |  |
| MAJOR | 主修科系 | major | major_subject |   | varchar(6) |  |  |  |  |  |
| OTHER_REMARKS | 其他備註 | other_notes | remark_other |   | varchar(60) |  |  |  |  |  |
| LANGUAGE | 語言能力 | language_skills | language_skill |   | varchar(6) |  |  |  |  |  |
| REG_CITY | 戶籍城市 | registered_city | reg_city |   | varchar(20) |  |  |  |  |  |
| REG_BLOCK | 戶籍區/鄉鎮市區 | registered_district | reg_district |   | varchar(10) |  |  |  |  |  |
| REG_LEE | 戶籍里 | registered_village | reg_village |   | varchar(10) |  |  |  |  |  |
| REG_LIN | 戶籍鄰 | registered_neighbor | reg_neighbor |   | varchar(6) |  |  |  |  |  |
| REG_ADDRESS | 戶籍地址 | registered_address | reg_address |   | varchar(60) |  |  |  |  |  |
| REG_PHONE | 戶籍電話 | registered_phone | reg_phone |   | varchar(20) |  |  |  |  |  |
| REG_ZEP | 戶籍郵遞區號 | registered_zipcode | reg_zip |   | varchar(10) |  |  |  |  |  |
| CITY | 城市 | city | city |   | varchar(20) |  |  |  |  |  |
| ADDRESS | 地址 | address | address |   | varchar(60) |  |  |  |  |  |
| PHONE | 電話 | phone | phone |   | varchar(20) |  |  |  |  |  |
| BLD_TYPE | 建築類型 | building_type | building_type |   | varchar(2) |  |  |  |  |  |
| HPHONE | 行動電話 | mobile_phone | mobile |   | varchar(20) |  |  |  |  |  |
| USER_PHONE | 使用者電話 | user_phone | user_phone |   | varchar(4) |  |  |  |  |  |
| EMAIL | 電子郵件 | email | email |   | varchar(60) |  |  |  |  |  |
| CNTMAN | 緊急聯絡人 | emergency_contact | emergency_contact |   | varchar(20) |  |  |  |  |  |
| ZEP | 通訊郵遞區號 | contact_zipcode | contact_zip |   | varchar(10) |  |  |  |  |  |
| PASSPORT | 護照號碼 | passport_number | passport_no |   | varchar(30) |  |  |  |  |  |
| NAME_ENG | 英文姓名 | english_name | eng_name |   | varchar(30) |  |  |  |  |  |
| EMP_KIND | 員工類別 | category | emp_category |   | varchar(1) |  |  |  |  |  |
| CARD_FLAG | 卡片標記 | card_flag | card_flag |   | varchar(1) |  |  |  |  |  |
| PHOTO_PATH | 照片路徑 | photo_path | photo_path |   | varchar(240) |  |  |  |  |  |
| REPL_DATE | 替代役日期 | alternate_service_date | alt_service_date |   | varchar(8) |  |  |  |  |  |
| POS | 職位 | position | position |   | varchar(6) |  |  |  |  |  |
| ID_CHK | 身分證驗證 | id_verification | id_verified |   | varchar(1) |  |  |  |  |  |
| POS_KIND | 職位類型 | position_type | position_type |   | varchar(2) |  |  |  |  |  |
| BANK_NO1 | 銀行代號 1 | bank_code1 | bank_code1 |   | varchar(8) |  |  |  |  |  |
| BANK_ACC1 | 銀行帳號 1 | bank_account1 | bank_acct1 |   | varchar(20) |  |  |  |  |  |
| BANK_NO2 | 銀行代號 2 | bank_code2 | bank_code2 |   | varchar(8) |  |  |  |  |  |
| BANK_ACC2 | 銀行帳號 2 | bank_account2 | bank_acct2 |   | varchar(20) |  |  |  |  |  |
| RAISE_NUM | 扶養人數 | dependents_count | dependents_cnt |   | decimal(5) |  |  |  |  |  |
| CAL_YEAR | 年度 | year | year |   | varchar(8) |  |  |  |  |  |
| OLD_FREE | 免役身份 | exempt_status | exempt_service |   | varchar(1) |  |  |  |  |  |
| HANDI_LABOR | 身障勞保類別 | disability_labor_category | disabled_labor_type |   | varchar(2) |  |  |  |  |  |
| HANDI_HEALTH | 身障健保類別 | disability_nhi_category | disabled_nhi_type |   | varchar(2) |  |  |  |  |  |
| LABOR_SELF | 勞保自繳 | labor_selfpay | labor_self_pay |   | decimal(5) |  |  |  |  |  |
| HEALTH_SELF | 健保自繳 | nhi_selfpay | nhi_self_pay |   | decimal(5) |  |  |  |  |  |
| ADJ_PAYDATE | 薪資調整日期 | salary_adjust_date | salary_adj_date |   | varchar(8) |  |  |  |  |  |
| ETA | 到職時間 (ETA) | hire_time_eta | hire_time_eta |   | varchar(8) |  |  |  |  |  |
| ETD | 離職時間 (ETD) | resignation_time_etd | resign_time_etd |   | varchar(8) |  |  |  |  |  |
| EXTEND_D | 展延日 | extension_date | extend_date |   | varchar(8) |  |  |  |  |  |
| M_DEDUCT | 每月扣繳額 | monthly_withholding | monthly_withhold_amt |   | decimal(5) |  |  |  |  |  |
| CARD_PORT_NO | 卡片通道號 | card_channel_number | card_channel_no |   | varchar(2) |  |  |  |  |  |
| LABOR_LEVEL | 勞保等級 | labor_level | labor_level |   | varchar(2) |  |  |  |  |  |
| HEALTH_LEVEL | 健保等級 | nhi_level | nhi_level |   | varchar(2) |  |  |  |  |  |
| LAB_EFFECT | 勞保生效日 | labor_start_date | labor_start_date |   | varchar(8) |  |  |  |  |  |
| HEALTH_EFFECT | 健保生效日 | nhi_start_date | nhi_start_date |   | varchar(8) |  |  |  |  |  |
| LABOR_END_DAY | 勞保終止日 | labor_end_date | labor_end_date |   | varchar(8) |  |  |  |  |  |
| HEALTH_END_DAY | 健保終止日 | nhi_end_date | nhi_end_date |   | varchar(8) |  |  |  |  |  |
| NEXTAUD_DATE | 下次稽核日期 | next_audit_date | next_audit_date |   | varchar(8) |  |  |  |  |  |
| CNT_PHONE | 聯絡電話 | contact_phone | contact_phone |   | varchar(20) |  |  |  |  |  |
| CARD_NO | 卡號 | card_number | card_no |   | varchar(10) |  |  |  |  |  |
| REMARK | 備註 | notes | remark |   | varchar(240) |  |  |  |  |  |
| EMP_TYPE | 員工型態 | type | emp_type |   | varchar(1) |  |  |  |  |  |
| PAY_TYPE | 薪資發放方式 | salary_payment_method | salary_pay_method |   | varchar(1) |  |  |  |  |  |
| FLG_ADD | 附加旗標 | additional_flag | attach_flag |   | varchar(1) |  |  |  |  |  |
| ADD_TABLE | 附加表格 | additional_form | attach_form |   | varchar(3) |  |  |  |  |  |
| USERID | 使用者編號 | user_no | user_no |   | varchar(20) |  |  |  |  |  |
| UPDATE_USER | 更新使用者 | updated_by | updated_user |   | varchar(20) |  |  |  |  |  |
| UPDATE_DATE | 更新日期 | update_date | updated_date |   | varchar(8) |  |  |  |  |  |
| UPDATE_TIME | 更新時間 | update_time | updated_time |   | varchar(6) |  |  |  |  |  |
| SYSFLAG | 系統旗標 | system_flag | sys_flag |   | varchar(1) |  |  |  |  |  |
| LASTUPDATEDATETIME | 最後更新時間 | last_update_time | last_upd_time |   | varchar(14) |  |  |  |  |  |
| FLOWFLAG | 流程旗標 | process_flag | process_flag |   | varchar(1) |  |  |  |  |  |
