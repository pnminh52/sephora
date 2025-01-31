import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserHeader2 = () => {
  return (
    <div>
      <div className="bg-white max-w-screen-xl border-b sm:border-b-0 border-gray-300  mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-14 sm:h-14 lg:h-22   items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to={`/`}>
              <svg
                viewBox="0 0 125 17"
                width="120"
                height="17"
                data-at="sephora_logo_ref"
                className="css-6e8frj e15t7owz0"
                data-comp="BaseComponent"
              >
                <path
                  fillRule="evenodd"
                  d="M8.94 1.645s-.05.142-.747 2.032c-1.992-1.586-5.33-1.47-5.33.97 0 2.861 6.972 2.502 6.755 7.61C9.445 16.36 4.395 17.302.5 15.326c.34-.723.694-1.42.936-1.99 2.945 1.741 5.481.943 5.898-.458C8.473 9.044.53 10.228.53 4.793c0-2.286 2.647-5.84 8.41-3.148ZM16.465 1.33h9.124s-.027.822-.01 1.991H18.75v4.082h4.844c-.017.814-.008 1.453-.008 1.873H18.75v5.088h6.83a104.28 104.28 0 0 0 0 1.954h-9.106L16.465 1.33ZM38.195 8.675c-.55 0-.958-.006-1.516-.009 0-2.796.005-5.41.005-5.41s.666-.003 1.295-.003c.602 0 4.106-.273 4.22 2.523.11 2.757-2.648 2.9-4.004 2.9Zm.136-7.316c-.81-.02-2.501-.029-3.945-.029l.005 14.988h2.296s-.007-2.861-.008-5.682c.569-.01 1.75-.041 2.705-.068 1.323-.04 4.8-.701 4.776-4.811-.027-4.62-5.025-4.38-5.83-4.398ZM97.183 8.268c-.536 0-.923-.01-1.466-.014.002-2.632.008-5.058.008-5.058s.628-.009 1.236-.009c.58 0 3.685-.175 3.948 2.267.312 2.885-3.092 2.814-3.726 2.814Zm5.053 8.05h2.854l-4.737-6.725c1.275-.469 2.753-1.557 2.566-4.043-.334-4.454-4.686-4.124-5.618-4.167-.785-.037-2.475-.059-3.94-.052v14.987h2.364s-.007-3.354-.009-6.318c.784.003 1.064-.011 2.246-.042l4.274 6.36ZM61.063 6.976V1.33h2.321v14.336h-2.322V8.851l-7.738.01v6.805h-2.321V1.33h2.32v5.646h7.74ZM79.167.68c-4.823 0-7.963 3.501-7.963 7.82 0 4.319 3.14 7.82 7.963 7.82s7.962-3.501 7.962-7.82c0-4.319-3.14-7.82-7.962-7.82Zm0 2.128c-3.536 0-5.544 2.548-5.544 5.691 0 3.144 1.988 5.692 5.544 5.692 3.555 0 5.543-2.548 5.543-5.692 0-3.143-2.008-5.691-5.543-5.691Zm36.209 7.99 4.935-.03-2.507-7.306h-.033l-2.395 7.336Zm1.084-9.688h2.745l5.435 14.855-2.43-.006s-.537-1.499-1.253-3.484l-6.13.038s-.246.764-.977 3.447h-2.343l4.953-14.85Z"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="relative mr-4 ml-4">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            >
              <path d="M9 0a9 9 0 019 9c0 2.215-.8 4.243-2.127 5.81l7.906 7.909h.002a.752.752 0 010 1.062.752.752 0 01-1.062 0l-7.907-7.909A8.964 8.964 0 019 18a9 9 0 01-9-9 9 9 0 019-9zm0 1.5A7.499 7.499 0 001.5 9c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5S13.143 1.5 9 1.5z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:w-72 md:w-100 lg:w-110 pl-10 px-8 py-1 border border-black rounded-full bg-[#F6F6F8]" // Adjusted widths for different breakpoints
            />
          </div>

          <div className="flex gap-4 items-center">
           
            <div className="relative">
  <div className="hidden sm:flex items-center gap-x-3">
    <div className="relative sm:flex items-center gap-x-3 group">
      <div>
        <svg viewBox="0 0 24 24" className="cursor-pointer w-7 h-7">
          <g>
            <path d="M1.5 24a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-21zM22 23V4H2v19h20z"></path>
            <path d="M0 23h24v1H0z"></path>
            <path d="M7.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-9zm8.5-1v-9H8v9h8z"></path>
            <path d="M11.5 13h1v11h-1zM1 6V5h22v1zm0 2V7h22v1zm0 2V9h22v1z"></path>
          </g>
        </svg>
      </div>

      <div className="border-b-2 py-2 transition ease-in-out duration-300  hover:border-black border-white">
        <h1 className="cursor-pointer text-sm">Stores & Services</h1>
        <p className="cursor-pointer text-xs text-gray-600">Choose Your Store</p>
      </div>

      <div className="group-hover:block hidden absolute z-50 left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-lg w-90 shadow-[0px_0px_3px_3px_rgba(0,0,0,0.1)]">
        <div className="flex py-6 items-center justify-center">
          <button className="cursor-pointer px-4 py-2 text-white bg-black text-center rounded-full text-xs font-semibold">
            Choose Your Store
          </button>
        </div>
        <div className="h-2.5 bg-gray-100"></div>
        <div className="flex px-4 gap-1 py-3 items-center cursor-pointer">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <g transform="translate(6 4)" stroke="currentColor">
                <path d="M6 0C2.683 0 0 2.504 0 5.6 0 9.8 6 16 6 16s6-6.2 6-10.4C12 2.504 9.317 0 6 0h0z"></path>
                <circle strokeWidth=".8" cx="6" cy="6" r="2.222"></circle>
              </g>
            </g>
          </svg>
          <p className="font-semibold text-sm">Find a Sephora</p>
        </div>
        <div className="h-2.5 bg-gray-100"></div>
        <div className="flex gap-4 p-4 border-b border-gray-200">
          <img className="cursor-pointer" src="https://www.sephora.com/contentimages/happening/flyoutmenu_makeup.svg" alt="" />
          <div>
            <h1 className="text-sm cursor-pointer">Makeup Services</h1>
            <p className="text-xs text-gray-600 cursor-pointer">One-on-one makeup application or beauty lesson</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 border-b border-gray-200">
          <img className="cursor-pointer" src="https://www.sephora.com/contentimages/happening/flyoutmenu_waxing.svg" alt="" />
          <div>
            <h1 className="text-sm cursor-pointer">Waxing Services</h1>
            <p className="text-xs text-gray-600 cursor-pointer">Expert grooming for brows, upper lip, or chin</p>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <img className="cursor-pointer" src="https://www.sephora.com/contentimages/happening/flyoutmenu_events.svg" alt="" />
          <div>
            <h1 className="text-sm cursor-pointer">Events</h1>
            <p className="text-xs text-gray-600 cursor-pointer">Learn about brands, try new products, and more at our in-store events</p>
          </div>
        </div>
        <div className="h-2.5 bg-gray-100"></div>
        <div className="py-3 flex gap-3 p-4 items-center">
          <a className="text-blue-600 hover:underline cursor-pointer" href="">My Reservations</a> | 
          <a className="text-blue-600 hover:underline cursor-pointer" href="">Beauty Service FAQs</a>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="hidden sm:flex items-center gap-x-3 px-4">
              <div>
                <svg viewBox="0 0 24 24" className=" cursor-pointer w-7 h-7">
                  <path d="M3.5 3.914H3v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1H2v.5a.5.5 0 1 0 1 0v-.5h.5a.5.5 0 0 0 0-1m5.707 1.5.354-.354a.5.5 0 0 0-.708-.707l-.353.354-.354-.354a.5.5 0 0 0-.707.707l.354.354-.354.354a.5.5 0 0 0 .707.707L8.5 6.12l.353.354a.5.5 0 1 0 .708-.707l-.354-.354v.001Zm-3.639-2.5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 0 1 0 1m16 5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 1 1 0 1M4 22.364c0-.17.013-.334.025-.5H1.038c.275-1.764 2.014-2.695 3.952-2.933.239-.381.515-.738.825-1.061C2.891 17.926 0 19.32 0 22.364a.5.5 0 0 0 .5.5h3.592c-.06-.16-.09-.33-.092-.5m15-10.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m-14-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m13.185 1.006c.31.323.586.68.825 1.062 1.939.237 3.676 1.168 3.95 2.932h-2.985c.013.166.025.33.025.5 0 .176-.036.343-.091.5h3.59c.277 0 .5-.223.5-.5 0-3.044-2.89-4.438-5.814-4.494M6.027 22h11.878c-.25-2.247-2.16-4-4.473-4H10.5a4.507 4.507 0 0 0-4.473 4m12.405 1H5.5a.5.5 0 0 1-.5-.5c0-3.033 2.467-5.5 5.5-5.5h2.932c3.033 0 5.5 2.467 5.5 5.5a.5.5 0 0 1-.5.5m-6.499-13c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m4.191-13c-.308 0-.585.118-.725.258a.876.876 0 0 0-.313.645c-.021.345.104.714.31.92.455.562 1.336 1.346 2.082 1.955.475-.388 1.542-1.284 2.045-1.914a1.29 1.29 0 0 0 .349-.96c-.009-.154-.056-.437-.271-.608a.409.409 0 0 1-.044-.039c-.168-.169-.54-.308-.925-.239a.917.917 0 0 0-.701.532c-.164.351-.741.351-.905 0a.915.915 0 0 0-.7-.532A1.076 1.076 0 0 0 16.124 2Zm1.355 4.866a.689.689 0 0 1-.434-.153c-.401-.32-1.753-1.426-2.393-2.224-.371-.368-.601-1.013-.564-1.644.032-.553.262-1.027.647-1.332.388-.394 1.097-.597 1.763-.48.381.066.714.228.98.471a1.94 1.94 0 0 1 .982-.472c.66-.114 1.352.081 1.784.5.373.305.595.771.626 1.314.036.631-.194 1.276-.602 1.684-.607.762-1.956 1.864-2.354 2.182a.697.697 0 0 1-.435.154Z"></path>
                </svg>
              </div>

              <div>
                <h1 className="text-sm font- normal cursor-pointer ">
                  Community
                </h1>
              </div>
            </div>
            <div className=" hidden cursor-pointer  sm:flex items-center gap-x-3 border-l border-gray-200  px-4">
              <div>
                <img
                  src="https://www.sephora.com/img/ufe/icons/me32.svg"
                  role="presentation"
                  alt=""
                  className="w-8 h-8"
                  data-comp="Avatar Image StyledComponent BaseComponent "
                />
              </div>

              <div>
                <h1 className=" cursor-pointer text-sm font-semibold">
                  Sign In
                </h1>
                <p className=" cursor-pointer text-xs text-gray-600">
                  for FREE Shipping 🚚
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 items-center">
            <div className="relative cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700">
                <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path>
              </svg>
              <div className="absolute bottom-3.5 text-white left-4.5 text-xs w-4 h-4 bg-[#D0142F] flex items-center justify-center rounded-full ">
                0
              </div>
            </div>

            <svg
              viewBox="0 0 24 24"
              className="cursor-pointer w-6 h-6 text-gray-700"
            >
              <path d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader2;
