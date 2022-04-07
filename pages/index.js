import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { TopMovers } from "../components/TopMovers";
import { Pagination } from "../components/Pagination";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";

export default function App({ coins }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(20);

  const topMovers = [...coins]
    .sort((a, b) =>
      a.price_change_percentage_24h_in_currency <
      b.price_change_percentage_24h_in_currency
        ? 1
        : -1
    )
    .slice(0, 3);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = [...coins].slice(indexOfFirstCoin, indexOfLastCoin);
  const paginate = (page) => setCurrentPage(page);

  return (
    <Layout>
      <TopMovers coins={topMovers} />
      {/* <SearchBar type="text" placeholder="Search" onChange={handleChange} /> */}
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={coins.length}
        paginate={paginate}
      />
      <CoinList coins={currentCoins} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );

  const coins = await res.json();

  return {
    props: {
      coins,
    },
  };
};
