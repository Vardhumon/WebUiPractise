import React from 'react'

function ProcessGree() {
  return (
    <div className='rounded-3xl border border-b-4 border-black' style={{backgroundColor:"#b9ff66"}}>
                <div className='flex justify-between items-center p-6'>
                <div className='flex items-center'>
                    <h1><span className='text-5xl me-2'>01</span></h1>
                    <h1 className='text-3xl font-semibold'>Consultation</h1>
                    </div>
                    <button className='rounded-full bg-white py-3 px-6 text-3xl border'>-</button>
                </div>
                <div className='w-11/12 mx-8 h-0.5 bg-black'></div>
                <div className='p-8 font-normal '>
                    <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>
            </div>
  )
}

export default ProcessGree