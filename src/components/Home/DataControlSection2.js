"use client";

import React from "react";
import Image from "next/image";
import GradientBadge from "@/components/ui/GradientBadge";

const cardData = [
  { title: "Zero Data Reselling", icon: "/images/pr1.png" },
  { title: "FHIR + ABDM Aligned", icon: "/images/pr2.png" },
  { title: "AES-256 Encryption", icon: "/images/pr3.png" },
  { title: "You Own Your Data", icon: "/images/pr4.png" },
  { title: "Complete Audit Trail", icon: "/images/pr5.png" },
  { title: "Consent-Based Access", icon: "/images/pr6.png" },
];

export default function DataControlSection() {
  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-8">
      <div className="mxxxl:container xl:container w-[90%] mx-auto text-center">
        {/* Intro */}
        <GradientBadge innerClassName="bg-white text-[#141E7A]">
          Privacy & Security
        </GradientBadge>

        <h2 className="mt-4 text-[28px] md:text-[40px] font-semibold text-[#5C4AFF]">
          <span className="inline-flex flex-wrap justify-center gap-x-3 md:gap-x-4">
            {["Your", "Data.", "Your", "Control.", "Absolutely."].map(
              (word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={
                    word === "Absolutely."
                      ? "font-bold text-[#3B1ED0]"
                      : ""
                  }
                >
                  {word}
                </span>
              )
            )}
          </span>
        </h2>

        <p className="mt-3 text-[#000339] max-w-3xl mx-auto text-sm md:text-base">
          Built with healthcare-grade security from the ground up. We don&apos;t
          just protect your data—we give you complete ownership of it.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card) => (
            <div
              key={card.title}
              className="
                group relative overflow-hidden
                rounded-[30px]
                border border-[#CED0E5]
                bg-[#ECECF5]
                px-6 py-8 text-center
                [box-shadow:0_2px_0_rgba(255,255,255,0.8)_inset,0_-1px_0_rgba(197,202,230,0.8)_inset,0_5px_0_rgba(216,219,237,0.95),0_11px_24px_rgba(51,61,122,0.14)]
                transition-all duration-300
                hover:[box-shadow:0_2px_0_rgba(255,255,255,0.92)_inset,0_-1px_0_rgba(197,202,230,0.95)_inset,0_7px_0_rgba(212,216,236,1),0_14px_28px_rgba(51,61,122,0.18)]
              "
            >
              <div className="pointer-events-none absolute inset-[2px] rounded-[28px] border border-white/55" />

              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center drop-shadow-[0_8px_9px_rgba(125,104,199,0.22)]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={96}
                  height={96}
                  className="h-28 w-28 object-contain"
                />
              </div>

              <p className="relative z-10 mt-3 text-[#111D75] font-semibold drop-shadow-[0_1px_0_rgba(255,255,255,0.65)]">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[#000339] text-base md:text-lg">
          No hospital, clinic, insurer, or doctor owns your data. Only you do.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 md:mt-16">
        <div className="relative overflow-hidden rounded-[22px] px-6 py-10 md:px-12 md:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_#0E1896_0%,_#640B91_50%,_#9F028D_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(240.72deg,_#9F028D_11.75%,_#640B91_59.36%,_#0E1896_97.85%)]" />

          <div className="absolute inset-0 opacity-95 bg-no-repeat bg-[radial-gradient(circle_at_112%_50%,rgba(255,255,255,1)_0_100px,rgba(255,255,255,1)_100px_300px,rgba(255,255,255,0.8)_300px_400px,rgba(255,255,255,0.6)_400px_500px,rgba(255,255,255,0.5)_500px_600px,rgba(255,255,255,0.3)_600px_700px,rgba(255,255,255,0.2)_700px_800px,rgba(255,255,255,0.1)_800px)]" />

          <div className="relative z-10 flex min-h-[260px] items-center">
            <div className="w-full max-w-[640px] text-center md:text-left">
              <h3 className="text-[28px] font-semibold leading-tight text-white md:text-[42px] md:leading-[1.15]">
                Don&apos;t wait for a crisis to organise <br className="hidden sm:block" />
                your medical life.
              </h3>

              <p className="mt-3 max-w-[560px] text-[15px] text-white/90 md:text-[16px]">
                The best time to claim your Health Identity is before you need it.
              </p>

              <button
                type="button"
                className="
                  mt-6 inline-flex items-center justify-center
                  rounded-[10px]
                  bg-[#E7D5FF]
                  px-5 py-2.5
                  text-sm font-semibold text-[#2B0B78]
                  shadow-[0_10px_18px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.65)]
                  transition
                  hover:brightness-105
                  active:scale-[0.98]
                "
              >
                Claim Your Health Identity
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
