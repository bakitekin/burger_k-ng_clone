import React, { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategoryLocal] = useState("all");

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        if (response.data && response.data.categories) {
          setCategories(response.data.categories);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCategoryLocal(category);
  };

  return (
    <div className="relative">
      <div className="relative w-screen h-screen bg-[#1F1F1F]">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="w-full max-w-3xl right-4"
            src="/images/header-burger.png"
            alt="Header Burger"
          />
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8">
          {/* Text and Button */}
          <div className="flex flex-col  lg:items-start lg:justify-center">
            <button className="text-4xl font-extrabold text-[#FEB800] lg:text-5xl xl:text-6xl w-0 h-[600px]">
              KING BURGER
            </button>
            <p className="text-lg font-semibold text-slate-300 mb-12 lg:text-xl xl:text-2xl">
              Burger King ile her öğünde lezzet dolu anlar yaşayın!
            </p>
            <button className="bg-[#FEB800] text-slate-900 font-semibold text-xl p-4 rounded-lg hover:bg-opacity-80 lg:text-2xl xl:text-3xl">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="z-10 absolute top-0 right-0 p-4 flex flex-wrap justify-center gap-4 mt-8">
        {categories.map((category) => (
          <h5
            key={category.id}
            className={`p-3 rounded-lg text-lg ${
              selectedCategory === category.name
                ? "bg-[#FEB800] text-black"
                : "bg-[#1F1F1F] text-white"
            } hover:bg-opacity-80 cursor-pointer md:text-xl lg:text-2xl`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Header;
