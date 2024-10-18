import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-64 py-3 px-3  border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] flex items-center justify-between'>
        <img src={val.URL} alt="" srcset="" />
      <span className='font-semibold text-white'>{val.number}</span>
    </div>
  )
} 

export default Stripe
