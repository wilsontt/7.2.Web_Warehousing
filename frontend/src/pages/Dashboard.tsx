import { TaskSummaryWidget } from '../components/dashboard/TaskSummaryWidget';
import { InventoryStatusWidget } from '../components/dashboard/InventoryStatusWidget';
import { NotificationWidget } from '../components/dashboard/NotificationWidget';
import { WarehouseInfoWidget } from '../components/dashboard/WarehouseInfoWidget';
import { ChartWidget } from '../components/dashboard/ChartWidget';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Section 1: Top Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Task Summary (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <TaskSummaryWidget />
        </div>
        
        {/* Right Column: Notifications */}
        <div className="lg:col-span-1">
          <NotificationWidget />
        </div>
      </div>

      {/* Section 2: Middle Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventoryStatusWidget />
        <ChartWidget />
      </div>

      {/* Section 3: Bottom Widgets */}
      <div className="grid grid-cols-1 gap-6">
        <WarehouseInfoWidget />
      </div>
    </div>
  );
}
