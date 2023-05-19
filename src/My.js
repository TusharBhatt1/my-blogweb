import React from 'react'
import myself from "./Screenshot (81).png"
import { Link } from 'react-router-dom'
export default function My() {
  return (
    <div className='none'>
        <img src={myself} className='h-screen m-auto opacity-80 '/>
        <Link to={"/task"}><button  className=' text-black font-bold bg-red-500 p-5 absolute top-1/2 left-1/2 z-1 '>Continue &gt;</button></Link>

    </div>
  )
}
