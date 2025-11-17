import { useRef } from "react";
import { servicesData } from "../../constants";
import AnimatedHeaderSection from "../common/AnimatedHeaderSection";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DetailService = () => {
  const Text = `I build fast, secure and conversion-focused websites 
    designed to work flawlessly, not frustrate your users.`;

  const serviceRefs = useRef([]);

  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
        if (!el) return;

        gsap.from(el, {
            y: 200,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            },
            duration: 1,
        })
    })
  }, [])

  return (
    <section id="services" className="bg-black min-h-screen rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={Text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl tracking-widest leading-relaxed lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIdx) => (
                  <div key={`item-${index}-${itemIdx}`} className="">
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIdx + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIdx < service.items.length - 1 && (
                      <div className="w-full h-px my02 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DetailService;
