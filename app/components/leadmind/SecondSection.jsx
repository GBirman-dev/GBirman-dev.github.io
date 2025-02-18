import Image from 'next/image';
import React from 'react'
import TitleText from '../utils/TitleText';
import Link from 'next/link';

const SecondSection = () => {
    return (
        <div className=''>
            <div className="">
                <div className=" max-w-7xl bg  md:px-[40px] px-[18px] mx-auto z-20 py-16" >
                    <TitleText>about</TitleText>
                    <div className="mt-14">
                        <p className="md:text-[24px] text-[18px]  font-avenir text-justify">LeadMind Agency specializes in helping companies achieve their growth objectives through a comprehensive range of services. These services include quality design solutions, marketing initiatives, and sales follow-up processes, all designed to help businesses scale efficiently. By leveraging data-driven strategies, LeadMind provides customized and measurable results tailored to each client's unique business needs.</p>
                        <Link href='https://leadmind.agency' target="_blanck" className="text-[16px] font-readexRegular mt-5 block">www.leadmind.agency</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection