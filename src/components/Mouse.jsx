import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


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
      <div className="left w-full flex justify-center items-center">
        <video
          src="https://assets2.razerzone.com/images/pnx.assets/b971a77538a974da5318a76b0a7b85d3/razer-viper-v3-pro-faker-edition-video.mp4"
          className="w-3/4 rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        ></video>
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