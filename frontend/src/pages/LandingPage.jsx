import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  BarChart3,
  Link2,
  Globe,
  Sparkles,
  ArrowRight,
  MousePointerClick,
} from 'lucide-react';

import Navbar from '../components/Navbar';

const features = [
  {
    icon: Zap,
    title: 'Ultra Fast Processing',
    desc: 'Generate premium smart links instantly with optimized high-speed infrastructure.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    desc: 'Track clicks, devices, countries, browsers and engagement in real time.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Protected authentication and secured URL routing for business-grade reliability.',
  },
];

const stats = [
  {
    value: '50K+',
    label: 'Short Links Created',
  },
  {
    value: '99.9%',
    label: 'Server Uptime',
  },
  {
    value: '120+',
    label: 'Countries Reached',
  },
];

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d1009] text-white">
      <div className="absolute top-[-150px] left-[-150px] w-[420px] h-[420px] bg-primary/20 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[380px] h-[380px] bg-accent/20 blur-[140px] rounded-full pointer-events-none"></div>

      <Navbar />

      <section className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full border border-primary/15 mb-8">
              <Sparkles className="text-primary" size={18} />

              <p className="text-sm font-medium text-primary">
                Next Generation Smart URL Platform
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
              Create
              <span className="gradient-text"> Neon Smart </span>
              Links For Modern Businesses.
            </h1>

            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-xl">
              Build powerful branded short URLs with advanced analytics,
              business intelligence, QR generation and premium performance.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="/signup"
                className="primary-btn px-8 py-4 text-lg flex items-center gap-3"
              >
                Start Free
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/login"
                className="secondary-btn px-8 py-4 rounded-2xl text-lg"
              >
                Login
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-16 max-w-2xl">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="glass-dark rounded-3xl p-6 border border-primary/10"
                >
                  <h2 className="text-4xl font-black gradient-text">
                    {item.value}
                  </h2>

                  <p className="text-white/45 mt-2 text-sm leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-dark rounded-[36px] p-8 border border-primary/10 shadow-card">

              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-black">
                    Smart Link Generator
                  </h2>

                  <p className="text-white/50 mt-2">
                    Business-class URL shortening experience
                  </p>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                  <Link2 className="text-black" size={30} />
                </div>
              </div>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Paste your long URL here..."
                  className="input-premium"
                />

                <button className="primary-btn w-full py-4 text-lg font-bold">
                  Generate Smart Link
                </button>
              </div>

              <div className="mt-8 glass rounded-3xl p-5 border border-primary/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white/40 text-sm">
                      Generated Link
                    </p>

                    <h3 className="text-primary font-semibold mt-1 break-all">
                      linkloom.io/modern-business-link
                    </h3>
                  </div>

                  <button className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center hover:bg-primary/25 transition-all">
                    <MousePointerClick className="text-primary" size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="glass rounded-2xl p-5 text-center">
                  <h2 className="text-3xl font-black text-primary">
                    2.5K
                  </h2>

                  <p className="text-xs text-white/45 mt-2">
                    Clicks
                  </p>
                </div>

                <div className="glass rounded-2xl p-5 text-center">
                  <h2 className="text-3xl font-black text-primary">
                    120
                  </h2>

                  <p className="text-xs text-white/45 mt-2">
                    Countries
                  </p>
                </div>

                <div className="glass rounded-2xl p-5 text-center">
                  <Globe className="mx-auto text-primary mb-2" />

                  <p className="text-xs text-white/45">
                    Global Reach
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <section
        id="features"
        className="relative max-w-7xl mx-auto px-5 lg:px-10 py-24"
      >
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-5xl font-black">
            Premium <span className="gradient-text">Features</span>
          </h2>

          <p className="text-white/55 text-lg mt-6 leading-relaxed">
            Everything modern businesses need to manage, track and optimize
            smart links with advanced performance insights.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-dark rounded-[32px] p-8 border border-primary/10 card-hover"
            >

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <feature.icon className="text-black" size={30} />
              </div>

              <h3 className="text-2xl font-bold mt-8">
                {feature.title}
              </h3>

              <p className="text-white/55 mt-5 leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-5 lg:px-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

          <div>
            <h2 className="text-3xl font-black gradient-text">
              LinkLoom
            </h2>

            <p className="text-white/35 text-sm mt-2">
              Smart URL Intelligence Platform
            </p>
          </div>

          <p className="text-white/35 text-sm text-center md:text-right">
            © 2026 LinkLoom · Professional Business Link Management Platform
          </p>

        </div>

      </footer>
    </div>
  );
};

export default LandingPage;