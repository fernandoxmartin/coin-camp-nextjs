"use client";
import { useState } from "react";
import NavbarButton from "./navbar-button";
import NavbarMobile from "./navbar-mobile";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-10vh p-8 absolute left-0 top-0 z-20">
        <div className="flex justify-between items-center md:justify-center">
          <NavbarButton isOpen={isOpen} setOpen={setOpen} />
          <h1 className="flex items-center text-4xl bayon uppercase tracking-widest">
            Coin
            <span className="text-accent pl-2">Camp</span>
          </h1>
        </div>
      </div>
      <NavbarMobile isOpen={isOpen} />
    </>
  );
}
