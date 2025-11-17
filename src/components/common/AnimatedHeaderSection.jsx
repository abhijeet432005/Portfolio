import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import AnimateText from './AnimateText';
import { ScrollTrigger } from 'gsap/all';

const AnimatedHeaderSection = ({subTitle, title, text, textColor, withScrollTrigger = false}) => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: withScrollTrigger ? {
                trigger: contextRef.current
            } : undefined
        })

        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        })
        tl.from(headerRef.current, {
            opacity: 0,
            y: '200',
            duration: 1,
            ease: "circ.out"
        }, '<+0.2')

    })
  return (
    <div ref={contextRef}>
                <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
                    <div ref={headerRef} className='flex flex-col justify-center gap-6 pt-16 sm:gap-10'>
                        <p className={`text-sm font-light tracking-[0.5rem] ${textColor} px-7`}>{subTitle}</p>

                        <div className='px-7'>
                            <h1 className={`uppercase whitespace-nowrap text-[5vh] md:text-[8vh] lg:text-[7vw] leading-[2rem] lg:leading-[5.4vw] md:leading-[6vh] ${textColor}`}>{title}</h1>
                        </div>
                    </div>
                </div>

                <div className={`relative px-10 ${textColor}`}>
                    <div className='absolute inset-x-0 border-t-2'></div>
                    <div className='py-12 sm:py-16 text-end'>
                        <AnimateText text={text} className={`font-light uppercase text-[2.1vh] md:text-[3vh] ${textColor}`} />
                    </div>
                </div>
    </div>
  )
}

export default AnimatedHeaderSection