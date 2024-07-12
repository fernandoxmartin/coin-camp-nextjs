import Image from "next/image";
import React from "react";

export default function CoinCard({ coin, timeframe }) {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    total_volume,
    sparkline_in_7d,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
  } = coin;

  const change_percentage =
    timeframe == "1h"
      ? price_change_percentage_1h_in_currency
      : timeframe == "1d"
      ? price_change_percentage_24h_in_currency
      : timeframe == "1w"
      ? price_change_percentage_7d_in_currency
      : price_change_percentage_1h_in_currency;

  return (
    <div className="grid grid-cols-[40%,_25%,_35%] py-4 even:bg-md-gray rounded-lg px-2">
      <div className="flex items-start justify-start space-x-2">
        <Image
          priority
          src={image}
          alt="coin symbol"
          width="0"
          height="0"
          className="w-8 h-8 self-center"
        />
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-xs uppercase text-neutral-500">{symbol}</p>
        </div>
      </div>
      <p
        className={`${
          change_percentage < 0 ? "text-red-500" : "text-accent"
        } text-sm text-end self-center`}
      >
        {change_percentage.toFixed(2)}%
      </p>
      <p className="text-sm text-end self-center">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
        }).format(current_price)}
      </p>
    </div>
  );
}
