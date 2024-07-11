"use client";
import Image from "next/image";

export default function NavbarButton({ isOpen, setOpen }) {
  const toggleNavBar = () => {
    setOpen(!isOpen);
  };

  return (
    <button onClick={toggleNavBar} className="flex md:hidden z-10">
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
