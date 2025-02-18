'use client';

import Image from "next/image";
import George from "@/public/assets/covers-profiles/George-profile-open.webp";
import GeorgeMobile from "@/public/assets/covers-profiles/George-profile-closed.webp";
import Link from "next/link";
import { skills, socialIcons } from "@/data";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Hero = () => {
  return (
    <section
      id="about"
      className="bg-cover py-8"
      style={{ backgroundImage: "url('./assets/backgrounds/homepage-hero-background-texture.webp')" }}
    >
      <div className="flex max-w-7xl py-16 md:px-[40px] flex-col-reverse px-[18px] mx-auto mt-20 items-center lg:flex-row justify-between">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="lg:w-[70%] w-full flex flex-col text-center lg:text-start gap-5">
          <motion.h1 variants={fadeInUp} className="lg:text-7xl md:text-5xl text-4xl font-readexRegular font-normal text-primary">
            Hello! <br /> I’m <span className="text-horizon">a designer,</span> <br /> call me George.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-garnet text-xl font-readexLight">
            Senior UX/UI Designer
          </motion.p>
          <motion.p variants={fadeInLeft} className="md:text-md text-base font-readexLight">
            I transform ideas into amazing digital products <span className="text-xl text-horizon !font-bold">since 2018.</span>
            <br /> And this is my <span className="text-garnet text-xl">portfolio.</span>
          </motion.p>
          <motion.div variants={fadeInUp} className="flex items-center justify-center md:flex-row flex-col lg:justify-start gap-8">
            <motion.div className="flex md:flex-row flex-col gap-10  mt-5 items-center">
              <div className="flex  gap-[40px] items-center">
                {socialIcons.map((icon, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Image src={icon.icon} priority width={100} height={100} className="w-10 h-10" alt={icon.name} />
                  </motion.div>
                ))}
              </div> 
              <motion.div variants={fadeInUp}>
                <Link
                  href="/assets/cv.pdf"
                  target="_blank"
                  className="p-2 px-10 border-horizon rounded-full border font-readexRegular text-horizon hover:text-pantone transition duration-300 ease-in-out hover:bg-primary"
                >
                  Download CV
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="order-1">
          <Image src={George} priority height={400} width={300} className="w-[400px] h-auto hidden lg:flex" alt="george-birman" />
          <Image src={GeorgeMobile} priority height={400} width={300} className="w-[400px] h-auto flex mb-10 lg:hidden" alt="george-birman" />
        </motion.div>
      </div>

      <div className="border-t border-b w-full py-4 border-primary">
        <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear", repeatType: "loop" }}
            className="flex w-max gap-32"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex items-center gap-32">
                <Image src={skill.icon} height={90} width={90} alt={skill.name} />
                <span className="font-readexRegular text-lg text-primary">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
