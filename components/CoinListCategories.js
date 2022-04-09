import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export const CoinListCategories = ({ toggleSortedCoins }) => {
  return (
    <div className="w-full h-full grid grid-cols-12 border-b border-[#202020] p-4 px-8 text-sm items-center">
      <h2>#</h2>
      <h2 className="col-span-2">Name</h2>

      <div className="col-span-2 flex items-center">
        <div className="flex flex-col items-center mr-0.5">
          <AiFillCaretUp size={11} />
          <AiFillCaretDown size={11} className="-mt-1" />
        </div>
        <h2
          className="cursor-pointer"
          onClick={() => toggleSortedCoins("current_price")}
        >
          Price
        </h2>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center mr-0.5">
          <AiFillCaretUp size={11} />
          <AiFillCaretDown size={11} className="-mt-1" />
        </div>
        <h2
          className="cursor-pointer"
          onClick={() =>
            toggleSortedCoins("price_change_percentage_1h_in_currency")
          }
        >
          1h
        </h2>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center mr-0.5">
          <AiFillCaretUp size={11} />
          <AiFillCaretDown size={11} className="-mt-1" />
        </div>
        <h2
          className="cursor-pointer"
          onClick={() =>
            toggleSortedCoins("price_change_percentage_24h_in_currency")
          }
        >
          24h
        </h2>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center mr-0.5">
          <AiFillCaretUp size={11} />
          <AiFillCaretDown size={11} className="-mt-1" />
        </div>
        <h2
          className="cursor-pointer"
          onClick={() =>
            toggleSortedCoins("price_change_percentage_7d_in_currency")
          }
        >
          7d
        </h2>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center mr-0.5">
          <AiFillCaretUp size={11} />
          <AiFillCaretDown size={11} className="-mt-1" />
        </div>
        <h2
          className="cursor-pointer"
          onClick={() => toggleSortedCoins("total_volume")}
        >
          24h Vol
        </h2>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center mr-0.5">
          <AiFillCaretUp size={11} />
          <AiFillCaretDown size={11} className="-mt-1" />
        </div>
        <h2
          className="cursor-pointer"
          onClick={() => toggleSortedCoins("market_cap")}
        >
          Mkt Cap
        </h2>
      </div>

      <h2 className="col-span-2 flex justify-center">Last 7d</h2>
    </div>
  );
};
