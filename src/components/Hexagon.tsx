import { hexagonPoints } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hexagon = ({ children, className, height, width }) => {
    // Generate the hexagon path based on width and height props
    const hexPath = hexagonPoints
        .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point[0] * width} ${point[1] * height}`)
        .join(' ') + 'Z';

    return (
        <svg 
            viewBox={`0 0 ${width} ${height}`} 
            width={width} 
            height={height} 
            className={className} 
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <path d={hexPath} fill="currentColor" />
            <foreignObject x="0" y="0" width={width} height={height}>
                <div className="flex items-center justify-center h-full px-8">
                    {children}
                </div>
            </foreignObject>
        </svg>
    );
};

export default Hexagon;
