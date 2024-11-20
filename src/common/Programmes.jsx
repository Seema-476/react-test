import React from 'react'

const programmes = ({active}) => {
  return (
      <div id="tab-4" className={`lg:max-w-[464px] min-h-[448px] mb-7 rounded-lg shadow-2xl bg-white w-full p-5 ${active === 'tab-4' ? 'active' : '!max-w-full'}`}>
          <p className='font-bold text-2xl text-black '>Programmes</p>
      </div>
  )
}

export default programmes
