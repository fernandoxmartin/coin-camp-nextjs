
export const SearchBar = ({ ...rest }) => {
  return (
    <div className='mb-20 w-full flex items-center'>
      <input {...rest} className='bg-gray-700 border-none outline-none rounded p-4 h-full w-full placeholder-gray-300'/>
    </div>
  );
};

