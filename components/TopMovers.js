import { CoinCard } from "./CoinCard";

export const TopMovers = ({ coins }) => {
  return (
    <div>
      <h2 className="text-xl font-weight-500 mt-4">
        Top Movers<span className="text-sm text-gray-500 ml-2">(24h)</span>
      </h2>
      <div className="h-56 flex items-center justify-between gap-4 my-4">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};
