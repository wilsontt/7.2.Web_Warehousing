/**
 * CalendarIcon 組件
 * 動態生成日曆圖示，顯示月份和日期
 * 
 * @param date - 要顯示的日期
 * @param size - 圖示尺寸（預設 40px）
 */
interface CalendarIconProps {
  date: Date;
  size?: number;
}

export function CalendarIcon({ date, size = 40 }: CalendarIconProps) {
  // 取得月份英文縮寫並轉為大寫（例如：JAN, FEB, MAR）
  const monthAbbr = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  
  // 取得日期數字
  const day = date.getDate();

  return (
    <div
      className="border border-gray-900 rounded-md overflow-hidden flex flex-col"
      style={{ width: size, height: size }}
    >
      {/* 上半部分：淺藍色背景，顯示月份 */}
      <div className="bg-blue-100 flex items-center justify-center flex-1 min-h-0">
        <span className="text-xs font-semibold text-gray-900 leading-none">
          {monthAbbr}
        </span>
      </div>
      
      {/* 下半部分：淺黃色/奶油色背景，顯示日期 */}
      <div className="bg-yellow-50 flex items-center justify-center flex-1 min-h-0">
        <span className="text-sm font-bold text-gray-900 leading-none">
          {day}
        </span>
      </div>
    </div>
  );
}
