import Spline from "@splinetool/react-spline";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PS5Console = () => {
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
      {/* Spline on the left */}
      <div className="left w-1/2 h-full flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/5XGisceiABZukwEd/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text on the right */}
      <div className="right h-3/2 w-1/2 px-12 flex flex-col gap-6 text-white items-center justify-center">
        {[
          { title: "Ultra-Fast Loading", subtitle: "Lightning Speed", text: "Experience near-instant load times with an ultra-high-speed SSD." },
          { title: "Stunning Graphics", subtitle: "Ray Tracing & 4K", text: "Immerse yourself in ultra-realistic environments with 4K HDR." },
          { title: "Haptic Feedback", subtitle: "Next-Gen Controller", text: "Feel the action like never before with DualSense adaptive triggers." },
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

export default PS5Console;
