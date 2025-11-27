import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '客戶A', value: 400 },
  { name: '客戶B', value: 300 },
  { name: '客戶C', value: 300 },
  { name: '客戶D', value: 200 },
  { name: '客戶E', value: 278 },
  { name: '客戶F', value: 189 },
];

export function ChartWidget() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg h-96">
      <div className="p-5 h-full flex flex-col">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">存倉數量 Top 10 (箱)</h3>
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4F46E5" name="存倉數" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
