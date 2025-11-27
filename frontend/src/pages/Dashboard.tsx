import { TaskSummaryWidget } from '../components/dashboard/TaskSummaryWidget';
import { InventoryStatusWidget } from '../components/dashboard/InventoryStatusWidget';
import { NotificationWidget } from '../components/dashboard/NotificationWidget';
import { WarehouseInfoWidget } from '../components/dashboard/WarehouseInfoWidget';
import { ChartWidget } from '../components/dashboard/ChartWidget';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 第一區塊: 頂部資訊卡片 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左欄: 今日任務 (大螢幕佔 2 欄) */}
        <div className="lg:col-span-2">
          <TaskSummaryWidget />
        </div>
        
        {/* 右欄: 最新通知 */}
        <div className="lg:col-span-1">
          <NotificationWidget />
        </div>
      </div>

      {/* 第二區塊: 中間圖表與統計 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventoryStatusWidget />
        <ChartWidget />
      </div>

      {/* 第三區塊: 底部詳細資訊 */}
      <div className="grid grid-cols-1 gap-6">
        <WarehouseInfoWidget />
      </div>
    </div>
  );
}
