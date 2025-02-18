import React from 'react'
import Plan from './Plan';
import TitleText from './TitleText';
import Workflow from './Workflow';


const ThirdSection = ({text, data}) => {
    return (
        <div className=" max-w-7xl flex flex-col gap-10  md:px-[40px] px-[18px] mx-auto z-20 py-20" >
            <TitleText>workflow plan</TitleText>
            <Plan>
                {text}
            </Plan>
            <Workflow data={data} />
        </div>
    );
}

export default ThirdSection