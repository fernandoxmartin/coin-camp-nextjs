import Layout from "../../components/Layout";
import styled from "styled-components";

const Crypto = ({ crypto }) => {
  console.log(crypto);
  return (
    <Layout>
      <CryptoPage>
        <Row col={2} row={1}>
          <CryptoImg src={crypto.image.large} alt={crypto.name} />
          <CryptoData>
            <DataContainer>
              <h1>{crypto.name}</h1>
              <p>{crypto.symbol}</p>
            </DataContainer>
            <DataContainer
              percent={crypto.market_data.price_change_percentage_24h}
            >
              <h2>${crypto.market_data.current_price.usd.toLocaleString()}</h2>
              <p>
                {crypto.market_data.price_change_percentage_24h.toFixed(1)}%
              </p>
            </DataContainer>
          </CryptoData>
        </Row>
        <Row col={3} row={2}>
          <p>1h</p>
          <p>24h</p>
          <p>7d</p>
          <Data
            percentage={
              crypto.market_data.price_change_percentage_1h_in_currency.usd
            }
          >
            {crypto.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
              1
            )}
            %
          </Data>
          <Data
            percentage={
              crypto.market_data.price_change_percentage_24h_in_currency.usd
            }
          >
            {crypto.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
              1
            )}
            %
          </Data>
          <Data
            percentage={
              crypto.market_data.price_change_percentage_7d_in_currency.usd
            }
          >
            {crypto.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
              1
            )}
            %
          </Data>
        </Row>
        <Row col={2} row={2}>
          <p>24h Volume</p>
          <p>Market Cap</p>
          <Data>${crypto.market_data.total_volume.usd.toLocaleString()}</Data>
          <Data>${crypto.market_data.market_cap.usd.toLocaleString()}</Data>
        </Row>
        <Row col={1} row={2}>
          
        </Row>
      </CryptoPage>
    </Layout>
  );
};

export default Crypto;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true
    `);

  const data = await res.json();

  return {
    props: {
      crypto: data,
    },
  };
}

const CryptoPage = styled.div`
  display: grid;
  grid-template-rows: 2fr, 1fr, 1fr, 1fr;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  max-width: 900px;
`;

const CryptoImg = styled.img`
  width: 80%;
`;
const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  p {
    justify-self: center;
    margin-bottom: 1rem;
  }
`;
const CryptoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;
const DataContainer = styled.div`
  text-align: end;
  h1 {
    font-size: 2rem;
    margin-bottom: 1px;
    font-weight: 500;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1px;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    text-transform: uppercase;
    color: #777;
    color: ${(props) =>
      props.percent < 0 ? "#e8503a" : props.percent > 0 ? "#18BF65" : "#777"};
  }
`;
const Data = styled.p`
  color: ${(props) =>
    props.percentage < 0
      ? "#e8503a"
      : props.percentage > 0
      ? "#18BF65"
      : "#777"};
`;
