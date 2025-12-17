/**
 * API 回應基礎型別
 */
export interface ApiResponse<T = unknown> {
  /** 是否成功 */
  success: boolean;
  /** 回應資料 */
  data?: T;
  /** 錯誤訊息 */
  message?: string;
  /** 錯誤代碼 */
  errorCode?: string;
}

/**
 * 分頁參數
 */
export interface PaginationParams {
  /** 頁碼（從 1 開始） */
  page: number;
  /** 每頁筆數 */
  pageSize: number;
}

/**
 * 分頁回應
 */
export interface PaginatedResponse<T> {
  /** 資料列表 */
  items: T[];
  /** 總筆數 */
  totalCount: number;
  /** 總頁數 */
  totalPages: number;
  /** 當前頁碼 */
  currentPage: number;
  /** 每頁筆數 */
  pageSize: number;
}

/**
 * 排序參數
 */
export interface SortParams {
  /** 排序欄位 */
  sortBy?: string;
  /** 排序方向 */
  sortOrder?: 'asc' | 'desc';
}

/**
 * 篩選參數
 */
export interface FilterParams {
  /** 搜尋關鍵字 */
  search?: string;
  /** 其他篩選條件 */
  [key: string]: unknown;
}

