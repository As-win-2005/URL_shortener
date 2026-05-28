import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import {
  Link2,
  MousePointerClick,
  Globe,
  Plus,
} from 'lucide-react';

import UrlTable from '../components/UrlTable';
import CreateUrlModal from '../components/CreateUrlModal';

import {
  getMyUrls,
} from '../services/urlService';

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const fetchUrls = async () => {
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
    fetchUrls();
  }, []);

  const totalClicks = urls.reduce(
    (acc, item) => acc + (item.clicks || 0),
    0
  );

  const stats = [
    {
      title: 'Total Links',
      value: urls.length,
      icon: Link2,
    },
    {
      title: 'Total Clicks',
      value: totalClicks,
      icon: MousePointerClick,
    },
    {
      title: 'Global Reach',
      value: '120+',
      icon: Globe,
    },
  ];

  return (
    <div className="space-y-10">

      {/* Header */}

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

        <div>

          <h1 className="text-5xl font-black leading-tight">
            Smart Link <span className="gradient-text">Dashboard</span>
          </h1>

          <p className="text-white/50 text-lg mt-4 max-w-2xl">
            Manage, analyze and optimize all your shortened URLs with premium analytics and intelligent tracking.
          </p>

        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="primary-btn px-7 py-4 text-lg flex items-center gap-3"
        >

          <Plus size={22} />

          Create Smart Link

        </button>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
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

                <item.icon className="text-black" size={30} />

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* URL Table */}

      <div className="glass-dark rounded-[36px] border border-primary/10 p-6 lg:p-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-black">
              Your Smart Links
            </h2>

            <p className="text-white/45 mt-2">
              All shortened URLs and analytics insights.
            </p>

          </div>

        </div>

        <UrlTable
          urls={urls}
          loading={loading}
          refreshUrls={fetchUrls}
        />

      </div>

      {/* Modal */}

      {showModal && (
        <CreateUrlModal
          onClose={() => setShowModal(false)}
          refreshUrls={fetchUrls}
        />
      )}

    </div>
  );
};

export default Dashboard;