"use client";
import CoinCard from "./coin-card";
import CoinFilter from "./coin-filter";
import CoinCategories from "./coin-categories";
import Pagination from "./pagination";
import { useSearchParams } from "next/navigation";

export default function CoinList({ coins }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const current_page = page ?? "1";
  const start = (Number(current_page) - 1) * Number(15);
  const end = start + Number(15);

  const entries = coins.slice(start, end);

  return (
    <div className="w-full py-16">
      <div className="w-full flex items-center justify-between">
        <h2 className="bayon uppercase text-xl tracking-wider">Prices</h2>
        <CoinFilter />
      </div>

      <div className="pt-12 pb-8">
        <CoinCategories />
        {entries?.map((coin) => {
          return <CoinCard coin={coin} key={coin.id} />;
        })}
      </div>
      <Pagination hasNext={end < coins.length} hasPrev={start > 0} />
    </div>
  );
}
