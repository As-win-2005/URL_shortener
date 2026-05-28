const LoadingSkeleton = () => {
  return (
    <div className="space-y-8">

      <div className="h-14 w-[320px] rounded-2xl bg-white/5 animate-pulse"></div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="glass-dark rounded-[32px] border border-primary/10 p-7 h-[180px]"
          >

            <div className="w-full h-full rounded-2xl bg-white/5 animate-pulse"></div>

          </div>
        ))}

      </div>

      <div className="glass-dark rounded-[36px] border border-primary/10 p-8 h-[420px]">

        <div className="w-full h-full rounded-3xl bg-white/5 animate-pulse"></div>

      </div>

    </div>
  );
};

export default LoadingSkeleton;