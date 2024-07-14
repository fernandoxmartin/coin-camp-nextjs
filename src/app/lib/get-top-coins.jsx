export function getTopCoins(coins) {
  const gainers = [...coins]
    .sort(
      (a, b) =>
        b.price_change_percentage_24h_in_currency -
        a.price_change_percentage_24h_in_currency
    )
    .slice(0, 2);

  const losers = [...coins]
    .sort(
      (a, b) =>
        a.price_change_percentage_24h_in_currency -
        b.price_change_percentage_24h_in_currency
    )
    .slice(0, 2);

  return { gainers, losers };
}
