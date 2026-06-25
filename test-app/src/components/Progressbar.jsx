// import React, { useEffect } from 'react'

// const Progressbar = ({ progress }) => {
// const [animatedProg, setAnimatedProg] = React.useState(0);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (progress < 100) {
//         setAnimatedProg(progress);
//       }
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [progress]);

//   return (
//     <div>
//       {progress === 1 && <h1 className='text-3xl text-center mt-5 font-bold'>Progress Bar</h1>
//       } 
//        <div className="mt-10 mx-4">

//         <div className='border-2 border-gray-400 text-right overflow-hidden rounded-full'>
//           <div className={`transition-transform delay-700 ease-in my-0 px-1 py-1.5 bg-blue-500  ${animatedProg < 5 ? 'text-black' : 'text-white'} font-bold`} 
//           style={{ 
//               // width: `${progress}%`, 
//               transform:`translateX(${animatedProg-100}%)`,
//             }}
//            role='progressbar' aria-valuenow={animatedProg} aria-valuemax={100} aria-valuemin={0}>
//             {animatedProg}%
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Progressbar

import React, { useEffect, useState } from 'react'

const Progressbar = () => {
const [progress, setProgress] = useState(30)
const [aniProg, setAniProg] = useState(0)

useEffect(()=>{
  const timer = setTimeout(()=>{
    setAniProg(progress)
  }, 200)
  return ()=> clearTimeout(timer)
},[progress])

  return (
    <div className='flex flex-col'>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={progress} 
        onChange={(e) => setProgress(parseInt(e.target.value))}
        className='my-10 border-2 mx-2'
      />
      <div className='border-2 border-black my-2 mx-4 rounded-full overflow-hidden'>
        <div style={{
          transform: `translateX(${aniProg - 100}%)`,
        }}
          className={`transition-transform duration-1000 ease-in px-2 py-1.5 bg-amber-400 text-right font-bold`}
          role='progressbar'
          aria-valuenow={aniProg}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {aniProg}%
        </div>
      </div>
    </div>
  )
}

export default Progressbar