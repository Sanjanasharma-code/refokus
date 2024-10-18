import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ width, start, para, hover }) => {
  return (
    <div className={`w-1/2 bg-zinc-700 rounded-xl p-4 text-white hover:bg-violet-600 ${width} min-h-[25rem] flex flex-col justify-between`}>
      <div>
        <div className='w-full flex items-center justify-between '>
          <h1>Up Next</h1>
          <FaArrowRightLong />
        </div>
        <p className='text-1xl font-md'>Insight and behind the sense.</p>
      </div>
      <div className='down elem w-full'>

        {
          start === true && (
            <>
              <h1 className='text-4xl font-bold leading-none '>Start a project</h1>
              <button className='rounded-full py-2 px-3 border-[1px] border-zinc-300 mt-5 '>Contact Us</button>
            </>
          )
        }
        {
          para && (
            <p className='text-sm font-medium mt-5'>Lorem ipsum dolor sit amet consectetur.</p>
          )
        }
      </div>
    </div>
  )
}

export default Card