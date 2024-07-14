"use client";
import { getTopCoins } from "@/app/lib/get-top-coins";
import CoinCard from "./coin-card";

export default function TopCoins({ coins }) {
  const { gainers, losers } = getTopCoins(coins);

  return (
    <div className="w-full">
      <h2 className="bayon uppercase text-xl tracking-wider flex items-center">
        Top Gainers / Losers{" "}
        <span className="text-sm text-neutral-500 px-4"> Last 24h</span>
      </h2>
      <div className="py-6 space-y-2">
        <div className="bg-md-gray w-full rounded-xl p-2">
          {gainers.map((coin) => {
            return (
              <CoinCard
                key={coin.id}
                coin={coin}
                topChange={coin.price_change_percentage_24h_in_currency}
              />
            );
          })}
        </div>
        <div className="bg-md-gray w-full rounded-xl p-2">
          {losers.map((coin) => {
            return (
              <CoinCard
                key={coin.id}
                coin={coin}
                topChange={coin.price_change_percentage_24h_in_currency}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
