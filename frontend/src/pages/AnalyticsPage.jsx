import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import {
  MousePointerClick,
  Globe,
  Activity,
  TrendingUp,
} from 'lucide-react';

import AnalyticsChart from '../components/AnalyticsChart';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';

import {
  getMyUrls,
} from '../services/urlService';
const AnalyticsPage = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

     const res = await getMyUrls();

setUrls(res.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const totalClicks = urls.reduce(
    (acc, item) => acc + (item.clicks || 0),
    0
  );

  const topLink =
    urls.length > 0
      ? urls.reduce((prev, current) =>
          (prev.clicks || 0) > (current.clicks || 0)
            ? prev
            : current
        )
      : null;

  const stats = [
    {
      title: 'Total Clicks',
      value: totalClicks,
      icon: MousePointerClick,
    },
    {
      title: 'Smart Links',
      value: urls.length,
      icon: Globe,
    },
    {
      title: 'Performance',
      value: '98%',
      icon: TrendingUp,
    },
    {
      title: 'Traffic Growth',
      value: '+24%',
      icon: Activity,
    },
  ];

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!urls.length) {
    return (
      <EmptyState
        title="No Analytics Available"
        description="Create smart links to begin collecting analytics insights."
      />
    );
  }

  return (
    <div className="space-y-10">

      {/* Header */}

      <div>

        <h1 className="text-5xl font-black">
          Analytics <span className="gradient-text">Insights</span>
        </h1>

        <p className="text-white/50 text-lg mt-4 max-w-2xl">
          Monitor smart link engagement, traffic performance and user activity in real-time.
        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            className="glass-dark rounded-[32px] border border-primary/10 p-7 card-hover"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-white/45 text-sm">
                  {item.title}
                </p>

                <h2 className="text-5xl font-black gradient-text mt-4">
                  {item.value}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">

                <item.icon className="text-black" size={28} />

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Chart */}

      <div className="glass-dark rounded-[36px] border border-primary/10 p-8">

        <div className="mb-8">

          <h2 className="text-3xl font-black">
            Traffic Performance
          </h2>

          <p className="text-white/45 mt-2">
            Click analytics across all smart links.
          </p>

        </div>

        <AnalyticsChart urls={urls} />

      </div>

      {/* Top Link */}

      {topLink && (
        <div className="glass-dark rounded-[36px] border border-primary/10 p-8">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

            <div>

              <p className="text-primary font-semibold mb-3">
                TOP PERFORMING LINK
              </p>

              <h2 className="text-3xl font-black break-all">
                {topLink.shortUrl}
              </h2>

              <p className="text-white/50 mt-4 break-all">
                {topLink.originalUrl}
              </p>

            </div>

            <div className="glass rounded-3xl px-8 py-6 border border-primary/10 text-center">

              <h2 className="text-5xl font-black gradient-text">
                {topLink.clicks || 0}
              </h2>

              <p className="text-white/45 mt-2">
                Total Clicks
              </p>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AnalyticsPage;