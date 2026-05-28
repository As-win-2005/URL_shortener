import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const AnalyticsChart = ({ urls }) => {
  const chartData = urls.map((url) => ({
    name: url.shortCode || 'URL',
    clicks: url.clicks || 0,
  }));

  return (
    <div className="w-full h-[400px]">

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart data={chartData}>

          <defs>

            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">

              <stop
                offset="5%"
                stopColor="#b5e550"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#b5e550"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <XAxis
            dataKey="name"
            stroke="#ffffff55"
          />

          <YAxis stroke="#ffffff55" />

          <Tooltip
            contentStyle={{
              background: '#10130d',
              border: '1px solid rgba(181,229,80,0.15)',
              borderRadius: '20px',
              color: '#fff',
            }}
          />

          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#b5e550"
            fillOpacity={1}
            fill="url(#colorClicks)"
            strokeWidth={4}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
};

export default AnalyticsChart;