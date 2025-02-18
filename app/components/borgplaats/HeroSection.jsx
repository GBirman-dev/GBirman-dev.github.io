import { motion } from "framer-motion";
import borgplaats from "@/public/assets/borgplaats/desktop.png"
import shadow from "@/public/assets/borgplaats/shadow.png"
import Image from "next/image"


const HeroSection = () => {
    return (
        <div className="py-32 z-50 relative" >
            {/* <Image src={backgroundImage} fill alt="backgroundImage"/> */}
            <div className="">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center space-y-1">
                        {/* First Image - Slides in from the Top on Scroll */}
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }} // Ensures animation triggers only once when 50% of the div is in view
                        >
                            <Image
                                src={borgplaats}
                                width={600}
                                height={400}
                                alt="borgplaats"
                                className="md:h-[442px] lg:w-[672px] md:w-[600px] w-[100%] h-auto"
                            />
                        </motion.div>

                        {/* Second Image - Slides in from the Bottom AFTER First Image on Scroll */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true, amount: 0.5 }} // Ensures animation triggers only once
                        >
                            <Image src={shadow} width={600} height={200} alt="borgplaats" className=" -mt-4  lg:w-[500px] md:w-[300px] w-[190px]  h-auto" />
                        </motion.div>
                    </div>

                </div>
            </div>

            <div>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="uppercase lg:text-[130px] -mt-8 md:text-[100px] text-[40px] text-center text-primary font-readexRegular">borgplaats</motion.h1>
                <p className="text-base  text-center font-avenir text-primary">Redefine the way people find, buy, sell, and learn about real estate.</p>
            </div>
        </div>
    );
};

export default HeroSection