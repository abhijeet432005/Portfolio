import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Marquee from '../components/contact/Marquee'
import { ScrollTrigger } from 'gsap/all'

const ContactSummary = () => {
    const items = ['Innovation', 'Precision', "Collaboration", "Excellence"]
    const items2 = ['contact', 'contact', 'contact', 'contact', 'contact', 'contact','contact','contact']
    const containerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'center center',
                end: '+=800 center',
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        })

        setTimeout(() => ScrollTrigger.refresh(), 200);
    })


  return (
    <>
    <section className='h-16' />
    <section ref={containerRef} className='min-h-screen flex flex-col items-center justify-between gap-12'>

    <Marquee items={items} />
        <div className='overflow-hidden font-light text-center contact-text-responsive'>
            <p>" Let's build a <br />
                <span className='font-normal'>memorable</span> & {' '}
                <span className='italic'>inspiring</span> <br />
                website <span className='text-gold'>together</span> "
            </p>
        </div>
    <Marquee items={items2} className='border-y-2 bg-transparent'/>
    </section>
    </>
  )
}

export default ContactSummary