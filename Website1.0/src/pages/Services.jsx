import React from 'react'
import Graphic1 from "../assets/Graphic1.png"
import Graphic2 from "../assets/Graphic2.png"
import Graphic3 from "../assets/Graphic3.png"
import Graphic4 from "../assets/Graphic4.png"
import Graphic5 from "../assets/Graphic5.png"
import Graphic6 from "../assets/Graphic6.png"
import Card from '../components/card'
import Arrow from "../assets/Arrow.png"
import ArrowWhite from "../assets/ArrowWhite.png"

function Services() {
  return (
    <div className='h-screen w-screen'>
        <div className='flex gap-6 justify-start items-center ms-16'>
            <div className='text-3xl rounded-lg px-1 py-2 font-semibold ' style={{backgroundColor:"#b9ff66"}}>Services</div>
            <div className='' style={{width:"580px"}}><p className='text-start'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p></div>
            <div className='w-12 bg-red-500'></div>
        </div>
        <div className='cards flex flex-wrap mt-3 justify-center'>
            <Card title={"Search engine"} title2={"Optimisation"} graphic={Graphic1} color={"#f3f3f3"} arrow={Arrow}/>
            <Card title={"Pay-per-click"} title2={"advertising"} graphic={Graphic2} color={"#b9ff66"} arrow={Arrow}/>
            <Card title={"Social Media"} title2={"Marketing"} graphic={Graphic3} color={"#191a23"} color2={"white"} arrow={ArrowWhite}/>
            <Card title={"Email"} title2={"Marketing"} graphic={Graphic4} color={"#f3f3f3"} arrow={Arrow}/>
            <Card title={"Content"} title2={"Creation"} graphic={Graphic5} color={"#b9ff66"} arrow={Arrow}/>
            <Card title={"Analytics and"} title2={"Tracking"} graphic={Graphic6} color={"#191a23"} color2={"white"} arrow={ArrowWhite}/>

        </div>
    </div>
  )
}

export default Services