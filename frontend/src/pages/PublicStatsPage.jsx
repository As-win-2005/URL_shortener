import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  getPublicStats,
} from '../services/urlService';

const PublicStatsPage = () => {
  const { shortCode } = useParams();

  const [urlData, setUrlData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      setLoading(true);
const res = await getPublicStats(shortCode);

setUrlData(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [shortCode]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!urlData) {
    return (
      <EmptyState
        title="Analytics Not Found"
        description="The requested smart link analytics could not be found."
      />
    );
  }

  const stats = [
    {
      title: 'Total Clicks',
      value: urlData.clicks || 0,
      icon: MousePointerClick,
    },
    {
      title: 'Global Reach',
      value: '120+',
      icon: Globe,
    },
    {
      title: 'Traffic Growth',
      value: '+18%',
      icon: TrendingUp,
    },
    {
      title: 'Performance',
      value: '98%',
      icon: Activity,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1009] text-white px-5 lg:px-10 py-10">

      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}

        <div className="glass-dark rounded-[36px] border border-primary/10 p-8 lg:p-10">

          <p className="text-primary font-semibold mb-4">
            PUBLIC ANALYTICS REPORT
          </p>

          <h1 className="text-5xl font-black break-all">
            {urlData.shortUrl}
          </h1>

          <p className="text-white/50 mt-5 break-all">
            {urlData.originalUrl}
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
              className="glass-dark rounded-[32px] border border-primary/10 p-7"
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

            </div>
          ))}

        </div>

        {/* Analytics */}

        <div className="glass-dark rounded-[36px] border border-primary/10 p-8">

          <h2 className="text-3xl font-black mb-8">
            Click Performance
          </h2>

          <AnalyticsChart urls={[urlData]} />

        </div>

      </div>

    </div>
  );
};

export default PublicStatsPage;