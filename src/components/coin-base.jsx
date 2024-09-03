"use client";
import React, { useState } from "react";
import CoinSelect from "./coin-select";
import { useRouter, useSearchParams } from "next/navigation";
import { formatter } from "@/app/lib/formatter";

export default function CoinBase({ coins }) {
  const [quantity, setQty] = useState("1");
  const router = useRouter();
  const searchParams = useSearchParams();
  const base = searchParams.get("base") ?? "btc";
  const baseCoin = coins.find((coin) => coin.symbol === base);
  const qty = searchParams.get("qty") ?? "1";
  const qtyParam = new URLSearchParams(searchParams.toString());

  const handleSubmit = (e) => {
    e.preventDefault();
    qtyParam.set("qty", quantity)?.toString();
    router.replace(`?${qtyParam}`);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-md-gray rounded-xl p-4 space-y-4 md:space-y-0">
      <div className="w-full flex flex-col">
        <CoinSelect coins={coins} />
        <p className="w-full text-xs text-neutral-500 uppercase font-medium pt-4">{`1 ${base} = ${formatter(
          baseCoin.current_price,
          "currency",
          "standard",
          8
        )}`}</p>
      </div>
      <div className="flex items-center justify-end space-x-4 md:flex-col-reverse">
        <p className="w-full text-end text-xs text-neutral-500 uppercase font-medium md:pt-4">
          Qty
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step="any"
            min="0"
            name="qty"
            className="w-20 h-12 p-2 text-end rounded-md border border-neutral-600 bg-lt-gray placeholder:text-neutral-500 outline-none"
            placeholder={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
