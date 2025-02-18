import { motion } from "framer-motion";
import rawidea from "@/public/assets/project-thumbnails/rawidea/desktop.png"
import phone from "@/public/assets/project-thumbnails/rawidea/phone-rawidea.png"
import shadow from "@/public/assets/borgplaats/shadow.png"
import Image from "next/image"


const HeroSection = () => {
    return (
        <div className="py-32 z-50 relative" >
            {/* <Image src={backgroundImage} fill alt="backgroundImage"/> */}
            <div className="">
                <div className="flex flex-col relative items-center">
                    <div className="flex flex-col items-center relative  justify-center space-y-1">
                        
                        <motion.div
                            initial={{ y: -100, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }} 
                        >
                            <Image
                                src={rawidea}
                                width={600}
                                height={400}
                                alt="rawIdea"
                                className="md:h-[442px] lg:w-[672px] md:w-[600px] w-full h-auto"
                            />
                        </motion.div>

                        
                        <motion.div
                            initial={{ y: 100, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 1.8, ease:"easeInOut", delay: 2.0 }} 
                        >
                            <Image
                                src={phone}
                                width={600}
                                height={400}
                                alt="phone"
                                className="md:h-[590px] md:w-[290px] h-[350px] w-[190px] absolute lg:top-[215px] md:top-[200px] top-[100px] left-1/2 -translate-y-1/2 -translate-x-1/2"
                            />
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
                    className="uppercase lg:text-[130px] md:text-[100px] text-[40px] text-center text-[#949494] font-readexRegular mt-12 md:mt-0"
                >
                    rawidea
                </motion.h1>

                <p className="text-base  text-center font-avenir text-[#F3F3F3]">Revolutionize your design process with our advanced 3D printing technology.</p>
            </div>
        </div>
    );
};

export default HeroSection