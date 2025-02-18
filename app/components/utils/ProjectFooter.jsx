import Link from "next/link"
import iconLeft from '@/public/assets/project-thumbnails/borgplaats-icons/icon.png'
import iconRight from '@/public/assets/project-thumbnails/borgplaats-icons/icon.svg'
import Image from "next/image"
import { useState } from "react"


const Footer = ({ bgColor, className, link, project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredBtn, setIsHoveredBtn] = useState(false);
    return (
        <footer className={`${bgColor} py-20`}>
            <div className="max-w-7xl  md:px-[40px] gap-10 px-[18px] flex flex-col justify-center mx-auto z-20">
                <h2 className="lg:text-[64px] md:text-[30px] text-[24px] uppercase text-center text-pantone">Vist website</h2>
                <Link
                    href={link}
                    target="-blanck"
                    className={`md:w-[600px] w-full mx-auto flex justify-center items-center md:py-4 py-3 px-10 gap-4 rounded-lg transition-all duration-500 ${isHovered ? className : className
                        }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`w-[28px] h-[28px] transition-transform duration-500 ${isHovered ? 'translate-x-[200px]' : 'translate-x-0'
                            }`}
                    >
                        <Image src={iconRight} width={48} height={48} alt="iconLeft" className="w-[28px] h-[28px]" />
                    </div>
                    <span className="md:text-[16px] text-[14px] uppercase font-readexRegular">take me there</span>
                </Link>

                <p className="text-center text-[12px] capitalize text-[#FDFBFEB2]">Or</p>
                <Link
                    href="/"
                    className={`md:w-[600px] w-full mx-auto flex justify-center items-center md:py-4 py-3 px-4 md:gap-4 gap-2 rounded-lg transition-all duration-500 ${isHoveredBtn ? 'bg-garnet' : 'bg-[#92ACB9]'
                        }`}
                    onMouseEnter={() => setIsHoveredBtn(true)}
                    onMouseLeave={() => setIsHoveredBtn(false)}
                >
                    <span className="md:text-[16px] text-[12px] uppercase font-readexRegular">bring me back to portfolio</span>
                    <div
                        className={`w-[28px] h-[28px] transition-transform duration-500 ${isHoveredBtn ? 'md:-translate-x-[310px] -translate-x-[240px]' : 'translate-x-0'
                            }`}
                    >
                        <Image src={iconLeft} width={48} height={48} alt="iconRight" className="w-[28px] h-[28px]" />
                    </div>
                </Link>
                <div className="text-center font-avenir text-[12px] text-[#FDFBFEB2]">
                    <p>All rights to photographic materials belong to <span className="text-white">©{new Date().getFullYear()} {project}</span></p>
                    <p>Created by the <span className="text-white">Georgi B.</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer