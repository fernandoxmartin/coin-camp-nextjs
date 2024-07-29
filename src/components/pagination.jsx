"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";

export default function Pagination({ hasNext, hasPrev }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const pageParam = new URLSearchParams(searchParams.toString());

  pageParam.set("page", Number(page) - 1);
  const prev = pageParam.toString();

  pageParam.set("page", Number(page) + 1);
  const next = pageParam.toString();

  const per_page = 10;

  return (
    <div className="w-full flex items-center justify-between md:justify-center md:space-x-6 lg:justify-end">
      <button
        className="w-14 h-14 bg-md-gray rounded-lg p-2 flex items-center justify-center disabled:text-neutral-700"
        disabled={!hasPrev}
        onClick={() => {
          router.replace(`?${prev}`);
        }}
      >
        <CgArrowLeftO className="text-3xl" />
      </button>

      <div className=" font-medium">
        {page} / {Math.ceil(100 / Number(per_page))}
      </div>

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
