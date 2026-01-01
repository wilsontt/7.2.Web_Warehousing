import type { MajorCategory } from '../../types/codeMaintenance';
import { cn } from '../../utils/cn';

interface MajorCategoryListProps {
  data: MajorCategory[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  loading?: boolean;
}

/**
 * 大分類列表元件 (Major Category List)
 * 顯示於左側面板，負責導覽
 */
export function MajorCategoryList({ 
  data, 
  selectedId, 
  onSelect,
  loading = false 
}: MajorCategoryListProps) {

  if (loading) {
    return (
      <div className="p-4 text-center text-sm text-gray-400">
        載入中...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 text-sm">
        尚無大分類資料
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-auto bg-white dark:bg-gray-900">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <tr>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap w-20">
              代碼
            </th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">
              大分類名稱
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-900">
          {data.map((item) => (
            <tr
              key={item.CategoryFirstNo}
              onClick={() => onSelect(item.CategoryFirstNo)}
              className={cn(
                "cursor-pointer transition-colors duration-150 group " +
                (selectedId === item.CategoryFirstNo
                  ? "bg-blue-100 dark:bg-blue-800/80 hover:bg-blue-200 dark:hover:bg-blue-700" // Highlight: Stronger blue
                  : "even:bg-gray-100 dark:even:bg-white/[0.02] hover:bg-gray-200 dark:hover:bg-white/[0.05]") // Zebra: Darker light / Subtler dark
              )}
            >
              <td className="py-2 px-3 text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                {item.CategoryFirstNo}
              </td>
              <td className="py-2 px-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                {item.MajorName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
