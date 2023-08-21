import Link from "next/link";
import Image from "next/image";
var abbreviate = require("number-abbreviate");

export const Header = ({ global }) => {
  const { active_cryptocurrencies, total_market_cap, total_volume } =
    global.data;

  return (
    <div className="h-20 w-full flex items-center justify-center bg-[#303030]">
      <div className="h-full max-w-6xl w-full flex items-center justify-between px-4">
        <Link href="/">
          <Image src={"/logo.png"} alt="logo" width="50" height="50" />
        </Link>
        <div className="flex items-center justify-end tracking-wide text-xs">
          <p className="flex flex-col items-center">
            Coins:{" "}
            <span className="font-black md:text-sm">
              {active_cryptocurrencies}
            </span>
          </p>
          <p className="ml-8 flex flex-col items-center">
            Mkt Cap:
            <span className="font-black uppercase md:text-sm">
              {abbreviate(total_market_cap.usd, 2)}
            </span>
          </p>
          <p className="ml-8 flex flex-col items-center">
            24h Vol:
            <span className="font-black uppercase md:text-sm">
              {abbreviate(total_volume.usd, 2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
