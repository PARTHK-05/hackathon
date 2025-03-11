import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const NavBar = () => {
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);

  useGSAP(() => {
    // Animate the logo
    gsap.from(logoRef.current, {
      opacity: 0,
      y: -50,
      rotate: -360,
      duration: 1,
      ease: "power2.out",
    });

    // Animate the nav items one by one with a delay of 0.2s each
    gsap.from(navItemsRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      stagger: 0.15, // Delay between each item
      ease: "power2.out",
    });
  }, []);

  return (
    <nav className="h-15 flex justify-around border-b border-[#44D62C]">
      <ul className="flex gap-20 items-center">
        {/* Logo with animation */}
        <li className="px-0">
          <img
            ref={logoRef}
            className="h-10"
            src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
            alt="Razer Homepage"
          />
        </li>

        {/* Navigation Links - Adding refs dynamically */}
        {["Store", "PC", "Console", "Mobile", "Furniture & Lifestyle", "Gold", "Community", "Support"].map((item, index) => (
          <li key={index} ref={(el) => (navItemsRef.current[index] = el)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;