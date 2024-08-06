import { useState, useEffect } from "react";
import axios from "axios";
import Yeni from "../Hader/yeni";

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
        {/* orta header */}
        {<Yeni />}

        <div className="z-10 absolute top-0 right-0 p-4 flex flex-wrap justify-center gap-4 mt-8">
          {categories.map((category) => (
            <h5
              key={category.id}
              className={`p-3 rounded-lg text-lg ${
                selectedCategory === category.name
                  ? "bg-[#FEB800] text-black "
                  : "bg-[#1F1F1F] text-white hover:bg-[#FEB800] "
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
