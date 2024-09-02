export async function getCoin(id) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
