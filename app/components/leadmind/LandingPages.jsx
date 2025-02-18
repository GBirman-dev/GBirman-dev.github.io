import Image from "next/image";
import TitleText from "../utils/TitleText";
import phones from '@/public/assets/project-thumbnails/leadmind/phones.png'
import sideTablet from "@/public/assets/project-thumbnails/leadmind/side-tablet.png"
import designs from "@/public/assets/project-thumbnails/leadmind/designs.png"
import pages from "@/public/assets/project-thumbnails/leadmind/pages.png"
import circle from "@/public/assets/project-thumbnails/rawidea/circle.png"
import bigCircle from "@/public/assets/project-thumbnails/rawidea/bigCircle.png"
import dottedbigCircle from '@/public/assets/icons/ellipse.png'



const Landingpages = () => {
    return (
        <>

            <section className="py-32 bg-horizon">
                <div className="relative">

                    <div className="max-w-7xl  md:px-[40px] px-[18px] mx-auto z-20 " >
                        <div className="flex items-center gap-3">
                            <TitleText className='text-[#FDFBFE]/50'>visual concept</TitleText>
                            <span className="text-[16px] text-[#FDFBFE] font-semibold uppercase font-readexLight">_creative agency</span>
                        </div>

                        <div className="mt-20 flex md:flex-row flex-col">
                            <div className="">
                                <div className="relative lg:w-[470px] lg:h-[450px] md:w-[400px] md:h-[350px]">
                                    <Image src={phones} width={300} height={400} priority alt="phones" className="w-full h-full relative z-10" />
                                    <Image src={circle} width={400} height={400} className="w-full h-full absolute top-0 left-0  z-0 p-1" alt="circle" />
                                </div>
                            </div>
                            <div className="">
                                <p className="text-[16px] lg:max-w-[250px] md:max-w-[200px] text-[#FDFBFE] font-semibold uppercase font-readexLight mt-[102px] lg:ml-[190px] md:ml-[90px]">
                                    <span className="t
                                    ext-[16px] font-light text-[#FDFBFE]/50">[ </span>
                                    High quality design,Marketing support,lead Generation
                                    <span className="text-[16px] font-light text-[#FDFBFE]/50"> ]</span>
                                </p>
                            </div>
                        
                        </div>
                    </div>
                    <Image src={sideTablet} width={700} height={500} alt="side-tablet" className="absolute right-0 lg:w-[480px]  lg:h-[400px] w-[290px] h-[230px] lg:-bottom-[270px] md:-bottom-[230px] -bottom-[200px]" />
                </div>
                <Image src={designs} width={900} height={900} alt="cities" className=" mt-32 w-full md:h-[800px] h-[500px] object-cover" />


                <div className="relative max-w-7xl mx-auto flex md:px-[40px] px-[18px] flex-col items-center gap-20 md:-mt-32 -mt-24">
                    <Image src={pages} priority width={1000} height={1700} alt="first-landingpage" className="lg:w-[900px] relative md:w-[600px] w-[290px] z-10  h-auto" />
                    <Image src={bigCircle} width={600} height={600} className="lg:w-[800px] lg:h-[800px] md:w-[500px] md:h-[500px] w-[270px] h-[270px] absolute md:bottom-[400px] bottom-[200px] right-1 z-0" alt="circle" />
                    <Image src={dottedbigCircle} width={600} height={600} className="lg:w-[800px] lg:h-[800px] md:w-[500px] md:h-[500px] w-[270px] h-[270px] absolute md:top-[350px] top-[150px] left-1 z-20" alt="circle" />
                </div>
                
            </section>
        </>
    );
};

export default Landingpages