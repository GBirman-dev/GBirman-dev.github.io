import { motion } from "framer-motion";
import leadmind from "@/public/assets/project-thumbnails/leadmind/desktop.png"
import shadow from "@/public/assets/borgplaats/shadow.png"
import Image from "next/image"


const HeroSection = () => {
    return (
        <div className="py-32 z-40 relative" >
            {/* <Image src={backgroundImage} fill alt="backgroundImage"/> */}
            <div className="">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                        {/* First Image - Slides in from the Top on Scroll */}
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            
                        >
                            <Image
                                src={leadmind}
                                width={600}
                                height={400}
                                alt="leadmind"
                                className="md:h-[442px] lg:w-[672px] md:w-[600px] w-[100%] h-auto"
                            />
                        </motion.div>

                        {/* Second Image - Slides in from the Bottom AFTER First Image on Scroll */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        
                        >
                            <Image src={shadow} width={600} height={200} alt="borgplaats" className="  md:-mt-4 -mt-2 lg:w-[500px] md:w-[300px] w-full  h-auto " />
                        </motion.div>
                    </div>

                </div>
            </div>

            <div>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="uppercase  md:-mt-8 -mt-3 lg:text-[130px] md:text-[100px] text-[40px] text-center bg-gradient-to-r from-[#A715AD] via-[#FF1D3B] to-[#FF960E] text-transparent bg-clip-text font-readexRegular">leadmind
                    
                </motion.h1>
                <p className="text-base  text-center font-avenir text-[#FF1D3B]">Scale up your business with design and leads provided by agency.</p>
            </div>
        </div>
    );
};

export default HeroSection