import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { User, ChevronDown, Menu, X, Globe, Sun, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

// Define Menu Item Type
interface MenuItem {
  name: string;
  href?: string;
  items?: MenuItem[];
}

// Full Navigation Data based on Spec
const NAVIGATION_ITEMS: MenuItem[] = [
  {
    name: '基本作業',
    items: [
      {
        name: '代碼作業',
        items: [
          { name: '基本代碼維護', href: '#' },
          { name: '箱、件代碼維護', href: '#' },
        ]
      },
      { name: '員工資料維護', href: '#' },
      {
        name: '客戶資料維護',
        items: [
          { name: '客戶基本資料維護', href: '#' },
          { name: '客戶群維護', href: '#' },
        ]
      },
      {
        name: '倉庫、車輛維護',
        items: [
          { name: '倉庫維護', href: '#' },
          { name: '車輛維護', href: '#' },
          { name: '收送區域維護', href: '#' },
        ]
      },
      { name: '箱子資料維護', href: '#' },
      { name: '基本收費作業', href: '#' },
    ]
  },
  {
    name: '例行作業',
    items: [
      { name: '客戶工作通知單', href: '#' },
      { name: '倉儲工作單', href: '#' },
      {
        name: '倉儲作業',
        items: [
          { name: '工作單派車作業', href: '#' },
          { name: '工作單上下架/稽核報表', href: '#' },
          {
            name: '工作單',
            items: [
              { name: '上下架輸入', href: '#' },
              { name: '稽核輸入', href: '#' },
            ]
          },
        ]
      },
      { name: '出倉車輛運輸單', href: '#' },
      {
        name: '交換作業',
        items: [
          { name: '玉山資料交換作業', href: '#' },
          { name: '中信資料交換作業', href: '#' },
        ]
      },
    ]
  },
  {
    name: '庫存作業',
    items: [
      { name: '箱子/物件 即時庫存查詢', href: '#' },
      {
        name: '倉儲報表及條碼作業',
        items: [
          {
            name: '倉儲報表作業',
            items: [
              { name: '倉儲工作報表', href: '#' },
              { name: '箱件即時庫存報表', href: '#' },
              { name: '倉儲客戶月報統計表', href: '#' },
              { name: '工作單箱件統計表', href: '#' },
              { name: '箱件每日進出月報表', href: '#' },
              { name: '物件箱物件清單', href: '#' },
              { name: '出倉車輛運輸單', href: '#' },
            ]
          },
          {
            name: '條碼作業',
            items: [
              { name: '箱子自訂條碼列印', href: '#' },
              { name: '物件自訂條碼列印', href: '#' },
              { name: '儲位條碼列印', href: '#' },
              { name: '封箱條碼列印', href: '#' },
              { name: '新光特規條碼列印', href: '#' },
            ]
          },
        ]
      },
    ]
  },
  {
    name: '客戶作業',
    items: [
      { name: '客戶工作通知單', href: '#' },
      { name: '工作通知單審核作業', href: '#' },
      { name: '箱子/物件 即時庫存查詢', href: '#' },
      { name: '箱子/物件 倉儲報表下載', href: '#' },
    ]
  },
  {
    name: '移儲作業',
    items: [
      {
        name: '移出作業',
        items: [
          { name: '移出單作業', href: '#' },
          { name: '移出下架作業', href: '#' },
          { name: '移出稽核作業', href: '#' },
        ]
      },
      {
        name: '移入作業',
        items: [
          { name: '移入單作業', href: '#' },
          { name: '移入下架作業', href: '#' },
          { name: '移入稽核作業', href: '#' },
        ]
      },
    ]
  },
  {
    name: '稽核作業',
    items: [
      { name: '表A003 存倉物品抽查記錄表', href: '#' },
      { name: '表A004 倉庫表單抽查記錄表', href: '#' },
      { name: 'A005文件進倉記錄表', href: '#' },
      {
        name: '盤點作業',
        items: [
          { name: '盤點單作業盤點', href: '#' },
          { name: '初盤作業盤點', href: '#' },
          { name: '複盤作業', href: '#' },
        ]
      },
    ]
  },
  {
    name: '倉儲管理作業',
    items: [
      {
        name: '工作單維護',
        items: [
          { name: '工作單主檔維護', href: '#' },
          { name: '工作單明細維護', href: '#' },
        ]
      },
      {
        name: '移儲單維護',
        items: [
          { name: '移出單維護', href: '#' },
          { name: '移入單維護', href: '#' },
        ]
      },
      { name: '盤點單維護', href: '#' },
      {
        name: '各種單據主管審核',
        items: [
          { name: '通知單取消審核', href: '#' },
          { name: '移出/移入單取消審核', href: '#' },
          { name: '盤點單取消審核', href: '#' },
        ]
      },
      { name: '箱子/物件 庫存維護', href: '#' },
    ]
  },
  {
    name: '系統管理作業',
    items: [
      { name: '系統管理者帳號設定', href: '#' },
      {
        name: '系統參數設定',
        items: [
          { name: '通知方式', href: '#' },
          { name: '多語系維護', href: '#' },
        ]
      },
      { name: '客戶使用者設定', href: '#' },
      { name: '使用者帳號角色設定', href: '#' },
      {
        name: '系統權限控管設定',
        items: [
          { name: '群組權限設定', href: '#' },
          { name: '使用者群組設定', href: '#' },
          { name: '功能選單設定', href: '#' },
        ]
      },
      { name: '資料交換作業維護', href: '#' },
      { name: '郵件通知作業維護', href: '#' },
      { name: '最新訊息通知', href: '#' },
    ]
  },
];

// Recursive Dropdown Menu Component
function DropdownMenu({ items }: { items: MenuItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical">
        {items.map((item) => (
          <div key={item.name} className="relative group/submenu">
            {item.items ? (
              <>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                  role="menuitem"
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
                {/* Submenu Wrapper with padding bridge */}
                <div className="hidden group-hover/submenu:block absolute left-full top-0 w-56 pl-1 z-50">
                  <DropdownMenu items={item.items} />
                </div>
              </>
            ) : (
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left: Logo & Title */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto object-contain"
                src={logo}
                alt="Crown Logo"
              />
              <span className="ml-3 text-xl font-bold text-gray-900 hidden xl:block">
                文件倉儲管理系統
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                <button className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Top Level Dropdown Wrapper with padding bridge */}
                <div className="hidden group-hover:block absolute left-0 top-full w-56 pt-2 z-50">
                  <DropdownMenu items={item.items || []} />
                </div>
              </div>
            ))}
          </div>

          {/* Right: User Tools */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher (Mock) */}
            <button className="text-gray-400 hover:text-gray-500">
              <Globe className="h-5 w-5" />
            </button>

            {/* Theme Switcher (Mock) */}
            <button className="text-gray-400 hover:text-gray-500">
              <Sun className="h-5 w-5" />
            </button>

            {/* User Menu */}
            <div className="relative ml-3" ref={userMenuRef}>
              <div>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">{user?.name || user?.username}</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
              
              {isUserMenuOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                    <p>帳號: {user?.username}</p>
                    <p>IP: 192.168.1.100</p>
                  </div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1}>變更密碼</a>
                  <button
                    onClick={logout}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    登出
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.name}>
                 <a
                  href={item.href || '#'}
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                >
                  {item.name}
                </a>
                {/* Simple mobile submenu indentation */}
                {item.items && item.items.map(subItem => (
                   <div key={subItem.name}>
                     <a
                      href={subItem.href || '#'}
                      className="block pl-8 pr-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    >
                      {subItem.name}
                    </a>
                    {/* 3rd level mobile */}
                    {subItem.items && subItem.items.map(subSubItem => (
                      <a
                        key={subSubItem.name}
                        href={subSubItem.href || '#'}
                        className="block pl-12 pr-4 py-2 text-xs font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-800"
                      >
                        {subSubItem.name}
                      </a>
                    ))}
                   </div>
                ))}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <User className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{user?.name || user?.username}</div>
                <div className="text-sm font-medium text-gray-500">{user?.role}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                登出
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
