export function sortCoins(coins, timeframe, sort) {
  if (!sort) {
    return coins;
  }

  const change_percentage =
    timeframe == "1d"
      ? "price_change_percentage_24h_in_currency"
      : timeframe == "1w"
      ? "price_change_percentage_7d_in_currency"
      : "price_change_percentage_24h_in_currency";

  const options = [
    { order: "price_asc", id: "current_price", direction: 1 },
    { order: "price_desc", id: "current_price", direction: -1 },
    { order: "change_asc", id: change_percentage, direction: 1 },
    { order: "change_desc", id: change_percentage, direction: -1 },
    { order: "market_asc", id: "market_cap", direction: 1 },
    { order: "market_desc", id: "market_cap", direction: -1 },
    { order: "volume_asc", id: "total_volume", direction: 1 },
    { order: "volume_desc", id: "total_volume", direction: -1 },
  ];

  const sortedCoins = options
    .map((option) => {
      if (sort === option.order) {
        return [...coins].sort((a, b) =>
          a[option.id] === b[option.id]
            ? 0
            : option.direction * (a[option.id] > b[option.id] ? 1 : -1)
        );
      }
      return undefined;
    })
    .filter((result) => result !== undefined);

  return sortedCoins[0] || coins;
}
