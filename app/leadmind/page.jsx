

'use client'

import ResponsbleTitle from "../components/utils/ResponsbleTitle";
import BorderedSection from "../components/utils/BorderedSection";
import { borgplaatsWorkflow, leadmindCardsDetails, leadmindWorkflow, responsibleCardsDetails } from '@/data';

import Footer from "../components/utils/ProjectFooter";
import HeroSection from "../components/leadmind/HeroSection";
import Header from "../components/utils/Header";
import SecondSection from "../components/leadmind/SecondSection";
import ThirdSection from "../components/utils/WorkFlowContainer";
import polyTopRight from '@/public/assets/project-thumbnails/leadmind/Polygons-topright.png'
import polyTopLeft from '@/public/assets/project-thumbnails/leadmind/Polygons-topleft.png'
import polyBottomRight from '@/public/assets/project-thumbnails/leadmind/Polygons-bottomright.png'
import Image from "next/image";
import Landingpages from "../components/leadmind/LandingPages";
import polyBottomLeft from '@/public/assets/project-thumbnails/leadmind/Polygons-bottomleft.png'
//import backgroundImage from '@/public/assets/borgplaats/borgplaats.jfif'

const LeadMind = () => {
  return (
    <>
      <section className='relative' >
        <div className="absolute inset-0 -z-10 w-full h-full bg-cover" style={{ backgroundImage: "url('/assets/project-thumbnails/leadmind/hero-bg.jfif')" }}/>
        <div className=" absolute z-20 inset-0 bg-gradient-to-b from-black/50 to-transparent h-1/2 w-full" />
        <div className=" absolute z-0 inset-0 bg-[#ECECEC]/70 w-full" />
        <div className=" max-w-7xl  md:px-[40px] px-[18px] mx-auto z-10" >
          <Header text='www.leadmind.agency' link='https://leadmind.agency' year='© March 2024'/>
         <HeroSection/>    
        </div>
      </section>

      <section className="relative">
        <SecondSection />  
        <Image src={polyTopLeft } width={500} height={450} alt="polytopleft" className="absolute top-0 left-0" />
        <Image src={polyTopRight } width={500} height={450} alt="polytopleft" className="absolute top-0 right-0" />
        <Image src={polyBottomLeft } width={500} height={450} alt="polytopleft" className="absolute bottom-0 left-0" />
        <Image src={polyBottomRight} width={350} height={300} alt="polytopleft" className="absolute bottom-0 right-0" />
      </section>

      <section > 
        <ThirdSection
          text='Through the double diamond design thinking approach, I crafted a bespoke design for the agency that truly sets them apart from the competition.'
          data={leadmindWorkflow}
        />
      </section>

      <section className="bg-[#F6F7F9]">
        <div className=" max-w-7xl flex flex-col gap-10  md:px-[40px] px-[18px] mx-auto z-20 py-20" >
          <ResponsbleTitle />
          <BorderedSection  className='bg-[#2A3333]' data={leadmindCardsDetails}/>
        </div>
      </section>
      
      <Landingpages />
      <Footer
        className='bg-[#FFA407]'
        link='https://leadmind.agency'
        bgColor='bg-[#2A3333]' 
        project='LeadMind'
      />
      
    </>
  );
};

export default LeadMind;