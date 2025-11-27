import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  username: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  errorCount: number;
  isLocked: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  resetErrorCount: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCount, setErrorCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // 初始化：從 localStorage 讀取狀態
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth_storage');
    if (storedAuth) {
      try {
        const { user, isAuthenticated, errorCount, isLocked } = JSON.parse(storedAuth);
        
        // 檢查鎖定是否過期 (例如 30 分鐘後自動解鎖，這裡先不實作自動解鎖，僅讀取狀態)
        setUser(user);
        setIsAuthenticated(isAuthenticated);
        setErrorCount(errorCount || 0);
        setIsLocked(isLocked || false);
      } catch (e) {
        console.error('Failed to parse auth storage', e);
        localStorage.removeItem('auth_storage');
      }
    }
    setIsLoading(false);
  }, []);

  // 狀態變更時寫入 localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('auth_storage', JSON.stringify({
        user,
        isAuthenticated,
        errorCount,
        isLocked,
        lastUpdate: new Date().toISOString()
      }));
    }
  }, [user, isAuthenticated, errorCount, isLocked, isLoading]);

  // 模擬登入 API 呼叫
  const login = async (username: string, password: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    try {
      // 檢查是否被鎖定
      if (isLocked) {
        return { success: false, message: '帳號已被鎖定，請聯繫管理員' };
      }

      // 模擬網路延遲
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 簡單的驗證邏輯 (僅供示範)
      if (username === 'admin' && password === 'admin123') {
        const user: User = { username, name: '系統管理員', role: 'admin' };
        setUser(user);
        setIsAuthenticated(true);
        setErrorCount(0);
        // 這裡的 localStorage.setItem 應該由 useEffect 處理，但為了即時更新，暫時放在這裡
        // 實際應用中，應避免在 login 函數中直接操作 localStorage，讓 useEffect 統一管理
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('errorCount', '0');
        return { success: true };
      } else {
        const newErrorCount = errorCount + 1;
        setErrorCount(newErrorCount);
        localStorage.setItem('errorCount', newErrorCount.toString());
        
        if (newErrorCount >= 6) {
          setIsLocked(true);
          localStorage.setItem('isLocked', 'true');
          return { success: false, message: '您已連續輸入錯誤達6次，帳號已被鎖定。請與管理人員聯繫' };
        }
        
        return { success: false, message: `您輸入的帳號或密碼不正確，請重新輸入。錯誤次數${newErrorCount}次。` };
      }
    } catch (error) {
      return { success: false, message: '登入發生錯誤' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // 登出不重置錯誤次數與鎖定狀態，除非是管理員解鎖 (這裡簡化處理，登出保留狀態)
    localStorage.removeItem('auth_storage');
  };

  const resetErrorCount = () => {
    setErrorCount(0);
    setIsLocked(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      errorCount,
      isLocked,
      login,
      logout,
      resetErrorCount
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
