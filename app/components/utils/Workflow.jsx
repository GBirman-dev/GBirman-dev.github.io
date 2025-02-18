


const Workflow = ({data}) => {
    return (
        <div className="w-full flex border-b flex-col mt-10">
            {
                data.map((item, index) => (
                    <div key={index} className="flex lg:flex-row flex-col lg:gap-12 gap-6 py-10 border-t">
                        <p className="text-[20px] w-[140px] text-[#0C0C0C80]/50 font-readexLight uppercase">{item.title}</p>
                        <p className="leading-[19.44px] text-base flex-1 text-[#0C0C0C] font-avenir text-justify">{item.text}</p>
                        <ul className="text-base ml-3 md:mr-0 text-[#0C0C0C]/50 list-disc w-[200px] leading-[19.44px]">
                            {
                                (item.points).map((point,index) => (
                                    <li key={index} className="font">{point}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
          }
        </div>
    );
};

export default Workflow