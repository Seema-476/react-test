import React from 'react'
import { useState, useEffect } from 'react';

const Hooks = () => {
  const [name, setName] = useState('Seema');
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const Increment = () => {
    setValue(value + 1);
  };
  const Decrement = () => {
    setValue(value - 1);
  };
  const remove = () => {
    setValue(0);
  };

  useEffect(() => {
    if (count >= 1000) {
      setTimeout(false);
      return
    }
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },);

  return (
    <div className='py-12'>
      <div className='container'>
        <p></p>
        {/* use state */}
        <div className='text-center '>
          <p className='text-3xl text-black opacity-60'>{name}</p>
          <button onClick={() => setName(name => (name === 'Seema' ? 'Bishnoi' : 'Seema'))}
            className='font-medium text-lg bg-blue-300 p-2 rounded mt-3'>Toggle Button</button>
        </div>
        <div className='text-center pt-10'>
          <p className='text-4xl text-black opacity-60'>{value}</p>
          <div className='flex gap-3 justify-center'>
            <button onClick={Increment}
              className='font-medium text-lg bg-blue-300 p-2 rounded mt-3'>Increment</button>
            <button onClick={Decrement}
              className='font-medium text-lg bg-blue-300 p-2 rounded mt-3'>Decrement</button>
            <button onClick={remove}
              className='font-medium text-lg bg-blue-300 p-2 rounded mt-3'>Remove</button>
          </div>
        </div>

        {/* use effect  */}
        <div className='text-center pt-9'>
          <p className='font-bold text-black text-4xl pb-5'>Timer</p>
          <p className='text-4xl text-black opacity-60'>{count}</p>
        </div>
      </div>
    </div>
  )
}

export default Hooks
