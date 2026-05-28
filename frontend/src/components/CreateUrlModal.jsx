import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  X,
  Link2,
  Sparkles,
} from 'lucide-react';

import {
  createUrl,
} from '../services/urlService';

import { useToast } from '../context/ToastContext';

const CreateUrlModal = ({ onClose, refreshUrls }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');

  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

 const handleCreate = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    console.log('FORM VALUES:', {
      originalUrl,
      customAlias,
    });
const payload = {
  originalUrl,
};

const trimmedAlias = customAlias.trim();

if (trimmedAlias.length >= 3) {
  payload.customAlias = trimmedAlias;
}

    console.log('PAYLOAD:', payload);

    const response = await createUrl(payload);

    console.log('API RESPONSE:', response);

    await refreshUrls();

    showToast('Smart link created successfully');

    onClose();

  } catch (error) {

    console.log('FULL ERROR:', error);

    console.log('ERROR RESPONSE:', error?.response);

    console.log('ERROR DATA:', error?.response?.data);

    showToast(
      error?.response?.data?.message || 'Failed to create smart link',
      'error'
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-5">

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-xl glass-dark rounded-[36px] border border-primary/10 p-8 relative"
      >

        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
        >

          <X className="text-white/70" size={20} />

        </button>

        <div className="flex items-center gap-4 mb-8">

          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">

            <Link2 className="text-black" size={30} />

          </div>

          <div>

            <h2 className="text-3xl font-black">
              Create Smart Link
            </h2>

            <p className="text-white/45 mt-2">
              Generate premium shortened URLs instantly.
            </p>

          </div>

        </div>

        <form
          onSubmit={handleCreate}
          className="space-y-6"
        >

          <div>

            <label className="text-sm text-white/60 mb-3 block">
              Original URL
            </label>

            <input
              type="url"
              required
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="https://example.com"
              className="input-premium"
            />

          </div>

          <div>

            <label className="text-sm text-white/60 mb-3 block">
              Custom Alias (Optional)
            </label>

            <input
              type="text"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
              placeholder="my-smart-link"
              className="input-premium"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="primary-btn w-full py-4 text-lg font-bold flex items-center justify-center gap-3"
          >

            <Sparkles size={20} />

            {loading ? 'Creating Smart Link...' : 'Generate Smart URL'}

          </button>

        </form>

      </motion.div>

    </div>
  );
};

export default CreateUrlModal;