import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Laptop = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const linksRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const razerRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
        "-=0.5"
      )
      .fromTo(
        linksRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        [img1Ref.current, img2Ref.current],
        { x: (i) => (i === 0 ? -500 : 500), opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      )
      .fromTo(
        razerRef.current,
        { x: (i) => (i % 2 === 0 ? -200 : 200), opacity: 0, scale: 0.5, rotation: -10 },
        { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.2, stagger: 0.15, ease: "elastic.out(1, 0.6)" }
      );

    gsap.to(razerRef.current, {
      textShadow: "0px 0px 15px rgba(0, 255, 0, 0.8)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(".razer-container", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    
   
    gsap.to(".razer-container", {
      y: 300, 
      x: 300,
      opacity:0,
      scale: 0.5, 
      duration: 10, 
      scrollTrigger: {
        trigger: ".razer-container",
        start: "top center", 
        end: "bottom center",
        scrub: 3, 
      }
    });

    // gsap.to(".razer-container", {
    //   y: 800, 
    //   x: -100,
    //   scale: 0.7, 
    //   duration: 5, 
    //   scrollTrigger: {
    //     trigger: ".razer-container",
    //     start: "700px center",  // Animation starts when scrolled to 600px
    //     end: "bottom center",
    //     scrub: 3, 
    //   }
    // });
    

  });

  return (
    <div ref={sectionRef} className="bg-black text-white text-center py-10 flex flex-col items-center">
      <h1 ref={titleRef} className="text-5xl font-bold">NEW RAZER BLADE 16</h1>
      <p ref={subtitleRef} className="text-lg text-gray-400 mt-2">SLIMMER. SMARTER. SHARPER.</p>

      <div ref={linksRef} className="mt-4 flex justify-center gap-6 text-green-500 text-lg">
        <a href="#" className="hover:underline">Learn More &gt;</a>
        <a href="#" className="hover:underline">Notify Me &gt;</a>
      </div>

      <div className="razer-container absolute top-1/2 bg-green-500 text-black p-10 rounded-xl shadow-xl flex justify-center w-1/3">
        <h1 className="text-6xl font-extrabold flex space-x-2">
          {"RAZER".split("").map((letter, index) => (
            <span key={index} ref={(el) => (razerRef.current[index] = el)}>
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="flex items-center justify-center mt-10 gap-10">
        <div className="flex flex-col items-center">
          <div ref={img1Ref} className="w-[500px] h-[300px] overflow-hidden">
            <img src="/img1.png" alt="Laptop Image 1" className="w-full h-full object-contain block" />
          </div>
          <div ref={img2Ref} className="w-[500px] h-[300px] overflow-hidden mt-4">
            <img src="/img2.png" alt="Laptop Image 2" className="w-full h-full object-contain block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
