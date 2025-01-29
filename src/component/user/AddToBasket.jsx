import React, { useState } from "react";

const AddToBasket = () => {
  const [quantity, setQuantity] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const toggleDropdown = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="block sm:hidden z-50 fixed bottom-17 bg-white w-full h-16 flex items-center sm:border-b-0">
      <div className="relative bg-[#CF112C] hover:bg-red-600 transition ease-in-out cursor-pointer px-4 py-2 mx-4 w-full text-white flex justify-center items-center rounded-full">
        {/* Dropdown chọn số lượng */}
        <div className="absolute left-0 border-r px-3 h-full border-white flex justify-center items-center ">
          <select
            className="appearance-none  bg-transparent font-thin text-white cursor-pointer outline-none"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {[...Array(10)].map((_, index) => (
              <option
                key={index + 1}
                value={index + 1}
                className=" text-black text-center "
              >
                {index + 1}
              </option>
            ))}
          </select>
          <svg
          onClick={toggleDropdown}
            viewBox="0 0 1024 1024"
            className="w-4 h-4 rotate-270 "
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#fff"
                d="M609.408 149.376L277.76 489.6a32 32 0 000 44.672l331.648 340.352a29.12 29.12 0 0041.728 0 30.592 30.592 0 000-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 000-42.688 29.12 29.12 0 00-41.728 0z"
              ></path>
            </g>
          </svg>
        </div>

        {/* Nút Add to Basket */}
        <button className="cursor-pointer text-xs font-semibold">
          Add to Basket
          <p className="cursor-pointer text-xs font-normal">Get It Shipped</p>
        </button>
      </div>
    </div>
  );
};

export default AddToBasket;
