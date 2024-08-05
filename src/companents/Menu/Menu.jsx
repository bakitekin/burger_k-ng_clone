import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({ selectedCategory }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        if (response.data && response.data.menu) {
          setMenuItems(response.data.menu);

        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Veri alınırken bir hata oluştu.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (menuItems.length === 0) {
    return <div>Veri yükleniyor...</div>;
  }

  // Filtreleme işlemi
  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#FEB800] w-full flex justify-center items-center">
      <div className="container p-4 rounded-lg text-[#FEB800] grid gap-4 max-w-full max-w-9xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full sm:w-full">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1F1F1F] p-6 gap-8 rounded-lg shadow-lg flex flex-col items-start relative max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              <div className="w-full h-64 relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="relative flex flex-col gap-3 w-full p-4 h-full">
                <h5 className="font-semibold text-2xl text-[#FEB800]">
                  {item.title}
                </h5>
                <p className="line-clamp-2 text-white">{item.desc}</p>

                {/* This wrapper ensures the button and price are pushed to the bottom */}
                <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between">
                  <p className="font-extrabold text-xl text-white">
                    $ {item.price}
                  </p>
                  <button className="font-semibold text-lg bg-[#FEB800] text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transform cursor-pointer">
                    Satın Al
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
