export const CoinDesc = ({ coin }) => {
  return (
    <div className="bg-[#303030] rounded-2xl mb-4 md:col-span-3 p-8 border-t-4 border-indigo-700">
      <h2 className="text-lg">About</h2>
      <p
        className="text-sm py-4 leading-6"
        dangerouslySetInnerHTML={{ __html: coin.description.en }}
      ></p>
      <div>
        <p className="py-2 text-lg">Learn More</p>
        <a target="_blank" href={coin.links.homepage[0]} className="text-sm">
          {coin.links.homepage[0]}
        </a>
      </div>
    </div>
  );
};
