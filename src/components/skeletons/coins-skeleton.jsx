export function CoinListSkeleton() {
  return (
    <div className="w-full py-16">
      <div className="w-full flex items-center justify-between">
        <div className="h-8 w-20 bg-md-gray rounded-md animate-pulse" />
        <div className="flex items-center space-x-2">
          <div className="h-8 w-20 bg-md-gray rounded-md animate-pulse" />
          <div className="h-8 w-8 bg-md-gray rounded-md animate-pulse" />
          <div className="h-8 w-8 bg-md-gray rounded-md animate-pulse" />
        </div>
      </div>
      <div className="pt-12 pb-8 lg:pb-4">
        <div className="grid grid-cols-[40%,_25%,_35%] md:grid-cols-[20%,_20%,_15%,_15%,_15%,_15%] pb-6">
          <div className="h-4 w-10 bg-md-gray rounded animate-pulse" />
          <div className="h-4 w-10 bg-md-gray rounded place-self-end animate-pulse" />
          <div className="h-4 w-10 bg-md-gray rounded place-self-end animate-pulse" />
          <div className="h-4 w-10 bg-md-gray rounded place-self-end animate-pulse" />
          <div className="h-4 w-10 bg-md-gray rounded place-self-end animate-pulse" />
          <div className="h-4 w-10 bg-md-gray rounded place-self-end animate-pulse" />
        </div>
        <div className="w-full h-[68px] bg-md-gray rounded-lg animate-pulse" />
        <div className="w-full h-[68px] rounded-lg" />
        <div className="w-full h-[68px] bg-md-gray rounded-lg animate-pulse" />
        <div className="w-full h-[68px] rounded-lg" />
        <div className="w-full h-[68px] bg-md-gray rounded-lg animate-pulse" />
        <div className="w-full h-[68px] rounded-lg" />
        <div className="w-full h-[68px] bg-md-gray rounded-lg animate-pulse" />
        <div className="w-full h-[68px] rounded-lg" />
        <div className="w-full h-[68px] bg-md-gray rounded-lg animate-pulse" />
        <div className="w-full h-[68px] rounded-lg" />
      </div>
    </div>
  );
}

export function SideSkeleton() {
  return (
    <div className="w-full">
      <div className="h-8 w-20 bg-md-gray rounded-md animate-pulse" />
      <div className="py-6 space-y-2">
        <div className="bg-md-gray w-full md:h-40 flex flex-col justify-center rounded-xl p-2 animate-pulse" />
        <div className="bg-md-gray w-full md:h-40 flex flex-col justify-center rounded-xl p-2 animate-pulse" />
      </div>
    </div>
  );
}
