import React from 'react'
import Button from './Button'

const Nav = () => {
    return (
        <div className='max-w-screen-xl mx-auto bg-zinc-800 py-5 flex items-center justify-between border-b-[1px] border-zinc-600 relative'>
          <div className='nleft  flex items-center'>
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          <div className='links flex gap-14 ml-20 text-white text-sm'>
                {["Home", "Work", "Culture"].map((elem, index) => <a className='flex items-center gap-1' href='#'>
                    {index === 1 && (<span style={{ boxShadow: "0 0 0.25rem #00ff19" }} className='inline-block h-1 w-1 rounded-full bg-green-500'></span>)}
                    {elem}</a>

                )}
            </div>
          </div>
          <Button/>
        </div>
    )
}

export default Nav