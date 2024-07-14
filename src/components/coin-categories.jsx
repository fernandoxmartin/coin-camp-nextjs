import Link from "next/link";

export default function CoinCategories({ params }) {
  const { timeframe, sort } = params;
  const selectedTimeframe = timeframe || "1h";
  const selectedSort = (currentSort, category) => {
    const asc = `${category}_asc`;
    const desc = `${category}_desc`;
    return currentSort === desc ? asc : desc;
  };

  return (
    <div className="grid grid-cols-[40%,_25%,_35%] text-accent text-xs font-medium pb-6 px-2">
      <h3>Name</h3>
      <Link
        href={`?timeframe=${selectedTimeframe}&sort=${selectedSort(
          sort,
          "change"
        )}`}
        replace={true}
      >
        <h3 className="text-end">Change</h3>
      </Link>
      <Link
        href={`?timeframe=${selectedTimeframe}&sort=${selectedSort(
          sort,
          "price"
        )}`}
        replace={true}
      >
        <h3 className="text-end">Price</h3>
      </Link>
    </div>
  );
}
