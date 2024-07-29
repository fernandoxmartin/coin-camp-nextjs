"use client";

import NavContextProvider from "@/contexts/nav-context";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NavContextProvider>{children}</NavContextProvider>
    </ThemeProvider>
  );
}
