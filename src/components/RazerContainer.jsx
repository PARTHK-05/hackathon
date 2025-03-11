import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const RazerContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 3,
      }
    })
    .to(containerRef.current, {
      y: 300, 
      x: -100,
      scale: 0.7,
      duration: 5, 
    })
    .to(containerRef.current, {
      y: 800, 
      x: 100,
      scale: 1.2,
      duration: 5, 
    });
  }, []);

  return <div className="razer-container" ref={containerRef}>Razer Content</div>;
};

export default RazerContainer;
