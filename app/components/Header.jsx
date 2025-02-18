'use client';
import Image from "next/image";
import logo from "@/public/assets/logo/logo-bir-art-header.webp";
import Link from "next/link";
import { mobileNavMenu, navMenu } from "@/data";
import { FaTimes } from 'react-icons/fa';
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } 
        );

        const sections = navMenu.map((menu) => document.querySelector(menu.link));

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="bg-pantone border-b z-50 border-horizon/40 fixed w-full top-0 left-0">
            <div className="max-w-7xl font-readexLight py-5 text-horizon md:px-[40px] px-[18px] mx-auto flex text-[16px] justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image src={logo} width={90} height={90} alt="george-birman-logo" className="h-auto w-auto" />
                    </Link>
                    <div className="lg:flex items-center gap-4 hidden">
                        {navMenu.map((menu) => {
                            
                            return (
                                <Link
                                    key={menu.id}
                                    href={menu.link}
                                    className={`h-full p-2 rounded-lg transition ${activeSection === menu.link.replace("#", "")
                                            ? "bg-primary text-pantone"
                                            : "hover:bg-primary hover:text-pantone"
                                        }`}
                                >
                                    {menu.name}
                                </Link>
                            );
                        })}

                    </div>
                </div>

                <div className="lg:flex items-center gap-5 hidden">
                    <Link href="mailto:mail.george.birman@gmail.com" className="hover:underline">
                        mail.george.birman@gmail.com
                    </Link>
                    <Link href="tel:+31(6)14731777" className="text-garnet hover:underline">
                        +31(6)14-73-17-77
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden gap-5 flex">
                    <Link
                        href="/"
                        target="_blank"
                        className="border border-garnet md:flex items-center rounded-lg px-6 hover:bg-garnet hover:text-pantone text-garnet lg:hidden hidden"
                    >
                        Contact
                    </Link>

                    {!toggleMenu ? (
                        <Menu onClick={() => setToggleMenu(!toggleMenu)} className="h-full text-primary w-[35px] cursor-pointer z-50" />
                    ) : (
                        <FaTimes onClick={() => setToggleMenu(!toggleMenu)} className="h-full text-garnet w-[35px] cursor-pointer z-50" />
                    )}

                    {toggleMenu && (
                        <ul className="fixed top-0 right-0 pt-32 w-full h-full z-40 bg-pantone text-center px-10">
                            {mobileNavMenu.map((item, index) => (
                                <li key={index} className="my-4" onClick={() => setToggleMenu(!toggleMenu)}>
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;