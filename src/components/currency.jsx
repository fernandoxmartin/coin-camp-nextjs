"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";

export default function Currency() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currency = searchParams.get("currency") ?? "USD";

  const currencies = ["CAD", "EUR", "GBP", "MXN", "USD", "YEN"];

  return (
    <div className="font-medium w-20 h-8 my-auto z-5">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-lt-gray border w-full px-2 flex items-center justify-between rounded-md cursor-pointer border-neutral-600`}
      >
        <div className="flex items-center h-[30px] w-full text-sm">
          <div className="uppercase">{currency}</div>
        </div>

        <BiChevronDown size={24} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-lt-gray mt-2 overflow-y-auto rounded-b-md drop-shadow-lg ${
          open ? "max-h-84" : "max-h-0"
        } `}
      >
        {currencies.map((curr) => {
          const currencyParam = new URLSearchParams(searchParams.toString());
          currencyParam.set("currency", curr)?.toString();
          return (
            <li
              key={curr}
              className={`p-3 pl-6 text-sm hover:bg-accent hover:text-white cursor-pointer flex items-center
                    ${curr === currency && "bg-neutral-700 text-accent "}`}
              onClick={() => {
                if (curr !== currency) {
                  setOpen(false);
                  router.replace(`?${currencyParam}`);
                }
              }}
            >
              {curr}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
