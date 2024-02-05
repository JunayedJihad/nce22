import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
          <div className='banner'>
               <p className='min-h-[40vh] text-white text-xl sm:text-2xl md:text-3xl flex justify-center items-center'>Nanomaterials and Ceramic Engineering</p>
          </div>
          <div className='min-h-[75vh] py-6'>
               <Outlet/>
          </div>
          <div className='h-36 sm:h-40 md:h-52 flex justify-center items-center bg-slate-100'>
               <p className='font-medium text-2xl'>Best wishes from NCE'22</p>
          </div>


    </div>
  )
}

export default Layout