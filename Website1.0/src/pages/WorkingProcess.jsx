import React from 'react'
import ProcessGree from '../components/ProcessGree'
import ProcessNormal from '../components/ProcessNormal'

function WorkingProcess() {
  return (
    <div className='h-screen w-screen mt-10'>
        <div className='flex gap-6 justify-start items-center ms-16'>
            <div className='text-3xl rounded-lg px-1 text-center py-1 font-semibold tracking-wide' style={{backgroundColor:"#b9ff66"}}>Our Working Process</div>
            <div className='w-2/6'><p className='text-start font-normal'>Step-by-Step Guide to Achieving Your Business Goals</p></div>
            <div className='w-12 bg-red-500'></div>
        </div>
        <div className='flex flex-col ms-36 mt-10' style={{width:"1240px"}} >
            <ProcessGree />
            <ProcessNormal Title={"Research And Strategy Development"} number={"2"}/>
            <ProcessNormal Title={"Implementation"} number={"3"}/>
            <ProcessNormal Title={"Monitoring and Optimization"} number={"4"}/>
            <ProcessNormal Title={"Reporting and Communication"} number={"5"}/>
            <ProcessNormal Title={"Continual Improvement"} number={"6"}/>

        </div>
    </div>
  )
}

export default WorkingProcess