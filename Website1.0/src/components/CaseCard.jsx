import React from 'react'
import Arrow from "../assets/Arrow.png"

function CaseCard({paragraph,border}) {
  return (
    <div className={`text-white px-3 py-3 m-12 ${border?border-e-2:""}border-white w-80`}>
                <div><p>{paragraph}</p></div>
                <div className='flex items-center gap-1'><p style={{color:"#b9ff66"}}>Learn more</p><img src={Arrow} width={"40px"} height={"40px"}/></div>
            </div>
  )
}

export default CaseCard