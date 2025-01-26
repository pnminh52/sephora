import React, { useState, useEffect } from "react";

const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (footerTop < viewportHeight + 100) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div>
      <div className="block sm:hidden">
      {showScrollUp && (
      <button
      onClick={scrollToTop}
      className="fixed font-semibold  z-50 top-17 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black cursor-pointer opacity-80 text-sm hover:bg-gray-800 transition ease-in-out text-white rounded-full shadow-lg"
    >
      Back to top
    </button>
    
      )}
    </div>
       <div className="hidden sm:block">
       {showScrollUp && (
       <button
       onClick={scrollToTop}
       className="fixed font-semibold  z-50 top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black cursor-pointer opacity-80 text-sm hover:bg-gray-800 transition ease-in-out text-white rounded-full shadow-lg"
     >
       Back to top
     </button>
     
       )}
     </div>
  </div>
  );
};

export default ScrollUp;
