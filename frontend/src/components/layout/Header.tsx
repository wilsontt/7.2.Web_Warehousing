
import { useAuth } from '../../contexts/auth-context';
import { LogOut, User } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left: Logo & Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto object-contain"
                src={logo}
                alt="Crown Logo"
              />
              <span className="ml-3 text-xl font-bold text-gray-900 hidden sm:block">
                文件倉儲管理系統
              </span>
            </div>
          </div>

          {/* Right: User Menu */}
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-700">
                <User className="h-5 w-5 mr-1 text-gray-500" />
                <span className="hidden sm:inline">{user?.name || user?.username}</span>
              </div>
              <button
                onClick={logout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                title="登出"
              >
                <LogOut className="h-4 w-4 mr-1" />
                登出
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
