'use client'

import otherCases from "@/public/assets/icons/other-cases.svg"
import HeadingText from "./utils/HeadingText";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link'
import VideoCarousel from "./utils/Video";



const OtherCases = () => {
    return (
        <section id="others">
            <div className="max-w-7xl py-20 md:px-[40px] px-[18px] mx-auto">
                <div className="max-w-[860px] mx-auto">
                    <div>
                        <HeadingText className={`text-primary flex items-center gap-8`}>
                            It&apos;s worth mentioning
                            <Image src={otherCases} priority width={32} height={32} alt="my-design-icon" className="md:h-[32px] md:w-[32px] w-[24px] h-[24px]" />
                        </HeadingText>

                    </div>
                    <div className="max-w-[860px] py-10 mx-auto mt-10">
                       <VideoCarousel/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherCases;