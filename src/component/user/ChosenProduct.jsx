import { useState } from "react";
import RatingStars from "./RatingStar";
const ChosenProduct = ({ products }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerSlide = 6;
    const totalSlides= Math.ceil(products.length / itemsPerSlide);
    const startIndex = currentSlide * itemsPerSlide;
    const visibleProducts = products.slice(startIndex, startIndex + itemsPerSlide);
    const handleNext=()=>{
        if(currentSlide < totalSlides - 1){
            setCurrentSlide(currentSlide + 1);
        }
    }
    const handlePrev=()=>{
        if(currentSlide > 0){
            setCurrentSlide(currentSlide - 1);
        }
    }
    return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-2">
        {visibleProducts.map((product) => (
          <div key={product.id} className="bg-white py-1 rounded-sm shadow-lg">
            <div className="relative">
              {product.status && (
                <h1 className="absolute top-0 left-1 bg-black text-white px-2 rounded-sm text-[10px] uppercase font-semibold">
                  {product.status}
                </h1>
              )}
              <h1
                className={`absolute left-1 bg-black text-white px-2 rounded-sm text-[10px] uppercase font-semibold ${
                  product.status ? "top-4.5" : "top-1"
                }`}
              >
                {product.productLine}
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-auto h-auto object-cover py-2 px-2"
              />
            </div>
            <div className="px-2">
            <h2 className="font-semibold text-md">{product.name}</h2>
            <p className="text-sm text-black min-h-[2rem]">
                {product.content}
            </p>
            <div className="">
                <span className="text-black font-semibold">{`$${product.priceAfterDiscount.toFixed(
                2
                )}`}</span>
            </div>
            <div className="flex gap-2 text-sm">
                <RatingStars rating={product.rating} />
                {product.ratingCount}
            </div>
            </div>
        </div>
        ))}
    </div>
    <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg shadow disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg shadow disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
    );
};

export default ChosenProduct;
