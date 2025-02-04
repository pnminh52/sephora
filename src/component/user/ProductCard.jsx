import React from "react";
import { useNavigate } from "react-router-dom";
import RatingStars from "./RatingStar";
const ProductCard = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className="overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="grid grid-cols-6 gap-3 min-w-[1200px] px-4 md:px-6 lg:px-16 py-2  mx-auto">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              className="group p-3 shadow-[0px_0px_2.5px_2.5px_rgba(0,0,0,0.1)] rounded-sm cursor-pointer transition duration-300 transform hover:translate-y-[-5px]"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative ">
  <img
    className="w-full h-auto object-cover rounded"
    src={product.thumbnail}
    alt={product.name}
  />
  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#404040] duration-300 ease-in-out hover:bg-[#757575] text-white text-sm w-full py-1 rounded-sm text-center font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <p>Quicklook</p>
  </div>
</div>


              <div>
                <p className="absolute top-1 left-1 text-[10px] uppercase bg-black text-white rounded-sm px-2 font-semibold">
                  {product.status}
                </p>
                <p className="absolute top-5.5 left-1 text-[10px] uppercase bg-black text-white rounded-sm px-2 font-semibold">
                  {product.productLine}
                </p>
              </div>
              <h2 className="text-sm font-semibold mt-2">{product.name}</h2>
              <p className="text-black  text-sm line-clamp-2 ">
                {product.content}
              </p>
              <p className="text-black text-md py-1 font-bold">
                {product.priceAfterDiscount}.00$
                {product.maxPriceAfterDiscount &&
                  ` - ${product.maxPriceAfterDiscount}.00$`}
              </p>

              <div className="flex  items-center gap-2 ">
                <p>
                  <RatingStars rating={product.rating} />
                </p>
                <p className="text-sm">{product.ratingCount}</p>
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
  );
};

export default ProductCard;
