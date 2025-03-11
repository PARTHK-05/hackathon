import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Mouse = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useGSAP(() => {
    gsap.to(textRefs.current, {
      y: -50,
      opacity: 1,
      stagger: 0.5,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen flex justify-center items-center overflow-hidden">
      <div className="left w-1/2 flex justify-center items-center">
        <img
          src="https://png.pngtree.com/png-vector/20250223/ourlarge/pngtree-razer-basilisk-v3-wired-gaming-mouse-next-level-fps-accuracy-png-image_15565557.png"
          alt="Gaming Mouse"
          className="w-3/4 rounded-lg shadow-lg"
        />
      </div>
      <div className="right w-1/2 px-6 flex flex-col gap-6 text-white">
        {[
          { title: "Gaming Mouse", subtitle: "Precision Redefined", text: "Ultra-responsive tracking for peak performance." },
          { title: "Ergonomic Design", subtitle: "Comfort for Hours", text: "Designed for long gaming and work sessions." },
          { title: "RGB Lighting", subtitle: "Customizable Effects", text: "Sync with your setup for a seamless experience." },
        ].map((item, index) => (
          <div key={index} ref={(el) => (textRefs.current[index] = el)} className="opacity-0 transform translate-y-10">
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <h2 className="text-2xl text-gray-200 mt-1">{item.subtitle}</h2>
            <p className="text-lg mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mouse;
