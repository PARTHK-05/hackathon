import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const SaleMarquee = () => {
    return (
        <div className="bg-[#44D62C] p-5">
            <marquee behavior="scroll" direction="left" scrollamount="15">
                <ul className="flex gap-30 whitespace-nowrap text-5xl font-extrabold text-black notable-regular">
                    <li>SALE</li>
                    <li>SALE</li>
                    <li>SALE</li>
                    <li>SALE</li>
                    <li>SALE</li>
                    <li>SALE</li>
                    <li>SALE</li>
                    <li>SALE</li>
                </ul>
            </marquee>
        </div>
    );
};

export default SaleMarquee;
