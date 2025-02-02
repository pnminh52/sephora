import React from 'react'

const SliderImage = () => {
  return (
    <div>
       <div
        className="p-2 flex gap-2 overflow-x-auto flex-nowrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Box 1 */}
        <div className="min-w-[315px] md:min-w-[545px] overflow-hidden rounded-md">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://www.sephora.com/contentimages/2025-2-1-rare-beauty-soft-pinch-liquid-contour-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=545"
            />
            <img
              className="rounded-t-md w-full"
              src="https://www.sephora.com/contentimages/2025-2-1-rare-beauty-soft-pinch-liquid-contour-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=315"
              alt=""
            />
          </picture>
          <div className="bg-[#FFECE5] w-full rounded-b-md  min-h-[120px] flex flex-col justify-between">
            <div className="p-4 h-full">
              <h1 className="font-semibold cursor-pointer text-md sm:text-xl">
                New Rare Beauty by Selena Gomez
              </h1>
              <p className="text-sm py-1">
                Get a naturally lifted look with this lightweight liquid
                contour. Dot. Blend. Done.
              </p>
              <h1 className=" font-semibold cursor-pointer text-sm ">
                SHOP NOW ▸
              </h1>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="min-w-[315px] md:min-w-[545px] overflow-hidden rounded-md">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://www.sephora.com/contentimages/2025-01-23-q1-fragrance-mbc-site-home-page-RWD-hero-banner-crossworld-gifts-us-image-only-release.jpg?imwidth=545"
            />
            <img
              className="rounded-t-md w-full"
              src="https://www.sephora.com/contentimages/2025-01-23-q1-fragrance-mbc-site-home-page-RWD-hero-banner-crossworld-gifts-us-image-only-release.jpg?imwidth=315"
              alt=""
            />
          </picture>
          <div className="bg-[#D7437F] w-full rounded-b-md  min-h-[120px] flex flex-col justify-between">
            <div className="p-4 h-full">
              <h1 className="text-white font-semibold cursor-pointer text-md sm:text-xl">
                Valentine's Day Gifts
              </h1>
              <p className="text-white text-sm py-1">
                The best beauty picks—perfect to give or get.
              </p>
              <h1 className="text-white font-semibold  cursor-pointer text-sm">
                SHOP NOW ▸
              </h1>
            </div>
          </div>
        </div>
        {/* Box 3 */}
        <div className="min-w-[315px] md:min-w-[545px] overflow-hidden rounded-md">
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="https://www.sephora.com/contentimages/2025-1-31-caudalie-premier-cru-collection-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=545 1x, https://www.sephora.com/contentimages/2025-1-31-caudalie-premier-cru-collection-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=1090 2x"
            />
            <img
              className="rounded-t-md w-full"
              src="https://www.sephora.com/contentimages/2025-1-31-caudalie-premier-cru-collection-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=315"
              srcset="https://www.sephora.com/contentimages/2025-1-31-caudalie-premier-cru-collection-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-1-31-caudalie-premier-cru-collection-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=630 2x"
              role="presentation"
              alt=""
              class="css-i1gf52 e15t7owz0"
              data-comp="BaseComponent "
            />
          </picture>
          <div className="bg-[#481D53] w-full rounded-b-md  min-h-[120px] flex flex-col justify-between">
            <div className="p-4 h-full">
              <h1 className="text-white font-semibold cursor-pointer text-md sm:text-xl">
                New Caudalie Premier Cru Cream
              </h1>
              <p className="text-white text-sm py-1">
                This patented formula visibly reduced forehead wrinkles for 93%
                of users.
              </p>
              <h1 className="text-white font-semibold  cursor-pointer text-sm">
                SHOP NOW ▸
              </h1>
            </div>
          </div>
        </div>
        {/* Box 4 */}
        <div className="min-w-[315px] md:min-w-[545px] overflow-hidden rounded-md">
          <picture>
          <source media="(min-width: 768px)" srcset="https://www.sephora.com/contentimages/2025-02-bi-gamification-optimization-passport-site-desktop-mobile-RWD-hero-banner-evergreen-us-can_img-only.jpg?imwidth=545 1x, https://www.sephora.com/contentimages/2025-02-bi-gamification-optimization-passport-site-desktop-mobile-RWD-hero-banner-evergreen-us-can_img-only.jpg?imwidth=1090 2x"/>
          <img className="w-full rounded-t-md" src="https://www.sephora.com/contentimages/2025-02-bi-gamification-optimization-passport-site-desktop-mobile-RWD-hero-banner-evergreen-us-can_img-only.jpg?imwidth=315" srcset="https://www.sephora.com/contentimages/2025-02-bi-gamification-optimization-passport-site-desktop-mobile-RWD-hero-banner-evergreen-us-can_img-only.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-02-bi-gamification-optimization-passport-site-desktop-mobile-RWD-hero-banner-evergreen-us-can_img-only.jpg?imwidth=630 2x" loading="lazy" role="presentation" alt="" class="css-i1gf52 e15t7owz0" data-comp="Image StyledComponent BaseComponent "/>
          </picture>
          <div className="bg-[#C6B8DC] w-full rounded-b-md  min-h-[120px] flex flex-col justify-between">
            <div className="p-4 h-full">
              <h1 className="font-semibold cursor-pointer text-md sm:text-xl">
              A New Beauty Insider Challenge 
              </h1>
              <p className=" text-sm py-1">
              Complete tasks and earn up to 500 points. Terms apply.
              </p>
              <h1 className=" font-semibold  cursor-pointer text-sm">
              JOIN THE CHALLENGE ▸
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderImage
