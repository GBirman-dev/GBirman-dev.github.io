import Image from 'next/image';
import React from 'react'
import TitleText from '../utils/TitleText';
import sectionOne from "@/public/assets/borgplaats/section-betwen-1.png"
import sectionTwo from "@/public/assets/borgplaats/section-betwen-2.png"
import Link from 'next/link';

const SecondSection = () => {
    return (
        <div>
            <Image src={sectionOne} width={1000} height={300} className="w-full h-auto" alt="section-1" />
            <div className="bg-[#4CF4CD]">
                <div className=" max-w-7xl bg  md:px-[40px] px-[18px] mx-auto z-20 py-16" >
                    <TitleText>about</TitleText>
                    <div className="mt-14">
                        <p className="md:text-[24px] text-[18px]  font-avenir text-justify  tracking-tight">Borgplaats.nl offers a diverse range of services, including an online marketplace for unique real estate listings, a community for knowledge sharing and experiences, and an extensive news section for the latest updates in the real estate industry. Additionally, platform provides a useful tools such as calculators to determine property value and potential rental prices.</p>
                        <Link href='https://borgpplaats.nl' target="_blanck" className="text-[16px] font-readexRegular mt-5 block">www.borgpplaats.nl</Link>
                    </div>
                </div>
            </div>
            <Image src={sectionTwo} width={1000} height={300} className="w-full h-auto" alt="section-1" />
        </div>
    );
};

export default SecondSection