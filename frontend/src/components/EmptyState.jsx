import { Sparkles } from 'lucide-react';

const EmptyState = ({
  title = 'No Data Found',
  description = 'There is currently no information available.',
}) => {
  return (
    <div className="glass-dark rounded-[36px] border border-primary/10 py-20 px-8 text-center">

      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-glow">

        <Sparkles className="text-black" size={40} />

      </div>

      <h2 className="text-4xl font-black mt-8">
        {title}
      </h2>

      <p className="text-white/50 mt-5 max-w-xl mx-auto leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default EmptyState;