import React from "react";
import { useNavigate } from "react-router-dom";
import RatingStars from './RatingStar';
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
      <div className="grid grid-cols-6 gap-2 min-w-[1200px] px-4 md:px-6 lg:px-16  mx-auto">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              className="border border-red-600 p-4 rounded-lg cursor-pointer hover:shadow-lg transition duration-300"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <img
                className="w-full h-auto object-cover rounded"
                src={product.thumbnail}
                alt={product.name}
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-red-500 font-bold">
                {product.priceAfterDiscount}
              </p>
              <p><RatingStars rating={product.rating}/></p>
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
