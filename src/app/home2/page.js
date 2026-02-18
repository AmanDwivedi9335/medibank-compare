"use client";
import Hero2 from "@/components/Home/Hero2";
import ReportCarouselSection2 from "@/components/Home/ReportCarouselSection2";
import HealthIdentitySection from "@/components/Home/HealthIdentitySection2";
import LovedOnesSection from "@/components/Home/LovedOneSection2";
import DataControlSection from "@/components/Home/DataControlSection2";
import ContactCard from "@/components/Home/ContactCard";
import Howitworks from "@/components/Home/Howitworks";
import Realconsequences from "@/components/Home/Realconsequences";
import Subscription from "@/components/Home/Subscription";

//Vaishnavi's design

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="">
        <Hero2 />
      </div>

      {/* About Section */}
      <div className="bg-white py-6 md:py-12 px-4 md:px-8">
        <ReportCarouselSection2 />
      </div>

      {/* HealthIdentity Section */}
      <div className="bg-white py-6 md:py-12 px-4 md:px-8">
        <HealthIdentitySection />
      </div>

      <div className="">
        <Realconsequences />
      </div>

      <div className="">
        <Howitworks />
      </div>

      {/* LovedOnes Section */}
      <div className="bg-white py-6 md:py-12 px-4 md:px-8">
        <LovedOnesSection />
      </div>

      <div className="">
        <Subscription />
      </div>

      {/* Data Control Section */}
      <div className="bg-white py-6 md:py-12 px-4 md:px-8">
        <DataControlSection />
      </div>
    </>
  );
}
