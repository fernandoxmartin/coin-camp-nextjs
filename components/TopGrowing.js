import { CoinCard } from './CoinCard';

export const TopGrowing = ({coins}) => {

  return (
    <div className='h-40 flex items-center justify-between mb-4 gap-4'>{coins.map(coin => <CoinCard key={coin.id} coin={coin}/>)}</div>
  )
}
