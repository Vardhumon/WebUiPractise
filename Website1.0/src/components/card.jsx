import React from 'react'

function Card({title,title2,graphic,color,color2,arrow}) {
  return (
    <div className='border rounded-3xl border-b-4 border-black flex gap-3 m-4' style={{width:"600px",height:"250px",backgroundColor:color}}>
                <div className='flex flex-col justify-around w-1/2 p-8 gap-3 '> 
                    <div>
                    <div  className='rounded-lg  px-2 font-semibold' style={{backgroundColor:"#b9ff66"}}>
                    <h1 className='text-2xl rounded-xl border-green-400'>{title}</h1>
                    </div>
                    <div  className='rounded-lg px-2 font-semibold' style={{backgroundColor:"#b9ff66"}}>
                    <h1 className='text-2xl  border-green-400'>{title2}</h1>
                    </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className= 'size-10'src={arrow}/>
                        <div><h2 className='text-center text-xl' style={{color:color2}}>Learn More</h2></div>
                    </div>
                </div>
                <div className='w-1/2 p-8 flex justify-center pt-12'>
                    <img src={graphic} className='w-52 h-44'/>
                </div>
            </div>
  )
}

export default Card