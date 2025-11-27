import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // 可以加入一個簡單的 Loading Spinner
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    // 導向登入頁，並記錄原本想去的頁面 (state: { from: location })
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
