"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CoinFilter() {
  const searchParams = useSearchParams();
  const timeframe = searchParams.get("timeframe");

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Link
        href="?timeframe=1h"
        replace={true}
        className={`w-8 h-8 bg-neutral-700 uppercase font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 ${
          timeframe == "1h" || timeframe == undefined ? "active" : ""
        }`}
      >
        1H
      </Link>
      <Link
        href={"?timeframe=1d"}
        replace={true}
        className={`w-8 h-8 bg-neutral-700 uppercase font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 ${
          timeframe == "1d" ? "active" : ""
        }`}
      >
        1D
      </Link>
      <Link
        href={"?timeframe=1w"}
        replace={true}
        className={`w-8 h-8 bg-neutral-700 uppercase font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 ${
          timeframe == "1w" ? "active" : ""
        }`}
      >
        1W
      </Link>
    </div>
  );
}
