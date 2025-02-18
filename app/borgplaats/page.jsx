'use client'

import ResponsbleTitle from "../components/utils/ResponsbleTitle";
import BorderedSection from "../components/utils/BorderedSection";
import { borgplaatsWorkflow, responsibleCardsDetails } from '@/data';
import Landingpages from "../components/borgplaats/Landingpages";
import Footer from "../components/utils/ProjectFooter";
import HeroSection from "../components/borgplaats/HeroSection";
import Header from "../components/utils/Header";
import SecondSection from "../components/borgplaats/SecondSection";
import ThirdSection from "../components/utils/WorkFlowContainer";
//import backgroundImage from '@/public/assets/borgplaats/borgplaats.jfif'

const Borgplaats = () => {
  return (
    <>
      <section className='relative '  >
        <div className="absolute inset-0 -z-10 w-full bg-cover h-full" style={{ backgroundImage: "url('/assets/borgplaats/borgplaats.jfif')" }}/>
        <div className=" absolute z-20 inset-0 bg-gradient-to-b from-black/50 to-transparent h-1/2 w-full" />
        <div className=" absolute z-0 inset-0 bg-[#ECECEC]/90 w-full" />
        <div className=" max-w-7xl  md:px-[40px] px-[18px] mx-auto z-20" >
          <Header text="www.Borgplaats.nl" link='https://borgplaats.nl' year='© February 2025'/>
         <HeroSection/>    
        </div>
      </section>

      <section >
        <SecondSection/>  
      </section>

      <section > 
        <ThirdSection
          data={borgplaatsWorkflow}
          text='The journey from an idea to a fully operational product involved multiple phases of the design thinking methodology, ensuring the platform&apos;s proper development and execution.' />
      </section>

      <section className="bg-[#F6F7F9]">
        <div className=" max-w-7xl flex flex-col gap-10  md:px-[40px] px-[18px] mx-auto z-20 py-20" >
          <ResponsbleTitle />
          <BorderedSection data={responsibleCardsDetails} className='bg-[#0D4749]' />
        </div>
      </section>
      
      <Landingpages />
      <Footer
        bgColor="bg-[#003539]"
        link='https://borgplaats.nl'
        className='bg-[#4CF4CD]'
        project='Borgplaats'
      />
      
    </>
  );
};

export default Borgplaats