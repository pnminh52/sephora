import React, { useState } from "react";

const AddToBasket = () => {
    return (
    <div className="block sm:hidden z-50 fixed bottom-17 bg-white w-full h-16 flex items-center">
        <div className="relative bg-[#CF112C] h-12 hover:bg-red-700 transition ease-in-out cursor-pointer px-4 py-2 mx-4 w-full text-white flex justify-center items-center rounded-full">
        <button className="cursor-pointer text-sm font-semibold">
            Add to Basket
            <p className="cursor-pointer text-xs font-normal">Get It Shipped</p>
        </button>
        </div>
    </div>
    );
};

export default AddToBasket;
