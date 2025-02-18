'use client'

import ResponsbleTitle from "../components/utils/ResponsbleTitle";
import BorderedSection from "../components/utils/BorderedSection";
import { rawIdeaCardsDetails, rawIdeaWorkflow } from '@/data';
import Footer from "../components/utils/ProjectFooter";
import HeroSection from "../components/rawidea/HeroSection";
import Header from "../components/utils/Header";
import SecondSection from "../components/rawidea/SecondSection";
import ThirdSection from "../components/utils/WorkFlowContainer";
import smoke from "@/public/assets/project-thumbnails/rawidea/smoke.png"
import { motion } from "framer-motion";
import Image from "next/image";
import OurTeam from "../components/rawidea/OurTeam";
import Landingpages from "../components/rawidea/LandingPages";

const RawIdea = () => {
  return (
    <>
      <section className='relative '  >
        <div className="absolute inset-0 -z-10 w-full bg-blend-multiply h-full bg-cover" style={{ backgroundImage: "url('/assets/project-thumbnails/rawidea/rawIdea-bg.png')" }} />
        <div className=" absolute z-20 inset-0 bg-gradient-to-b from-black/90 to-transparent h-1/2 w-full" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.5 }}
          className="relative"
        >
          <Image
            src={smoke}
            width={700}
            height={300}
            alt="smoke"
            className="z-30 h-auto absolute top-0 left-1/2 -translate-x-1/2 bg-blend-multiply"
          />
        </motion.div>
        <div className=" absolute z-0 inset-0 bg-[#0C0C0C]/90 w-full" />
        <div className=" max-w-7xl relative  md:px-[40px] px-[18px] w-full mx-auto z-30" >
          <Header text="www.rawidea.org" link='https://rawidea.org' year='© September 2025' />
          <HeroSection />
          

        </div>
      </section>
      <SecondSection />
      <OurTeam />
      <ThirdSection
        data={rawIdeaWorkflow}
        text='Our approach to web design projects is structured to ensure a thorough understanding of your needs and the delivery of a high-quality final product.'
      />
     

      <section className="bg-[#F6F7F9]">
        <div className=" max-w-7xl flex flex-col gap-10  md:px-[40px] px-[18px] mx-auto z-20 py-20" >
          <ResponsbleTitle />
          <BorderedSection data={rawIdeaCardsDetails} className='bg-[#171717]' />
        </div>
      </section>
      
      <Landingpages />
      <Footer
        bgColor="bg-[#0C0C0C]"
        link='https://rawidea.org'
        className='bg-[#D4FF62]'
        project='RawIdea'
      />
      
    </>
  );
};

export default RawIdea;