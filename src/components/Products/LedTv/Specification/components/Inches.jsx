import React from 'react';
import tv from "/Products/LedTv/Gigantic/Inches/bg.png";
import ov from "/Products/LedTv/Gigantic/Inches/overlay.svg";

const Inches = () => {
  return (
    <div className="relative md:w-full h-auto md:max-h-[95vh] font-[SF Pro Display]">
      <img src={tv} alt="" className="w-full" />
      <img src={ov} alt="" className='absolute -bottom-1  w-full'/>
      <h2 className="absolute bottom-6  font-[200] left-1/2 -translate-x-1/2 text-white md:text-[7vh] text-xl md:w-auto w-[80vw] text-center">
        Available in 75", 86" and 98”
      </h2>
    </div>
  );
};

export default Inches;
