var abbreviate = require("number-abbreviate");
import { Sparkline_24h } from "../Sparkline";

export const CoinData = ({ coin }) => {
  const data_24h = coin.market_data.sparkline_7d.price.slice(-24);

  return (
    <div className="w-full h-full bg-[#303030] rounded-2xl col-span-2 p-8">
      <div>
        <h2 className="text-3xl">
          ${coin.market_data.current_price.usd.toLocaleString("en-US")}
        </h2>
        <div className="flex items-center">
          <p
            className={
              coin.market_data.price_change_percentage_24h < 0
                ? "text-red-400"
                : "text-green-500"
            }
          >
            {coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="text-xs text-gray-400 pl-4">(24h)</p>
        </div>
      </div>
      <div>
        <Sparkline_24h
          data={data_24h}
          status={coin.market_data.price_change_percentage_24h}
        />
      </div>
      <div className="w-full grid grid-cols-3 mt-12 mb-4 text-sm">
        <div>
          <h2 className="text-gray-400 pb-4">Market Cap</h2>
          <p className="uppercase">
            {abbreviate(coin.market_data.market_cap.usd, 2)}
          </p>
        </div>
        <div>
          <h2 className="text-gray-400 pb-4">Total Volume</h2>
          <p className="uppercase">
            {abbreviate(coin.market_data.total_volume.usd, 2)}
          </p>
        </div>
        <div>
          <h2 className="text-gray-400 pb-4">Circulating Supply</h2>
          <p className="uppercase">
            {abbreviate(coin.market_data.circulating_supply, 2)}
          </p>
        </div>
      </div>
    </div>
  );
};
