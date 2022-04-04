import Layout from "../../components/Layout";
import { CoinData } from "../../components/coinPage/CoinData";
import { CoinStats } from "../../components/coinPage/CoinStats";
import { CoinDesc } from "../../components/coinPage/CoinDesc";

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className="w-full flex items-center py-4 uppercase">
        <img src={coin.image.small} />
        <h2 className="text-2xl px-4">{coin.name}</h2>
        <p className="text-sm text-gray-400">{coin.symbol}</p>
      </div>
      <div className="w-full h-full grid grid-cols-3 grid-rows-auto gap-4 ">
        <CoinData coin={coin} />
        <CoinStats coin={coin} />
        <CoinDesc coin={coin} />
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res =
    await fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true
    `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
