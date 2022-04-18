import Link from "next/link";
var abbreviate = require("number-abbreviate");

export const Header = ({ global }) => {
  const { active_cryptocurrencies, total_market_cap, total_volume } =
    global.data;

  return (
    <div className="h-20 w-full flex items-center justify-center bg-[#303030]">
      <div className="h-full max-w-6xl w-full flex items-center justify-between">
        <Link href="/">
          <a>
            <h1 className="text-3xl uppercase font-black">coin camp</h1>
          </a>
        </Link>
        <div className="w-1/2 flex items-center justify-end tracking-wide text-sm">
          <p>
            Coins: <span className="font-black">{active_cryptocurrencies}</span>
          </p>
          <p className="ml-8">
            Mkt Cap:{" "}
            <span className="font-black uppercase">
              {abbreviate(total_market_cap.usd, 2)}
            </span>
          </p>
          <p className="ml-8">
            24h Vol:{" "}
            <span className="font-black uppercase">
              {abbreviate(total_volume.usd, 2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
