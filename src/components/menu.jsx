"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BiChevronDown, BiNews } from "react-icons/bi";
import { ImCoinDollar } from "react-icons/im";
import { PiSwapBold } from "react-icons/pi";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    { name: "Coins", loc: "/coins", icon: <ImCoinDollar /> },
    { name: "Exchange", loc: "/exchange", icon: <PiSwapBold /> },
    { name: "News", loc: "/news", icon: <BiNews /> },
  ];

  const path = routes.find((route) => route.loc === pathname);

  return (
    <div className="hidden lg:block font-medium w-60 h-12 my-auto z-5">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-lt-gray border w-full p-2 px-4 flex items-center justify-between rounded-md cursor-pointer border-neutral-600`}
      >
        <div className="flex items-center h-[30px] w-full text-sm">
          <div className="flex items-center justify-center text-xl mr-1">
            {path?.icon ?? <ImCoinDollar />}
          </div>

          <div className="capitalize pl-2">{path?.name ?? "Coins"}</div>
        </div>

        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-lt-gray mt-2 overflow-y-auto rounded-b-md drop-shadow-lg ${
          open ? "max-h-84" : "max-h-0"
        } `}
      >
        {routes.map((route) => (
          <li
            key={route.name}
            className={`p-3 pl-6 text-sm hover:bg-accent hover:text-white cursor-pointer flex items-center
            ${route.name === path?.name && "bg-neutral-700 text-accent "}`}
            onClick={() => {
              if (route.name !== path?.name) {
                setOpen(false);
                router.push(`${route.loc}`);
              }
            }}
          >
            {" "}
            <span className="mr-2 text-lg">{route.icon}</span>
            {route.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
