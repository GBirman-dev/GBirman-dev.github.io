import Image from 'next/image';
import topBorder from '@/public/assets/icons/border-top.png'
import bottomBorder from '@/public/assets/icons/border-bottom.png'


const BorderedSection = ({data, className}) => {
    return (
        <div>
            <Image src={topBorder} height={1} width={900} alt='border-top' className='w-full ' />
            <div className='py-10  lg:px-16 md:px-4 flex md:flex-row flex-col  gap-6 md:gap-3'>
                {
                    data.map((item, index) => (
                        <div key={index} className={`${index === 1 ? 'md:mt-12 mt-0' : index === 2 ? 'md:mt-32 mt-0' : 'mt-0'} h-fit flex flex-col lg:p-[45px] md:p-[20px] p-[25px]  rounded-lg ${className}`}>
                            <div className='flex items-center gap-3 mb-[30px]' >
                                <Image src={item.icon} width={10} height={10} alt={item.heading} className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]' />
                                <h3 className='lg:text-[24px] text-[18px] font-readexRegular text-[#F3F3F3] capitalize'>{item.heading}</h3>
                            </div>
                            <div>
                                <p className='text-base text-[#EFEFEFE5]/80'>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Image src={bottomBorder} height={1} width={900} alt='border-bottom' className='w-full ' />
        </div>
    );
};

export default BorderedSection