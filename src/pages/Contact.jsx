import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/common/AnimatedHeaderSection";
import Marquee from "../components/contatct/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Have an idea or need help with a project?
I’m always open to talk and explore what we can create.`;

    const items = ['just imagine, i code', 'just imagine, i code', 'just imagine, i code', 'just imagine, i code', 'just imagine, i code',]

    useGSAP(() => {
        gsap.from('.sociak-link', {
            y: 100,
            duration: 0.5,
            delay: 1,
            stagger: 0.5,
            opacity: 0,
            ease: 'back.out',
            scrollTrigger: {
                trigger: ".sociak-link"
            }
        })
    }, [])
  return (
    <section
      id="contact"
      className="flex flex-col justify-between bg-black min-h-screen"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="flex px-7 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
            <div className="flex flex-col w-full gap-10">
                <div className="sociak-link">
                    <h2>E-mail</h2>
                    <div className="w-full h-px my-2 bg-white/30"></div>
                    <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                        abhijeet44kumar@gmail.com
                    </p>
                </div>
                <div className="sociak-link">
                    <h2>Phone</h2>
                    <div className="w-full h-px my-2 bg-white/30"></div>
                    <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                        9873601547
                    </p>
                </div>
                <div className="sociak-link">
                    <h2>Social Media</h2>
                    <div className="w-full h-px my-2 bg-white/30"></div>
                    <div className="flex flex-wrap gap-2">
                        {socials.map((social, index) => (
                            <a href={social.href} className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200" key={index}>[ {social.name} ]</a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>

      <Marquee items={items} className="text-white bg-transparent"/>
    </section>
  );
};

export default Contact;
