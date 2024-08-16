"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ExchangeList({ coins }) {
  const searchParams = useSearchParams();
  const base = searchParams.get("base") ?? "btc";
  const baseCoin = coins.find((coin) => coin.symbol === base);
  const qty = searchParams.get("qty") ?? "1";

  const calculateExchange = (e) => {
    const sum = Number(baseCoin.current_price) * Number(qty);
    const result = Number(sum) / Number(e.current_price);
    return result.toFixed(2);
  };

  const price = (coin) =>
    new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
    }).format(coin.current_price);

  return (
    <div className="w-full grid gap-2 md:gap-4 md:grid-cols-2">
      {coins.map((coin) => {
        const amount = calculateExchange(coin);
        return (
          <div
            key={coin.id}
            className={`flex items-center justify-between rounded-md p-4 bg-md-gray ${
              coin === baseCoin && "hidden"
            }`}
          >
            <div className="w-1/2 flex items-start justify-start space-x-4">
              <Image
                priority
                src={coin.image}
                alt="coin symbol"
                width="0"
                height="0"
                className="w-8 h-8 self-center"
              />
              <div className="w-full text-start space-y-2">
                <p className="text-sm font-medium truncate">{coin.name}</p>
                <p className="text-sm uppercase text-neutral-500">
                  {coin.symbol}
                </p>
              </div>
            </div>

            <div className="w-1/2 text-end space-y-2">
              <p className="text-xs text-neutral-500 text-end uppercase font-medium">{`1 ${
                coin.symbol
              } = ${price(coin)}`}</p>
              <div className="flex items-center justify-end space-x-2">
                <p className="text-xs text-accent">Qty</p>
                <p className=" font-medium">
                  {new Intl.NumberFormat("en-US").format(amount)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
