import React from "react";
import ThemeSwitch from "./theme-switch";

export default function NavbarSettings() {
  return (
    <button className="w-24 h-12 p-[1px] rounded-md bg-lt-gray border border-neutral-600 flex items-center justify-center drop-shadow-lg text-xl">
      <ThemeSwitch />
    </button>
  );
}
