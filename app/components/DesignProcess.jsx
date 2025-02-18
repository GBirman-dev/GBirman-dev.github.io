'use client'

import { desginProcess } from '@/data';
import Image from 'next/image';
import HeadingText from './utils/HeadingText';
import spinImage from "@/public/assets/digits/spin-img.png"
import myDesignIcon from "@/public/assets/icons/design-process-opacity.svg"
import birman from "@/public/assets/icons/birman.png"

const DesignProcess = () => {
    return (
        <section className='relative'>
            <div className="flex max-w-7xl h-fit  py-32 md:px-[40px] px-[18px] mx-auto justify-between gap-28 items-start">
                
                <div className='w-[75%] sticky top-5 hidden lg:flex flex-col'>
                   
                        <Image src={spinImage} width={450} height={450} alt='spin-image' className='w-full h-full animate-spin-slow' />
                        <Image src={birman} width={250} height={250} alt='birman-logo' 
                            className='md:w-[100px] w-[80px] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        />
                    
                </div>


                {/* Content Section */}
                <div className='flex  flex-col gap-16 font-readexLight lg:pl-0 pl-0'>
                    <HeadingText className={`text-garnet flex items-center md:gap-8 gap-4`}>
                        My Design Process
                        <Image src={myDesignIcon} priority width={32} height={32} alt='my-design-icon' 
                            className='md:h-[32px] md:w-[32px] w-[24px] h-[24px]'
                        />
                    </HeadingText>
                    
                    {desginProcess.map((item, index) => (
                        <div key={index} className='flex md:items-center items-start gap-[28px] text-garnet md:flex-row flex-col px-0'>
                            <Image 
                                src={item.img}
                                alt={item.heading}
                                priority
                                width={500}
                                height={300}
                                className='md:w-[93px] md:h-[93px] w-[45px] h-[45px]'
                            />
                            <div className='flex flex-col gap-2'>
                                <h2 className='md:text-[21px] text-[15px]'>{item.heading}</h2>
                                <p className='text-[12px] md:text-base'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default DesignProcess;
