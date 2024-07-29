"use client";
import Image from "next/image";
import Sparkline from "./sparkline";
import { useSearchParams } from "next/navigation";

export default function CoinCard({ coin }) {
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

  const searchParams = useSearchParams();
  const timeframe = searchParams.get("timeframe");

  const change_percentage =
    timeframe == "1d"
      ? price_change_percentage_24h_in_currency
      : timeframe == "1w"
      ? price_change_percentage_7d_in_currency
      : price_change_percentage_24h_in_currency;

  const sparkline_data =
    timeframe == "1d"
      ? sparkline_in_7d.price.slice(-24)
      : timeframe == "1w"
      ? sparkline_in_7d.price
      : sparkline_in_7d.price.slice(-24);

  return (
    <div className="grid grid-cols-[40%,_25%,_35%] md:grid-cols-[20%,_20%,_15%,_15%,_15%,_15%] py-4 even:bg-md-gray rounded-lg px-2 font-medium">
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

      <p className="text-sm text-end self-center col-start-3 md:col-start-2">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
        }).format(current_price)}
      </p>

      <p
        className={`${
          change_percentage < 0 ? "text-red-500" : "text-accent"
        } text-sm text-end self-center col-start-2 row-start-1 md:col-start-3`}
      >
        {change_percentage.toFixed(2)}%
      </p>

      <p className="hidden md:block text-sm text-end self-center">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
          notation: "compact",
        }).format(market_cap)}
      </p>

      <p className="hidden md:block text-sm text-end self-center">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
          notation: "compact",
        }).format(total_volume)}
      </p>

      <div className="hidden md:block pl-4">
        <Sparkline
          sparkline_data={sparkline_data}
          change_percentage={change_percentage}
        />
      </div>
    </div>
  );
}
