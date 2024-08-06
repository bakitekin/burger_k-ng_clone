import React from "react";

const Yeni = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen">
      <div className="w-[350px] lg:w-[790px] lg:order-2 mt-9 lg:mt-0 lg:mr-20  sm:-mr-8  transition-transform duration-300 ease-in-out transform hover:scale-110">
        <img
          src="../../../public/images/header-burger.png"
          alt="Header Burger"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-40 w-full h-full">
        <div className="flex flex-col text-center items-center justify-center gap-3 ">
          <div>
            <button className="text-[#FEB800] font-extrabold text-6xl rounded-lg w-full h-full">
              BURGER KING
            </button>
          </div>
          <div>
            <p className="text-white text-lg lg:text-xl font-medium ">
              Burger King, dünyanın en lezzetli ve doyurucu hamburgerlerini
              sunuyor! Her ısırıkta enfes lezzetler ve doyumsuz tatlarla dolu,
              Burger King ile öğünlerinize krallık katın!
            </p>
          </div>
        </div>
        <div>
          <div>
            <button className="bg-[#FEB800] hover:bg-opacity-65 rounded-lg p-4 text-white font-extrabold text-4xl">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yeni;
