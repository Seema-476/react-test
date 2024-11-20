import React from 'react'

const Events = ({active}) => {
  return (
      <div id="tab-2" className={`lg:max-w-[456px] min-h-[448px] rounded-lg bg-white shadow-2xl w-full p-5 mb-7 ${active === 'tab-2' ? '!max-w-full' : ''}`}>
          <p className='font-bold text-2xl text-black '>Events</p>
      </div>
  )
}

export default Events
