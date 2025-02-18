'use client'

import Image from "next/image";
import HeadingText from "./utils/HeadingText";
import projectIcon from "@/public/assets/icons/top-projects-layers.svg"
import arrow from "@/public/assets/icons/arrow.png";
import { projects } from "@/data";
import Link from "next/link";


const Projects = () => {
    return (
        <section id="ui-ux-projects" className=' z-0 bg-white/90 bg-blend-multiply relative' style={{ backgroundImage: "url('./assets/backgrounds/project-bg.jfif')", backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-cover bg-pantone/90 -z-10 " />
            <div className=" max-w-7xl py-32 md:px-[40px] px-[18px] mx-auto z-20" >
                <div>
                    <HeadingText className={`text-primary flex items-center gap-8`}>
                        Top three projects
                        <Image src={projectIcon} priority width={32} height={32} alt='my-design-icon' />
                    </HeadingText>

                </div>


                <div className="flex flex-col gap-[108px] w-full mt-16">
                    {
                        projects.map((project, index) =>
                        (
                            <Link
                                href={project.link}
                                key={index}
                                style={{ backgroundColor: project.backgroundColor }}
                                className={` w-full lg:p-20 md:p-10 p-8 rounded-lg relative flex lg:gap-24 md:flex-row flex-col md:gap-10 items-center group`}>
                                <Image
                                    src={project.img}
                                    height={400}
                                    width={400}
                                    alt={project.name}
                                    className={`
                                     w-[250px] h-[232px] object-cover md:hidden  rounded-lg shadow-lg 
                                    ${index === 0 ? 'mr-auto' : index === 1 ? 'mx-auto' : 'ml-auto'}
                                    `}
                                />
                                <Image
                                    src={project.img}
                                    height={500}
                                    width={500}
                                    alt={project.name}
                                    className={`
                                     lg:w-[500px] group-hover:scale-105 transition duration-300 ease-in-out hidden md:block lg:h-[500px] w-[300px] h-[300px]  object-cover  rounded-lg shadow-lg 
                                    
                                    `}
                                />
                                
                                <div className="w-[305.5px] mt-8 md:mt-0 flex flex-col gap-5 text-[#fafafa]/80">
                                    <Image
                                        src={project.number}
                                        height={100}
                                        width={100}
                                        priority
                                        className="w-[54px] h-[54px] group-hover:scale-105 transition duration-500 ease-in-out"
                                        alt={project.name}
                                        
                                    />
                                    <h3 className="lg:text-[36px] group-hover:scale-105 transition duration-500 ease-in-out leading-10 md:text-[21px] text-base group-hover:text-white">{project.name}</h3>
                                    <p className="font-avenir group-hover:scale-105 transition duration-500 ease-in-out text-base text-[14px] font-light group-hover:text-white">{project.text}</p>
                                </div>

                                <Image src={arrow} height={100} width={100} priority alt='arrow-icon'  className="w-[32px] h-[32px] absolute right-20 bottom-20 hidden group-hover:scale-105 transition duration-500 lg:block" />
                            </Link>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;