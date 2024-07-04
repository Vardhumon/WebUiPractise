import React from 'react'
import CaseCard from '../components/CaseCard'
function CaseStudy() {
  return (
    <div className='h-1/2 w-screen mt-20'>
        <div className='flex gap-6 justify-start items-center ms-16'>
            <div className='text-3xl rounded-lg px-1 text-center py-1 font-semibold tracking-wide' style={{backgroundColor:"#b9ff66"}}>Case Studies</div>
            <div className='w-2/6'><p className='text-start font-normal'>Explore Real-Life Examples of Our Proven Digital Marketing&nbsp;Success through Our Case Studies</p></div>
            <div className='w-12 bg-red-500'></div>
        </div>
        <div className='flex mx-auto  rounded-3xl mt-12' style={{width:"1240px",height:"280px",backgroundColor:"#191a23"}}>
            <CaseCard paragraph={"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."} />
            <div className='w-0.5 bg-white h-4/6 mt-12'></div>
            <CaseCard paragraph={"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."} />
            <div className='w-0.5 bg-white h-4/6 mt-12'></div>
            <CaseCard paragraph={"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."} />
        </div>
    </div>
  )
}

export default CaseStudy