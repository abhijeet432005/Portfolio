import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const AnimateText = ({ text, className}) => {
    const lines = text.split("\n").filter(line => line.trim() !== "")
    const lineRef = useRef([]);
    const containerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        if(lineRef.current.length > 0) {
            gsap.from(lineRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.5,
                ease: "back.out",
                scrollTrigger: {
                    trigger: containerRef.current
                }
            })
        }
    })
  return (
    <div ref={containerRef} className={className}>
        {lines.map((line, index) => (
            <span className="leading-relaxed block tracking-wider text-pretty" key={index} ref={(el) => lineRef.current[index] = el}>{line}</span>
        ))}
    </div>
  )
}

export default AnimateText