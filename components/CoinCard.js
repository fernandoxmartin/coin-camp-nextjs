import { Sparkline } from "./Sparkline"

export const CoinCard = ({coin}) => {
  return (
    <div className=' h-full w-1/3 grid grid-cols-5 bg-[#121212] p-4 rounded-2xl'>
        <div className='h-full w-full flex flex-col justify-evenly col-start-1 col-end-4'>
            <div className='h-1/2 flex items-center justify-between'>
                <img src={coin.image} className='w-1/6'/>
                <p className='overflow-ellipsis overflow-hidden px-4'>{coin.name}</p>
                <p className='uppercase text-gray-400'>{coin.symbol}</p>
            </div>
            <div className='text-2xl'>${coin.current_price}</div>
            <div className='text-sm text-green-500'>+{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</div>
        </div>
        <div className='h-full w-full flex items-center col-start-4 col-span-2'>
            <Sparkline data={coin.sparkline_in_7d} status={coin.priceChangePerc_7d}/>
        </div>
    </div>
  )
}
