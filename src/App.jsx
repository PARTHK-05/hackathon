import React from "react";
import NavBar from "./components/NavBar";
import Particle from "./components/Particle";
import "./index.css"; // Import Tailwind styles
import Laptop from "./components/Laptop";
import Keyboard from "./components/Keyboard";
import HeadPhone from "./components/HeadPhone";
import Mouse from "./components/Mouse";
import PS5Console from "./components/PS5Console";

const App = () => {
  return (
    <>
    {/* <div className="h-screen w-full bg-black text-white">
      <NavBar />
      <div className="flex justify-center items-center h-[80vh]">
        <Particle />
      </div>
    </div> */}

    {/* <div className="h-screen w-full bg-black text-white">
      <Laptop/>
    </div>

    <div className="h-screen w-full bg-black text-white">
      <Keyboard/>
    </div> */}

  <div className="bg-black text-white">
        <section className="h-screen flex items-center justify-center">
          <Laptop />
        </section>
        <section className="h-screen flex items-center justify-center">
          <Keyboard />
        </section>
        <section className="h-screen flex items-center justify-center">
          <HeadPhone/>
        </section>
        <section className="h-screen flex items-center justify-center">
          <PS5Console/>
        </section>
        <section className="h-screen flex items-center justify-center">
          <Mouse/>
        </section>
      </div>
    </>
  );
};

export default App;