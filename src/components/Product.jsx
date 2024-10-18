import React from 'react'
import Button from './Button'


const Product = ({elem,mover,count}) => {
  return (
    <div className='w-full h-[18rem] text-white mt-10 '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center  justify-between  p-6'>
          <h1 className='text-6xl font-bold '>{elem.title}</h1>
          <div className='dets w-1/3 '>
            <p >{elem.des}</p>
          <div className='flex items-center gap-5 mt-5'>
          {elem.live && <Button/>}
           {elem.case && <Button title='Case Study'/>}
          </div>
          </div>
        </div>
    </div>
  )
}

export default Product

