import { useState, useEffect } from "react";
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
        <div className="flex justify-around items-center p-4 w-full h-full bg-yellow-300">
          <div className="flex flex-col items-center justify-between gap-64 sm:justify-end h-full w-1/2  bg-red-400">
            <div className="justify-between text-center max-w-3xl ">
              <button className=" text-4xl font-extrabold text-[#FEB800] lg:text-5xl xl:text-6xl">
                KING BURGER
              </button>
              <p className="text-lg font-semibold text-slate-300 lg:text-xl xl:text-2xl mt-4">
                Burger King ile her öğünde lezzet dolu anlar yaşayın!
              </p>
            </div>
            <button className="w-64 justify-start bg-[#FEB800] text-slate-900 font-semibold text-xl p-4 rounded-lg hover:bg-opacity-80 lg:text-2xl xl:text-3xl mb-72 ">
              Order Now
            </button>
          </div>
          <div className="w-1/2 ">
            <img
              className="w-full max-w-3xl h-full object-cover bg-blue-400 "
              src="/images/header-burger.png"
              alt="Header Burger"
            />
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
    </div>
  );
};

export default Header;
