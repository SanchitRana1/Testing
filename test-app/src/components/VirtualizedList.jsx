import React, { useEffect, useState } from 'react'
import listData from '../constants/listData.json'

const ROW_HEIGHT = 50
const VISIBLE_COUNT = 10

const VirtualizedList = () => {

  const [startIndex, setStartIndex] = useState(0)
  const [visibeRows, setVisibleRows] = useState(listData?.slice(startIndex,10))

  const handleScroll=(e)=>{
    const scrollTop = e.target.scrollTop;
    const newStartIndex = Math.floor(scrollTop/ROW_HEIGHT)

    if(newStartIndex !== startIndex){
      setStartIndex(newStartIndex)
    }
  }

  useEffect(()=>{
    setVisibleRows(listData?.slice(startIndex, startIndex+ VISIBLE_COUNT+5))
  },[startIndex])

  return (
    <div className='flex justify-center mt-20'>
      
    <div className='flex flex-col border w-[40rem] overflow-y-auto px-3'
    style={{
      height:ROW_HEIGHT* VISIBLE_COUNT
    }}
    onScroll={handleScroll}
    >
      <div style={
        {
          paddingTop: startIndex*ROW_HEIGHT,
          paddingBottom: (listData.length-startIndex- visibeRows.length)*ROW_HEIGHT
        }
      }>
      
      {visibeRows?.map(item=><p className='border-b-1 py-2'
        style={{
          height:`${ROW_HEIGHT}px`
        }}
      >{item?.title}</p>)}
      </div>
    </div>
    </div>
  )
}

export default VirtualizedList
