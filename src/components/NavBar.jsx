import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const NavBar = () => {
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);

  useGSAP(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      y: -50,
      rotate: -360,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(navItemsRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  const menuItems = [
    "Store", "PC", "Console", "Mobile", "Furniture & Lifestyle", "Gold", "Community", "Support"
  ];

  return (
    <nav className="h-15 flex justify-around relative z-1">
      <ul className="flex gap-18 items-center relative electrolize-regular">
        <li className="px-0">
          <img
            ref={logoRef}
            className="h-10"
            src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
            alt="Razer Homepage"
          />
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            ref={(el) => (navItemsRef.current[index] = el)}
            className="cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
