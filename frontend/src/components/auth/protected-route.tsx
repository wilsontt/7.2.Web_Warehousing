```typescript
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // 已登入，顯示子路由內容
  return <Outlet />;
}
