import { motion } from 'framer-motion';
import { X, Download } from 'lucide-react';

const QRModal = ({ qrCode, onClose }) => {
  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md flex items-center justify-center px-5">

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="glass-dark rounded-[36px] border border-primary/10 p-8 relative w-full max-w-md text-center"
      >

        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
        >

          <X className="text-white/70" size={20} />

        </button>

        <h2 className="text-4xl font-black mb-4">
          QR <span className="gradient-text">Preview</span>
        </h2>

        <p className="text-white/50 mb-8">
          Scan this QR code to instantly access your smart link.
        </p>

       <div className="glass rounded-[32px] p-6 border border-primary/10 inline-block">

  <img
    src={qrCode}
    alt="QR Code"
    className="w-[250px] h-[250px] object-contain"
  />

  <button
    type="button"
    onClick={() => {
      const link = document.createElement('a');

      link.href = qrCode;
      link.download = 'smart-link-qr.png';

      link.click();
    }}
    className="primary-btn mt-8 px-6 py-3 inline-flex items-center gap-3"
  >

    <Download size={18} />

    Download QR

  </button>

</div>

      </motion.div>

    </div>
  );
};

export default QRModal;