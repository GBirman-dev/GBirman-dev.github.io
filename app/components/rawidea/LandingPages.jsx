import Image from "next/image";
import TitleText from "../utils/TitleText";
import phones from '@/public/assets/project-thumbnails/rawidea/phones.png'
import sideTablet from "@/public/assets/project-thumbnails/rawidea/side-tablet.png"
import designs from "@/public/assets/project-thumbnails/rawidea/designs.png"
import firstLandingPage from "@/public/assets/project-thumbnails/rawidea/firstLandingPage.png"
import secondLandingPage from "@/public/assets/project-thumbnails/rawidea/secondLandingPage.png"
import circle from "@/public/assets/project-thumbnails/rawidea/circle.png"
import bigCircle from "@/public/assets/project-thumbnails/rawidea/bigCircle.png"
import dottedbigCircle from '@/public/assets/icons/ellipse.png'



const Landingpages = () => {
    return (
        <>

            <section className="py-32 bg-[#0C293D]">
                <div className="relative">

                    <div className="max-w-7xl  md:px-[40px] px-[18px] mx-auto z-20 " >
                        <div className="flex items-center gap-3">
                            <TitleText className='text-[#FDFBFE]/50'>visual concept</TitleText>
                            <span className="text-[16px] text-[#FDFBFE] font-semibold uppercase font-readexLight">_technology</span>
                        </div>

                        <div className="mt-20 flex md:flex-row flex-col pb-20 md:mb-0">
                            <div className="">
                                <div className="relative lg:w-[470px] lg:h-[450px] md:w-[400px] md:h-[350px]">
                                    <Image src={phones} width={300} height={400} priority alt="phones" className="w-full h-full relative z-10" />
                                    <Image src={circle} width={400} height={400} className="w-full h-full absolute top-0 left-0  z-0 p-1" alt="circle" />
                                </div>
                            </div>
                            <div className="">
                                <p className="text-[16px] lg:max-w-[250px] md:max-w-[200px] text-[#FDFBFE] font-semibold uppercase font-readexLight mt-[102px] lg:ml-[190px] md:ml-[90px]">
                                    <span className="text-[16px] font-light text-[#FDFBFE]/50">[ </span>
                                    Advanced 3D printing, innovation, material options
                                    <span className="text-[16px] font-light text-[#FDFBFE]/50"> ]</span>
                                </p>
                            </div>
                        
                        </div>
                    </div>
                    <Image src={sideTablet} width={700} height={500} alt="side-tablet" className="absolute right-0 lg:w-[470px]  lg:h-[440px] w-[290px] h-[230px] md:-bottom-[230px] -bottom-[200px]" />
                </div>
                <Image src={designs} width={900} height={900} alt="cities" className=" mt-32 w-full md:h-[800px] h-[500px] object-cover" />


                <div className="mx-auto max-w-7xl flex md:px-[40px] px-[18px] flex-col items-center md:gap-16 gap-10 md:-mt-32 -mt-24 relative">
                    <Image src={firstLandingPage} priority width={800} height={800} alt="first-landingpage" className="lg:w-[900px] z-10 md:w-[600px] w-[330px]  h-auto" />
                    <Image src={secondLandingPage} priority width={900} height={1000} alt="first-landingpage" className="lg:w-[950px] relative z-10 md:w-[600px] w-[360px] h-auto" />
                    <Image src={bigCircle} width={600} height={600} className="lg:w-[800px] lg:h-[800px] md:w-[500px] md:h-[500px] w-[270px] h-[270px] absolute lg:bottom-[999px] md:bottom-[750px] bottom-[250px] right-1 z-0" alt="circle" />
                    <Image src={dottedbigCircle} width={600} height={600} className="lg:w-[800px] lg:h-[800px] md:w-[500px] md:h-[500px] w-[270px] h-[270px] absolute md:top-[350px] top-[150px] left-1 z-0" alt="circle" />
                </div>
                
            </section>
        </>
    );
};

export default Landingpages