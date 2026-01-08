import { Bell, AlertTriangle } from 'lucide-react';

const NOTIFICATIONS = [
  { id: 1, title: '系統維護公告', message: '系統將於今晚 22:00 進行例行維護', type: 'info', time: '10:00' },
  { id: 2, title: '庫存異常提醒', message: 'A區倉庫溫濕度異常', type: 'warning', time: '09:30' },
  { id: 3, title: '新功能上線', message: '報表匯出功能已更新', type: 'info', time: '昨天' },
];

export function NotificationWidget() {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg h-full transition-colors duration-300">
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">最新通知</h3>
        <div className="flow-root">
          <ul className="-my-4 divide-y divide-gray-200">
            {NOTIFICATIONS.map((notification) => (
              <li key={notification.id} className="py-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {notification.type === 'warning' ? (
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    ) : (
                      <Bell className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{notification.message}</p>
                  </div>
                  <div className="ml-3">
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
