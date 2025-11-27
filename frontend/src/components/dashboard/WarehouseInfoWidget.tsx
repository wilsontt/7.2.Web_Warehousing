export function WarehouseInfoWidget() {
  const warehouses = [
    { id: 1, name: '台北一倉', capacity: 5000, used: 4200, borrowed: 150, status: '正常' },
    { id: 2, name: '台北二倉', capacity: 3000, used: 2100, borrowed: 80, status: '正常' },
    { id: 3, name: '台中倉', capacity: 4000, used: 3800, borrowed: 200, status: '滿載' },
    { id: 4, name: '高雄倉', capacity: 6000, used: 2400, borrowed: 50, status: '正常' },
  ];

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">倉庫詳細資訊</h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">倉庫名稱</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">可存放量</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">已存放</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">借出數</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {warehouses.map((warehouse) => (
                <tr key={warehouse.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{warehouse.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warehouse.capacity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warehouse.used}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warehouse.borrowed}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      warehouse.status === '正常' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {warehouse.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
