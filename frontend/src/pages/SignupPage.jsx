import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const SignupPage = () => {
  const navigate = useNavigate();

const { signup } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    await signup(
      formData.name,
      formData.email,
      formData.password
    );

    navigate('/dashboard');
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d1009] text-white">

      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-primary/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[320px] h-[320px] bg-accent/20 blur-[120px] rounded-full"></div>

      <Navbar compact />

      <div className="relative flex items-center justify-center min-h-[calc(100vh-80px)] px-5 py-14">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md"
        >

          <div className="glass-dark rounded-[36px] border border-primary/10 p-8 md:p-10 shadow-card">

            <div className="flex items-center justify-center mb-8">

              <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">

                <ShieldCheck className="text-black" size={38} />

              </div>

            </div>

            <div className="text-center">

              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary/10 mb-6">

                <Sparkles className="text-primary" size={16} />

                <p className="text-sm text-primary font-medium">
                  Create Your Smart Link Workspace
                </p>

              </div>

              <h1 className="text-4xl font-black">
                Create <span className="gradient-text">Account</span>
              </h1>

              <p className="text-white/50 mt-4 leading-relaxed">
                Build, manage and analyze professional smart links with advanced insights.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 mt-10"
            >

              <div>

                <label className="text-sm text-white/65 mb-3 block">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                    size={18}
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="input-premium pl-12"
                  />

                </div>

              </div>

              <div>

                <label className="text-sm text-white/65 mb-3 block">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                    size={18}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="input-premium pl-12"
                  />

                </div>

              </div>

              <div>

                <label className="text-sm text-white/65 mb-3 block">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                    size={18}
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Create password"
                    className="input-premium pl-12"
                  />

                </div>

              </div>

              <button
                type="submit"
                disabled={loading}
                className="primary-btn w-full py-4 text-lg font-bold flex items-center justify-center gap-3"
              >

                {loading ? 'Creating Account...' : 'Create Account'}

                {!loading && <ArrowRight size={20} />}

              </button>

            </form>

            <div className="mt-8 text-center">

              <p className="text-white/45">

                Already have an account?{' '}

                <Link
                  to="/login"
                  className="text-primary font-semibold hover:text-cream transition-all"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default SignupPage;