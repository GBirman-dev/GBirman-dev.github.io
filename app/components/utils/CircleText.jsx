'use client'
import ReactCurvedText from 'react-curved-text';

const CircleText = () => {
    return (
        <ReactCurvedText
            width={400}
            height={400}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={10}
            reversed={true}
            text="Your mindset • Will make • You better • Day by day • Design matters •"
            textProps={{ style: { fontSize: 19, fill: 'var(--garnet)' } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        />
    );
};

export default CircleText;