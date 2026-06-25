import React, { useState } from 'react';
import useLatest from '../hooks/useLatest';

export default function StaleState() {
  const [count, setCount] = useState(0);
  const {latest} = useLatest(count)

  const handleClick = () => {
    setTimeout(() => {
      console.log(latest.current)
    }, 2000);
  };

  return (
    <div className='flex flex-col justify-center mx-auto items-center'>
      <h1>{count}</h1>

      <button className='px-4 py-2 border border-black mx-2' onClick={() => setCount(prev=> prev + 1)}>
        Increment
      </button>

      <button className='px-4 py-2 border border-black mx-2' onClick={handleClick}>
        Log Count
      </button>
    </div>
  );
}