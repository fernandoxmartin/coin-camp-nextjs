import { CgArrowsExchangeAltV } from "react-icons/cg";
import { getCoins } from "../lib/get-coins";
import CoinBase from "@/components/coin-base";
import ExchangeList from "@/components/exchange-list";

export default async function Exchange() {
  const coins = await getCoins();

  return (
    <div className="w-full max-w-[1250px] py-10 px-6">
      <div className="lg:grid lg:grid-cols-[65%,_35%]">
        <div>
          <CoinBase coins={coins} />
          <div className="flex items-center justify-center py-6">
            <CgArrowsExchangeAltV className="text-6xl text-accent" />
          </div>
          <ExchangeList coins={coins} />
        </div>

        {/* <div className="my-6 lg:my-0 md:flex md:space-x-6 lg:flex-col lg:items-center lg:py-16 lg:pl-8 xl:pl-16 lg:space-x-0 lg:space-y-6">
          <h1>Select target coins: (up to 5)</h1>
          <ExchangeTargets coins={coins} />
        </div> */}
      </div>
    </div>
  );
}
