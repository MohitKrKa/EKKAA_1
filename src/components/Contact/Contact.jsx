import React from 'react'
import Navbar from '../Home/Header/Navbar'
import bgimage from '/Contact/bg.png'
import FormPage from './FormPage'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
    <div className='bg-black'>
    
    <div className='w-full h-auto flex justify-center items-center  relative'>
        <Navbar/>
        <img src={bgimage} alt="" className='w-full h-screen'/>
        <h1 className='bebas-neue absolute md:text-8xl text-5xl text-white'>Contact us</h1>

    </div>
    
    <FormPage/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact