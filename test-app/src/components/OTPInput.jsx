// import React, { useEffect, useRef, useState } from 'react'

// const OTPInput = ({ size }) => {
//   const [arr, setArr] = useState(new Array(size).fill(""));
//   const refArray = useRef([]);

//   const handleChange=(value, index)=>{
//     if(isNaN(value)) return;

//     const newArr = [...arr];
//     const newValue = value.trim()
//     newArr[index] = newValue.slice(-1)
//     setArr(newArr);

//     if(newValue && index < size-1){
//       refArray.current[index+1].focus();
//     }

//   } 

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && !e.target.value && index > 0) {
//       refArray.current[index - 1].focus();
//     }
//   }
// const handlePaste = (e) => {
//   e.preventDefault();
// }
//   useEffect(()=>{
//     refArray.current?.[0]?.focus();
//   },[])
//   return (
//     <div className='flex flex-col justify-center items-center mt-10 gap-5'>
//       <h1 className='text-3xl font-bold'>OTP Modal</h1>
//       <div>

//       {arr?.map((inp, i) => 
//       <input ref={el => refArray.current[i] = el} key={i} className='w-20 h-20 border-2 border-gray-400 text-center text-4xl mx-2' value={inp}
//       onChange={e=>handleChange(e.target.value, i)} onKeyDown={e=>handleKeyDown(e, i)}
//       onPaste={e=>handlePaste(e)}
//       />)}
//       </div>
//     </div>
//   )
// }

// export default OTPInput

import React, { useEffect, useRef, useState } from 'react'



// const OTPInput = ({size})=>{
//   const [sizeArr, setSizeArr]=useState(Array(size).fill(''))
//   const refArr = useRef([])

//   useEffect(()=>{
//     refArr.current[0].focus()
//   },[])

//   const handleChange=(val,idx)=>{
//     if(isNaN(val)) return;

//     const newArr = [...sizeArr]
//     const newVal = val.trim()
//     newArr[idx] = newVal.slice(-1);
//     setSizeArr(newArr)

//     if(newVal && idx < size-1){
//       refArr?.current[idx+1].focus()
//     }
//   }

//   const handleKeyDown = (e,i) =>{
//     if(e.key==='Backspace' && i>0 && !e.target.value){
//       refArr?.current[i-1].focus()
//     }
//   }

//   const handlePaste = (e,idx)=>{
//     e.preventDefault()
//     const data = e.clipboardData.getData('text').split('')
//     const arr = data?.filter(val=> !isNaN(val))
//     if (arr.length === 0) return;
//     const newArr = [...sizeArr]
//     arr.forEach((val,i) => {
//       if(idx+i < size){
//         newArr[idx+i] = val;
//       }
//     });
//     setSizeArr(newArr);

//     if(arr.length < size){
//       refArr.current[arr.length].focus()
//     }else{
//       refArr.current[size-1].focus()  
//     }

//   }

//   return (
//     <div className='flex gap-5 justify-center mt-20'>
//       {sizeArr && sizeArr?.map((val,i)=>(
//        <input 
//         className='w-20 h-20 border-1 border-black text-6xl px-6 py-'
//         key={i} value={val}
//         ref={(refc)=>refArr.current[i] = refc}
//         onChange={e=>handleChange(e.target.value,i)}
//         onKeyDown={e=>handleKeyDown(e,i)}
//         onPaste={e=>handlePaste(e,i)}
//         />
//       ))}
//     </div>
//   )
// }

const OTPInput = ({ size }) => {
  const [sizeArr, setSizeArr] = useState(new Array(size).fill(""))
  const refArr = useRef([])

  const handleChange = (val, idx) => {
    if (isNaN(val)) return;

    const newArr = [...sizeArr]
    const newVal = val.slice(-1)
    newArr[idx] = newVal;

    if (newVal && idx < sizeArr.length - 1) {
      refArr?.current[idx + 1].focus();
    }
    setSizeArr(newArr)
  }

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && idx > 0 && !e.target.value) {
      refArr?.current[idx - 1].focus();
    }
  }

  const handlePaste = (e,idx)=>{
    e.preventDefault();
    const data = e.clipboardData.getData('text').trim().split("");
    const arr = data?.filter(val=> !isNaN(val))
    let newArr = [...sizeArr]
   
    arr.forEach((val,i)=>{
      if(idx+i < size) {
        newArr[idx+i] = val
      }
    })
    if(arr.length < size){
      refArr.current[arr.length].focus()
    }
    else{
      refArr.current[size-1].focus()  
    }
    setSizeArr(newArr)
  }

  useEffect(() => {
    refArr?.current[0].focus();
  }, [])

  return (
    <div className='flex mt-10 justify-center'>
      {sizeArr?.map((val, i) => (
        <input
          ref={refc => refArr.current[i] = refc}
          value={val} className='border w-20 h-20 text-5xl px-6 mx-2'
          onChange={e => handleChange(e.target.value, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          onPaste={e=> handlePaste(e,i)}
        />))}

    </div>)
}
export default OTPInput