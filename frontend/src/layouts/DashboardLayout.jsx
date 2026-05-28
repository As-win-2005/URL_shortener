import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#0d1009] text-white overflow-hidden">

      {/* Background Glow Effects */}

      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[320px] h-[320px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Layout */}

      <div className="relative flex min-h-screen">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 lg:ml-[290px] px-5 lg:px-10 py-8"
        >

          <div className="max-w-7xl mx-auto">

            <Outlet />

          </div>

        </motion.main>

      </div>

    </div>
  );
};

export default DashboardLayout;