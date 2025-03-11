import React from "react";
import NavBar from "./components/NavBar";
import Particle from "./components/Particle";
import "./index.css"; // Import Tailwind styles
import Laptop from "./components/Laptop";
import Keyboard from "./components/Keyboard";
import HeadPhone from "./components/HeadPhone";
import Mouse from "./components/Mouse";
import PS5Console from "./components/PS5Console";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="h-screen w-full bg-black text-white">
        <NavBar />
        <div className="relative">
          <Particle />

          {/* <div className="relative w-full h-screen overflow-hidden">
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/spatial-audio/large.mp4 " type="video/mp4" />
            </video>

            <div className="relative z-10 flex items-center justify-center h-full bg-black/50 text-white">
            </div>
          </div> */}
          <h1
            className="absolute text-[10rem] top-[33%] left-[35%] text-[#3bb328] font-extrabold 
          drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] 
          [text-shadow:_4px_4px_0px_rgba(0,0,0,0.8)]
          zen-dots-regular glitch"
          >
            Razer
          </h1>
        </div>
      </div>

      <Products />

      <div className="bg-black text-white">
        <section className="h-screen flex items-center justify-center">
          <Laptop />
        </section>
        <section className="h-screen flex items-center justify-center">
          <Keyboard />
        </section>
        <section className="h-screen flex items-center justify-center">
          <HeadPhone />
        </section>
        <section className="h-screen flex items-center justify-center">
          <PS5Console />
        </section>
        <section className="h-screen flex items-center justify-center">
          <Mouse />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;