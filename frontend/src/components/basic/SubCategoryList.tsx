import type { SubCategory } from '../../types/codeMaintenance';
import { cn } from '../../utils/cn';

interface SubCategoryListProps {
  data: SubCategory[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  loading?: boolean;
}

/**
 * 細分類列表元件 (Sub Category List)
 * 顯示於右下方，根據中分類聯動
 */
export function SubCategoryList({ 
  data, 
  selectedId, 
  onSelect, 
  loading = false 
}: SubCategoryListProps) {

  if (loading) {
     return <div className="p-4 text-center text-sm text-gray-400">載入中...</div>;
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm p-4">
         <span>尚無細分類資料</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-auto bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap w-20">代碼</th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">編碼說明</th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">備註</th>
            <th className="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap w-32">建檔時間</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-900">
          {data.map((item) => {
            const isSelected = selectedId === item.subcat_no;
            return (
              <tr
                key={`${item.CategoryFirstNo}-${item.CategorySecondNo}-${item.subcat_no}`}
                onClick={() => onSelect(item.subcat_no)}
                className={cn(
                  "cursor-pointer transition-colors duration-150 group " +
                  (isSelected 
                    ? "bg-blue-100 dark:bg-blue-800/80 hover:bg-blue-200 dark:hover:bg-blue-700" 
                    : "even:bg-gray-100 dark:even:bg-white/[0.02] hover:bg-gray-200 dark:hover:bg-white/[0.05]")
                )}
              >
                <td className="py-2 px-3 text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                  {item.subcat_no}
                </td>
                <td className="py-2 px-3 text-sm text-gray-700 dark:text-gray-300">
                  {item.code_desc}
                </td>
                <td className="py-2 px-3 text-sm text-gray-500 dark:text-gray-500 truncate max-w-[200px]">
                  {item.remark || '-'}
                </td>
                <td className="py-2 px-3 text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                  {item.CreatedDateTime?.split(' ')[0]} {/* 僅顯示日期 */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
