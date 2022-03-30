
export const CoinListCategories = () => {
  return (
    <div className='w-full h-full grid grid-cols-12 border-b border-gray-700 p-4 text-xs items-center'>
        <h2>#</h2>
        <h2 className='col-span-2'>Name</h2>
        <h2 className='col-span-2'>Price</h2>
        <h2>1h</h2>
        <h2>24h</h2>
        <h2>7d</h2>
        <h2>24h Vol</h2>
        <h2>Market Cap</h2>
        <h2 className='col-span-2 flex justify-center'>Last 7d</h2>
    </div>
  )
}
