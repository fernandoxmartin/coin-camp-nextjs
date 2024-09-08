export function CoinChartSkeleton() {
  return (
    <div className="w-full pb-6">
      <div className="w-20 h-8 bg-md-gray rounded-md animate-pulse" />
      <div className="py-6">
        <div className="h-80 md:h-[388px] bg-md-gray rounded-xl animate-pulse" />
      </div>
    </div>
  );
}

export function CoinAboutSkeleton() {
  return (
    <div className="w-full pb-6">
      <div className="w-20 h-8 bg-md-gray rounded-md animate-pulse" />
      <div className="py-6">
        <div className="h-[268px] bg-md-gray rounded-xl animate-pulse" />
      </div>
    </div>
  );
}

export function CoinStatsSkeleton() {
  return (
    <div className="w-full">
      <div className="w-20 h-8 bg-md-gray rounded-md animate-pulse" />
      <div className="py-6 space-y-6">
        <div className="h-[244px] bg-md-gray rounded-xl animate-pulse" />
        <div className="h-[200px] bg-md-gray rounded-xl animate-pulse" />
        <div className="h-[332px] bg-md-gray rounded-xl animate-pulse" />
      </div>
    </div>
  );
}
