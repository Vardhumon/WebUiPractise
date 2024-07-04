import React from 'react'

function ProcessNormal({number,Title}) {
  return (
    <div>
            <div className='rounded-3xl border border-b-4 border-black mt-8' style={{backgroundColor:"#f3f3f3"}}>
                <div className='flex justify-between items-center p-6'>
                    <div className='flex items-center'>
                    <h1><span className='text-5xl me-2'>0{number}</span></h1>
                    <h1 className='text-3xl font-semibold'>{Title}</h1>
                    </div>
                    <button className='rounded-full bg-white py-3 px-6 text-3xl border'>+</button>
                </div>
            </div>
    </div>
  )
}

export default ProcessNormal