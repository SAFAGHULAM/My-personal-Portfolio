"use client";
import React from 'react'
import Image from 'next/image'
import hero from '../../../public/images/hero-image.png'
import { TypeAnimation } from 'react-type-animation';

const Herosection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-2 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left justify-items-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm</span>
            <br />
            <TypeAnimation
      sequence={[
        'Safa',
        1000, 
        'Web Developer',
        1000,
        'Full-Stack Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
        <p className='text-[#AFB7BE] text-base sm:text-lg mb-6 lg:text-xl'>I am fervently exploring the dynamic world of web development. Based in the vibrant city of Karachi, I am immersing myself in cutting-edge technologies, including TypeScript, Python, JavaScript, and Next.js. With a passion for crafting innovative digital solutions, I am excited to contribute to the ever-evolving tech landscape and connect with like-minded professionals. Let’s build the future of web development together!</p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
          </button>
        </div>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
          <Image
          src={hero} alt="Hero image" className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300}/>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Herosection