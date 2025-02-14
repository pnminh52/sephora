import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import RatingStars from "./RatingStar";
import "swiper/css";
import "swiper/css/navigation";

const ChosenForYou = ({ products }) => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const nextSlider = () => {
    swiperRef.current?.slideNext();
    setIsBeginning(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
  };

  const prevSlider = () => {
    swiperRef.current?.slidePrev();
    setIsBeginning(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
  };

  return (
    <div className="relative px-4 md:px-6 lg:px-16 py-2 min-w-[500px] mx-auto ">
      {/* Custom Next/Prev Buttons */}
      <div className=" ">
        <button
          onClick={prevSlider}
          className={`absolute cursor-pointer left-6 lg:left-10 top-1/2 -translate-y-1/2 bg-black text-white w-11 h-11 rounded-full z-50 flex items-center justify-center transition-opacity ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-70"
          }`}
        >
          <svg
            className="w-8 h-8  text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <line
                x1="8.62"
                x2="15.38"
                y1="12"
                y2="5.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="8.62"
                x2="15.38"
                y1="12"
                y2="18.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </button>
        <button
          onClick={nextSlider}
          className={`absolute cursor-pointer right-6 lg:right-10 top-1/2 -translate-y-1/2 bg-black text-white w-11 h-11 rounded-full z-50 flex items-center justify-center transition-opacity ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-70"
          }`}
        >
          <svg
            className="w-8 h-8 rotate-180 text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <line
                x1="8.62"
                x2="15.38"
                y1="12"
                y2="5.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="8.62"
                x2="15.38"
                y1="12"
                y2="18.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Gán Swiper instance
        spaceBetween={-6}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="py-2 px-2">
              {" "}
              {/* Căn lề trái phải 2 đơn vị */}
              <div
                className="relative shadow-[0_2px_2px_2px_rgba(0,0,0,0.1),0_-2px_2px_2px_rgba(0,0,0,0.1)] 
      group p-2.5 rounded-sm cursor-pointer transition duration-300 
      transform hover:translate-y-[-5px]"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover rounded"
                    src={product.thumbnail}
                    alt={product.name}
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-sm w-full py-1 rounded-sm text-center font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-70">
                    <p>Quicklook</p>
                  </div>
                </div>
                <div>
                  {product.status && (
                    <p className="absolute uppercase top-1 left-1 text-[9px] font-semibold bg-black text-white px-2 rounded-sm">
                      {product.status}
                    </p>
                  )}
                  <p
                    className={`absolute uppercase ${
                      product.status ? "top-5" : "top-1"
                    } left-1 text-[9px] font-semibold bg-black text-white px-2 rounded-sm`}
                  >
                    {product.productLine}
                  </p>
                </div>
                <h2 className="text-sm font-semibold mt-2 truncate">
                  {product.name}
                </h2>
                <p className="text-black lg:text-sm text-xs line-clamp-2">
                  {product.content}
                </p>
                <p className="text-black text-sm lg:text-[17px] py-1 font-bold">
                  {product.priceAfterDiscount}.00$
                  {product.maxPriceAfterDiscount &&
                    ` - ${product.maxPriceAfterDiscount}.00$`}
                </p>
                <div className="flex items-center mt-0 gap-2">
                  <p>
                    <RatingStars rating={product.rating} />
                  </p>
                  <p className="text-sm">
                    {product.ratingCount >= 1000
                      ? (product.ratingCount / 1000).toFixed(
                          product.ratingCount % 1000 === 0 ? 0 : 1
                        ) + "k"
                      : product.ratingCount}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChosenForYou;
