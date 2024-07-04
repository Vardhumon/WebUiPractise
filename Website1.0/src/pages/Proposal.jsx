import React from 'react'
import ProposalImage from "../assets/Proposal.png"
function Proposal() {
  return (
    <div className='h-1/4 w-screen mt-44'>   
        <div className='flex justify-between mx-auto rounded-3xl' style={{width:"1240px",height:"300px",backgroundColor:"#f3f3f3"}}>
            <div className='w-1/3 p-10 flex flex-col gap-4 '>
                <h1 className='text-3xl'>Let's make things happen</h1>
                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <button className='p-4 bg-black text-white rounded-lg'>Get your free proposal</button>
            </div>
            <div className='w-1/5'></div>
            <div className='w-1/3'>
                <img src={ProposalImage} alt="Proposal" width={"260px"} height={"120px"} className='' />
            </div>
        </div>
    </div>
  )
}

export default Proposal