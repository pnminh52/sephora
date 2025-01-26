import React, { useState } from "react";

const UserFooter = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <footer className="bg-black w-full " id="footer">
      <div className="h-10 bg-[#CCCCCC] flex items-center justify-center">
        <h1 className="font-semibold hover:underline cursor-pointer text-md">
          Website feedback? Let us know ▸
        </h1>
      </div>
      <div className="bg-black max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 py-8 border-b border-gray-100 gap-4">
          {/* Find a Store */}
          <div className="flex items-center gap-2">
            <div>
              <img
                className="cursor-pointer"
                src="https://www.sephora.com/img/ufe/icons/find-store.svg"
                alt=""
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm hover:underline cursor-pointer">
                Find a Store
              </p>
              <p className="text-white text-xs">Choose Your Store</p>
            </div>
          </div>

          {/* Customer Service */}
          <div className="flex items-center gap-2">
            <div>
              <svg width="24" height="24" fill="#fff">
                <g fill="none" >
                  <path
                    d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12"
                    stroke=""
                
                  ></path>
                  <path
                    d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                    fill="#fff"
                  ></path>
                  <path
                    fill="#fff"
                    d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm hover:underline cursor-pointer">
                Customer Service
              </p>
              <p className="text-white text-xs">Chat is unavailable</p>
            </div>
          </div>

          {/* Get the App */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://www.sephora.com/img/ufe/icons/app.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm hover:underline cursor-pointer">
                  Get the App
                </p>
                <p className="text-white text-xs">Download Now</p>
              </div>
            </div>
          </div>

          {/* Text Alerts */}
          <div className="flex items-center gap-2">
            <div>
              <img
                src="https://www.sephora.com/img/ufe/icons/sms-ko.svg"
                alt=""
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm hover:underline cursor-pointer">
                Get Sephora Text Alerts
              </p>
              <p className="text-white text-xs">Sign up Now</p>
            </div>
          </div>

          {/* Credit Card Program */}
          <div className="flex items-center gap-2 col-span-1 lg:col-span-2">
            <div>
              <img
                src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg"
                alt=""
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm hover:underline cursor-pointer">
                Sephora Credit Card Program
              </p>
              <p className="text-white text-xs">
                Want 25% off your Sephora purchase?{" "}
                <span className="underline cursor-pointer text-xs">
                  DETAILS
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="bg-black max-w-screen-2xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 py-8 border-b border-gray-100 gap-4">
            <div>
              <ul className="space-y-4">
                <li className="text-white font-semibold cursor-pointer text-md">
                  <a href="">About Sephora</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">About Sephora</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Newsroom</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Careers</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Sephora Values</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Supply Chain Transparency</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Affiliates</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Sephora Events</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Gift Cards</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Sephora Global Sites</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Diversity, Equity & Inclusion</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Sephora Accelerate</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Beauty (Re)Purposed</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Report a Vulnerability</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-white font-semibold cursor-pointer text-md">
                  <a href="">My Sephora</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Beauty Insider</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Sephora Credit Card</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Community Profile</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Order Status</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Purchase History</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Account Settings</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Beauty Advisor Recommendations</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Auto-Replenishment</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Beauty Offers</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Buying Guides</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Rewards Bazaar</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Loves</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Book a Reservation</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-white font-semibold cursor-pointer text-md">
                  <a href="">Help</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Customer Service</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Returns & Exchanges</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Delivery and Pickup Options</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Shipping</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Billing</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">International Shipments</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Beauty Services FAQ</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Sephora at Kohl's</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Sephora at Hearst</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Store Locations</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Online Ordering</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Flexible Payments</a>
                </li>
                <li className="text-white text-xs cursor-pointer hover:underline">
                  <a href="">Accessibility</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-white font-semibold cursor-pointer text-md">
                  <a href="">Region & Language</a>
                </li>
                <li className="text-white text-xs cursor-pointer flex gap-2 items-center">
                  <img
                    className="h-auto w-6"
                    src="https://www.sephora.com/img/ufe/flags/us.svg"
                    alt=""
                  />
                  <a href="">United States - English</a>
                </li>
                <li className="text-white text-xs cursor-pointer flex items-center gap-2">
                  <img
                    className="h-auto w-6"
                    src="https://www.sephora.com/img/ufe/flags/ca.svg"
                    alt=""
                  />
                  <a href="">Canada - English</a>
                </li>
                <li className="text-white text-xs cursor-pointer flex items-center gap-2">
                  <img
                    className="h-auto w-6"
                    src="https://www.sephora.com/img/ufe/flags/ca.svg"
                    alt=""
                  />
                  <a href="">Canada - Français</a>
                </li>
              </ul>
            </div>

            <div className="flex col-span-2 flex-col justify-between h-full">
              <div>
                <h1
                  className="text-white text-4xl font-normal"
                  style={{ fontFamily: "'Prata', serif" }}
                >
                  We Belong to
                </h1>
                <h1
                  className="text-white text-4xl font-normal font-lora"
                  style={{ fontFamily: "'Prata', serif" }}
                >
                  Something Beautiful
                </h1>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-white">
                  Sign up for Sephora Emails
                </h1>
                <div className="flex  gap-4">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className=" text-sm px-4 w-[250px] bg-white rounded-sm"
                  />
                  <button className=" cursor-pointer px-6 py-2 rounded-full text-white bg-black border-[2px] border-white">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="container flex max-w-screen-2xl justify-between py-8  ">
            <div>
              <h1 className="text-white text-xs">
                © 2025 Sephora USA, Inc. All rights reserved.
              </h1>
              <div>
                <ul className="text-white flex gap-2 items-center">
                  <li className=" text-xs  hover:underline">
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Terms of Use</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Accessibility</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Sitemap</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Your Privacy Choices</a>
                  </li>
                  <li>
                    <img
                      className="w-7 h-7"
                      src="https://www.sephora.com/img/ufe/icons/opt-out.svg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-white flex gap-2 text-xs ">
                  <li className="hover:underline">
                    <a href="">1-877-737-4672</a>
                  </li>
                  <li className="hover:underline">
                    <a href="">TTY: 1-888-866-9845</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/x-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className=" bg-black ">
          <div className="mx-4 py-6  border-b border-gray-300">
            <div
              onClick={() => setIsOpen1(!isOpen1)}
              className="text-white font-semibold cursor-pointer text-md flex items-center justify-between"
            >
              <span className="hover:underline">About Sephora</span>
              <span className="text-white">
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${
                    isOpen1 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>

            {isOpen1 && (
              <ul className="mt-4 space-y-4">
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">About Sephora</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Newsroom</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Careers</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Sephora Values</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Supply Chain Transparency</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Affiliates</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Sephora Events</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Gift Cards</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Sephora Global Sites</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Diversity, Equity & Inclusion</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Sephora Accelerate</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Beauty (Re)Purposed</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Report a Vulnerability</a>
                </li>
              </ul>
            )}
          </div>
          <div className="mx-4 py-6  border-b border-gray-300">
            <div
              onClick={() => setIsOpen2(!isOpen2)}
              className="text-white font-semibold cursor-pointer text-md flex items-center justify-between"
            >
              <span className="hover:underline">My Sephora</span>
              <span className="text-white">
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${
                    isOpen2 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>

            {isOpen2 && (
              <ul className="mt-4 space-y-4">
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Beauty Insider</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Sephora Credit Card</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Community Profile</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Order Status</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Purchase History</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Account Settings</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Beauty Advisor Recommendations</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Auto-Replenishment</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Beauty Offers</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Buying Guides</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Rewards Bazaar</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Loves</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Book a Reservation</a>
                </li>
              </ul>
            )}
          </div>
          <div className="mx-4 py-6  border-b border-gray-300">
            <div
              onClick={() => setIsOpen3(!isOpen3)}
              className="text-white font-semibold cursor-pointer text-md flex items-center justify-between"
            >
              <span className="hover:underline">Help</span>
              <span className="text-white">
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${
                    isOpen3 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>

            {isOpen3 && (
              <ul className="mt-4 space-y-4">
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Customer Service</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Returns & Exchanges</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Delivery and Pickup Options</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Shipping</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Billing</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">International Shipments</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Beauty Services FAQ</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Sephora at Kohl's</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Sephora at Hearst</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Store Locations</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Online Ordering</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Flexible Payments</a>
                </li>
                <li className="text-white text-xs hover:underline cursor-pointer">
                  <a href="">Accessibility</a>
                </li>
              </ul>
            )}
          </div>
          <div className="mx-4 py-6 border-b border-gray-300">
            <ul className="space-y-4">
              <li className="text-white font-semibold cursor-pointer text-md">
                <a href="">Region & Language</a>
              </li>
              <li className="text-white text-xs cursor-pointer flex gap-2 items-center">
                <img
                  className="h-auto w-6"
                  src="https://www.sephora.com/img/ufe/flags/us.svg"
                  alt=""
                />
                <a href="" className="text-xs hover:underline">
                  United States - English
                </a>
              </li>
              <li className="text-white text-xs cursor-pointer flex items-center gap-2">
                <img
                  className="h-auto w-6"
                  src="https://www.sephora.com/img/ufe/flags/ca.svg"
                  alt=""
                />
                <a href="" className="text-xs hover:underline">
                  Canada - English
                </a>
              </li>
              <li className="text-white text-xs cursor-pointer flex items-center gap-2">
                <img
                  className="h-auto w-6"
                  src="https://www.sephora.com/img/ufe/flags/ca.svg"
                  alt=""
                />
                <a href="" className="text-xs hover:underline">
                  Canada - Français
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-4 py-6 border-b border-gray-300 space-y-5">
            <div>
              <h1
                className="text-white text-2xl font-normal"
                style={{ fontFamily: "'Prata', serif" }}
              >
                We Belong to
              </h1>
              <h1
                className="text-white text-2xl font-normal font-lora"
                style={{ fontFamily: "'Prata', serif" }}
              >
                Something Beautiful
              </h1>
            </div>

            <div className="space-y-3">
              <h1 className="font-semibold text-white">
                Sign up for Sephora Emails
              </h1>
              <div className="flex  gap-4">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className=" text-sm px-4 w-[250px] bg-white rounded-sm"
                />
                <button className="font-semibold cursor-pointer px-6 py-2 rounded-full text-white bg-black border-[2px] border-white">
                  Sign Up
                </button>
              </div>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/x-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-4 py-6 border-b border-gray-300 space-y-4">
            <div>
              <h1 className="text-white font-semibold">
                Download the Sephora App
              </h1>
            </div>
            <div className="flex gap-4">
              <img
                src="https://www.sephora.com/img/ufe/badge-app-store.svg"
                alt=""
              />
              <img
                src="https://www.sephora.com/img/ufe/badge-google-play.svg"
                alt=""
              />
            </div>
          </div>
          <div className="mx-4 py-6  ">
            <div>
              <h1 className="text-white text-xs">
                © 2025 Sephora USA, Inc. All rights reserved.
              </h1>
              <div>
                <ul className="text-white flex gap-2 items-center">
                  <li className=" text-xs  hover:underline">
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Terms of Use</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Accessibility</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Sitemap</a>
                  </li>
                  <li className=" text-xs  hover:underline">
                    <a href="">Your Privacy Choices</a>
                  </li>
                  <li>
                    <img
                      className="w-7 h-7"
                      src="https://www.sephora.com/img/ufe/icons/opt-out.svg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-white flex gap-2 text-xs ">
                  <li className="hover:underline">
                    <a href="">1-877-737-4672</a>
                  </li>
                  <li className="hover:underline">
                    <a href="">TTY: 1-888-866-9845</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-black h-30"></div>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
