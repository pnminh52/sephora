import React from "react";
import UserHeader3 from "./../component/user/UserHeader3";
import ChosenProduct from './../component/user/ChosenProduct';
const Homepage = ({ products }) => {
  return (
    <div>
      <div className="h-1000 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <ChosenProduct products={products} />
        </div>
      </div>
    </div>
  );
};



export default Homepage;
