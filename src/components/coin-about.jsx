"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

export default function CoinAbout({ coin }) {
  const [isExpanded, setExpanded] = useState(false);
  const description = DOMPurify.sanitize(coin.description.en);

  const handleAbout = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="w-full pb-6">
      <h2 className="bayon uppercase text-xl tracking-wider flex items-center">
        About
      </h2>
      <div className="py-6 space-y-2 text-sm">
        <div className="bg-md-gray w-full flex flex-col justify-center space-y-6 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p>Created:</p>
              <p>{coin.genesis_date ?? "N/A"}</p>
            </div>
            <Link
              href={coin.links.homepage[0]}
              className="w-40 h-12 bg-lt-gray font-medium rounded-lg flex items-center justify-center drop-shadow-lg border border-neutral-600 space-x-2"
            >
              <HiOutlineGlobeAlt className="text-xl" />
              <span>Official Website</span>
            </Link>
          </div>
          <div className="w-full space-y-2">
            <p className={`text-sm ${isExpanded ? "" : "line-clamp-6"}`}>
              {parse(description)}
            </p>
            <button
              className={`text-sm self-start text-neutral-500`}
              onClick={handleAbout}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
