
import Layout from "../../components/Layout";
import { Sparkline_24h } from "../../components/Sparkline";

const Coin = ({ coin }) => {

  const data_24h = (coin.market_data.sparkline_7d.price).slice(-24);

  return (
    <Layout>
      <div className='w-full flex items-center py-4 uppercase'>
        <img src={coin.image.small}/>
        <h2 className='text-2xl px-4'>{coin.name}</h2>
        <p className='text-sm text-gray-400'>{coin.symbol}</p>
      </div>
      <div className='w-full h-full grid grid-cols-3 grid-rows-2 gap-4 '>
        <div className='bg-[#303030] rounded-2xl col-span-2 p-8'>
          <div>
            <h2 className='text-3xl'>${coin.market_data.current_price.usd}</h2>
            <div className='flex items-center'>
              <p className='pr-4'>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
              <p className='text-xs text-gray-400'>(24h)</p>
            </div>
          </div>
          <div>
          <Sparkline_24h data={data_24h} status={coin.market_data.price_change_percentage_24h}/>
          </div>
        </div>
        <div className='bg-[#303030] rounded-2xl'></div>
        <div className='bg-[#303030] rounded-2xl col-span-3'></div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true
    `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
