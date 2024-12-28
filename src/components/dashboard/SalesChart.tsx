import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
  { month: 'Jul', sales: 7000 },
  { month: 'Aug', sales: 6500 },
  { month: 'Sep', sales: 8000 },
  { month: 'Oct', sales: 7500 },
];

export function SalesChart() {
  return (
    <div className="bg-[#FFF5E1] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#6F4E37]">Sales Per Month</h3>
        <div className="flex items-center gap-2">
          <span className="text-[#2E8B57] font-semibold">+24.24%</span>
          <span className="text-sm text-gray-600">vs last month</span>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#90EE90" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#90EE90" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6F4E37' }}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6F4E37' }}
              width={60}
              padding={{ top: 20, bottom: 20 }}
            />
            <Tooltip
              contentStyle={{
                background: '#FFF',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#2E8B57"
              fill="url(#salesGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}