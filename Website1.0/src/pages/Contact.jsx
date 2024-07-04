import React from 'react'
import Art from "../assets/ContactArt.png"
function Contact() {
  return (
    <div className='h-screen w-screen mt-10'>
            <div className='flex gap-6 justify-start items-center ms-16'>
                 <div className='text-3xl rounded-lg px-1 text-center py-1 font-semibold tracking-wide' style={{backgroundColor:"#b9ff66"}}>Contact</div>
                 <div className='w-2/6'><p className='text-start font-normal'>Connect with Us: Let's Discuss Your Digital Marketing Needs</p></div>
                 <div className='w-12 bg-red-500'></div>
             </div>
             <div className='mx-auto mt-8 rounded-3xl flex justify-betweens bg-red-400'  style={{width:"1200px", height:"650px", backgroundColor:"#f3f3f3"}}>
                <div className='w-2/3 p-20'>
                    <form>
                        <div className='flex '>
                            <input type='radio' title='Say hi' placeholder='Say hi' className='me-3 p-4'/>
                            <label className='me-3 text-lg'>Say Hi</label>
                            <input type='radio' title='Say hi' placeholder='Say hi'className='me-3'/>
                            <label className='text-lg'>Get Quote</label>
                        </div>
                        <div className='flex flex-col gap-2 mt-8' style={{width:"500px"}}>
                            <div className='text-lg'>Name</div>
                            <input type='text border rounded' placeholder='Name' style={{height:"50px", border:"1px solid black", borderRadius:"10px", padding:"20px"}} />
                            <div className='text-lg'>Email</div>
                            <input type='email' placeholder='Email'  style={{height:"50px", border:"1px solid black", borderRadius:"10px",padding:"20px"}}/>
                            <div className='text-lg'>Message</div>
                            <textarea placeholder='Message' style={{height:"180px", border:"1px solid black", borderRadius:"10px",padding:"20px"}} draggable="false" ></textarea>
                            <button className='p-4 bg-black text-white rounded-lg'>Send Message</button>

                        </div>
                    </form>
                </div>
                <div className='w-80 ms-20 mt-10'><img src={Art} className=''/></div>
             </div>
    </div>
  )
}

export default Contact