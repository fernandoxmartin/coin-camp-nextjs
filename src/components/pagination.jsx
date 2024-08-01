"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";

export default function Pagination({ hasNext, hasPrev }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const pageParam = new URLSearchParams(searchParams.toString());

  const per_page = 10;
  const pages = [2, 3, 4, 5, 6, 7, 8, 9];

  pageParam.set("page", Number(page) - 1);
  const prev = pageParam.toString();

  pageParam.set("page", Number(page) + 1);
  const next = pageParam.toString();

  pageParam.set("page", "1");
  const first_page = pageParam.toString();

  pageParam.set("page", Math.ceil(100 / Number(per_page)));
  const last_page = pageParam.toString();

  return (
    <div className="w-full flex items-center justify-between space-x-2 md:justify-center">
      <button
        className="w-14 h-14 bg-md-gray rounded-lg p-2 flex items-center justify-center disabled:text-neutral-700"
        disabled={!hasPrev}
        onClick={() => {
          router.replace(`?${prev}`);
        }}
      >
        <CgArrowLeftO className="text-3xl" />
      </button>

      <button
        className={`w-14 h-14 p-2 rounded-lg flex items-center justify-center hover:bg-md-gray 
        ${page == 1 ? "bg-md-gray" : ""}`}
        onClick={() => {
          router.replace(`?${first_page}`);
        }}
      >
        1
      </button>
      {page > 5 ? <div>{"..."}</div> : ""}
      {/* ///////////////////////////////////// */}

      {pages.map((p) => {
        pageParam.set("page", p);
        const pageLink = pageParam.toString();

        return (
          <button
            key={p}
            className={`w-14 h-14 p-2 rounded-lg flex items-center justify-center hover:bg-md-gray 
            ${page == p ? "bg-md-gray" : ""} 
            ${page < 6 && p > 5 ? "hidden" : ""} 
            ${page > 5 && p < 6 ? "hidden" : ""}
            `}
            onClick={() => {
              router.replace(`?${pageLink}`);
            }}
          >
            {p}
          </button>
        );
      })}

      {/* ///////////////////////////////////// */}
      {page <= 5 ? <div>{"..."}</div> : ""}
      <button
        className={`w-14 h-14 p-2 rounded-lg flex items-center justify-center hover:bg-md-gray 
        ${page == 10 ? "bg-md-gray" : ""}`}
        onClick={() => {
          router.replace(`?${last_page}`);
        }}
      >
        {Math.ceil(100 / Number(per_page))}
      </button>
      <button
        className="w-14 h-14 bg-md-gray rounded-lg p-2 flex items-center justify-center disabled:text-neutral-700"
        disabled={!hasNext}
        onClick={() => {
          router.replace(`?${next}`);
        }}
      >
        <CgArrowRightO className="text-3xl" />
      </button>
    </div>
  );
}
