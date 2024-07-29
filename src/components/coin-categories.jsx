"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";

export default function CoinCategories() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") ?? "market_desc";

  const sortParam = new URLSearchParams(searchParams.toString());

  const selectedSort = (currentSort, category) => {
    const asc = `${category}_asc`;
    const desc = `${category}_desc`;
    return currentSort === desc ? asc : desc;
  };

  const categories = ["change", "price", "market", "volume"];

  return (
    <div className="grid grid-cols-[40%,_25%,_35%] md:grid-cols-[20%,_20%,_15%,_15%,_15%,_15%] text-accent text-xs font-medium pb-6 px-2">
      <h3>Name</h3>

      {categories.map((category) => {
        sortParam.set("sort", selectedSort(sort, category))?.toString();
        return (
          <Link
            key={category}
            href={`?${sortParam}`}
            replace={true}
            className={`flex items-center justify-end
            ${category === "price" && "md:col-start-2"} 
            ${category === "change" && "md:col-start-3 md:row-start-1"} 
            ${
              (category === "market" || category === "volume") &&
              "hidden md:flex"
            }`}
          >
            <h3 className="capitalize">{category}</h3>
            {sort === `${category}_desc` && <BiChevronDown size={16} />}
            {sort === `${category}_asc` && (
              <BiChevronDown size={16} className="rotate-180" />
            )}
          </Link>
        );
      })}

      <h3 className="hidden md:block text-end">Chart</h3>
    </div>
  );
}
