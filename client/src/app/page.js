import Hero from "@/components/Hero";
import AboutExperience from "@/components/AboutExperience";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TrustedCustomers from "@/components/TrustedCustomers";
import WhatWeDo from "@/components/WhatWeDo";
import ServiceCTA from "@/components/ServiceCTA";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";


export default function Home() {
  return (
    <>
      {/* HERO SECTION – immediately after header */}
      <Hero />
      {/* <AboutExperience /> */}
      <Services />
      <Process />
      <TrustedCustomers />
      <WhatWeDo />
      <ServiceCTA />
      {/* <CaseStudies /> */}
      <Team />
      <FAQ />
      {/* <Blog /> */}
      
    </>
  );
}
