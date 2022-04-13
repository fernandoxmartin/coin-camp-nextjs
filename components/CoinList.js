import Coins from "./Coins";
import { CoinListCategories } from "./CoinListCategories";

const CoinList = ({ coins, toggleSortedCoins }) => {
  return (
    <div className="mt-8 w-full max-w-6xl">
      <h2 className="text-xl">
        Top 100 Coins{" "}
        <span className="text-sm text-gray-500 ml-2">(by Market Cap)</span>
      </h2>
      <div className="w-full h-full grid grid-rows bg-[#303030] rounded-2xl my-4 border-t-4 border-indigo-700">
        <CoinListCategories toggleSortedCoins={toggleSortedCoins} />
        {coins.map((coin) => {
          return (
            <Coins
              key={coin.id}
              id={coin.id}
              rank={coin.market_cap_rank}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChangePerc_1h={coin.price_change_percentage_1h_in_currency}
              priceChangePerc_24h={coin.price_change_percentage_24h_in_currency}
              priceChangePerc_7d={coin.price_change_percentage_7d_in_currency}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              sparkline={coin.sparkline_in_7d}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoinList;
