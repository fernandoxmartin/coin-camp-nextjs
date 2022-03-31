import { CoinCard } from './CoinCard';

export const TopGrowing = ({coins}) => {

  return (
    <div className='h-56 flex items-center justify-between gap-4 my-8'>{coins.map(coin => <CoinCard key={coin.id} coin={coin}/>)}</div>
  )
}
