import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0d1009] text-white flex items-center justify-center px-5">

      <div className="glass-dark rounded-[40px] border border-primary/10 p-12 text-center max-w-2xl">

        <h1 className="text-[120px] leading-none font-black gradient-text">
          404
        </h1>

        <h2 className="text-5xl font-black mt-6">
          Page Not Found
        </h2>

        <p className="text-white/50 mt-6 text-lg leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex mt-10 primary-btn px-8 py-4 text-lg"
        >
          Return Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;