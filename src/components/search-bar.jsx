import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="w-full h-10 rounded-xl bg-neutral-700 border border-neutral-600 flex items-center justify-center drop-shadow-lg">
      <form className="w-full px-4 flex items-center space-x-4">
        <FaSearch className="text-neutral-400" />
        <input
          className="w-full rounded-md bg-transparent outline-transparent outline-0 text-neutral-400 placeholder:text-neutral-500"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
