"use client";
import React from "react";
import { formatter } from "@/app/lib/formatter";

export default function CoinStats({ coin }) {
  const marketData = [
    { market: "Rank", value: coin.market_cap_rank, format: "compact" },
    {
      market: "Market Cap",
      value: coin.market_data.market_cap.usd,
      format: { style: "currency", notation: "compact", dec: 2 },
    },
    {
      market: "Total Volume",
      value: coin.market_data.total_volume.usd,
      format: { style: "currency", notation: "compact", dec: 2 },
    },
    {
      market: "Total Supply",
      value: coin.market_data.total_supply,
      format: { style: "decimal", notation: "compact", dec: 2 },
    },
    {
      market: "Circulating Supply",
      value: coin.market_data.circulating_supply,
      format: { style: "decimal", notation: "compact", dec: 2 },
    },
  ];

  const allTimeData = [
    {
      time: "All Time High",
      date: coin.market_data.ath_date.usd.slice(0, 10),
      value: coin.market_data.ath.usd,
      format: { style: "currency", notation: "standard", dec: 6 },
    },
    {
      time: "ATH Change",
      value: coin.market_data.ath_change_percentage.usd / 100,
      format: { style: "percent", notation: "standard", dec: 2 },
    },
    {
      time: "All Time Low",
      date: coin.market_data.atl_date.usd.slice(0, 10),
      value: coin.market_data.atl.usd,
      format: { style: "currency", notation: "standard", dec: 11 },
    },
    {
      time: "ATL Change",
      value: coin.market_data.atl_change_percentage.usd / 100,
      format: { style: "percent", notation: "standard", dec: 2 },
    },
  ];

  const priceChangeData = [
    { range: "1D", value: coin.market_data.price_change_percentage_24h },
    { range: "1W", value: coin.market_data.price_change_percentage_7d },
    { range: "2W", value: coin.market_data.price_change_percentage_14d },
    { range: "1M", value: coin.market_data.price_change_percentage_30d },
    { range: "2M", value: coin.market_data.price_change_percentage_60d },
    { range: "6M", value: coin.market_data.price_change_percentage_200d },
    { range: "1Y", value: coin.market_data.price_change_percentage_1y },
  ];

  return (
    <div className="w-full">
      <h2 className="bayon uppercase text-xl tracking-wider flex items-center">
        Statistics
      </h2>
      <div className="py-6 space-y-2 text-sm">
        <div className="bg-md-gray w-full flex flex-col justify-center space-y-6 rounded-xl p-6">
          {marketData.map((data, index) => (
            <div key={index} className="flex items-center justify-between">
              <h3 className="text-neutral-400">{data.market}</h3>
              <p className="font-medium">
                {formatter(
                  data.value,
                  data.format.style,
                  data.format.notation,
                  data.format.dec
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="bg-md-gray w-full flex flex-col justify-between space-y-6 rounded-xl p-6">
          {allTimeData.map((data, index) => (
            <div key={index} className="flex justify-between">
              <h3 className="text-neutral-400">
                {data.time}{" "}
                {data.date ? (
                  <span className="text-xs text-neutral-500">
                    ({data.date})
                  </span>
                ) : (
                  ""
                )}
              </h3>
              <p
                className={`font-medium ${
                  !data.date && data.value < 0
                    ? "text-red-500"
                    : !data.date && data.value > 0
                    ? "text-accent"
                    : ""
                }`}
              >
                {formatter(
                  data.value,
                  data.format.style,
                  data.format.notation,
                  data.format.dec
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-6 space-y-2 text-sm">
        <div className="bg-md-gray w-full flex flex-col justify-center space-y-6 rounded-xl p-6">
          {priceChangeData.map((data, index) => (
            <div key={index} className="flex items-center justify-between">
              <h3 className="text-neutral-400">
                Price Change <span className="text-xs">({data.range})</span>
              </h3>
              <p
                className={`font-medium ${
                  data.value < 0 ? "text-red-500" : "text-accent"
                }`}
              >
                {formatter(data.value / 100, "percent", "standard", 2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
