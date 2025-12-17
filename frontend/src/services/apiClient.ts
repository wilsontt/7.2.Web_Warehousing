/**
 * API 客戶端基礎類別
 * 提供統一的 HTTP 請求處理
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * HTTP 請求選項
 */
interface RequestOptions extends RequestInit {
  /** 是否需要認證 */
  requiresAuth?: boolean;
}

/**
 * API 客戶端類別
 */
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * 取得認證 Token
   */
  private getAuthToken(): string | null {
    // TODO: 從 localStorage 或狀態管理取得 token
    return localStorage.getItem('authToken');
  }

  /**
   * 建立請求標頭
   */
  private buildHeaders(options: RequestOptions): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // 如果需要認證，加入 Token
    if (options.requiresAuth !== false) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  /**
   * 處理回應
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: response.statusText,
        errorCode: response.status.toString(),
      }));
      throw new Error(error.message || '請求失敗');
    }

    return response.json();
  }

  /**
   * GET 請求
   */
  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: this.buildHeaders(options),
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  /**
   * POST 請求
   */
  async post<T>(endpoint: string, data?: unknown, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: this.buildHeaders(options),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  /**
   * PUT 請求
   */
  async put<T>(endpoint: string, data?: unknown, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: this.buildHeaders(options),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  /**
   * DELETE 請求
   */
  async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: this.buildHeaders(options),
      ...options,
    });

    return this.handleResponse<T>(response);
  }
}

// 匯出單例
export const apiClient = new ApiClient();

