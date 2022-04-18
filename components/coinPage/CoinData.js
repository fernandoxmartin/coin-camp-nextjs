var abbreviate = require("number-abbreviate");
import { Sparkline_7d } from "../Sparkline";

export const CoinData = ({ coin }) => {
  return (
    <div className="w-full h-full bg-[#303030] rounded-2xl col-span-2 p-8 border-t-4 border-indigo-700">
      <div>
        <h2 className="text-3xl">
          ${coin.market_data.current_price.usd.toLocaleString("en-US")}
        </h2>
        <div className="flex items-center">
          <p
            className={
              coin.market_data.price_change_percentage_7d < 0
                ? "text-red-400"
                : "text-green-500"
            }
          >
            {coin.market_data.price_change_percentage_7d.toFixed(2)}%
          </p>
          <p className="text-xs text-gray-400 pl-4">(7d)</p>
        </div>
      </div>
      <div>
        <Sparkline_7d
          data={coin.market_data.sparkline_7d}
          status={coin.market_data.price_change_percentage_7d}
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
          <h2 className="text-gray-400 pb-4">24h Volume</h2>
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
