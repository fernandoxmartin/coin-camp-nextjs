import Link from "next/link";
import Image from "next/image";
import { Sparkline_24h } from "./Sparkline";

export const CoinCard = ({ coin }) => {
  const data_24h = coin.sparkline_in_7d.price.slice(-24);

  return (
    <Link href="/coin/[id]" as={`/coin/${coin.id}`}>
      <div className="w-full grid grid-rows-3 bg-[#303030] p-8 rounded-2xl border-t-4 border-indigo-700">
        <div className="w-full flex items-center overflow-hidden">
          <img src={coin.image} alt={coin.name} className="w-1/5 mr-4" />
          <div className="h-full w-full flex flex-col justify-center truncate overflow-hidden">
            <h1 className="w-full overflow-hidden truncate text-2xl font-bold">
              {coin.name}
            </h1>
            <p className="uppercase text-gray-400">{coin.symbol}</p>
          </div>
        </div>
        <div className="w-full">
          <Sparkline_24h
            data={data_24h}
            status={coin.priceChangePerc_7d}
            w={150}
            h={75}
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="text-2xl font-bold">${coin.current_price}</div>
          <div className="text-base font-bold text-green">
            +{coin.price_change_percentage_24h_in_currency.toFixed(2)}%
          </div>
        </div>
      </div>
    </Link>
  );
};
