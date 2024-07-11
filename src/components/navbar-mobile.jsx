import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";
import { PiSwapBold } from "react-icons/pi";
import { BiNews, BiCopyright } from "react-icons/bi";
import NavbarSettings from "./navbar-settings";

export default function NavbarMobile({ isOpen }) {
  return (
    <div
      className={`w-full h-[100dvh] bg-drk-gray absolute left-0 top-0 p-8 pt-36 flex flex-col items-center justify-between transition duration-500 ease-in-out ${
        isOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } z-10`}
    >
      <div className="flex flex-col space-y-6 inter uppercase font-medium text-lg pt-16">
        <Link href="/market" className="flex items-center space-x-6">
          <CgShoppingBag size={28} />
          <p>Market</p>
        </Link>
        <Link href="/exchange" className="flex items-center space-x-6">
          <PiSwapBold size={28} />
          <p>Exchange</p>
        </Link>
        <Link href="/news" className="flex items-center space-x-6">
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
