import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type, show }) => {
  if (!show) return null;

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        className={`fixed top-6 right-6 z-[999] px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-card ${
          type === 'error'
            ? 'bg-red-500/10 border-red-500/20 text-red-400'
            : 'bg-primary/10 border-primary/20 text-primary'
        }`}
      >

        {message}

      </motion.div>

    </AnimatePresence>
  );
};

export default Toast;