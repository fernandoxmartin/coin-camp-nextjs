import Link from "next/link";
import CoinCard from "./coin-card";
import { getCoins } from "@/app/lib/get-coins";

export default async function CoinList({ timeframe }) {
  const coins = await getCoins();
  console.log(timeframe);

  return (
    <div className="w-full py-16">
      <div className="w-full flex items-center justify-between">
        <h2 className="bayon uppercase text-xl tracking-wider">Prices</h2>
        <div className="flex items-center space-x-2 text-sm">
          <Link
            href="/coins?timeframe=1h"
            className={`w-8 h-8 bg-neutral-700 font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 ${
              timeframe == "1h" || timeframe == undefined ? "active" : ""
            }`}
          >
            1H
          </Link>
          <Link
            href={"/coins?timeframe=1d"}
            className={`w-8 h-8 bg-neutral-700 font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 ${
              timeframe == "1d" ? "active" : ""
            }`}
          >
            1D
          </Link>
          <Link
            href={"/coins?timeframe=1w"}
            className={`w-8 h-8 bg-neutral-700 font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 ${
              timeframe == "1w" ? "active" : ""
            }`}
          >
            1W
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="grid grid-cols-[40%,_25%,_35%] text-accent text-xs font-medium pb-6 px-2">
          <h3>Name</h3>
          <h3 className="text-end">Change</h3>
          <h3 className="text-end">Price</h3>
        </div>
        {coins?.map((coin) => {
          return <CoinCard coin={coin} key={coin.id} timeframe={timeframe} />;
        })}
      </div>
    </div>
  );
}
