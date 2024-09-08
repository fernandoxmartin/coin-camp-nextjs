"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { formatter } from "@/app/lib/formatter";

export default function ExchangeList({ coins }) {
  const searchParams = useSearchParams();
  const base = searchParams.get("base") ?? "btc";
  const baseCoin = coins.find((coin) => coin.symbol === base);
  const qty = searchParams.get("qty") ?? "1";

  const calculateExchange = (e) => {
    const sum = Number(baseCoin.current_price) * Number(qty);
    const result = Number(sum) / Number(e.current_price);
    return result;
  };

  return (
    <div className="w-full grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
      {coins.map((coin) => {
        const amount = calculateExchange(coin);
        return (
          <Link
            key={coin.id}
            href={`/coins/${coin.id}`}
            className={`grid grid-cols-2 gap-2 rounded-md p-4 bg-md-gray hover:bg-accent/10 ${
              coin === baseCoin && "hidden"
            }`}
          >
            <div className="w-full flex items-start justify-start space-x-4">
              <Image
                priority
                src={coin.image}
                alt="coin symbol"
                width="0"
                height="0"
                className="w-8 h-8 self-center"
              />
              <div className="text-start space-y-2">
                <p className="text-sm font-medium line-clamp-1">{coin.name}</p>
                <p className="text-sm uppercase text-neutral-500">
                  {coin.symbol}
                </p>
              </div>
            </div>
            <div className="text-end space-y-2">
              <p className="text-xs text-neutral-500 text-end uppercase font-medium">{`1 ${
                coin.symbol
              } = ${formatter(
                coin.current_price,
                "currency",
                "standard",
                8
              )}`}</p>
              <div className="flex items-center justify-end space-x-2">
                <p className="text-xs text-accent">Qty</p>

                {amount > 1 ? (
                  <p className="font-medium">
                    {formatter(amount, "decimal", "compact", 2)}
                  </p>
                ) : (
                  <p className="font-medium">
                    {formatter(amount, "decimal", "standard", 8)}
                  </p>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
