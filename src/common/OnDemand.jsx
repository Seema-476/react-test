import React from 'react'

const OnDemand = ({active}) => {
  return (
      <div id="tab-3" className={`bg-white w-full p-5 rounded-lg shadow-2xl ${active === 'tab-3' ? 'active' : ''}`}>
          <p className='font-bold text-2xl text-black py-9'>On Demand</p>
      </div>
  )
}

export default OnDemand
