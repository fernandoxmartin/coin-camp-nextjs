"use client";
import React from "react";
import Image from "next/image";
import CoinFilter from "./coin-filter";
import { useSearchParams } from "next/navigation";
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from "recharts";

export default function CoinChart({ coin }) {
  const searchParams = useSearchParams();
  const timeframe = searchParams.get("timeframe") ?? "1d";

  const sparkline_1d = coin.market_data.sparkline_7d.price.slice(-24);
  const sparkline_1w = coin.market_data.sparkline_7d.price;

  const spark1d = sparkline_1d.map((number) => ({ price: number }));
  const spark1w = sparkline_1w.map((number) => ({ price: number }));

  const sparkline_data =
    timeframe == "1d" ? spark1d : timeframe == "1w" ? spark1w : spark1d;

  const formatYaxis = (val) => {
    const formattedValue = new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
      notation: "compact",
    }).format(val);
    return formattedValue;
  };

  const change_percentage =
    timeframe == "1d"
      ? coin.market_data.price_change_percentage_24h_in_currency.usd
      : timeframe == "1w"
      ? coin.market_data.price_change_percentage_7d_in_currency.usd
      : coin.market_data.price_change_percentage_24h_in_currency.usd;

  return (
    <div className="w-full pb-6">
      <div className="flex items-center bayon tracking-wider space-x-4">
        <Image
          priority
          src={coin.image.small}
          alt="coin symbol"
          width="0"
          height="0"
          className="w-7 h-7 self-center"
        />
        <h2 className="text-xl uppercase truncate">{coin.name}</h2>
        <h2 className="uppercase text-neutral-500">{coin.symbol}</h2>
      </div>
      <div className="py-6 space-y-2 text-sm">
        <div className="bg-md-gray w-full flex flex-col justify-center space-y-1 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2 pb-12 md:flex-row md:space-x-4">
              <p className="text-2xl font-semibold">
                {new Intl.NumberFormat("en-US", {
                  currency: "USD",
                  style: "currency",
                  maximumFractionDigits: 8,
                }).format(coin.market_data.current_price.usd)}
              </p>
              <p
                className={`${
                  change_percentage < 0 ? "text-red-500" : "text-accent"
                }`}
              >
                {change_percentage.toFixed(2)}%
              </p>
            </div>

            <div className="self-start">
              <CoinFilter />
            </div>
          </div>

          <div className="h-40 md:h-64 w-full">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <AreaChart width={48} height={48} data={sparkline_data}>
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={`${
                        change_percentage < 0 ? "#EF4444" : "#25E78A"
                      }`}
                      stopOpacity={0.9}
                    />
                    <stop
                      offset="50%"
                      stopColor={`${
                        change_percentage < 0 ? "#EF4444" : "#25E78A"
                      }`}
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="100%"
                      stopColor={`${
                        change_percentage < 0 ? "#EF4444" : "#25E78A"
                      }`}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <YAxis
                  type="number"
                  tickFormatter={formatYaxis}
                  domain={["dataMin", "dataMax"]}
                  interval="preserveStartEnd"
                  hide={true}
                />
                <Tooltip />
                <Area
                  dataKey="price"
                  stroke={`${change_percentage < 0 ? "#EF4444" : "#25E78A"}`}
                  fillOpacity={1}
                  fill="url(#spark)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
