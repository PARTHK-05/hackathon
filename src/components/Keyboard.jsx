import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Keyboard = () => {
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
      {/* Spline 3D Model on the left */}
      <div className="left w-1/2 flex justify-center items-center">
      <Spline scene="https://prod.spline.design/R-UhQviqVnGYnrl4/scene.splinecode" />

      </div>

      {/* Text Content on the right */}
      <div className="right w-1/2 px-6 flex flex-col gap-6 text-white">
        {[
          { title: "Keyboard", subtitle: "Mechanical Perfection", text: "Experience ultimate precision and tactile feedback." },
          { title: "RGB Lighting", subtitle: "Customizable Colors", text: "Sync with your setup for a stunning visual experience." },
          { title: "Durability", subtitle: "Built to Last", text: "Premium materials ensure long-lasting performance." },
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

export default Keyboard;
