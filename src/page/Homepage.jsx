import React from "react";
import UserHeader3 from "./../component/user/UserHeader3";
import ChosenProduct from './../component/user/ChosenProduct';
const Homepage = ({ products }) => {
  return (
    <div>
      <UserHeader3 />
      <div className="h-800 max-w-screen-xl mx-auto px-8">
        <div>
          <h1>Homepage content will display here</h1>
          <ChosenProduct products={products} />
        </div>
      </div>
    </div>
  );
};



export default Homepage;
