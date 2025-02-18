import line from '@/public/assets/icons/line.png'
import Image from 'next/image';


const ResponsbleTitle = ({smallText, bigText}) => {
    return (
        <div className="flex md:flex-row flex-col items-center gap-5 text-[#171717]">
            <p className="text-base capitalize">resonsible</p>
            <Image src={line} width={40} height={1} alt="line" className="w-[60px] md:flex hidden" />
            <h2 className="uppercase lg:text-[40px] md:text-[25px] text-[20px]">ui/ux by georgi birman</h2>
        </div>
    );
}

export default ResponsbleTitle