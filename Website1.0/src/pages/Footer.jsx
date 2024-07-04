import React from 'react'
import Logo from "../assets/LogoWhite.png"
import SocialIcons from "../assets/SocialIcon.png"
function Footer() {
  return (
    <div className='w-screen h-1/2 mt-10'>
        <div className='mx-auto' style={{width:"1200px", height:"450px", backgroundColor:"#191a23" ,borderTopLeftRadius:"25px",borderTopRightRadius:"25px"}}>
            <nav className='flex justify-around items-center py-5'>
                <img src={Logo} alt="Logo" className="h-14" style={{scale:"0.8"}} />
                <div className='logo '></div>
                <ul className='flex gap-6 text-center text-lg cursor-pointer mr-10 underline text-white' >
                    <li className='hover:text-green-500'>About Us</li>
                    <li className='hover:text-green-500'>Services</li>
                    <li className='hover:text-green-500'>Use Cases</li>
                    <li className='hover:text-green-500'>Pricing</li>
                    <li className='hover:text-green-500'>Blog</li>
                </ul>
                <img src={SocialIcons} width={"130px"}/>
            </nav>
            <div className='flex p-12'>
                <div className='w-1/2'>
                    <div className='w-2/3 flex flex-col justify-center gap-5 text-white'>
                        <div style={{backgroundColor:"#b9ff66"}} className='px-1 w-24 text-black font-semibold rounded-lg'>Contact Us:</div>
                        <div>Email : info@positivus.com</div>
                        <div>Phone: 555-567-8901</div>
                        <div>
                            <div>Address: 1234 Main St</div>
                            <div>Moonstone City, Stardust State 12345</div>
                        </div>
                    </div>
                    <div className='w-1/3'></div>
                </div>
                <div className='w-1/2 rounded-xl flex justify-around items-center' style={{backgroundColor:"#292a32", width:"600px", height:"180px"}}>
                    <input type='email' placeholder='Email' style={{backgroundColor:"#292a32", height:"60px",width:"310px", borderRadius:"10px", padding:"15px"}} />
                    <div className='text-black text-center' style={{backgroundColor:"#b9ff66", height:"60px",width:"200px", borderRadius:"10px", padding:"15px"}}>Subscribe to news</div>
                </div>
            </div>
            <div className='bg-white w-11/12 mx-auto h-0.5'></div>
            <div className='flex ms-12 mt-4 gap-5'>
                <div className='text-white'>© 2023 Positivus. All Rights Reserved.</div>
                <div className='text-white underline'>Privacy Policy</div>

            </div>
        </div>
    </div>
  )
}

export default Footer