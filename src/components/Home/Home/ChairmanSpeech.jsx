import React from 'react'
import ChairmanImage from "/Home/Chairman.png";

const ChairmanSpeech = () => {
  return (
    <div className='text-white flex flex-col-reverse lg:flex-row mt-20  justify-center items-center gap-10 px-6 bebas-neue'>
      
      <div className='w-full lg:max-w-[40%] flex flex-col gap-6 text-center lg:text-left'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl  uppercase'>Chairman'S Speech</h2>
        
        <p className='text-lg font-[Poppins] sm:text-xl md:text-[3vh] font-[200]'>
          “Ekkaa is all about reimagining the future of electronics. We prioritise innovation and self-reliance while paving the way for a smarter and more sustainable future”
        </p> 
        
        <div className='font-[Poppins]'>
          <span className="font-normal text-xl text-[#E6AF2E]">
            Mr. Sagar Gupta
          </span>
          <br />
          <span className="font-light text-xl  text-white">
            Managing Director
          </span>
        </div>
      </div>

      <img src={ChairmanImage} alt="Chairman" className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]' />
    </div>
  );
};

export default ChairmanSpeech;
