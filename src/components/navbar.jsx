"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCampground } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { PiSwapBold } from "react-icons/pi";
import { BiNews, BiCopyright } from "react-icons/bi";
import NavbarButton from "./navbar-button";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`w-full h-[100dvh] bg-drk-gray absolute left-0 top-0 p-12 flex flex-col items-center justify-between transition duration-500 ease-in-out ${
        isOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } md:flex md:translate-x-[0%] md:w-[300px] md:p-4 z-10`}
    >
      <div className="w-full flex justify-between items-center md:justify-center md:mt-8">
        <NavbarButton isOpen={isOpen} setOpen={setOpen} />
        <h1 className="flex items-center text-4xl bayon uppercase tracking-widest md:text-4xl">
          Coin
          <span className="px-2 text-3xl text-accent">
            <FaCampground />
          </span>{" "}
          Camp
        </h1>
      </div>

      <div className="flex flex-col space-y-6 bayon tracking-wider text-xl md:-mt-80">
        <Link href="/market" className="flex items-center space-x-6">
          <CgShoppingBag />
          <p>Market</p>
        </Link>
        <Link href="/exchange" className="flex items-center space-x-6">
          <PiSwapBold />
          <p>Exchange</p>
        </Link>
        <Link href="/news" className="flex items-center space-x-6">
          <BiNews />
          <p>News</p>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-end bayon text-neutral-500 tracking-[0.25em]">
        <div className="flex items-center space-x-2">
          <p>Coin Camp</p>
          <BiCopyright />
          <p>2024</p>
        </div>
      </div>
    </div>
  );
}
