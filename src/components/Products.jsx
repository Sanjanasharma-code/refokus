import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {

  var products = [
    {
      title: "Artiquel",
      des: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false
    },
    {
      title: "Cula",
      des: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true
    },
    {
      title: "Layout Land",
      des: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false
    },
    {
      title: "TTR",
      des: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: false,
      case: true
    },
   

  ]
  const [pos, setpos] = useState(0)

  const mover= (val)=>{
    setpos(val*20)
  }

  return (
    <div className=' mt-32 relative'>
      {products.map((elem, index) => (
        <Product elem={elem} mover={mover} count={index} />))}
      <div className=' absolute top-0 w-full h-full  pointer-event-none'>
        {/* <motion.div 
        initial={{y:pos, x:"-50%"}}
        animate={{y:pos+`rem`}}
         className='w-[19rem] absolute left-[44%] bg-zinc-400 h-[20rem] overflow-hidden'>
          <div className='w-full bg-zinc-900 h-full'></div>
          <div className='w-full bg-zinc-300 h-full'></div>
          <div className='w-full bg-zinc-400 h-full'></div>
          <div className='w-full bg-zinc-700 h-full'></div>
      
        </motion.div> */}
      </div>
    </div>
  )
}

export default Products