import React, { useState } from 'react'
import data from '../constants/AccordionData.json'

const AccordionElement = ({ item, setSelectedId, open }) => {
  return (
    <div onClick={() =>   setSelectedId(open ?null :item?.id)} className='text-start w-[30rem] mt-4 mx-auto rounded-full shadow-xl'>
      <div className='flex bg-gray-200 px-4 py-4 rounded-md text-xl font-bold justify-between'>
      <p className=' '>{item?.label}</p>
      
      <span className='cursor-pointer'> {open ? '▲' : '▼'}</span>
      </div>
      {open && (<div className='px-4 py-4 text-xl rounded-b-md bg-gray-100 shadow-b-xl'>{item?.content}</div>)}

    </div>
  )
}
const Accordion = () => {
  const [accData] = useState(data)
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div className='flex flex-col justify-center'>
      {accData?.map(acc => <AccordionElement item={acc} open={selectedId === acc?.id} setSelectedId={setSelectedId} />)}
    </div>
  )
}

export default Accordion
