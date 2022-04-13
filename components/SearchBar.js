export const SearchBar = ({ ...rest }) => {
  return (
    <div className="mt-4 w-full flex items-center">
      <input
        {...rest}
        className="bg-indigo-700 border-none outline-none rounded-2xl p-4 h-full w-full placeholder-gray-300"
      />
    </div>
  );
};
