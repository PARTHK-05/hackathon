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
  });

  return (
    <div ref={sectionRef} className="relative bg-black text-white text-center py-16 px-6 flex flex-col items-center">
      {/* Title */}
      <h1 ref={titleRef} className="text-6xl font-extrabold text-green-500 drop-shadow-lg">
        NEW RAZER BLADE 16
      </h1>
      <p ref={subtitleRef} className="text-xl text-gray-400 mt-2">
        SLIMMER. SMARTER. SHARPER.
      </p>

      {/* Links */}
      <div ref={linksRef} className="mt-6 flex gap-8 text-green-400 text-lg">
        <a href="#" className="hover:underline transition duration-300">Learn More &gt;</a>
        <a href="#" className="hover:underline transition duration-300">Notify Me &gt;</a>
      </div>

      {/* Animated Razer Text */}


      {/* Laptop Video */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 gap-12">
        <div className="w-[900px] h-[400px] overflow-hidden rounded-lg shadow-xl">
          <video
            src="https://assets2.razerzone.com/images/pnx.assets/089d09b3b83461970b76ac3bfb1ec1ca/razer-blade-18-kira11-main-kv-animation-1920x700.mp4"
            autoPlay

            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Laptop;