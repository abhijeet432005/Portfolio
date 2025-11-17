import React, { useEffect, useRef, useState } from "react";
import { socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const NavBar = () => {
  const navRef = useRef(null);
  const linkRef = useRef([]);
  const ContactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const [open, setopen] = useState(false);
  const IconTL = useRef(null);
  const [ShowBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linkRef.current, ContactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linkRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ContactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    IconTL.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handelScroll = () => {
      const currentScrollY = window.scrollY;
    //   console.log("L" + lastScrollY);
    //   console.log("C" + currentScrollY);

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  const toggleMenu = () => {
    if (open) {
      tl.current.reverse();
      IconTL.current.reverse();
    } else {
      tl.current.play();
      IconTL.current.play();
    }
    setopen(!open);
  };
  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between bg-black w-full h-full uppercase px-10 text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "services", "about", "work", "contact"].map((elem, idx) => (
            <div key={idx} ref={(el) => (linkRef.current[idx] = el)}>
              <Link
                to={`${elem}`}
                duration={2000}
                smooth
                className="transition-all duration-300 cursor-pointer hover:text-white"
              >
                {elem}
              </Link>
            </div>
          ))}
        </div>

        <div
          ref={ContactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row md:items-center"
        >
          <div className="font-thin">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="lowercase tracking-wider text-pretty">
              abhijeet44kumar@gmail.com
            </p>
          </div>

          <div className="font-light">
            <p className="tracking-wider text-white/50">Social media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((elem, idx) => (
                <a
                  key={idx}
                  href={`${elem.href}`}
                  className="text:sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  [{elem.name}]
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div
        onClick={toggleMenu}
        className="fixed top-4 right-5 md:right-10 z-50 w-14 h-14 flex flex-col justify-center gap-1 translate-all duration-300 bg-black rounded-full cursor-pointer md:w-18 md:h-18 items-center"
        style={
          ShowBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="w-8 h-0.5 bg-white block rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="w-8 h-0.5 bg-white block rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default NavBar;
