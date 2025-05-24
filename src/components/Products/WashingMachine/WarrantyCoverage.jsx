import React from 'react'
import image from "/Products/Washing Machine/warranty.png";
import KnowMore from './KnowMore';

const WarrantyCoverage = () => {
  return (
    <div className='bg-[#F4F4F4] h-auto w-full flex md:flex-row flex-col pb-6'>
        <div className=' flex flex-col md:gap-10 gap-4  justify-center md:p-40 p-7'>
            <h2 className='md:text-5xl text-3xl bebas-neue'>Comprehensive warranty coverage for total peace of mind</h2>
            <p className='font-[Poppins] font-[200] text-sm md:text-lg text-[#525B68] leading-6'>Every Ekka appliance comes with a complimentary manufacturer's warranty—standard with your purchase. For full details or additional coverage options, feel free to contact us anytime.</p>
        <KnowMore strokeColor="#6D6D6D" circleColor="#6D6D6D" text="Know more" textColor="#6D6D6D" />
        </div>
        
        <img src={image} alt="" className=''/>
        
    </div>
  )
}

export default WarrantyCoverage