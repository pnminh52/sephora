import React from "react";

const UserHeader3 = () => {
  return (
    <div className="block sm:hidden">
      <div className=" bg-white mx-auto px-4 max-w-screen-xl sm:hidden py-2 border-b border-gray-200 container flex justify-between items-center">
        <div>
          <h1 className="text-sm font-semibold">
            Sign In for FREE Shipping 🚚
          </h1>
          <p className="text-sm">
            Dont't have an account?{" "}
            <a className="text-sm text-blue-500 underline" href="">
              Create an account
            </a>
          </p>
        </div>
        <div>
          <button className="hover:bg-gray-500 transition ease-in-out cursor-pointer px-8 py-1.5 text-sm rounded-full font-semibold bg-black text-white">
            Sign In
          </button>
        </div>
      </div>
      <div
        className=" block bg-white sm:hidden py-2 border-b border-gray-200 w-full overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-thin"
        onWheel={(e) => handleShiftScroll(e)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          New
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Brands
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Makeup
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Skincare
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Hair
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Fragrance
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Tools & Brushes
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Bath & Body
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Mini Size
        </div>
        <div
          className="transition hover:text-gray-500 ease-in-out cursor-pointer mx-1 text-xs inline-block bg-white shadow-md px-3 py-1.5 rounded-sm"
          style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Gifts & Gift Cards
        </div>
      </div>

     
    </div>
  );
};

export default UserHeader3;
