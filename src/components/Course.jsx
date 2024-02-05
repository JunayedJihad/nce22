import React from 'react'

function Course(props) {
  return (
    <div className='bg-slate-200 m-4 p-2 rounded-lg'>
          <img src={props.image} alt="" />
          <h2 className='uppercase font-semibold text-center text-xl mt-1'>{props.title}</h2>
    </div>
  )
}

export default Course