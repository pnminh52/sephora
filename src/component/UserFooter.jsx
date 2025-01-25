import React from "react";

const UserFooter = () => {
  return (
    <div className="bg-black w-full">
      <div className="h-10 bg-[#CCCCCC] flex items-center justify-center">
        <h1 className="font-semibold hover:underline cursor-pointer text-md">
          Website feedback? Let us know ▸
        </h1>
      </div>
      <div className="bg-black max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
       <div className=" flex py-8 border-b border-gray-100 flex-col sm:flex-row justify-between  space-y-4 sm:space-y-0 sm:space-x-4">
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
              <p className="text-white text-sm">Choose Your Store</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              {" "}
              <svg width="24" height="24" fill="#fff" class="">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12"
                    stroke=""
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
              <p className="text-white text-sm">Chat is unavailable</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2 ">
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
                <p className="text-white text-sm">Download Now</p>
              </div>
            </div>
          </div>
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
              <p className="text-white text-sm">Sign up Now</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
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
              <p className="text-white text-sm">
                Want 25% off your Sephora purchase? <span className="underline cursor-pointer">DETAILS</span>
              </p>
            </div>
          </div>
        </div>
       </div>
       <div className="py-8">
        <h1 className="text-white">text</h1>
       </div>
        
      </div>
  );
};

export default UserFooter;
