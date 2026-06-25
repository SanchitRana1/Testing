import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRef } from 'react';

export default function RaceCondition() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [throttleCount, setThrottleCount] = useState(0);
  const throttleRef = useRef(false);

  const handleThrottleClick = () => {
    if (throttleRef?.current) return;
    console.log('ThrottleClick')
    setThrottleCount(prev => prev + 1)
    throttleRef.current = true;
    setTimeout(() => {
      throttleRef.current = false
    }, 2000);
  }
  // // to avoid stale data update
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/users/search?q=${query}`);
      const data = await res.json();
      console.log({ ignore, query })
      if (!ignore) {
        setResult(data.users);
      }
    }
    // const timer = setTimeout(fetchData, 500)
    fetchData();

    return () => {
      console.log('return')
      ignore = true;
      // clearTimeout(timer)
    }

  }, [query]);

  // to cancel the state api calls

  // useEffect(() => {
  //   // let ignore = false;
  //   if (!query.trim()) {
  //     setResult([])
  //     return;
  //   }
  //   const controller = new AbortController();

  //   const timer = setTimeout(async function () {
  //     try {
  //       const res = await fetch(`https://dummyjson.com/users/search?q=${query}`, {
  //         signal: controller.signal,
  //       });
  //       const data = await res.json();
  //       setResult(data.users);

  //     } catch (err) {
  //       if (err.name !== 'AbortError') {
  //         console.error(err);
  //       }
  //     }

  //   }, 300)

  //   return () => {
  //     clearTimeout(timer)
  //     controller.abort();
  //   }
  // }, [query]);

  useEffect(() => {
    console.log('Normal');
  }, [])
  useLayoutEffect(() => {
    console.log('Layout');
  }, [])

  return (
    <div className='flex items-center justify-center mt-5 flex-col'>
      <input
        className='px-4 py-2 border border-black'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className='flex flex-col mt-2 gap-1'>
        {query && result?.map(item => <li key={item?.id}>{item?.firstName}</li>)}
      </div>

      {/* Throttle Button */}

      <div className='flex flex-col items-center gap-2'>
        <h2 className='font-bold'>
          Throttle Button
        </h2>

        <button
          onClick={handleThrottleClick}
          className='px-4 py-2 border border-black'
        >
          Click Fast
        </button>

        <p>
          Allowed Click Count: {throttleCount}
        </p>
      </div>
    </div>
  );
}