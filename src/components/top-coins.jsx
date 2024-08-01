import { getTopCoins } from "@/app/lib/get-top-coins";
import Image from "next/image";

export default function TopCoins({ coins }) {
  const top = getTopCoins(coins);

  return (
    <div className="w-full">
      <h2 className="bayon uppercase text-xl tracking-wider flex items-center">
        Top Gainers / Losers{" "}
        <span className="text-sm text-neutral-500 px-4">Last 24h</span>
      </h2>
      <div className="py-6 space-y-2">
        {top.map((gainer_loser, index) => {
          return (
            <div
              className="bg-md-gray w-full md:h-40 flex flex-col justify-center rounded-xl p-2"
              key={index}
            >
              {gainer_loser.map((coin) => {
                return (
                  <div
                    key={coin.id}
                    className="grid grid-cols-[40%,_25%,_35%] py-4 px-2 font-medium"
                  >
                    <div className="flex items-start justify-start space-x-2">
                      <Image
                        priority
                        src={coin.image}
                        alt="coin symbol"
                        width="0"
                        height="0"
                        className="w-8 h-8 self-center"
                      />
                      <div className="w-full">
                        <p className="text-sm truncate">{coin.name}</p>
                        <p className="text-xs uppercase text-neutral-500">
                          {coin.symbol}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`${
                        coin.price_change_percentage_24h_in_currency < 0
                          ? "text-red-500"
                          : "text-accent"
                      } text-sm text-end self-center`}
                    >
                      {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
                    </p>
                    <p className="text-sm text-end self-center">
                      {new Intl.NumberFormat("en-US", {
                        currency: "USD",
                        style: "currency",
                      }).format(coin.current_price)}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
