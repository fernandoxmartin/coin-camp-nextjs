import Link from "next/link";
import Image from "next/image";
import { getCoins } from "../lib/get-coins";
import { LuFileSearch } from "react-icons/lu";
import SearchBar from "@/components/search-bar";

export default async function Search({ searchParams }) {
  const coins = await getCoins();
  const results = coins.filter((coin) => coin.id.includes(searchParams.q));

  return (
    <div className="w-full max-w-[1250px] py-10 px-6">
      <div className="md:hidden">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center py-6">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
          {results.length > 0 ? (
            <>
              <div className="flex items-center justify-center py-6 md:col-span-2 lg:col-span-3">
                <p>
                  Search results for{" "}
                  <span className="italic">{`"${searchParams.q}"`}</span>
                </p>
              </div>

              {results.map((result) => (
                <Link
                  key={result.id}
                  href={`/coins/${result.id}`}
                  className="flex p-4 font-medium cursor-pointer bg-md-gray rounded-md hover:bg-accent/10"
                >
                  <div className="flex items-start justify-start space-x-2">
                    <Image
                      priority
                      src={result.image}
                      alt="coin symbol"
                      width="0"
                      height="0"
                      className="w-8 h-8 self-center"
                    />
                    <div className="w-full">
                      <p className="text-sm truncate">{result.name}</p>
                      <p className="text-xs uppercase text-neutral-500">
                        {result.symbol}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <div className="w-full h-48 flex flex-col items-center justify-center space-y-4 md:col-span-2 lg:col-span-3">
              <LuFileSearch className="text-5xl text-neutral-400" />
              <h2 className="text-center">
                Sorry! No results found for{" "}
                <span className="italic">{`"${searchParams.q}"`}</span>
              </h2>
              <p className="text-center text-sm text-neutral-500">
                You may want to try to search for something else.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
