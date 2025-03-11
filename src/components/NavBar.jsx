import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const NavBar = () => {
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    { name: "Store", dropdown: ["Shop PC", "Shop Console", "Shop Mobile"] },
    { name: "PC", dropdown: ["Laptops", "Desktops", "Accessories"] },
    { name: "Console", dropdown: ["Controllers", "Headsets", "Gaming Chairs"] },
    { name: "Mobile", dropdown: ["Phones", "Accessories", "Wearables"] },
    { name: "Furniture & Lifestyle", dropdown: ["Gaming Chairs", "Desks", "Merch"] },
    { name: "Gold", dropdown: ["Recharge", "Redeem", "Earn Rewards"] },
    { name: "Community", dropdown: ["Forums", "Events", "Social"] },
    { name: "Support", dropdown: ["Help", "FAQ", "Warranty"] },
  ];

  return (
    <nav className="h-15 flex justify-around border-b border-[#44D62C] relative z-1">
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
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.name}
            {activeDropdown === index && (
              <ul className="absolute top-full left-0 bg-black text-white p-2 rounded-md shadow-lg w-40">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="p-2 hover:bg-[#44D62C]">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;