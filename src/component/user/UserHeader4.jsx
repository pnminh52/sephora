import React from 'react'

const UserHeader4 = () => {
  return (
    <div className='hidden sm:block'>
       <div className="bg-black h-10 relative hidden sm:block">
        <div className="bg-black h-10 hidden sm:block mx-auto px-8 max-w-screen-xl">
          <ul className="flex justify-between items-center h-full">
            <li className="relative group text-white">
              <a href="#" className="inline-block">
                New
              </a>
              <div className="absolute left-0 top-full mt-2 w-screen bg-white shadow-lg rounded-lg p-3 hidden group-hover:block">
                <p className="text-black text-sm">New Arrivals</p>
                <p className="text-black text-sm">Trending</p>
              </div>
            </li>

            <li className="text-white">
              <a href="" className="inline-block">
                Brands
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Makeup
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Skincare
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Hair
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Fragrance
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Tools & Brushes
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Bath & Body
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Mini Size
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Beauty Under $20
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Gifts & Gift Cards
              </a>
            </li>
            <li className="text-white">
              <a href="" className="inline-block">
                Sale & Offers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserHeader4
