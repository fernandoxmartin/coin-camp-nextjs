"use client";
import React, { createContext, useContext, useState } from "react";

export const NavContext = createContext();

export default function NavContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <NavContext.Provider value={{ open, setOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNavContext = () => useContext(NavContext);
