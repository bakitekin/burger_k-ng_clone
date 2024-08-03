import React, { useState } from "react";
import Header from "./companents/Hader/Header";
import Menu from "./companents/Menu/Menu";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <Header setSelectedCategory={setSelectedCategory} />
      <Menu selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
