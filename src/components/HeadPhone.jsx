import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger);

const HeadPhone = () => {
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
      {/* Text on the left */}
      <div className="left h-3/2 w-1/2 pl-12 flex flex-col gap-6 text-white items-center justify-center">
        {[
          { title: "Pure Audio Experience", subtitle: "High-Fidelity Sound", text: "Immerse yourself in studio-quality sound with deep bass and crystal-clear highs." },
          { title: "Unmatched Comfort", subtitle: "Designed for Long Sessions", text: "Ergonomic memory foam ear cups and a lightweight build for all-day wear." },
          { title: "Next-Gen Noise Cancelling", subtitle: "Block Out the World", text: "Adaptive ANC technology ensures an undisturbed, immersive listening experience." },
        ].map((item, index) => (
          <div key={index} ref={(el) => (textRefs.current[index] = el)} className="opacity-0 transform translate-y-10">
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <h2 className="text-2xl text-gray-200 mt-1">{item.subtitle}</h2>
            <p className="text-lg mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Spline 3D Model on the right */}
      <div className="right w-1/2 flex justify-center items-center">
        <Spline scene="https://prod.spline.design/VkTz5kpJqAxcVdzG/scene.splinecode" />
      </div>
    </div>
  );
};

export default HeadPhone;
