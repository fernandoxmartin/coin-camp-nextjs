import { Suspense } from "react";
import { getCoins } from "../lib/get-coins";
import CoinBase from "@/components/coin-base";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import ExchangeList from "@/components/exchange-list";
import {
  CoinBaseSkeleton,
  ExchangeListSkeleton,
} from "@/components/skeletons/exchange-skeleton";

export default async function Exchange({ searchParams }) {
  const coins = await getCoins();

  return (
    <div className="w-full max-w-[1250px] py-10 px-6">
      <div className="flex flex-col items-center">
        <Suspense fallback={<CoinBaseSkeleton />}>
          <CoinBase coins={coins} />
        </Suspense>
        <div className="flex items-center justify-center py-6">
          <CgArrowsExchangeAltV className="text-6xl text-accent" />
        </div>
        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={<ExchangeListSkeleton />}
        >
          <ExchangeList coins={coins} />
        </Suspense>
      </div>
    </div>
  );
}
