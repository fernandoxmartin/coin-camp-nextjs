"use client";
import { useNavContext } from "@/contexts/nav-context";
import Image from "next/image";

export default function NavbarButton() {
  const { open, setOpen } = useNavContext();

  const toggleNavBar = () => {
    setOpen(!open);
  };

  return (
    <button onClick={toggleNavBar} className="flex z-50 lg:hidden">
      <Image
        priority
        src={"/menu.png"}
        alt="menu"
        width={30}
        height={30}
        className="z-10"
      />
    </button>
  );
}
