import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import { ProtectedRoute } from './components/auth/protected-route';
import Login from './pages/Login';
import { Header } from './components/layout/Header';

// Layout Component for Protected Routes
function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

// Dashboard Component (Placeholder)
function Dashboard() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-400">Dashboard (建置中)</h2>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path="/" element={<Dashboard />} />
            {/* Add other protected routes here */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
