import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TopMovers } from "../components/TopMovers";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";

export default function App({ coins }) {
  const [search, setSearch] = useState("");

  const topMovers = [...coins]
    .sort((a, b) =>
      a.price_change_percentage_24h_in_currency <
      b.price_change_percentage_24h_in_currency
        ? 1
        : -1
    )
    .slice(0, 3);

  return (
    <Layout>
      <TopMovers coins={topMovers} />
      {/* <SearchBar type="text" placeholder="Search" onChange={handleChange} /> */}
      <CoinList coins={coins} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );
  //const global = await fetch(`https://api.coingecko.com/api/v3/global`);
  const coins = await res.json();
  // const top = await res.json();

  return {
    props: {
      coins,
    },
  };
};
