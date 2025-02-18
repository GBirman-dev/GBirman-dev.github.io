import Image from 'next/image';
import React from 'react'
import TitleText from '../utils/TitleText';
import sectionOne from "@/public/assets/project-thumbnails/rawidea/section-betwen-1.png"
import sectionTwo from "@/public/assets/project-thumbnails/rawidea/section-betwen-2.png"
import Link from 'next/link';

const SecondSection = () => {
    return (
        <div>
            <Image src={sectionOne} width={1000} height={300} className="w-full h-auto" alt="section-1" />
            <div className="bg-[#D4FF62]">
                <div className=" max-w-7xl bg  md:px-[40px] px-[18px] mx-auto z-20 py-16" >
                    <TitleText>about</TitleText>
                    <div className="mt-14">
                        <p className="md:text-[24px] text-[18px]  font-avenir text-justify">RAW Idea specializes in the development and execution of large-scale projects using advanced 3D technologies. Their unique 3D printer is capable of bringing even the boldest ideas to life, turning digital concepts into tangible objects. Throughout the project, it was crucial to highlight this technical potential and the company’s innovation, as well as to emphasize their commitment to high-quality results.</p>
                        <Link href='https://rawidea.org' target="_blanck" className="text-[16px] font-readexRegular mt-5 block">www.rawidea.org</Link>
                    </div>
                </div>
            </div>
            <Image src={sectionTwo} width={1000} height={300} className="w-full h-auto" alt="section-1" />
        </div>
    );
};

export default SecondSection