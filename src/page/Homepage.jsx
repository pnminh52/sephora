import React from "react";
import UserHeader3 from "./../component/user/UserHeader3";
import SliderImage from './../component/user/SliderImage';
import ProductCard from './../component/user/ProductCard';

const Homepage = ({products }) => {
  return (
    <div className="h-800">
      <UserHeader3 />
      <SliderImage />
      <div className="sm:px-6 lg:px-8 mx-auto px-4 max-w-screen-xl mt-6 mb-4 flex justify-between">
        <h1 className="font-semibold text-lg sm:text-md">Chosen For You</h1>
        <a href="" className="text-blue-600 hover:underline">Show more</a>
      </div>
      <ProductCard products={products} />
    </div>
  );
};

export default Homepage;
