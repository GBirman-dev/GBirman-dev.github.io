import { ourTeam } from "@/data";
import TitleText from "../utils/TitleText";


const OurTeam = () => {
    return (
        <section className="py-20 bg-[#F6F7F9]">
            <div className="max-w-7xl relative  md:px-[40px] px-[18px] w-full mx-auto">
                <TitleText>our team</TitleText>
                <div className="flex justify-between md:flex-row flex-col gap-6 items-center mt-10">
                    {
                        ourTeam.map((member, index) => (
                            <div key={index} className="md:px-6 px-0 py-2 flex flex-col md:border-l-2 border-t-2 md:w-[299px] w-full md:h-[210px] h-[150px]">
                                <div>
                                    <h3 className="uppercase font-readexRegular text-[22px]">       {member.name}
                                    </h3>
                                    <p className="uppercase font-readexRegular text-[15px]">        {member.title}
                                    </p>
                                </div>
                                <div className="flex-1"></div>
                                <p className="text-base font-avenir text-[#0C0C0C]/70">{ member.portfolio}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-14 md:border-l-2 border-l-0 md:px-6 px-0 py-1 flex justify-between max-w-[380px]">
                    <div>
                        <h3 className="text-[17px] uppercase">Seweryn KuLak</h3>
                        <p className="uppercase font-readexRegular text-[15px]">intern</p>
                    </div>
                    <p className="text-center capitalize font-avenir text-[#0c0c0c]/70">
                        <span className="block">web design</span>
                        <span className="block">implementation</span>
                        <span className="block">photography</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurTeam