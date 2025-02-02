import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ products }) => { 
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="overflow-x-auto"  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <div className="grid grid-cols-6 gap-4 min-w-[1200px] w-max mx-auto px-4"
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div 
              className="border border-red-600 p-2 rounded-lg cursor-pointer hover:shadow-lg transition duration-300"
              key={product.id} 
              onClick={() => handleProductClick(product.id)}
            >
              <img className="w-full h-40 object-cover rounded" src={product.thumbnail} alt={product.name} />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-red-500 font-bold">{product.priceAfterDiscount}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products available.</p>  
        )}
      </div>
    </div>
  );
};

export default ProductCard;
