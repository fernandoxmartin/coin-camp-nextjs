import { sortCoins } from "./sort-coins";

export async function getCoins(timeframe, sort) {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&precision=2"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const coins = res.json().then((coins) => sortCoins(coins, timeframe, sort));

  return coins;
}
