import { CoinCard } from "./CoinCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const TopMovers = ({ coins }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-weight-500 mt-4">
        Top Movers<span className="text-sm text-gray-500 ml-2">(24h)</span>
      </h2>
      <div className=" my-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {coins.map((coin) => (
            <SwiperSlide key={coin.id}>
              <CoinCard coin={coin} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
