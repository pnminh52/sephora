import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RatingStars from "./RatingStar";

const ChosenForYou = ({ products }) => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };
const handleNext = () => {
  if (startIndex + 1 < products.length) {
    setStartIndex(startIndex + 1);  
  }
};

const handlePrev = () => {
  if (startIndex - 1 >= 0) {
    setStartIndex(startIndex - 1);  
  }
};


  const visibleProducts = products.slice(startIndex, startIndex + 6);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-hidden">
        <div className="relative flex transition-transform duration-500 ease-in-out grid grid-cols-6 gap-3 px-4 md:px-6 lg:px-16 py-2 mx-auto min-w-[1200px]"
             style={{ transform: `translateX(-${startIndex * (100 / 6)}%)` }}>
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <div
                className="group p-3 shadow-[0px_0px_2.5px_2.5px_rgba(0,0,0,0.1)] rounded-sm cursor-pointer transition duration-300 transform hover:translate-y-[-5px]"
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover rounded"
                    src={product.thumbnail}
                    alt={product.name}
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black ease-in-out hover:bg-[#757575] text-white text-sm w-full py-1 rounded-sm text-center font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-70">
                    <p>Quicklook</p>
                  </div>
                </div>

                <div>
                  {product.status && (
                    <p className="absolute top-1 left-1 text-[10px] uppercase bg-black text-white rounded-sm px-2 font-semibold">
                      {product.status}
                    </p>
                  )}

                  <p
                    className={`absolute left-1 text-[10px] uppercase bg-black text-white rounded-sm px-2 font-semibold ${
                      product.status ? "top-[22px]" : "top-1"
                    }`}
                  >
                    {product.productLine}
                  </p>
                </div>

                <h2 className="text-sm font-semibold mt-2">{product.name}</h2>
                <p className="text-black text-sm line-clamp-2">
                  {product.content}
                </p>
                <p className="text-black text-md py-1 font-bold">
                  {product.priceAfterDiscount}.00$
                  {product.maxPriceAfterDiscount &&
                    ` - ${product.maxPriceAfterDiscount}.00$`}
                </p>

                <div className="flex items-center gap-2">
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
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products available.
            </p>
          )}
        </div>
      </div>

      {startIndex > 0 && (
        <button
          className=" absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
          onClick={handlePrev}
        >
          &#10094;
        </button>
      )}

      {startIndex + 6 < products.length && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
          onClick={handleNext}
        >
          &#10095;
        </button>
      )}
    </div>
  );
};

export default ChosenForYou;
