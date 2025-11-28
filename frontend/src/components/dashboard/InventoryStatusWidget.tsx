import { Package, Box } from 'lucide-react';

export function InventoryStatusWidget() {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors duration-300">
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">庫存概況</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="rounded-md p-3 bg-indigo-50 text-indigo-600">
                <Package className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">總箱數</dt>
                <dd className="text-lg font-medium text-gray-900 dark:text-white">12,500</dd>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="rounded-md p-3 bg-purple-50 text-purple-600">
                <Box className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">使用率</dt>
                <dd className="text-lg font-medium text-gray-900 dark:text-white">78%</dd>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
