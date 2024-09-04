"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <div className="w-full h-12 rounded-md bg-lt-gray border border-neutral-600 flex items-center justify-center drop-shadow-lg">
      <form
        onSubmit={handleSearch}
        className="w-full px-4 flex items-center space-x-4"
      >
        <FaSearch className="text-neutral-400" />
        <input
          type="text"
          className="w-full rounded-md bg-transparent outline-transparent outline-0 text-neutral-400 placeholder:text-neutral-500"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
