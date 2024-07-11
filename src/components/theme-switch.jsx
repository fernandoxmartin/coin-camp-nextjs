"use client";
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <div className="w-full flex items-center">
        <div className="w-full flex items-center justify-center">
          <FiSun onClick={() => setTheme("light")} />
        </div>
        <div className="w-full flex items-center justify-center py-2 bg-accent rounded-lg text-neutral-800">
          <FiMoon onClick={() => setTheme("dark")} />
        </div>
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="w-full flex items-center">
        <div className="w-full flex items-center justify-center py-2 bg-accent rounded-lg text-neutral-800">
          <FiSun onClick={() => setTheme("light")} />
        </div>
        <div className="w-full flex items-center justify-center">
          <FiMoon onClick={() => setTheme("dark")} />
        </div>
      </div>
    );
  }
}
