"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";

export default function Pagination({ hasNext, hasPrev }) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const selectedTime = searchParams.get("timeframe") ?? "1h";
  const selectedSort = searchParams.get("sort");
  const page = searchParams.get("page") ?? "1";
  const per_page = 15;

  return (
    <div className="w-full flex items-center justify-between">
      <button
        className="w-14 h-14 bg-md-gray rounded-lg p-2 flex items-center justify-center disabled:text-neutral-700"
        disabled={!hasPrev}
        onClick={() => {
          router.replace(
            `?timeframe=${selectedTime}&sort=${selectedSort}&page=${
              Number(page) - 1
            }`
          );
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
          router.replace(
            `?timeframe=${selectedTime}&sort=${selectedSort}&page=${
              Number(page) + 1
            }`
          );
        }}
      >
        <CgArrowRightO className="text-3xl" />
      </button>
    </div>
  );
}
