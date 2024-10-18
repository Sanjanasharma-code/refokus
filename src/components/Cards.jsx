import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
   <>
   <div className='w-full '>
    <div className='max-w-screen-xl gap-4 mx-auto  py-5 flex'>
  <Card width={"basis-1/3" } start={false} para={true}/>
  <Card width={"basis-2/3"} start={true} para={false} hpver={"bg-violet-600"}/>
    </div>
   </div>
   
   </>
  )
}

export default Cards
