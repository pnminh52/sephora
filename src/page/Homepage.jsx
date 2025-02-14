import React from "react";
import UserHeader3 from "./../component/user/UserHeader3";
import SliderImage from './../component/user/SliderImage';
import ChosenForYou from '../component/user/ChosenForYou';
import NewArrivals from "../component/user/NewArrivals";

const Homepage = ({products }) => {
  return (
    <div className="h-800">
      <UserHeader3 />
      <SliderImage />
      <div className=" mt-6 mb-2 bg-white flex  max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-xl sm:text-md">Chosen For You</h1>
      </div>
      <ChosenForYou products={products} />
      <div className=" mt-6 mb-2 bg-white flex justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-xl sm:text-md">New Arrivals</h1>
        <a href="" className="text-blue-600 hover:underline">Show more</a>
      </div>
      <NewArrivals products={products} />

    </div>
  );
};

export default Homepage;
