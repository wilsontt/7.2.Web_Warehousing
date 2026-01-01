import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import { ProtectedRoute } from './components/auth/protected-route';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { MainLayout } from './components/layout/MainLayout';
import CodeMaintenancePage from './pages/basic/CodeMaintenancePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/basic/code-maintenance" element={<CodeMaintenancePage />} />
              {/* Add other protected routes here */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
