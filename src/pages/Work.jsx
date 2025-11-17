import React, { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/common/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify-icon/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Work = () => {
    const [currntIndex, setcurrntIndex] = useState(null);
    const PreviewRef = useRef(null);
    const moveX = useRef(null);
    const moveY = useRef(null);
    const overlay = useRef([]);
    const mouse = useRef({x: 0, y:0});

    const handelMouseEnter = (index) => {
        if(window.innerWidth < 768) return;
        setcurrntIndex(index)

        const el = overlay.current[index]
        if(!el) return;

        gsap.killTweensOf(el)
        gsap.fromTo(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
        }, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            duration: 0.15,
            ease: "power2.out"
        })

        gsap.to(PreviewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        })
    }
    const handelMouseLeave = (index) => {
        if(window.innerWidth < 768) return;
        setcurrntIndex(index)

        const el = overlay.current[index]
        if(!el) return;

        gsap.killTweensOf(el)
        gsap.to(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            duration: 0.2,
            ease: 'power2.in'
        })

        gsap.to(PreviewRef.current, {
            opacity: 0,
            scale: 0.85,
            duration: 0.3,
            ease: 'power2.out'
        })
    }
    const handelMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        mouse.current.x = e.clientX
        mouse.current.y = e.clientY

        moveX.current(mouse.current.x)
        moveY.current(mouse.current.y)
    }

    const text = `Projects shaped by discipline, detail, and a deep 
                focus on performance—built to work beautifully everywhere.`

    useGSAP(() => {
        moveX.current = gsap.quickTo(PreviewRef.current, "x" , {
            duration: 1.5,
            ease: "power3.out"
        })
        moveY.current = gsap.quickTo(PreviewRef.current, "y" , {
            duration: 2,
            ease: "power3.out"
        })

        gsap.from('#project', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            delay: 0.5,
            ease: "back.out",
            scrollTrigger: {
                trigger: "#project"
            }
        })

    })
  return (
    <section className="min-h-screen flex flex-col" id="work">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Work"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div className="relative flex flex-col font-light mt-9" onMouseMove={handelMouseMove}>
        {
            projects.map((project, index ) => (
                <div  key={project.id} id="project" className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0" onMouseEnter={() => handelMouseEnter(index)} onMouseLeave={() => handelMouseLeave(index)}>

                    {/* overlay  */}
                    <div ref={(el) => overlay.current[index] = el} className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path" />
                    {/* title  */}
                    <div className="flex justify-between px-7 text-black transition-all duration-500 md:group-hover:px-10 md:group-hover:text-white">
                        <h2 className="lg:text-[32px] text-[26px] leading-none">{project.name}</h2>
                        <Icon icon='lucide:arrow-up-right' className="md:size-6 size-5" />
                    </div>

                    {/* divider */}

                    <div className="w-full h-0.5 bg-black/80" />

                    {/* frameWork  */}
                    <div className="flex px-7 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">{project.frameworks.map(elem => (
                        <p key={elem.id} className="text-black transition-colors duration-500 md:group-hover:text-white">
                            {elem.name}
                        </p>
                    ))}</div>

                    {/* mobile preview image  */}

                    <div className="realtive flex items-center justify-center px-7 md:hidden h-[280px]">
                        <img src={`${project.bgImage}`} alt="" className="object-cover w-full h-full rounded-md brightness-90"/>

                        <img src={`${project.image}`} className="absolute bg-center px-11" alt="" />
                    </div>
                </div>
            ))
        }

        {/* desktop floating image  */}

        <div ref={PreviewRef} className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[780px] md:block hidden opacity-0">
            {currntIndex !== null && <img src={projects[currntIndex].image} alt="" className="object-cover w-full h-full" />}
            
        </div>
      </div>
    </section>
  );
};

export default Work;
