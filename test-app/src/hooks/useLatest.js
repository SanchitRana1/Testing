import React, { useEffect, useRef } from 'react'

const useLatest = (value) => {
    const countRef  = useRef(value)
      useEffect(()=>{
    countRef.current = value;
  },[value])
  return {latest:countRef}
}

export default useLatest

