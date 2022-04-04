import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TopGrowing } from "../components/TopGrowing";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";

export default function Home({ filteredCoins, topGrowingCoins }) {
  const [search, setSearch] = useState("");

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <TopGrowing coins={topGrowingCoins} />
      {/* <SearchBar type="text" placeholder="Search" onChange={handleChange} /> */}
      <CoinList filteredCoins={allCoins} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );
  //const global = await fetch(`https://api.coingecko.com/api/v3/global`);
  const filteredCoins = await res.json();
  const topGrowingCoins = await filteredCoins
    .sort((a, b) =>
      a.price_change_percentage_24h_in_currency <
      b.price_change_percentage_24h_in_currency
        ? 1
        : -1
    )
    .slice(0, 3);

  return {
    props: {
      filteredCoins,
      topGrowingCoins,
    },
  };
};
