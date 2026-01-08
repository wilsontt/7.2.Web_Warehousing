
import { ClipboardList, Truck, FileCheck } from 'lucide-react';
import { StatCard } from './StatCard';

export function TaskSummaryWidget() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <StatCard
        title="未完成單據"
        value="12"
        icon={ClipboardList}
        color="yellow"
        trend={{ value: -5, label: "較昨日" }}
      />
      <StatCard
        title="待出貨數"
        value="85"
        icon={Truck}
        color="blue"
        trend={{ value: 12, label: "較昨日" }}
      />
      <StatCard
        title="待稽核數"
        value="3"
        icon={FileCheck}
        color="red"
        trend={{ value: 0, label: "較昨日" }}
      />
    </div>
  );
}
