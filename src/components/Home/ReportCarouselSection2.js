"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { createGsapContext } from "@/lib/gsap";
import GradientBadge from "@/components/ui/GradientBadge";

const slides = [
  {
    image: "/images/img-carousel1.png",
    alt: "Person checking old health messages on phone",
    title: "your prescription history exists only in WhatsApp forwards?",
    description: "Scattered across 47 chats. None backed up.",
  },
  {
    image: "/images/img-carousel2.png",
    alt: "Family and doctor discussing care",
    title: "the ER doctor doesn't know you're allergic to penicillin?",
    description: "And your family is too panicked to remember.",
  },
  {
    image: "/images/img-carousel3.png",
    alt: "Patient and physician in consultation room",
    title: "your latest scan stays in one clinic's local system?",
    description: "And treatment is delayed while records are requested.",
  },
  {
    image: "/images/img-carousel4.png",
    alt: "Clinician searching through scattered records",
    title: "your reports are scattered when every second matters?",
    description: "Critical decisions can't wait for file hunting.",
  },
  {
    image: "/images/img-carousel5.png",
    alt: "Clinician searching through scattered records",
    title: "your blood group report is buried in old emails?",
    description: "Emergency care needs immediate facts, not guesses.",
  },
  {
    image: "/images/img-carousel6.png",
    alt: "Clinician searching through scattered records",
    title: "your medical timeline is split across three hospitals?",
    description: "Fragmented records lead to repeated tests and delays.",
  },
  {
    image: "/images/img-carousel7.png",
    alt: "Clinician searching through scattered records",
    title: "the one report that could save your life isn't available?",
    description: "A missing document can change everything.",
  },
];

export default function ReportCarouselSection() {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef(null);
  const isHoveredRef = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => setActiveIndex(api.selectedScrollSnap());
    handleSelect();
    api.on("select", handleSelect);

    return () => api.off("select", handleSelect);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      if (autoplayRef.current) return;
      autoplayRef.current = setInterval(() => {
        if (!isHoveredRef.current) api.scrollNext();
      }, 3500);
    };

    const stopAutoplay = () => {
      if (!autoplayRef.current) return;
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };

    startAutoplay();
    return () => stopAutoplay();
  }, [api]);

  useEffect(() => {
    return createGsapContext(sectionRef, (gsap) => {
      gsap.fromTo(
        ".report-intro",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".report-carousel",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".report-carousel", start: "top 80%" },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-10 md:py-14">
      <div className="report-intro mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-8">
        <GradientBadge innerClassName="bg-white text-[#141E7A]">
          The Moment No One Thinks About
        </GradientBadge>

        <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#7B1FA2] md:text-4xl">
          When your health history is missing, things go wrong.
          <span className="block font-normal text-[#5A2D82] mt-2 md:text-xl">
            Not theoretically  |  Not rarely  |  Every Single Day.
          </span>
        </h2>
      </div>

      <div className="report-carousel mx-auto mt-7 max-w-7xl px-3 md:px-8">
        <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="relative lg:px-2"
            onMouseEnter={() => {
            isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
            isHoveredRef.current = false;
            }}
        >
            <CarouselContent className="-ml-4 py-3 lg:pr-4">
            {slides.map((slide, index) => (
                <CarouselItem
                key={`${slide.title}-${index}`}
                className="pl-4 basis-[86%] md:basis-1/2 lg:basis-1/4"
                >
                <article
                    className={[
                    "group relative flex flex-col min-w-0",
                    "rounded-[32px] border-2 border-[#BFC0E4] bg-[#D9C6E3] p-2",
                    "shadow-[0_10px_26px_rgba(63,55,109,0.12)] transition duration-300",
                    "h-[clamp(340px,62vh,400px)]",
                    activeIndex === index
                        ? "scale-[1.01] opacity-100 hover:border-[#C22ECC] hover:shadow-[0_14px_30px_rgba(194,46,204,0.2)]"
                        : "scale-[0.97] opacity-85",
                    ].join(" ")}
                >
                    <div
                    className={[
                        "relative overflow-hidden rounded-[32px] transition-[height] duration-300 ease-out",
                        "h-[clamp(200px,36vh,250px)]",
                        activeIndex === index ? "lg:group-hover:h-[245px]" : "",
                    ].join(" ")}
                    >
                    <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 25vw, (min-width: 768px) 50vw, 86vw"
                        priority={index === 0}
                    />
                    </div>

                    <div
                    className={[
                        "flex flex-1 flex-col px-5 pb-5 pt-4",
                        "transition-[padding,transform] duration-300 ease-out",
                        activeIndex === index ? "lg:group-hover:translate-y-[1px]" : "",
                    ].join(" ")}
                    >
                    <h3 className="text-[clamp(18px,1vw,25px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#252B7F]">
                        What if&nbsp;
                        <span className="font-normal text-[#282672]">{slide.title}</span>
                    </h3>
                    <p className="mt-1 text-[clamp(14px,0.7vw,18px)] font-semibold text-[#282672]">
                        {slide.description}
                    </p>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-[30px] bg-[#C22ECC] opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100" />
                    <p className="sr-only">{slide.title}</p>
                </article>
                </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>
    </div>

    </section>
  );
}
