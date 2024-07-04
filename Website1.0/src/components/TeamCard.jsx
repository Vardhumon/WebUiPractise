import React from 'react'

function TeamCard({profilepic,name,position,desc}) {
  return (
    <div className='w-96 h-72 border border-black border-b-4 rounded-3xl m-4 '>
                    <div className='flex p-6 items-center'>
                        <img src={profilepic} width={"80px"} height={"80px"}/>
                        <div className='flex flex-col ms-2 '>
                            <h1 className='text-2xl'>{name}</h1>
                            <p>{position}</p>
                        </div>
                    </div>
                    <div className='w-3/4 h-0.5 bg-black mx-auto'></div>
                    <div className='px-6 py-2 text-xl'>
                        <p>{desc}</p>
                    </div>
                </div>
  )
}

export default TeamCard