import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import RatingStars from "./RatingStar";
import "swiper/css";
import "swiper/css/navigation";

const ChosenForYou = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="relative px-4 md:px-6 lg:px-16 py-2 min-w-[500px] mx-auto flex-nowrap overflow-x-auto">
<Swiper
  modules={[Navigation]}
  navigation={true} // Luôn bật navigation
  spaceBetween={10}
  slidesPerView={6} // Hiển thị 6 sản phẩm trên mọi kích thước
  centeredSlides={false}
  breakpoints={{
    320: { slidesPerView: 3 },
    1024: { slidesPerView: 6 },
  }}
  className="relative"
>

        {products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="group p-3 shadow-md rounded-sm cursor-pointer transition duration-300 transform hover:translate-y-[-5px]"
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
                <h2 className="text-sm font-semibold mt-2">{product.name}</h2>
                <p className="text-black text-sm line-clamp-2">{product.content}</p>
                <p className="text-black text-md py-1 font-bold">
                  {product.priceAfterDiscount}.00$
                  {product.maxPriceAfterDiscount && ` - ${product.maxPriceAfterDiscount}.00$`}
                </p>
                <div className="flex items-center gap-2">
                  <p>
                    <RatingStars rating={product.rating} />
                  </p>
                  <p className="text-sm">
                    {product.ratingCount >= 1000
                      ? (product.ratingCount / 1000).toFixed(product.ratingCount % 1000 === 0 ? 0 : 1) + "k"
                      : product.ratingCount}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products available.</p>
        )}
      </Swiper>
    </div>
  );
};

export default ChosenForYou;
