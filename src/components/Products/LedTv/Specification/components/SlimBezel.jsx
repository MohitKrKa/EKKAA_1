import React from "react";
import tv from "/Products/LedTv/Gigantic/SlimBezel/tv.png";
import ell from "/Products/LedTv/Gigantic/SlimBezel/ell.svg";

const SlimBezel = () => {
  return (
    <div className="justify-center relative p-10 items-center flex flex-col gap-10 overflow-hidde ">
        <img src={ell} alt=""  className="absolute "/>
      <img src={tv} alt="" className="w-[80vw]"/>
      <div className="font-[SF Pro Display] relative justify-center  flex font-[100] text-[#FFFFFF] md:text-9xl text-2xl">
        <span>Slim</span>
        <span className="font-[300]">Bezel</span>
      </div>
    </div>
  );
};

export default SlimBezel;
