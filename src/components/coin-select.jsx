"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export default function CoinSelect({ coins }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();
  const base = searchParams.get("base") ?? "btc";
  const coinParam = new URLSearchParams(searchParams.toString());
  const coin = coins.find((coin) => coin.symbol === base);

  return (
    <div className="font-medium w-full h-12 z-5">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-lt-gray border w-full p-2 px-4 flex items-center justify-between rounded-md cursor-pointer border-neutral-600`}
      >
        <div className="flex items-center h-[30px] w-full text-sm">
          <div className="flex items-center justify-center text-xl space-x-4">
            <Image
              priority
              src={coin.image}
              alt="coin symbol"
              width="0"
              height="0"
              className="w-7 h-7 self-center"
            />
            <p className="text-lg capitalize truncate">{coin.name}</p>
            <p className="text-sm uppercase text-neutral-500">{coin.symbol}</p>
          </div>
        </div>

        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-lt-gray mt-2 overflow-y-auto rounded-b-md drop-shadow-lg ${
          open ? "max-h-80" : "max-h-0"
        } `}
      >
        <div className="w-full flex items-center px-4 sticky top-0 border-b border-accent bg-md-gray  ">
          <AiOutlineSearch size={18} className="text-neutral-400" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search Coin"
            className="placeholder:text-neutral-600 p-2 py-3 outline-none w-full bg-md-gray text-sm"
          />
        </div>

        {coins.map((c) => {
          coinParam.set("base", c.symbol);
          const coinPath = coinParam.toString();
          return (
            <li
              key={c.name}
              className={`p-3 pl-6 text-sm hover:bg-accent hover:text-white cursor-pointer flex items-center space-x-4 
            ${c.name === coin.name && "bg-neutral-700 text-accent "} 
            ${
              c.name.toLowerCase().startsWith(inputValue.toLowerCase())
                ? "flex"
                : "hidden"
            } `}
              onClick={() => {
                if (c.name !== coin.name) {
                  setOpen(false);
                  router.replace(`?${coinPath}`);
                }
              }}
            >
              {" "}
              <Image
                priority
                src={c.image}
                alt="coin symbol"
                width="0"
                height="0"
                className="w-7 h-7 self-center"
              />
              <p className="text-lg capitalize truncate">{c.name}</p>
              <p className="text-sm uppercase text-neutral-500">{c.symbol}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
