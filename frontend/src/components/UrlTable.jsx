import { Copy, ExternalLink } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const UrlTable = ({ urls, loading }) => {
  const { showToast } = useToast();
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

showToast('Smart link copied successfully');
    } catch (error) {
      console.error(error);

showToast('Failed to copy link', 'error');
    }
  };

  if (loading) {
    return (
      <div className="py-16 text-center text-white/50">
        Loading smart links...
      </div>
    );
  }

  if (!urls.length) {
    return (
      <div className="py-16 text-center">

        <h2 className="text-3xl font-black gradient-text">
          No Smart Links Yet
        </h2>

        <p className="text-white/45 mt-4">
          Create your first premium shortened URL to begin tracking analytics.
        </p>

      </div>
    );
  }

  return (
    <div className="overflow-x-auto">

      <table className="w-full min-w-[900px]">

        <thead>

          <tr className="border-b border-white/5 text-left text-white/45 text-sm">

            <th className="pb-5 font-medium">
              Original URL
            </th>

            <th className="pb-5 font-medium">
              Short URL
            </th>

            <th className="pb-5 font-medium">
              Clicks
            </th>

            <th className="pb-5 font-medium">
              Created
            </th>

            <th className="pb-5 font-medium text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {urls.map((url) => (

            <tr
              key={url._id}
              className="border-b border-white/5 hover:bg-white/[0.03] transition-all"
            >

              <td className="py-6 pr-5">

                <p className="max-w-[320px] truncate text-white/85">
                  {url.originalUrl}
                </p>

              </td>

              <td className="py-6">

                <a
                  href={url.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-cream transition-all font-semibold"
                >
                  {url.shortUrl}
                </a>

              </td>

              <td className="py-6">

                <span className="glass px-4 py-2 rounded-xl text-primary font-bold">
                  {url.clicks || 0}
                </span>

              </td>

              <td className="py-6 text-white/55">

                {new Date(url.createdAt).toLocaleDateString()}

              </td>

              <td className="py-6">

                <div className="flex items-center justify-end gap-3">

                  <button
                    type="button"
                    onClick={() => handleCopy(url.shortUrl)}
                    className="w-11 h-11 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all flex items-center justify-center"
                  >

                    <Copy className="text-primary" size={18} />

                  </button>

                  <a
                    href={url.shortUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center"
                  >

                    <ExternalLink className="text-white/70" size={18} />

                  </a>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default UrlTable;