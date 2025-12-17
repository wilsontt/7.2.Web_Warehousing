import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { Menu, X, User, ChevronDown, Settings, Database, Globe, Sun, ChevronRight, Type, ClipboardList, Package, Users, ArrowLeftRight, FileCheck, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { CalendarIcon } from '../common/CalendarIcon';

// 定義選單項目型別
interface MenuItem {
  name: string;
  icon?: React.ElementType;
  iconColor?: string;
  href?: string;
  items?: MenuItem[];
}

// 根據規格定義的完整導覽資料
const NAVIGATION_ITEMS: MenuItem[] = [
  {
    name: '1. 基本作業',
    icon: Database,
    iconColor: 'text-blue-600',
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
    name: '2. 例行作業',
    icon: ClipboardList,
    iconColor: 'text-green-600',
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
    name: '3. 庫存作業',
    icon: Package,
    iconColor: 'text-orange-500',
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
    name: '4. 客戶作業',
    icon: Users,
    iconColor: 'text-purple-600',
    items: [
      { name: '客戶工作通知單', href: '#' },
      { name: '工作通知單審核作業', href: '#' },
      { name: '箱子/物件 即時庫存查詢', href: '#' },
      { name: '箱子/物件 倉儲報表下載', href: '#' },
    ]
  },
  {
    name: '5. 移儲作業',
    icon: ArrowLeftRight,
    iconColor: 'text-indigo-600',
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
    name: '6. 稽核作業',
    icon: FileCheck,
    iconColor: 'text-red-600',
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
    name: '7. 倉儲管理作業',
    icon: Warehouse,
    iconColor: 'text-teal-600',
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
    name: '8. 系統管理作業',
    icon: Settings,
    iconColor: 'text-gray-600',
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

// 遞迴下拉選單組件
function DropdownMenu({ items }: { items: MenuItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical">
        {items.map((item) => (
          <div key={item.name} className="relative group/submenu">
            {item.items ? (
              <>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  role="menuitem"
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
                {/* 子選單容器 (含緩衝區) */}
                <div className="hidden group-hover/submenu:block absolute left-full top-0 w-56 pl-1 z-50">
                  <DropdownMenu items={item.items} />
                </div>
              </>
            ) : (
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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

// 手機版選單項目組件 (支援手風琴式折疊/展開)
function MobileMenuItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        <div className="flex items-center">
          {item.icon && <item.icon className={`mr-2 h-5 w-5 ${item.iconColor}`} />}
          <span>{item.name}</span>
        </div>
        {item.items && (
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        )}
      </button>
      
      {/* 子選單 (折疊式) */}
      {isOpen && item.items && (
        <div className="bg-gray-50 dark:bg-gray-800">
          {item.items.map((subItem) => (
            <div key={subItem.name}>
              <a
                href={subItem.href || '#'}
                className="block pl-8 pr-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white"
              >
                {subItem.name}
              </a>
              {/* 第三層選單 */}
              {subItem.items && subItem.items.map((subSubItem) => (
                <a
                  key={subSubItem.name}
                  href={subSubItem.href || '#'}
                  className="block pl-12 pr-4 py-2 text-xs font-medium text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white"
                >
                  {subSubItem.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  // 初始化時從 localStorage 讀取設定，預設為 'medium'
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>(() => {
    return (localStorage.getItem('app-font-size') as 'small' | 'medium' | 'large') || 'medium';
  });
  // 初始化主題設定
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (localStorage.getItem('app-theme')) {
      return localStorage.getItem('app-theme') as 'light' | 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  // 日期時間狀態管理
  const [currentDateTime, setCurrentDateTime] = useState<Date>(() => new Date());
  const userMenuRef = useRef<HTMLDivElement>(null);

  // 監聽 theme 變化
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  // 監聽 fontSize 變化，更新 CSS 變數與 localStorage
  useEffect(() => {
    const sizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    document.documentElement.style.setProperty('--base-font-size', sizeMap[fontSize]);
    localStorage.setItem('app-font-size', fontSize);
  }, [fontSize]);

  // 點擊外部時關閉使用者選單
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

  // 實時更新日期時間
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // 每秒更新一次

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左側: Logo 與標題 */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto object-contain"
                src={logo}
                alt="Crown Logo"
              />
              <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white hidden xl:block">
                文件倉儲管理系統
              </span>
            </Link>
          </div>

          {/* 中間: 桌面版導覽列 */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                <button className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                  {item.icon && <item.icon className={`mr-1.5 h-4 w-4 ${item.iconColor}`} />}
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* 頂層下拉選單容器 (含緩衝區) */}
                <div className="hidden group-hover:block absolute left-0 top-full w-56 pt-2 z-50">
                  <DropdownMenu items={item.items || []} />
                </div>
              </div>
            ))}
          </div>

          {/* 右側: 使用者工具列 */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* 使用者選單 */}
            <div className="relative ml-3" ref={userMenuRef}>
              <div>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="max-w-xs bg-white dark:bg-gray-800 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-200 font-medium">{user?.name || user?.username}</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
              
              {isUserMenuOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                    <p>帳號: {user?.username}</p>
                    <p>IP: 192.168.1.100</p>
                  </div>
                  
                  {/* 日期-時間顯示 */}
                  <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700 flex items-center space-x-3">
                    <CalendarIcon date={currentDateTime} size={40} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {currentDateTime.toLocaleDateString('zh-TW', { 
                          year: 'numeric', 
                          month: '2-digit', 
                          day: '2-digit' 
                        })}
                      </div>
                      <div className="text-sm font-medium">
                        {currentDateTime.toLocaleTimeString('zh-TW', { 
                          hour: '2-digit', 
                          minute: '2-digit', 
                          second: '2-digit',
                          hour12: false 
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* 語系與主題切換 (移至此處) */}
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center" role="menuitem">
                    <Globe className="mr-2 h-4 w-4" />
                    切換語系
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setTheme(theme === 'light' ? 'dark' : 'light'); }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                    role="menuitem"
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    {theme === 'light' ? '切換深色模式' : '切換淺色模式'}
                  </button>

                  {/* 字體大小調整 */}
                  <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between" role="menuitem">
                    <div className="flex items-center">
                      <Type className="mr-2 h-4 w-4" />
                      <span>字體大小</span>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={(e) => { e.stopPropagation(); setFontSize('small'); }}
                        className={`px-2 py-0.5 text-xs rounded border ${fontSize === 'small' ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                      >
                        小
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setFontSize('medium'); }}
                        className={`px-2 py-0.5 text-xs rounded border ${fontSize === 'medium' ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                      >
                        中
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setFontSize('large'); }}
                        className={`px-2 py-0.5 text-xs rounded border ${fontSize === 'large' ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                      >
                        大
                      </button>
                    </div>
                  </div>

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem" tabIndex={-1}>變更密碼</a>
                  <button
                    onClick={logout}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    登出
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 手機版選單按鈕 */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">開啟主選單</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 手機版選單 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {NAVIGATION_ITEMS.map((item, index) => (
              <MobileMenuItem 
                key={item.name} 
                item={item}
              />
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <User className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800 dark:text-gray-200">{user?.name || user?.username}</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{user?.role}</div>
              </div>
            </div>
            {/* 手機版日期-時間顯示 */}
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-3">
              <CalendarIcon date={currentDateTime} size={40} />
              <div className="flex-1">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {currentDateTime.toLocaleDateString('zh-TW', { 
                    year: 'numeric', 
                    month: '2-digit', 
                    day: '2-digit' 
                  })}
                </div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {currentDateTime.toLocaleTimeString('zh-TW', { 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit',
                    hour12: false 
                  })}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                切換語系
              </button>
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'light' ? '切換深色模式' : '切換淺色模式'}
              </button>
              <div className="px-4 py-2">
                <div className="text-base font-medium text-gray-500 dark:text-gray-400 mb-2">字體大小</div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setFontSize('small')}
                    className={`px-3 py-1 text-sm rounded border ${fontSize === 'small' ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                  >
                    小
                  </button>
                  <button
                    onClick={() => setFontSize('medium')}
                    className={`px-3 py-1 text-sm rounded border ${fontSize === 'medium' ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                  >
                    中
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-3 py-1 text-sm rounded border ${fontSize === 'large' ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                  >
                    大
                  </button>
                </div>
              </div>
              <a
                href="#"
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                變更密碼
              </a>
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
