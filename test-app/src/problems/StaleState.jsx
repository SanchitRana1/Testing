import React, { useState } from 'react';
import useLatest from '../hooks/useLatest';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function StaleState() {
  const [count, setCount] = useState(0);
  const { latest } = useLatest(count)

  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../workers/worker.js", import.meta.url)
    );

    workerRef.current.onmessage = (e) => {
      console.log(e.data);
    };
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      console.log(latest.current)
    }, 2000);
  };
  const startWorker = () => {
    workerRef.current.postMessage(1000000);
  };

  const calculate = () => {

    let sum = 0;

    for (let i = 0; i < 5000000000; i++) {
      sum += i;
    }

    alert(sum);

  };

  return (
    <div className='flex flex-col justify-center mx-auto items-center'>
      <h1>{count}</h1>

      <button className='px-4 py-2 border border-black mx-2' onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <button className='px-4 py-2 border border-black mx-2' onClick={handleClick}>
        Log Count
      </button>
      <button className='px-4 py-2 border border-black mx-2' onClick={startWorker}>
        start Worker
      </button>

        <button className='px-4 py-2 border border-black mx-2' onClick={calculate}>
        Calculate (FREEZE UI)
      </button>
    </div>
  );
}