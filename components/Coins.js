import Link from "next/link";
import { Sparkline } from './Sparkline'
var abbreviate = require('number-abbreviate');

const Coins = ({
            id,
            rank,
            image,
            name,
            symbol,
            price,
            priceChangePerc_1h,
            priceChangePerc_24h,
            priceChangePerc_7d,
            marketcap,
            volume,
            sparkline
}) => {

  return (
    <Link href="/crypto/[id]" as={`/crypto/${id}`}>
      <a className='w-full cursor-pointer hover:bg-[#623AFF99]'>
        <div className='w-full h-full grid grid-cols-12 border-b border-gray-700 p-4 text-sm flex items-center'>
          <div>{rank}</div>
          <div className='w-full h-full flex items-center col-start-2 col-span-2'>
            <img src={image} alt={name} className='w-1/6 mr-2' />
            <div className='h-full w-1/2 flex flex-col justify-center'>
              <h1 className='w-full overflow-hidden truncate'>{name}</h1>
              <p className='uppercase text-gray-400'>{symbol}</p>
            </div>
          </div>
          <div className='col-start-4 col-span-2'>${price}</div>
          <div className={priceChangePerc_1h < 0 ? 'text-red-500' : 'text-green-500'}>{priceChangePerc_1h.toFixed(2)}%</div>
          <div className={priceChangePerc_24h < 0 ? 'text-red-500' : 'text-green-500'}>{priceChangePerc_24h.toFixed(2)}%</div>
          <div className={priceChangePerc_7d < 0 ? 'text-red-500' : 'text-green-500'}>{priceChangePerc_7d.toFixed(2)}%</div>
          <div className='uppercase'>{abbreviate(volume, 2)}</div>
          <div className='uppercase'>{abbreviate(marketcap, 2)}</div>
          <div className='w-full h-full col-span-2'>
            <Sparkline data={sparkline} status={priceChangePerc_7d}/>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;

