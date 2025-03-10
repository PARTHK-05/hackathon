import React from "react";
import NavBar from "./components/NavBar";
import Particle from "./components/Particle";
import "./index.css"; // Import Tailwind styles

const App = () => {
  return (
    <div className="h-screen w-full bg-black text-white">
      <NavBar />
      <div className="flex justify-center items-center h-[80vh]">
        <Particle />
      </div>
    </div>
  );
};

export default App;
