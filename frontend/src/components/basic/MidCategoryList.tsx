import type { MidCategory } from '../../types/codeMaintenance';
import { cn } from '../../utils/cn';

interface MidCategoryListProps {
  data: MidCategory[];
  selectedId: string | null; // CategoryFirstNo + CategorySecondNo? Or just SecondNo? usually composite key
  onSelect: (id: string) => void;
  loading?: boolean;
}

/**
 * 中分類列表元件 (Mid Category List)
 * 顯示於右上方，根據大分類聯動
 */
export function MidCategoryList({ 
  data, 
  selectedId, 
  onSelect,
  loading = false 
}: MidCategoryListProps) {

  if (loading) {
     return <div className="p-4 text-center text-sm text-gray-400">載入中...</div>;
  }

  // 根據 US-1.1-001 驗收條件 3: 若父層有選但無資料 -> 顯示無資料
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm p-4">
        <span>無對應的中分類資料</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-auto bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap w-20">代碼</th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">中分類名稱</th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap text-right w-24">數值1</th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap text-right w-24">數值2</th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">備註</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-900">
          {data.map((item) => {
            const isSelected = selectedId === item.CategorySecondNo;
            return (
              <tr
                key={`${item.CategoryFirstNo}-${item.CategorySecondNo}`}
                onClick={() => onSelect(item.CategorySecondNo)}
                className={cn(
                  "cursor-pointer transition-colors duration-150 group " +
                  (isSelected 
                    ? "bg-blue-100 dark:bg-blue-800/80 hover:bg-blue-200 dark:hover:bg-blue-700" // Highlight: Stronger blue
                    : "even:bg-gray-100 dark:even:bg-white/[0.02] hover:bg-gray-200 dark:hover:bg-white/[0.05]") // Zebra: Darker light / Subtler dark
                )}
              >
                <td className="py-2 px-3 text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                  {item.CategorySecondNo}
                </td>
                <td className="py-2 px-3 text-sm text-gray-700 dark:text-gray-300">
                  {item.MidName}
                </td>
                <td className="py-2 px-3 text-sm text-gray-600 dark:text-gray-400 text-right font-mono">
                  {item.Value1?.toLocaleString('zh-TW', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) ?? '-'}
                </td>
                <td className="py-2 px-3 text-sm text-gray-600 dark:text-gray-400 text-right font-mono">
                  {item.Value2?.toLocaleString('zh-TW', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) ?? '-'}
                </td>
                <td className="py-2 px-3 text-sm text-gray-500 dark:text-gray-500 truncate max-w-[150px]">
                  {item.Remark || '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
