import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import React from "react";

const NavBar = () => {


    useGSAP(()=>{
        
        gsap.from(".nav-contant",{
            y:-100,
            delay:.5,
            duration:1,
            stagger:1,
        })
    })

  return (
    <nav className="w-full bg-transparent text-white py-8 px-6 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       
        <div className=" logo text-3xl font-bold cursor-pointer">LOGO</div>

       
        <div className="nav-contant hidden md:flex space-x-6 text-lg gap-8">
          <a href="#" className="hover:text-gray-400 transition">Store</a>
          <a href="#" className="hover:text-gray-400 transition">PC</a>
          <a href="#" className="hover:text-gray-400 transition">Console</a>
          <a href="#" className="hover:text-gray-400 transition">Mobile</a>
          <a href="#" className="hover:text-gray-400 transition">Furniture & Lifestyle</a>
          <a href="#" className="hover:text-gray-400 transition">Gold</a>
          <a href="#" className="hover:text-gray-400 transition">Community</a>
          <a href="#" className="hover:text-gray-400 transition">Support</a>
        </div>

        <div className="md:hidden text-2xl cursor-pointer">&#9776;</div>
      </div>
    </nav>
  );
};

export default NavBar;
