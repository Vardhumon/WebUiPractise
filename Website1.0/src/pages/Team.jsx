import React from 'react'
import profilepic1 from "../assets/Profile1.png"
import profilepic2 from "../assets/Profile2.png"
import profilepic3 from "../assets/Profile3.png"
import profilepic4 from "../assets/Profile4.png"
import profilepic5 from "../assets/Profile5.png"
import profilepic6 from "../assets/Profile6.png"

import TeamCard from '../components/TeamCard'
function Team() {
  return (
    <div className='mt-96'>
        <div className='h-screen w-screen mt-10'>
            <div className='flex gap-6 justify-start items-center ms-16'>
                 <div className='text-3xl rounded-lg px-1 text-center py-1 font-semibold tracking-wide' style={{backgroundColor:"#b9ff66"}}>Team</div>
                 <div className='w-2/6'><p className='text-start font-normal'>Meet the skilled and experienced team behind our successful digital marketing strategies</p></div>
                 <div className='w-12 bg-red-500'></div>
             </div>
             <div className='flex flex-wrap ms-16 mt-12 gap-6'>
                <TeamCard name={"John Smith"} position={"CEO and Founder"} profilepic={profilepic1} desc={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"} />
                <TeamCard name={"Jane Doe"} position={"Director of Operations"} profilepic={profilepic2} desc={"7+ years of experience in project management and team leadership. Strong organizational and communication skills"} />
                <TeamCard name={"Michael Brown"} position={"Senior SEO Specialist"} profilepic={profilepic3} desc={"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"} />
                <TeamCard name={"Emily Johnson"} position={"PPC Manager"} profilepic={profilepic4} desc={"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"} />
                <TeamCard name={"Brian Williams"} position={"Social Media Manager"} profilepic={profilepic5} desc={"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"} />
                <TeamCard name={"Sarah Williams"} position={"Content Creator"} profilepic={profilepic6} desc={"2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"} />

             </div>
         </div>
    </div>
  )
}

export default Team