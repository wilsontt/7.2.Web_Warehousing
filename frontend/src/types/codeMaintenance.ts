/**
 * 代碼維護相關型別定義 (Type Definitions for Code Maintenance)
 * 遵循專案憲章 P5 (正體中文註解) 及 Lovable Naming Convention
 */

/**
 * 基礎稽核欄位 (Audit Fields)
 * 對應系統標準欄位 CRE_USERID, CRE_DTIME, UPD_USERID, UPD_DTIME
 */
export interface AuditFields {
  /** 建檔人員 ID (System Generated) */
  CreatedUserId?: string;
  /** 建檔日期時間 (System Generated: yyyy/MM/dd HH:mm:ss) */
  CreatedDateTime?: string;
  /** 修改人員 ID (System Generated) */
  UpdatedUserId?: string;
  /** 修改日期時間 (System Generated: yyyy/MM/dd HH:mm:ss) */
  UpdatedDateTime?: string;
}

/**
 * 大分類 (Major Category / CDF)
 */
export interface MajorCategory extends AuditFields {
  /** 
   * 系統內部 ID (Hidden)
   * 前端新增時為負數臨時 ID，後端儲存後為正數
   */
  id?: number;

  /** 
   * 大分類編碼 (PK)
   * DB: CDF00 (char(3))
   * Rule: 必填, 唯一, 修改時唯讀
   */
  CategoryFirstNo: string;

  /** 
   * 大分類名稱
   * DB: CDF01 (varchar(120))
   * Rule: 必填
   */
  MajorName: string;

  /** 
   * 頁索引 (Optional)
   * DB: PageIndex (int)
   */
  PageIndex?: number;

  /**
   * 樂觀鎖版本 (Hidden)
   * DB: lock_version
   */
  LockVer?: number;
}

/**
 * 中分類 (Mid Category / CDS)
 */
export interface MidCategory extends AuditFields {
  id?: number;

  /** 
   * 大分類編碼 (FK)
   * DB: CDF00
   */
  CategoryFirstNo: string;

  /** 
   * 中分類編碼 (PK)
   * DB: CDS00 (char(3))
   * Rule: 必填, 唯一, 修改時唯讀
   */
  CategorySecondNo: string;

  /** 
   * 中分類名稱
   * DB: CDS01 (varchar(120))
   * Rule: 必填
   */
  MidName: string;

  /** 
   * 數值 1 (Optional)
   * DB: CDS02 (decimal)
   * Rule: 顯示千分位, 2位小數
   */
  Value1?: number;

  /** 
   * 數值 2 (Optional)
   * DB: CDS03 (decimal)
   * Rule: 顯示千分位, 2位小數
   */
  Value2?: number;

  /** 
   * 備註 (Optional)
   * DB: CDS04 (varchar(240))
   */
  Remark?: string;

  /** 
   * 大分類關聯 ID (FK Hidden)
   * DB: cdf_id
   */
  CategoryFirstId?: number;
}

/**
 * 細分類 (Sub Category / CDT)
 */
export interface SubCategory extends AuditFields {
  id?: number;

  /** 
   * 大分類編碼 (FK)
   * DB: CDF00
   */
  CategoryFirstNo: string;

  /** 
   * 中分類編碼 (FK)
   * DB: CDS00
   */
  CategorySecondNo: string;

  /** 
   * 細分類編碼 (PK)
   * DB: CDT00 (char(3))
   * Rule: 必填, 唯一, 修改時唯讀
   */
  subcat_no: string;

  /** 
   * 細分類說明
   * DB: CDT01 (varchar(120))
   * Rule: 必填
   */
  code_desc: string;

  /** 
   * 備註 (Optional)
   * DB: CDT02 (varchar(240))
   */
  remark?: string;

  /** 
   * 中分類關聯 ID (FK Hidden)
   * DB: mid_cat_id
   */
  mid_cat_id?: number;
}

/**
 * 實體變更集合 (Entity Changes)
 * 用於批次儲存
 */
export interface EntityChanges<T> {
  inserts: T[];
  updates: T[];
  deletes: T[];
}

/**
 * 批次儲存請求 (Batch Save Request)
 * API: POST /api/codemaintenance/batch
 */
export interface BatchSaveRequest {
  cdf_changes: EntityChanges<MajorCategory>;
  cds_changes: EntityChanges<MidCategory>;
  cdt_changes: EntityChanges<SubCategory>;
}

/**
 * 完整階層資料回應 (Full Coordinates Response)
 * API: GET /api/codemaintenance/coordinates
 */
export interface CoordinatesResponse {
  cdf: MajorCategory[];
  cds: MidCategory[];
  cdt: SubCategory[];
}
