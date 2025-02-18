import Link from "next/link";


const Header = ({link, year, text}) => {
    return (
        <div className="text-[15px] relative z-30 text-white/90  pt-10 font-readexLight md:flex md:justify-between justify-center text-center md:text-start md:flex-row flex-col items-start uppercase">
            <Link href={link} target="_blanck" className="hover:underline">{text}</Link>
            <p className="">{ year}</p>
            <div className="flex flex-col md:items-end items-center">
                <p>Marketplace platform</p>
                <p>research</p>
                <p>design</p>
                <p>ui/ux</p>
            </div>
        </div>
    );
}

export default Header