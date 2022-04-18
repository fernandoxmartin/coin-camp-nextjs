import Layout from "../../components/Layout";
import { CoinData } from "../../components/coinPage/CoinData";
import { CoinStats } from "../../components/coinPage/CoinStats";
import { CoinDesc } from "../../components/coinPage/CoinDesc";

const Coin = ({ coin, global }) => {
  return (
    <Layout global={global}>
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

  const [coinRes, globalRes] = await Promise.all([
    fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true
    `),
    fetch("https://api.coingecko.com/api/v3/global"),
  ]);

  const [data, global] = await Promise.all([coinRes.json(), globalRes.json()]);

  return {
    props: {
      coin: data,
      global,
    },
  };
}
