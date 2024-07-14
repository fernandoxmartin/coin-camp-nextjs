import SearchBar from "@/components/search-bar";
import CoinList from "@/components/coin-list";

export default function Home({ searchParams }) {
  return (
    <main className="w-full mt-[10vh] py-10 px-6">
      <SearchBar />
      <CoinList params={searchParams} />
    </main>
  );
}
