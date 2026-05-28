import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  LayoutDashboard,
  BarChart3,
  Link2,
  LogOut,
  Sparkles,
} from 'lucide-react';

import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      path: '/analytics',
    },
  ];

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex fixed left-0 top-0 h-screen w-[290px] bg-[#0b0e08]/95 backdrop-blur-2xl border-r border-white/5 flex-col justify-between p-6 z-50"
    >

      {/* Top Section */}

      <div>

        {/* Logo */}

        <div className="flex items-center gap-4 mb-12">

          <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">

            <Link2 className="text-black" size={28} />

          </div>

          <div>

            <h1 className="text-3xl font-black gradient-text">
              LinkLoom
            </h1>

            <p className="text-xs tracking-[3px] uppercase text-white/30 mt-1">
              Smart URL Platform
            </p>

          </div>

        </div>

        {/* User Card */}

        <div className="glass-dark rounded-[28px] border border-primary/10 p-5 mb-10">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-black text-xl font-black">

              {user?.name?.charAt(0)}

            </div>

            <div>

              <p className="text-xs text-white/40">
                Logged In As
              </p>

              <h2 className="font-bold text-lg mt-1">
                {user?.name}
              </h2>

            </div>

          </div>

          <div className="flex items-center gap-2 mt-5 text-primary text-sm">

            <Sparkles size={16} />

            <p>Premium Workspace Enabled</p>

          </div>

        </div>

        {/* Navigation */}

        <nav className="space-y-3">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-accent text-black font-bold shadow-glow'
                    : 'text-white/65 hover:bg-white/5 hover:text-primary'
                }`
              }
            >

              <item.icon size={22} />

              <span className="text-[15px]">
                {item.name}
              </span>

            </NavLink>
          ))}

        </nav>

      </div>

      {/* Bottom Section */}

      <div>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all duration-300"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </motion.aside>
  );
};

export default Sidebar;