import CoinAbout from "@/components/coin-about";
import CoinChart from "@/components/coin-chart";
import CoinStats from "@/components/coin-stats";
import { getCoin } from "@/app/lib/get-coin";
import { headers } from "next/headers";

export default async function CoinPage() {
  const headersList = headers();
  const id = headersList.get("x-current-path").split("/").slice(-1)[0];
  const coin = await getCoin(id);

  return (
    <div className="w-full max-w-[1250px] py-10 px-6">
      <div className="lg:grid lg:grid-cols-[65%,_35%]">
        <div>
          <CoinChart coin={coin} />
          <CoinAbout coin={coin} />
        </div>

        <div className="md:flex md:space-x-6 lg:flex-col lg:items-center lg:pl-8 xl:pl-16 lg:space-x-0">
          <CoinStats coin={coin} />
        </div>
      </div>
    </div>
  );
}
