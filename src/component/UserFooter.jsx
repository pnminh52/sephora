import React from "react";

const UserFooter = () => {
  return (
    <div className="bg-black w-full">
      <div className="h-10 bg-[#CCCCCC] flex items-center justify-center">
        <h1 className="font-semibold hover:underline cursor-pointer text-md">
          Website feedback? Let us know ▸
        </h1>
      </div>
      <div className="bg-black max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 py-8 border-b border-gray-100 gap-4">
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

    <div className="flex items-center gap-2">
      <div>
        <svg width="24" height="24" fill="#fff">
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
        <p className="text-white text-xs">Chat is unavailable</p>
      </div>
    </div>

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

    <div className="flex items-center gap-2 col-span-2">
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
          <span className="underline cursor-pointer text-xs">DETAILS</span>
        </p>
      </div>
    </div>
  </div>
</div>



      <div className="bg-black max-w-screen-xl mx-auto px-4  sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 py-8 border-b border-gray-100 gap-4">
    <div>
      <ul className="space-y-4">
        <li className="text-white font-semibold cursor-pointer text-md">
          <a href="">About Sephora</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Newsroom</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Careers</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Sephora Values</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Supply Chain Transparency</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Affiliates</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Sephora Events</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Gift Cards</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Sephora Global Sites</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Diversity, Equity & Inclusion</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Sephora Accelerate</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Beauty (Re)Purposed</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Report a Vulnerability</a>
        </li>
      </ul>
    </div>

    <div>
      <ul className="space-y-4">
        <li className="text-white font-semibold cursor-pointer text-md">
          <a href="">My Sephora</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Beauty Insider</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Sephora Credit Card</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Community Profile</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Order Status</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Purchase History</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Account Settings</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Beauty Advisor</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Auto-Replenishment</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Beauty Offers</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Buying Guides</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Rewards Bazaar</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Loves</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Book a Reservation</a>
        </li>
      </ul>
    </div>

    <div>
      <ul className="space-y-4">
        <li className="text-white font-semibold cursor-pointer text-md">
          <a href="">Help</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Customer Service</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Returns & Exchanges</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Delivery and Pickup Options</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Shipping</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Billing</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">International Shipments</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Beauty Services FAQ</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Sephora at Kohl's</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Sephora at Hearst</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Store Locations</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Online Ordering</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Flexible Payments</a>
        </li>
        <li className="text-white text-sm cursor-pointer">
          <a href="">Accessibility</a>
        </li>
      </ul>
    </div>

    <div>
      <ul className="space-y-4">
        <li className="text-white font-semibold cursor-pointer text-md">
          <a href="">Region & Language</a>
        </li>
        <li className="text-white text-sm cursor-pointer flex gap-2 items-center">
          <img className="h-auto w-6" src="https://www.sephora.com/img/ufe/flags/us.svg" alt="" />
          <a href="">Customer Service</a>
        </li>
        <li className="text-white text-sm cursor-pointer flex items-center gap-2">
          <img className="h-auto w-6" src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="" />
          <a href="">Returns & Exchanges</a>
        </li>
        <li className="text-white text-sm cursor-pointer flex items-center gap-2">
          <img className="h-auto w-6" src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="" />
          <a href="">Delivery and Pickup Options</a>
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
    <h1 className="font-semibold text-white">Sign up for Sephora Emails</h1>
<div className="flex justify-between gap-2">
<input type="text" placeholder="Enter your email address" className="w-60 text-sm h-10 bg-white rounded-sm" />
<button className="w-30 rounded-full text-white bg-black border-[2px] border-white">Sign Up</button>
</div>
  </div>
</div>

  </div>
</div>
<div className="h-10"></div>

    </div>
  );
};

export default UserFooter;
