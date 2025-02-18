'use client'

import Image from "next/image";
import footerLogo from "@/public/assets/logo/logo-bir-art-footer.webp"
import { footerIcons } from "@/data";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-horizon/90 relative">
      <div className="absolute inset-0 -z-10 w-full bg-cover h-full" style={{backgroundImage: "url('assets/backgrounds/footer-abstract-background.webp')"}}/>
      <div className="flex items-center lg:flex-row flex-col lg:gap-0 md:gap-8 gap-7 justify-between max-w-7xl py-16 px-[40px] mx-auto">
        <Link href='/'>
          <Image src={footerLogo} width={100} height={100} alt="footer-logo" className="h-auto lg:w-[120px] md:w-[100px] w-[80px]" />
        </Link>
        <div className="bg-gradient-to-bl from-[rgba(122,135,251,.7)] to-[rgba(255,212,156,.7)] lg:w-[421px] md:w-[390px] w-[300px] p-0.5 rounded-full  flex items-center justify-center">
          <div className="relative md:px-10 px-16 py-2 rounded-[40px] gap-6 lg:w-[421px] md:w-[390px] w-[300px] flex justify-center bg-pantone md:order-none order-3 
    before:absolute before:inset-0 before:rounded-[40px] before:bg-gradient-to-bl before:from-[rgba(122,135,251,.7)] before:to-[rgba(255,212,156,.7)] 
    before:-z-10 before:p-[2px] before:[mask-image:linear-gradient(white,white)]">
            {
              footerIcons.map((icon, index) => (
                
                <Link
                  href={icon.link}
                  key={index}
                  className={`group bg-thunder flex justify-center items-center hover:w-full hover:h-full hover:top-0 
                transition duration-300 ease-in-out rounded-full px-2 py-1.5 hover:absolute
                ${index === 0 ? "hover:bg-[#0077B7]" : index === 1 ? "hover:bg-[#1C8ADB]" : "hover:bg-[#27A11A]"}`}
                >
                  <Image
                    src={icon.icon}
                    alt={icon.icon}
                    priority
                    width={100}
                    height={100}
                    className="md:h-[18px] h-[16px] w-[16px] md:w-[18px] transition duration-300"
                  />
                </Link>

              ))
            }
          </div>
        </div>
        <Link href='/assets/cv.pdf' target="_blanck" className="bg-primary hover:bg-garnet lg:w-fit md:w-[340px] w-[180px] text-center text-[14px] h-full py-3 text-pantone px-6 border border-pantone rounded-full">
          Download Resume
        </Link>
      </div>
    </footer>
  );
};

export default Footer