import SearchBar from "@/components/search-bar";
import CoinList from "@/components/coin-list";
import TopCoins from "@/components/top-coins";
import CoinExchange from "@/components/coin-exchange";
import { getCoins } from "@/app/lib/get-coins";

export default async function Home({ searchParams }) {
  const { timeframe, sort } = searchParams;
  const coins = await getCoins(timeframe, sort);

  return (
    <main className="w-full mt-[10vh] py-10 px-6">
      <SearchBar />
      <CoinList coins={coins} />
      <TopCoins coins={coins} />
      <CoinExchange coins={coins} />
    </main>
  );
}
