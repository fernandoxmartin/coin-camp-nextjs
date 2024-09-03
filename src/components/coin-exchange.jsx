"use client";
import React, { useState, useId } from "react";
import Image from "next/image";
import Select from "react-select";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { colorStyles } from "@/app/util/select-styles";
import { formatter } from "@/app/lib/formatter";

export default function CoinExchange({ coins }) {
  const id = useId();
  const [firstCoin, setFirstCoin] = useState(coins[0]);
  const [secondCoin, setSecondCoin] = useState(coins[1]);
  const [qty, setQty] = useState(0);
  const [amount, setAmount] = useState(0);

  const calculateExchange = (e) => {
    e.preventDefault();
    const sum = Number(firstCoin.current_price) * Number(qty);
    const result = Number(sum) / Number(secondCoin.current_price);
    setAmount(result);
  };

  return (
    <div className="w-full">
      <h2 className="bayon uppercase text-xl tracking-wider flex items-center">
        Exchange
      </h2>
      <div className="py-6 relative">
        <div className="w-full md:h-40 flex items-center justify-between bg-md-gray rounded-xl p-4 mb-2">
          <div className="flex items-center space-x-2">
            <Image
              priority
              src={firstCoin.image}
              alt="coin symbol"
              width="0"
              height="0"
              className="w-8 h-8 self-center"
            />
            <Select
              getOptionLabel={(firstCoin) => firstCoin.symbol}
              getOptionValue={(firstCoin) => firstCoin.symbol}
              instanceId={id}
              onChange={setFirstCoin}
              options={coins}
              styles={colorStyles}
              value={firstCoin ?? coins[0]}
            />
          </div>
          <div className="flex flex-col items-end space-y-6">
            <p className="w-full text-end text-xs text-neutral-500 uppercase font-medium">{`1 ${
              firstCoin.symbol
            } = ${formatter(
              firstCoin.current_price,
              "currency",
              "standard",
              8
            )}`}</p>
            <form onSubmit={calculateExchange}>
              <input
                type="number"
                step="any"
                min="0"
                name="qty"
                className="w-20 h-9 p-2 text-end rounded-lg bg-lt-gray placeholder:text-neutral-500 outline-none"
                placeholder="0"
                onChange={(e) => setQty(e.target.value)}
              />
            </form>

            <p className="text-accent text-xs font-medium uppercase">Send</p>
          </div>
        </div>

        <div className="w-14 h-14 bg-lt-gray rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <CgArrowsExchangeAltV className="text-4xl text-accent" />
        </div>

        <div className="w-full md:h-40 flex items-center justify-between bg-md-gray rounded-xl p-4">
          <div className="flex items-center space-x-2">
            <Image
              priority
              src={secondCoin.image}
              alt="coin symbol"
              width="0"
              height="0"
              className="w-8 h-8 self-center"
            />
            <Select
              getOptionLabel={(secondCoin) => secondCoin.symbol}
              getOptionValue={(secondCoin) => secondCoin.symbol}
              instanceId={id}
              onChange={setSecondCoin}
              options={coins}
              styles={colorStyles}
              value={secondCoin ?? coins[0]}
            />
          </div>
          <div className="flex flex-col items-end space-y-6">
            <p className="text-accent text-xs font-medium uppercase">Get</p>
            <p className="w-24 h-9 text-end flex items-center justify-end">
              {new Intl.NumberFormat("en-US", {
                maximumFractionDigits: 12,
              }).format(amount)}
            </p>
            <p className="w-full text-end text-xs text-neutral-500 uppercase font-medium">{`1 ${
              secondCoin.symbol
            } = ${formatter(
              secondCoin.current_price,
              "currency",
              "standard",
              8
            )}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
