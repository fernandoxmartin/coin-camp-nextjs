export const CoinDesc = ({ coin }) => {
  return (
    <div className="bg-[#303030] rounded-2xl col-span-3 p-8">
      <h2 className="text-lg">About</h2>
      <p className="text-sm py-4 leading-6">
        {(coin.description.en && coin.description.en) || "N/A"}
      </p>
      <div>
        <p className="py-2 text-lg">Learn More</p>
        <a target="_blank" href={coin.links.homepage[0]} className="text-sm">
          {coin.links.homepage[0]}
        </a>
      </div>
    </div>
  );
};
