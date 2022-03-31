import { Sparkline_7d } from "./Sparkline"

export const CoinCard = ({coin}) => {
  return (
    <div className='h-full w-1/3 grid grid-cols-2 grid-rows-2 bg-[#303030] p-8 rounded-2xl'>
 
      <div className='w-full h-full flex flex-col'>
          <img src={coin.image} alt={coin.name} className='w-1/3 pb-4' />
          <div className='h-full w-full flex flex-col justify-center'>
              <h1 className='w-full overflow-hidden truncate'>{coin.name}</h1>
              <p className='uppercase text-gray-400'>{coin.symbol}</p>
          </div>
      </div>
      <div>
        <Sparkline_7d data={coin.sparkline_in_7d} status={coin.priceChangePerc_7d}/>
      </div>
      <div className='col-span-2 flex items-end justify-between'>
        <div className='text-2xl'>${coin.current_price}</div>
        <div className='text-sm text-green-500'>+{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</div>
      </div>
            
    </div>
  )
}
