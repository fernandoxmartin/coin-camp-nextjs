"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Currency from "./currency";

export default function CoinFilter() {
  const searchParams = useSearchParams();
  const timeframe = searchParams.get("timeframe") ?? "1d";
  const timeParam = new URLSearchParams(searchParams.toString());

  const timeframes = ["1d", "1w"];

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Currency />

      {timeframes.map((time) => {
        timeParam.set("timeframe", time)?.toString();
        return (
          <Link
            key={time}
            href={`?${timeParam}`}
            replace={true}
            className={`w-8 h-8 bg-lt-gray uppercase font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 ${
              timeframe == time ? "active" : ""
            }`}
          >
            {time}
          </Link>
        );
      })}
    </div>
  );
}
