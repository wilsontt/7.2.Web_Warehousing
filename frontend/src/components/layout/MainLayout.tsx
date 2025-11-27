
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 頂部導覽列 (Sticky) */}
      <Header />

      {/* 主要內容區域 */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
