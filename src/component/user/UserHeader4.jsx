import React, { useState } from "react";

const UserHeader4 = () => {
  const [isHovered0, setIsHovered0] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);

  return (
    <div className="hidden sm:block">
      <div className="bg-black h-12 relative">
        <div className="bg-black h-12 mx-auto px-8 max-w-screen-xl flex items-center">
          <ul className="flex justify-between items-center h-full w-full">
            <li
              className="relative text-white  h-full flex items-center"
              onMouseEnter={() => setIsHovered0(true)}
              onMouseLeave={() => setIsHovered0(false)}
            >
              <a href="#" className="inline-block">
                New
              </a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered0
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <a href="#">Brands</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered1
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <a href="#">Makeup</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered2
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <a href="#">Skincare</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered3
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <a href="#">Hair</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered4
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              <a href="#">Fragrance</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered5
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered6(true)}
              onMouseLeave={() => setIsHovered6(false)}
            >
              <a href="#">Tools & Brushes</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered6
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered7(true)}
              onMouseLeave={() => setIsHovered7(false)}
            >
              <a href="#">Bath & Body</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered7
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered8(true)}
              onMouseLeave={() => setIsHovered8(false)}
            >
              <a href="#">Mini Size</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered8
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered9(true)}
              onMouseLeave={() => setIsHovered9(false)}
            >
              <a href="#">Beauty Under $20</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered9
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered10(true)}
              onMouseLeave={() => setIsHovered10(false)}
            >
              <a href="#">Gifts & Gift Cards</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered10
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
            <li
              className="relative text-white h-full flex items-center"
              onMouseEnter={() => setIsHovered11(true)}
              onMouseLeave={() => setIsHovered11(false)}
            >
              <a href="#">Sale & Offers</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-300 ease-out ${
                  isHovered11
                    ? "opacity-100 translate-y-1"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span class="css-hqripk"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {isHovered0 && (
        <div>
          <div
            className=" absolute z-10 left-0 w-full bg-white shadow-lg  p-3 flex justify-center"
            onMouseEnter={() => setIsHovered0(true)}
            onMouseLeave={() => setIsHovered0(false)}
          >
            <div className="max-w-screen-xl w-full flex justify-between px-8 py-4">
              <div className="w-full   gap-4">
                <div className="flex">
                  <div className="w-1/2 grid grid-cols-3">
                    <div className="font-semibold space-y-3">
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        All New
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        Just Dropped
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        New Makeup
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        New Skincare
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        New Hair Care
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        New Fragrance
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        New Bath & Body
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        New Bath & Body
                      </p>
                    </div>

                    <div className=" font-semibold space-y-3">
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        The Next Big Thing
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        Bestsellers
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        Trending on Social
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        Refillable Beauty Products
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        Buying Guides
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        Clean Beauty
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        Planet Aware Beauty
                      </p>
                      <p className="text-black text-sm hover:underline cursor-pointer">
                        FSA & HSA Eligible
                      </p>
                    </div>
                  </div>

                  {/* Cột 3: Ảnh */}
                  <div className="w-1/2 grid grid-cols-2 gap-4">
                    <div>
                      <img
                        src="https://www.sephora.com/contentimages/2025-jan-skin-story-site-desktop-universal-navigation-button-us-2053-handoff.jpg?imwidth=588"
                        alt="Promotion"
                        className="w-full h-auto rounded-lg cursor-pointer"
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.sephora.com/contentimages/2025-jan-makeup-mbc-site-desktop-universal-navigation-button-can-release.jpg?imwidth=588"
                        alt="Promotion"
                        className="w-full h-auto rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 w-full bg-gray-500 opacity-50 h-600 z-0"></div>
        </div>
      )}
      {isHovered1 && (
        <div>
          <div
            className=" absolute z-10 left-0 w-full bg-white shadow-lg  p-3 flex justify-center"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div className="max-w-screen-xl w-full flex justify-between px-8 py-4">
              <div className="w-full gap-4">
                <div className="grid grid-cols-6">
                  <div className=" text-black text-sm">
                    <ul className="space-y-3">
                      <li className="hover:underline font-semibold cursor-pointer">
                        Brands A-Z
                      </li>
                      <li className="hover:underline py-3 font-semibold cursor-pointer">
                        SEPHORA COLLECTION
                      </li>
                      <li className="hover:underline font-semibold cursor-pointer">
                        New Brands
                      </li>
                      <li className="cursor-pointer hover:underline">PHYLA</li>
                      <li className="cursor-pointer hover:underline">
                        Range Beauty
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Sofie Pavitt Face
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      {" "}
                      <li className="font-semibold hover:underline cursor-pointer">
                        Only At Sephora
                      </li>
                      <li className="hover:underline cursor-pointer">KAYALI</li>
                      <li className="hover:underline cursor-pointer">
                        Crown Affair
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Glossier
                      </li>
                      <li className="hover:underline cursor-pointer">
                        HUDA BEAUTY
                      </li>
                      <li className="hover:underline cursor-pointer">
                        PATRICK TA
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      {" "}
                      <li className="hover:underline cursor-pointer font-semibold">
                        Affordable Brands
                      </li>
                      <li className="hover:underline cursor-pointer">
                        SEPHORA COLLECTION
                      </li>
                      <li className="hover:underline cursor-pointer">
                        The Ordinary
                      </li>
                      <li className="hover:underline cursor-pointer">
                        The INKEY List
                      </li>
                      <li className="hover:underline cursor-pointer">Verb</li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      {" "}
                      <li className="hover:underline cursor-pointer font-semibold">
                        Black-Owned Brands
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Fenty Beauty by Rihanna
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Shani Darden Skin Care
                      </li>
                      <li className="hover:underline cursor-pointer">
                        PATTERN By Tracee Ellis Ross
                      </li>
                      <li className="hover:underline cursor-pointer">
                        BROWN GIRL Jane
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Topicals
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Danessa Myricks Beauty
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      {" "}
                      <li className="font-semibold hover:underline cursor-pointer">
                        Clean at Sephora
                      </li>
                      <li className="hover:underline cursor-pointer">
                        The INKEY List
                      </li>
                      <li className="hover:underline cursor-pointer">Saie</li>
                      <li className="hover:underline cursor-pointer">PHLUR</li>
                      <li className="hover:underline cursor-pointer">Gisou</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 w-full bg-gray-500 opacity-50 h-600 z-0"></div>
        </div>
      )}
      {isHovered2 && (
        <div>
          <div
            className=" absolute z-10 left-0 w-full bg-white shadow-lg  p-3 flex justify-center"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className="max-w-screen-xl w-full flex justify-between px-8 py-4">
              <div className="w-full gap-4">
                <div className="grid grid-cols-6">
                  <div className=" text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        All Makeup
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Face
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Foundation
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        BB & CC Cream{" "}
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Tinted Moisturizer
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Concealer
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Face Primer
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Setting Spray & Powder
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Highlighter
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Contour
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Color Correct
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Color Correct
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Eye
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eye Palettes
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Mascara
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eyeliner
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eyebrow
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        False Eyelashes
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eyeshadow
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eyelash Serums
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eyebrow Serums
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eye Primer
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eye Sets
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Lip
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lip Gloss
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lipstick
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lip Oil
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lip Plumper
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lip Balms & Treatments{" "}
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Liquid Lipstick
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lip Liner
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lip Stain
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Lip Sets
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Cheek
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Blush
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Bronzer
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Highlighter
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Contour
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Cheek Palettes{" "}
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Value & Gift Sets
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Makeup Palettes
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Brushes & Applicators
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Accessories
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Nail
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        New
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Bestsellers
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Clean Makeup
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Vegan Makeup
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Mini Size
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Refillable Makeup{" "}
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Sephora Collection
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Luxury Makeup
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Black-Owned Brands Makeup
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Help Me Choose
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        The Matte Renaissance
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Monochrome Makeup
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Easy Eye Makeup
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Guide To Foundations
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Clean Makeup Guide{" "}
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        No Makeup Makeup
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Super-Natural Sculpting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 w-full bg-gray-500 opacity-50 h-600 z-0"></div>
        </div>
      )}
      {isHovered3 && (
        <div>
          <div
            className=" absolute z-10 left-0 w-full bg-white shadow-lg  p-3 flex justify-center"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <div className="max-w-screen-xl w-full flex justify-between px-8 py-4">
              <div className="w-full gap-4">
                <div className="grid grid-cols-7">
                  <div className=" text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        All Skincare
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Moisturizers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Night Creams
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Face Oils
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Mists & Essences
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        BB & CC Cream
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Cleansers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Face Wash & Cleansers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Exfoliators
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Makeup Removers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Face Wipes
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Toners
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Treatments
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Face Serums
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Acne & Blemish
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Masks
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Face Masks
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Sheet Masks
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eye Masks
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Eye Care
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eye Creams & Treatments
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Eye Masks
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Lip Balms & Treatments
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Sunscreen
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Face Sunscreen
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Body Sunscreen
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        High Tech Tools
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Wellness
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Supplements
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Feminine Care
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Shop By Concern
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Acne & Blemishes
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Anti-Aging
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Dark Spots
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Pores
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Dryness{" "}
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Fine Lines & Wrinkles
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Dullness
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3 font-semibold">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        New
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Bestsellers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Clean Skincare
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Vegan Skincare
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Value & Gift Sets
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Mini Size{" "}
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Refillable Skincare
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        FSA & HSA Eligible
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Sephora Collection
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Luxury Skincare
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Black-Owned Brands Skincare
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Acne & Breakouts
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Help Me Choose
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        The Skin You Want in 4 Steps
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Korean Skincare
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        The Best Skincare Is Sunscreen
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Better Skin Fast
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Minimalist Skincare Routines{" "}
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Acne & Breakouts
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        FSA/HSA Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        The Wellness Edit
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Best Skincare Under $35
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Clean Skincare Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Skincare by Age
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Skincare for Your Skin Type
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 w-full bg-gray-500 opacity-50 h-600 z-0"></div>
        </div>
      )}
      {isHovered4 && (
        <div>
          <div
            className=" absolute z-10 left-0 w-full bg-white shadow-lg  p-3 flex justify-center"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <div className="max-w-screen-xl w-full flex justify-between px-8 py-4">
              <div className="w-full gap-4">
                <div className="grid grid-cols-6">
                  <div className=" text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        All Hair
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Shampoo & Conditioner
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Shampoo
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Conditioner{" "}
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Scalp Scrub
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Treatments
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Masks
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Leave-in Conditioner
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Oil
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Serums
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Scalp Treatments
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Supplements
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Thinning & Hair Loss
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Styling
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Styling Creams & Sprays
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Dry Shampoo
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Primers & Heat
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Mousse & Foam
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Gel, Pomade & Wax
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Accessories
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Clips & Claw Clips
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Scrunchies & Hair Ties
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Towels
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Scalp Massagers & Rollers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Showerheads & Filters
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Value & Gift Sets
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Hair & Body Mist
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Hair Styling Tools
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Dryers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Straighteners & Flat Irons
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Blow Dry Brushes{" "}
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Curling Irons
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Tool Attachments & Diffusers
                      </li>
                      <li className="font-semibold  text-black hover:underline cursor-pointer">
                        Brushes & Combs
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Curly, Coily, Textured Hair
                      </li>
                      <li className="font-semibold  text-black hover:underline cursor-pointer">
                        Hair Dye & Root Touch-Ups
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Hair Toners
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Shop by Concern
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Damaged Hair
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Dryness
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Frizz
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Scalp Care
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Volume{" "}
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Color Care
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Shop by Style
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Volume & Texture
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Smooth & Sleek
                      </li>
                      <li className=" text-black hover:underline cursor-pointer">
                        Curl Enhancing
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        New
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Bestsellers
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Clean Hair Care
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Vegan Hair Care
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Mini Size
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        {" "}
                        Value Size{" "}
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Refillable Hair Care
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Sephora Collection
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Luxury Hair
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Black-Owned Brands Hair{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Help Me Choose
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Healthy Scalp Care Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Best Dry Shampoo
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Easy Styling Must-Haves
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Healthy Hair Care Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        The Dry Hair Reset
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Best Shampoos
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Clean Hair Care Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Shiny, Healthy Hair Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Curly, Coily, Textured Hair Care Guide
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 w-full bg-gray-500 opacity-50 h-600 z-0"></div>
        </div>
      )}
      {isHovered5 && (
        <div>
          <div
            className=" absolute z-10 left-0 w-full bg-white shadow-lg  p-3 flex justify-center"
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            <div className="max-w-screen-xl w-full flex justify-between px-8 py-4">
              <div className="w-full gap-4">
                <div className="grid grid-cols-6">
                  <div className=" text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        All Fragrance
                      </li>
                      <li className="font-semibold py-3 text-black hover:underline cursor-pointer">
                        Women
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Perfume
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Perfume Oils
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Rollerballs & Travel Size
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Body Mist & Hair Mist
                      </li>
                      <li className="text-black py-3 font-semibold hover:underline cursor-pointer">
                        Men
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Cologne
                      </li>
                      <li className="text-black py-3 font-semibold hover:underline cursor-pointer">
                        Unisex / Genderless
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Value & Gift Sets
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Perfume Gift Sets
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Cologne Gift Sets
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Home Gift Sets
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Sephora Favorites
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Candles & Home Scents
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Candles
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Diffusers
                      </li>
                      <li className="text-black font-semibold hover:underline cursor-pointer">
                        Shop by Fragrance Family
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Floral
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Warm & Spicy
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Fresh
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Earthy & Woody
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        New
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Bestsellers
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Clean Fragrance
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Vegan Fragrance
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Mini Size
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Value Size
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Refillable Fragrance
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Luxury Fragrance
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Black-Owned Brands Fragrance
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        New
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Bestsellers
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Clean Makeup
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Vegan Makeup
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Mini Size
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Refillable Makeup{" "}
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Sephora Collection
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Luxury Makeup
                      </li>
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Black-Owned Brands
                      </li>
                    </ul>
                  </div>
                  <div className="  text-black text-sm">
                    <ul className="space-y-3">
                      <li className="font-semibold text-black hover:underline cursor-pointer">
                        Help Me Choose
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        The New & Now Fragrance Edit
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Clean Fragrance Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Fragrance Notes Guide
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Best Affordable Fragrance
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Niche Fragrances
                      </li>
                      <li className="text-black hover:underline cursor-pointer">
                        Next Big Thing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 w-full bg-gray-500 opacity-50 h-600 z-0"></div>
        </div>
      )}
    </div>
  );
};

export default UserHeader4;
