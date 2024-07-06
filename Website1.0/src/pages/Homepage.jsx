import React from 'react'
import Logo from "../assets/Logo.png"
import Illustration from "../assets/Illustration.png"
import Company0 from "../assets/Company.png"
import Company1 from "../assets/Company1.png"
import Company2 from "../assets/Company2.png"
import Company3 from "../assets/Company3.png"
import Company4 from "../assets/Company4.png"
import Company5 from "../assets/Company5.png"

function Homepage() {
  return (
    <div className='w-screen h-screen ' style={{fontFamily:"DS-Digital"}}>
        <nav className='flex justify-around items-center py-5'>
        <img src={Logo} alt="Logo" className="h-14" />
            <div className='logo '></div>
            <ul className='flex gap-6 text-center text-lg cursor-pointer mr-10' >
                <li className='hover:text-green-500'>About Us</li>
                <li className='hover:text-green-500'>Services</li>
                <li className='hover:text-green-500'>Use Cases</li>
                <li className='hover:text-green-500'>Pricing</li>
                <li className='hover:text-green-500'>Blog</li>
            </ul>
            <button className='border border-solid border-black p-3 rounded-xl mr-8 px-6 hover:bg-green-400 hover:scale-105 hover:text-black'>Request a quote</button>
        </nav>
        <div className='flex px-20 py-10'>
            <div className='w-3/6 flex flex-col gap-4 justify-between whitespace-pre-line'>
                <h1 className='text-6xl text-wrap tracking-wide '>Navigating the digital landscape for success</h1>
                <p className='text-2xl gap-5'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button className='p-4 bg-black text-white rounded-lg w-1/3'>Book a Consultation</button>
            </div>
            <div className='w-1/6'></div>
            <div className='w-1/2 right-0 ml-10'>
                <img src={Illustration}/>
            </div>
        </div>
        <div className='flex justify-around py-3 px-3'>
            <img src={Company0}/>
            <img src={Company1}/>
            <img src={Company2}/>
            <img src={Company3}/>
            <img src={Company4}/>
            <img src={Company5}/>

        </div>
    </div>
  )
}

export default Homepage