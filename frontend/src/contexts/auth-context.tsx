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
  // Helper to read from localStorage safely
  const getStoredAuth = () => {
    try {
      const stored = localStorage.getItem('auth_storage');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.error('Failed to parse auth storage', e);
      return null;
    }
  };

  // Initialize state directly from localStorage (Lazy Initialization)
  // This prevents the "flash of unauthenticated state" and race conditions
  const [user, setUser] = useState<User | null>(() => {
    const stored = getStoredAuth();
    return stored?.user || null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = getStoredAuth();
    return stored?.isAuthenticated || false;
  });

  const [errorCount, setErrorCount] = useState(() => {
    const stored = getStoredAuth();
    return stored?.errorCount || 0;
  });

  const [isLocked, setIsLocked] = useState(() => {
    const stored = getStoredAuth();
    return stored?.isLocked || false;
  });

  // Since we read synchronously, we don't need a loading state for initialization
  const [isLoading, setIsLoading] = useState(false);

  // Persist state changes to localStorage
  useEffect(() => {
    localStorage.setItem('auth_storage', JSON.stringify({
      user,
      isAuthenticated,
      errorCount,
      isLocked,
      lastUpdate: new Date().toISOString()
    }));
  }, [user, isAuthenticated, errorCount, isLocked]);

  // Login function
  const login = async (username: string, password: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    try {
      // Check if locked
      if (isLocked) {
        return { success: false, message: '帳號已被鎖定，請聯繫管理員' };
      }

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simple mock validation
      if (username === 'admin' && password === 'admin123') {
        const newUser: User = { username, name: '系統管理員', role: 'admin' };
        setUser(newUser);
        setIsAuthenticated(true);
        setErrorCount(0);
        return { success: true };
      } else {
        const newErrorCount = errorCount + 1;
        setErrorCount(newErrorCount);
        
        if (newErrorCount >= 6) {
          setIsLocked(true);
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
    // Clear storage on logout
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