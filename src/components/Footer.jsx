import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-white mt-32'>
        <div className='max-w-screen-xl mx-auto py-5 flex gap-14 '>
            <div className='basis-1/2 '>
                <h1 className='text-[10rem] leading-none font-semibold tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-14'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                    {["instagram", "twitter (x?)", "Linkedin"].map((item,index) => <a className='block mt-2 text-zinc-600 capitalize'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                    {["instagram", "twitter (x?)", "Linkedin"].map((item,index) => <a className='block mt-2 text-zinc-600 capitalize'>{item}</a>)}
                </div>
            </div>
          <div className='basis-1/2 flex flex-col items-end '>
            <p className='text-right font-sansw'>refokus is a pioneering digital agency driven by design and empowered technology.</p>
            <img className='mt-14' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" srcset="" />
          </div>
        </div>
    </div>
  )
}

export default Footer