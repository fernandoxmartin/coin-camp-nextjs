import Link from "next/link";
import { Sparkline_7d } from "./Sparkline";
var abbreviate = require("number-abbreviate");

const Coins = ({
  id,
  rank,
  image,
  name,
  symbol,
  price,
  priceChangePerc_1h,
  priceChangePerc_24h,
  priceChangePerc_7d,
  marketcap,
  volume,
  sparkline,
}) => {
  const green = "text-green hidden lg:block";
  const red = "text-red hidden lg:block";
  // 1EF30B
  // 19CD09
  return (
    <Link
      href="/coin/[id]"
      as={`/coin/${id}`}
      className="w-full cursor-pointer hover:bg-indigo-700"
    >
      <div className="w-full h-full grid grid-cols-2 border-b border-[#202020] py-4 px-8 text-sm items-center md:grid-cols-8 lg:grid-cols-12">
        <div className="hidden md:block">{rank}</div>
        <div className="w-full h-full flex items-center md:col-span-2">
          <img src={image} alt={name} className="w-1/5 mr-2" />
          <div className="h-full w-[80%] flex flex-col justify-center">
            <h1 className="w-full overflow-hidden truncate">{name}</h1>
            <p className="uppercase text-gray-400 text-xs">{symbol}</p>
          </div>
        </div>
        <div className="flex flex-col items-end md:items-start md:col-span-2">
          <div>${price}</div>
          <div
            className={
              priceChangePerc_24h < 0
                ? "text-red text-xs lg:hidden"
                : "text-green text-xs lg:hidden"
            }
          >
            {priceChangePerc_24h.toFixed(2)}%
          </div>
        </div>
        <div className={priceChangePerc_1h < 0 ? red : green}>
          {priceChangePerc_1h.toFixed(2)}%
        </div>
        <div className={priceChangePerc_24h < 0 ? red : green}>
          {priceChangePerc_24h.toFixed(2)}%
        </div>
        <div className={priceChangePerc_7d < 0 ? red : green}>
          {priceChangePerc_7d.toFixed(2)}%
        </div>
        <div className="uppercase hidden md:block">{abbreviate(volume, 2)}</div>
        <div className="uppercase hidden md:block">
          {abbreviate(marketcap, 2)}
        </div>
        <div className="w-full h-full hidden md:block lg:col-span-2">
          <Sparkline_7d data={sparkline} status={priceChangePerc_7d} />
        </div>
      </div>
    </Link>
  );
};

export default Coins;
