import React from "react";
import NavBar from "./components/NavBar";
import Particle from "./components/Particle";
import "./index.css";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="bg-black text-white">
      <NavBar />
      <div className="relative">
        <h1
          className="absolute text-[10rem] top-[33%] left-[35%] text-[#44D62C] font-extrabold 
          drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] 
          [text-shadow:_4px_4px_0px_rgba(0,0,0,0.8)]
          zen-dots-regular glitch"
        >
          Razer
        </h1>
        <Particle />
      </div>
      <Products />
    </div>
  );
};

export default App;
