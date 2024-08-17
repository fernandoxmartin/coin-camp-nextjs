import { CgArrowsExchangeAltV } from "react-icons/cg";
import { getCoins } from "../lib/get-coins";
import CoinBase from "@/components/coin-base";
import ExchangeList from "@/components/exchange-list";

export default async function Exchange() {
  const coins = await getCoins();

  return (
    <div className="w-full max-w-[1250px] py-10 px-6">
      <div className="flex flex-col items-center">
        <CoinBase coins={coins} />
        <div className="flex items-center justify-center py-6">
          <CgArrowsExchangeAltV className="text-6xl text-accent" />
        </div>
        <ExchangeList coins={coins} />
      </div>
    </div>
  );
}
