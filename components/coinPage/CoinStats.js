export const CoinStats = ({ coin }) => {
  return (
    <div className="w-full h-full bg-[#303030] rounded-2xl p-8 mb-4 flex flex-col justify-between space-y-8 text-sm border-t-4 border-indigo-700">
      <div className="flex items-center justify-between">
        <h2>Market Cap Rank</h2>
        <p>{coin.market_cap_rank}</p>
      </div>
      <div className="flex items-center justify-between">
        <h2>All Time High</h2>
        <div className="flex flex-col items-end">
          <p>${coin.market_data.ath.usd}</p>
          <p className="text-xs text-gray-400">
            {coin.market_data.ath_date.usd.slice(0, 10)}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2>All Time Low</h2>
        <div className="flex flex-col items-end">
          <p>${coin.market_data.atl.usd}</p>
          <p className="text-xs text-gray-400">
            {coin.market_data.atl_date.usd.slice(0, 10)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>
          Price Change <span className="text-gray-400 text-xs">(1h)</span>
        </p>
        <p
          className={
            coin.market_data.price_change_percentage_1h_in_currency.usd < 0
              ? "text-red"
              : "text-green"
          }
        >
          {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
            2
          )}
          %
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p>
          Price Change <span className="text-gray-400 text-xs">(24h)</span>
        </p>
        <p
          className={
            coin.market_data.price_change_percentage_24h_in_currency.usd < 0
              ? "text-red"
              : "text-green"
          }
        >
          {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
            2
          )}
          %
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p>
          Price Change <span className="text-gray-400 text-xs">(7d)</span>
        </p>
        <p
          className={
            coin.market_data.price_change_percentage_7d_in_currency.usd < 0
              ? "text-red"
              : "text-green"
          }
        >
          {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
            2
          )}
          %
        </p>
      </div>
    </div>
  );
};
