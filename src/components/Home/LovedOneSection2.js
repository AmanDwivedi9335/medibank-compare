"use client";

import Image from "next/image";
import GradientBadge from "@/components/ui/GradientBadge";

const lovedOnes = [
  { label: "Parents", image: "/images/grandparents.png" },
  { label: "Partner", image: "/images/partner.png" },
  { label: "Children", image: "/images/children.png" },
  { label: "Grandparents", image: "/images/grandparents2.png" },
];

export default function LovedOnesSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      {/* Intro */}
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-8">
        <GradientBadge innerClassName="bg-white text-[#141E7A]">
          For Your Loved Ones
        </GradientBadge>

        <h2 className="mt-5 text-2xl font-normal text-[#3B1ED0] md:text-4xl">
          Your Health Identity is Your <b>“Protection”</b>
        </h2>

        <p className="mt-4 max-w-3xl text-sm text-[#000339] md:text-base">
          But your Family&apos;s Health Identity is your “Power”. Create linked health
          identities of your parents, your loved ones and your children so you are
          always prepared – even when they can&apos;t be
        </p>
      </div>

      {/* Diagram */}
      <div className="mx-auto mt-12 flex w-full max-w-4xl justify-center px-4 md:px-8">
        <div className="relative h-[340px] w-full max-w-[420px]">
          {/* Connector lines */}
          <div className="absolute left-1/2 top-1/2 h-[42px] w-px -translate-x-1/2 -translate-y-[calc(100%+30px)] bg-[#D9C2FF]" />
          <div className="absolute left-1/2 top-1/2 h-[42px] w-px -translate-x-1/2 translate-y-[30px] bg-[#D9C2FF]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[58px] -translate-y-1/2 -translate-x-[calc(100%+36px)] bg-[#D9C2FF]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[58px] -translate-y-1/2 translate-x-[36px] bg-[#D9C2FF]" />

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <Image
              src="/images/medibank-grd-logo.png"
              alt="MediBank"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Top */}
          <div className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center gap-2">
            <div className="h-16 w-16 overflow-hidden">
              <Image
                src={lovedOnes[0].image}
                alt={lovedOnes[0].label}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xs font-medium text-[#2D2261]">
              {lovedOnes[0].label}
            </span>
          </div>

          {/* Left */}
          <div className="absolute left-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
            <div className="h-16 w-16 overflow-hidden">
              <Image
                src={lovedOnes[1].image}
                alt={lovedOnes[1].label}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xs font-medium text-[#2D2261]">
              {lovedOnes[1].label}
            </span>
          </div>

          {/* Right */}
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
            <div className="h-16 w-16 overflow-hidden">
              <Image
                src={lovedOnes[2].image}
                alt={lovedOnes[2].label}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xs font-medium text-[#2D2261]">
              {lovedOnes[2].label}
            </span>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
            <div className="h-16 w-16 overflow-hidden">
              <Image
                src={lovedOnes[3].image}
                alt={lovedOnes[3].label}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xs font-medium text-[#2D2261]">
              {lovedOnes[3].label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
