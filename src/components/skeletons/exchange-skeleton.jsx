export function CoinBaseSkeleton() {
  return (
    <div className="w-full h-44 md:h-28 bg-md-gray rounded-xl p-4 animate-pulse" />
  );
}

export function ExchangeListSkeleton() {
  return (
    <div className="w-full grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
      {new Array(99).fill(0).map((e, index) => (
        <div
          key={index}
          className={`h-20 rounded-md p-4 bg-md-gray animate-pulse`}
        />
      ))}
    </div>
  );
}
