import { useState } from "react";
import { emotions } from "../constants";
import EmotionWheel from "../components/EmotionWheel";
import Hexagon from "../components/Hexagon";


const HeroSection = () => {
    const [selectedEmotion, setSelectedEmotion] = useState(emotions[0]);

    return (
      <div className="flex flex-col items-center justify-center bg-[url('/assets/background.png')] mt-20">
        
        <div className="relative w-[400px]">
    {/* Emotion Wheel */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[320px] h-86 z-10">
        <EmotionWheel selectedEmotion={selectedEmotion} onSelectEmotion={setSelectedEmotion} />
    </div>

    {/* First Hexagon */}
    <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 z-20">
        <Hexagon height={170} width={300} className="text-purple-400">
            <h2 className="text-yellow-300 font-semibold text-center">
                <span className="text-white">&#10094;</span> {selectedEmotion.name} <span className="text-white">&#10095;</span>
            </h2>
        </Hexagon>
    </div>

    {/* Second Hexagon */}
    <div className="absolute top-[109px] right-3/4 left-1/3 transform -translate-x-1/2 w-[400px] z-15 mb-20">
        <Hexagon height={500} width={500} className="text-purple-200">
            <p className="text-center font-semibold text-[#524F81]">{selectedEmotion.description}</p>
        </Hexagon>
    </div>
</div>
       
<div className="relative flex mt-[500px] justify-center">
    {/* Larger Hexagon as Background */}
    <Hexagon height={90} width={100} children={undefined} className="text-purple-200 absolute  z-0" />

    {/* Smaller Hexagons */}
    <div className="flex space-x-2 z-10">
        <Hexagon height={70} width={30} children={undefined} className="text-purple-400" />
        <Hexagon height={70} width={30} children={undefined} className="text-purple-400" />
    </div>
</div>
      </div>
    );
};

export default HeroSection;

