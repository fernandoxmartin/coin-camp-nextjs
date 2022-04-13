export const Header = () => {
  return (
    <div className="h-20 w-full flex items-center justify-center bg-[#303030]">
      <div className="h-full max-w-6xl w-full flex items-center justify-between">
        <h1 className="text-2xl uppercase font-black">coin camp</h1>
        <div className="w-1/2 flex items-center justify-end tracking-wide text-sm">
          <p>
            Coins: <span className="text-indigo-700 font-black">13421</span>
          </p>
          <p className="ml-8">
            Mkt Cap: <span className="text-indigo-700 font-black">2.12T</span>
          </p>
          <p className="ml-8">
            24h Vol: <span className="text-indigo-700 font-black">78.6B</span>
          </p>
        </div>
      </div>
    </div>
  );
};
