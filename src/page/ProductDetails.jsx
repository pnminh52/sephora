import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToBasket from "./../component/user/AddToBasket";
import UserHeader3 from "../component/user/UserHeader3";
const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    setProduct(foundProduct);
  }, [id, products]);
  if (!product) {
    return (
      <div>
        <h1>Not found</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="hidden sm:block">
        <UserHeader3 />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex text-sm text-gray-600 py-2 sm:py-4 ">
          <p className=" cursor-pointer">{product.category}</p>
          <p className=" before:content-['›'] before:mx-1.5 cursor-pointer">
            {product.position}
          </p>
          <p className=" before:content-['›'] before:mx-1.5 cursor-pointer">
            {product.department}
          </p>
        </div>
        <div className="flex w-full justify-between bg-[#A76640] ">
          <div className="text-white flex items-center ml-4 mr-4  w-1/2  ">
            <div>
              <p className="text-xs cursor-pointer font-semibold">
                Try Complexion Picks at Home
              </p>
              <p className="text-xs cursor-pointer font-normal">
                Get a foundation and concealer sample set.{" "}
                <strong> SHOP NOW▸</strong>
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="https://www.sephora.com/contentimages/ppagebanners/2024-10-8-paid-foundation-bag-site-desktop-product-page-top-banner-img-only-1226x120-us-2063.jpg?imwidth=1226 1x, https://www.sephora.com/contentimages/ppagebanners/2024-10-8-paid-foundation-bag-site-desktop-product-page-top-banner-img-only-1226x120-us-2063.jpg?imwidth=2452 2x"
              />
              <source
                media="(max-width: 767px)"
                srcSet="https://www.sephora.com/contentimages/ppagebanners/2024-10-8-paid-foundation-bag-site-mobile-app-product-page-top-banner-img-only-262x138-us-2082.jpg?imwidth=262 1x, https://www.sephora.com/contentimages/ppagebanners/2024-10-8-paid-foundation-bag-site-mobile-app-product-page-top-banner-img-only-262x138-us-2082.jpg?imwidth=524 2x"
              />
              <img
                src="https://www.sephora.com/contentimages/ppagebanners/2024-10-8-paid-foundation-bag-site-mobile-app-product-page-top-banner-img-only-262x138-us-2082.jpg?imwidth=262"
                alt="Banner"
                className="w-auto h-auto object-cover cursor-pointer"
              />
            </picture>
          </div>
        </div>
        <div className="py-4 ">
          <p className="text-md font-semibold hover:underline cursor-pointer">{product.name}</p>
          <p className="text-md ">{product.content}</p>
        </div>
        <div>
          <img src={product.thumbnail} alt="" />
          <p>{product.content}</p>
          <p>Price: ${product.priceAfterDiscount}</p>
          <p>
            Rating: {product.rating} (Based on {product.ratingCount} reviews)
          </p>
          <p>Discount: {product.discount}</p>
          <p>Voucher: {product.voucher}</p>
          <h3>Images</h3>
          <div>
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`Product image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <AddToBasket />
    </div>
  );
};

export default ProductDetails;
