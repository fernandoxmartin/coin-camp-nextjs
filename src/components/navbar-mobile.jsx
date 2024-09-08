"use client";
import Link from "next/link";
import { ImCoinDollar } from "react-icons/im";
import { PiSwapBold } from "react-icons/pi";
import { BiNews, BiCopyright } from "react-icons/bi";
import NavbarSettings from "./navbar-settings";
import { useNavContext } from "@/contexts/nav-context";

export default function NavbarMobile() {
  const { open, setOpen } = useNavContext();

  return (
    <div
      className={`w-full h-[100dvh] bg-drk-gray absolute left-0 top-0 p-8 pt-36 flex flex-col items-center justify-between transition duration-500 ease-in-out ${
        open ? "translate-x-[0%]" : "translate-x-[-100%]"
      } z-10`}
    >
      <div className="flex flex-col space-y-6 inter capitalize text-lg tracking-wide pt-16">
        <Link
          onClick={() => setOpen(false)}
          href="/"
          className="flex items-center space-x-6"
        >
          <ImCoinDollar size={28} />
          <p>Coins</p>
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/exchange"
          className="flex items-center space-x-6"
        >
          <PiSwapBold size={28} />
          <p>Exchange</p>
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/news"
          className="flex items-center space-x-6"
        >
          <BiNews size={28} />
          <p>News</p>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-end space-y-8">
        <NavbarSettings />
        <div className="flex items-center space-x-2 bayon text-neutral-500 tracking-[0.25em]">
          <p>Coin Camp</p>
          <BiCopyright />
          <p>2024</p>
        </div>
      </div>
    </div>
  );
}
