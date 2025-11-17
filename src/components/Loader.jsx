import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [counter, setCounter] = useState(0);
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prev) =>
        prev < 100
          ? prev + 1
          : (clearInterval(count), setCounter(100), triggerReveal())
      );
    }, 25);

    return () => clearInterval(count);
  }, []);

  const triggerReveal = () => {
    const tl = gsap.timeline();

    tl.to(".loader-hide", { opacity: 0, duration: 0.3 })
      .to(".loader-hide", { display: "none", duration: 0.1 })
      .fromTo(
        ".follow-bar",
        { width: "0%" },
        { width: "100%", ease: "Expo.easeInOut", duration: 1.2 }
      )
      .to(".name", { opacity: 0 })
      .to(".follow-bar", {
        height: "100%",
        ease: "Expo.easeInOut",
        duration: 0.7,
        delay: 0.2,
      })
      .add(() => {
        onFinish(); // 👈 AB LOADER HAT JAYEGA
      });
  };

  useGSAP(() => {
    gsap.from(".letter", {
      y: 30,
      opacity: 0,
      scale: 0.8,
      rotateX: 40,
      transformOrigin: "center bottom",
      ease: "expo.out",
      duration: 1.2,
      stagger: {
        amount: 0.8,
        from: "left",
      },
    });
  });


  return (
    <div className="fixed top-0 z-999 h-screen w-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-2xl md:text-5xl name mb-11 uppercase flex gap-2">
        <div className="word">
          {"Abhijeet".split("").map((l, i) => (
            <span key={i} className="letter inline-block">
              {l}
            </span>
          ))}
        </div>

        <div className="word">
          {"Kumar".split("").map((l, i) => (
            <span key={i} className="letter inline-block">
              {l}
            </span>
          ))}
        </div>
      </h1>
      <div className="follow-bar absolute top-1/2 left-0 h-[2px] bg-[#e5e5e0] -translate-y-1/2 z-20" />
      <div
        className="loader-hide absolute top-1/2 left-0 h-[2px] bg-white -translate-y-1/2 z-20"
        style={{ width: `${counter}%` }}
      />
      <div className="loader-hide absolute bottom-4 right-5 sm:bottom-6 sm:right-8 z-30 w-14 h-14">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke="#e5e5e0"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - counter / 100)}
            className="transition-all duration-75 ease-linear"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <p className="text-[1rem] text-white ">{counter}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
