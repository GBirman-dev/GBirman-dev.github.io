"use client";

import { testimonials } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeadingText from "./utils/HeadingText";
import testimonialIcon from "@/public/assets/icons/testimonials-quotes.svg";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const testimonialsPerSet = 4;
  const totalSets = Math.ceil(testimonials.length / testimonialsPerSet);

  // Auto-play functionality (every 5 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSet((prev) => (prev + 1) % totalSets);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [totalSets]);

    return (
        <section
            id="testimonials"
            style={{
                backgroundImage:
                    "url('./assets/backgrounds/testimonial-background-pexels.webp')",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-7xl py-32 md:px-[40px] px-[18px] mx-auto">
                <div>
                    <HeadingText className="text-primary items-center flex gap-8">
                        Work testimonials
                        <Image
                            src={testimonialIcon}
                            priority
                            width={32}
                            height={32}
                            alt="testimonial-icon"
                            className="md:h-[32px] md:w-[32px] w-[24px] h-[24px]"
                        />
                    </HeadingText>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSet}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid lg:grid-cols-2 gap-8 w-full"
                        >
                            {testimonials
                                .slice(currentSet * testimonialsPerSet, (currentSet + 1) * testimonialsPerSet)
                                .map((testimony, index) => (
                                    <div
                                        key={index}
                                        className="border border-[linear-gradient(to_bottom_left,rgba(122,135,251,.7 ),rgba(255,212,156,.7))] p-4 lg:p-8 rounded-lg bg-[linear-gradient(to_bottom_left,rgba(12,41,61,.7),black)] w-full"
                                    >
                                        <div className="flex items-center gap-3 text-white">
                                            <div className="border border-accent rounded-full">
                                                <Image
                                                    src={testimony.img}
                                                    alt={testimony.name}
                                                    width={100}
                                                    height={100}
                                                    priority
                                                    className="md:h-14 md:w-14 h-10 w-10 rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-patone font-readexRegular">
                                                    {testimony.name}
                                                </div>
                                                <div className="text-white/50 text-xs">
                                                    {testimony.title}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 lg:text-base md:text-[14px] text-[12px] font-avenir tracking-tight text-white/70">
                                            {testimony.text}
                                        </div>
                                    </div>
                                ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Circular Indicators */}
                    <div className="flex gap-2 mt-10">
                        {Array.from({ length: totalSets }).map((_, index) => (
                            <div key={index} className="rounded-full bg-pantone flex items-center justify-center w-6 h-6">
                                <button
                                    onClick={() => setCurrentSet(index)}
                                    className={`w-5 h-5 rounded-full transition-all duration-300 
                                    ${currentSet === 0 && index === 0 ? "bg-primary" : ""}
                                    ${currentSet === 1 && index === 1 ? "bg-garnet" : ""}
                                    ${currentSet !== index ? "bg-pantone" : ""} `}
                                ></button>
                            </div>
                        ))}
                    </div>

          
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
