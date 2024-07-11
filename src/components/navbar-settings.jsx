import React from "react";
import ThemeSwitch from "./theme-switch";

export default function NavbarSettings() {
  return (
    <div className="w-full flex items-center justify-center space-x-4">
      <button className="w-20 h-10 inter text-md font-bold rounded-lg bg-neutral-700 border border-neutral-600 flex items-center justify-center drop-shadow-lg">
        USD
      </button>
      <button className="w-20 h-10 rounded-lg bg-neutral-700 border border-neutral-600 flex items-center justify-center drop-shadow-lg text-xl">
        <ThemeSwitch />
      </button>
    </div>
  );
}
