import React from 'react'
import img from '../assets/404 error with person looking for-amico.png'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className='flex h-[100vh] justify-center items-center flex-col'>
     <img className='shrink sm:max-w-[20rem] lg:max-w-[30rem] xl:max-w-[40rem]' src={img} alt="" />
     <NavLink className='mt-4 capitalize underline text-slate-400 italic text-md' to='/'>
          Back to home !!!
     </NavLink>
    </div>
  )
}

export default Error