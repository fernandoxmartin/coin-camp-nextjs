import Coins from "./Coins";
import { CoinListCategories } from "./CoinListCategories";

const CoinList = ({ coins }) => {
  return (
    <div className="w-full h-full grid grid-rows bg-[#303030] rounded-2xl">
      <CoinListCategories />
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
  );
};

export default CoinList;
