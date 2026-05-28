import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ compact }) => {
  const { user, logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`sticky top-0 z-50 backdrop-blur-xl bg-[#0d1009]/80 border-b border-white/5 ${
        compact ? 'h-16' : 'h-20'
      } flex items-center px-5 lg:px-10`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link
          to={isLoggedIn ? '/dashboard' : '/'}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
            <Zap className="text-black" size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight gradient-text">
              LinkLoom
            </h1>

            <p className="text-[11px] text-white/35 tracking-[3px] uppercase">
              Smart URL Platform
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a
            href="#features"
            className="hover:text-primary transition-all duration-300"
          >
            Features
          </a>

          <a
            href="#analytics"
            className="hover:text-primary transition-all duration-300"
          >
            Analytics
          </a>

          <a
            href="#security"
            className="hover:text-primary transition-all duration-300"
          >
            Security
          </a>

          <a
            href="#about"
            className="hover:text-primary transition-all duration-300"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="hidden lg:flex items-center gap-3 glass px-4 py-2 rounded-2xl border border-primary/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-black font-bold">
                  {user?.name?.charAt(0)}
                </div>

                <div>
                  <p className="text-xs text-white/40">Welcome Back</p>

                  <h3 className="text-sm font-semibold text-white">
                    {user?.name}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="secondary-btn px-5 py-2 rounded-xl text-white"
              >
                Dashboard
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="primary-btn px-5 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="secondary-btn px-5 py-2 rounded-xl text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="primary-btn px-5 py-2"
              >
                Get Started
              </Link>
            </>
          )}

          <button className="md:hidden w-11 h-11 rounded-xl glass flex items-center justify-center border border-primary/10">
            <Menu className="text-primary" size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;