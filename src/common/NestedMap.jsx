import React from 'react'
import { NESTED_ITEM } from './Helper'

const NestedMap = () => {
  return (
    <div className='py-12 bg-black'>
          <div className='container'>
             <p className='font-bold text-4xl text-white text-center pb-7'>NESTED MAP</p>
              <div className='flex flex-row flex-wrap -mx-3'>
                  <div className="lg:w-[41.66%] w-full px-3">
                      <p className='font-lato font-semibold text-2xl text-white whitespace-nowrap pb-6'>Lorem</p>
                      <p className="font-lato font-normal text-base text-white opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus harum exercitationem reiciendis voluptatibus expedita blanditiis praesentium! Assumenda nemo labore soluta odit nostrum suscipit, asperiores ab dicta a vitae vero.</p>
                  </div>
                  <div className="lg:w-[58.33%] w-full px-3">
                      <div className='flex flex-row flex-wrap -mx-3'>
                          {NESTED_ITEM.map((obj, idx) => (
                              <div
                                  key={idx}
                                  className={`px-3 flex flex-col lg:mt-0 mt-6 ${idx === 0 ? 'lg:w-[33.33%] sm:w-[50%] w-full justify-center lg:items-end': 'lg:w-[33.33%] sm:w-[50%] w-full justify-end sm:items-end'
                                      }`}
                              >
                                  <p className='font-lato font-semibold text-2xl text-white whitespace-nowrap pb-6'>{obj.list}</p>
                                  {obj.content.map((value, itemIdx) => (
                                      <ul key={itemIdx}>
                                          <li className='pb-4'><a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{value.listBtn}</a></li>
                                          <li className='pb-4'><a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{value.listBtnTwo}</a></li>
                                          <li className='pb-4'><a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{value.listBtnThree}</a></li>
                                          <li><a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{value.listBtnFour}</a></li>
                                      </ul>
                                  ))}
                              </div>
                          ))}
                      </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default NestedMap
