import React, { useEffect, useState } from "react";
import UserHeader3 from "./../component/user/UserHeader3";
import RatingStars from "./../component/user/RatingStar";
const Homepage = (props) => {
  const { products, setProducts } = props;

  return (
    <div>
      <UserHeader3 />
      <div className="h-800 max-w-screen-xl mx-auto px-8">
        <div>
          <h1>Homepage content will display here</h1>
          <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-black   rounded-sm shadow-md"
              >
                <div className="relative">
  {product.status && (
    <h1 className="absolute top-1 left-1 bg-black text-white px-2 py-0.2 rounded-sm text-[10px] uppercase font-semibold">
      {product.status}
    </h1>
  )}
  <h1 
    className={`absolute left-1 bg-black text-white px-2 py-0.2 rounded-sm text-[10px] uppercase font-semibold ${product.status ? 'top-5.5' : 'top-1'}`}
  >
    {product.productLine}
  </h1>
</div>

                 <div>
                 <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-auto h-auto object-cover px-2 py-2 rounded-md"
                  />
                 </div>

              <div className="px-2 py-1">
              <h2 className="font-semibold text-md">{product.name}</h2>
                <p className="text-sm text-black min-h-[2rem]">{product.content}</p>
                <div className="py-1">
                  <span className="text-black font-semibold">{`$${product.priceAfterDiscount.toFixed(
                    2
                  )}`}</span>
                </div>
                <div className="flex gap-2">
                  <RatingStars rating={product.rating} />
                  ({product.ratingCount})
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
