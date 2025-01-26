import React, { useEffect, useState } from 'react'
import UserHeader3 from './../component/user/UserHeader3';

const Homepage = (props) => {
  const {products, setProducts} = props;


  return (
    <div className='h-800'>
      <UserHeader3 />
      <div>
        <h1>Homepage</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.thumbnail} alt={product.name} className="w-auto h-auto object-cover rounded-md mb-4" />
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="mt-2">
                <span className="text-green-600 font-semibold">{`$${product.priceAfterDiscount}`}</span>
                <span className="line-through text-gray-400 ml-2">{`$${product.oldPrice}`}</span>
              </div>
              <div className="mt-2">
                <span className="text-black">{`⭐ ${product.rating} (${product.ratingCount} )`}</span>
                <span className="text-red-500 ml-2">-{`${product.discount}`}</span>
              </div>
              <div className="mt-2">
                <span className="text-sm">{`Category: ${product.category}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Homepage
