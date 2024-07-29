import SearchBar from "@/components/search-bar";
import CoinList from "@/components/coin-list";
import TopCoins from "@/components/top-coins";
import CoinExchange from "@/components/coin-exchange";
import { getCoins } from "@/app/lib/get-coins";

export default async function Home({ searchParams }) {
  const { timeframe, sort } = searchParams;
  const coins = await getCoins(timeframe, sort);

  return (
    <div className="w-full max-w-[1250px] py-10 px-6">
      <div className="md:hidden">
        <SearchBar />
      </div>

      <div className="lg:grid lg:grid-cols-[65%,_35%]">
        <CoinList coins={coins} />
        <div className="md:flex md:space-x-6 lg:flex-col lg:items-center lg:py-16 lg:pl-8 xl:pl-16 lg:space-x-0 lg:space-y-6">
          <TopCoins coins={coins} />
          <CoinExchange coins={coins} />
        </div>
      </div>
    </div>
  );
}
