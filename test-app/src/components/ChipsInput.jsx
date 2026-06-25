import React, { useState } from 'react'

const Chips = ({ item, onDelete }) => {
  return (
    <div className='rounded-full flex gap-5 bg-gray-200 w-fit px-4 py-2 font-bold flex justify-center items-center'>
      <span className=''>{item?.text}</span>
      <span className='cursor-pointer rounded-full border-1 border-black w-5 h-5 text-center flex justify-center items-center' onClick={() => onDelete(item?.id)}>x</span>
    </div>
  )
}
const ChipsInput = () => {
  const [chipData, setChipData] = useState([])
  const [val, setVal] = useState("")
  const handleSubmit = (e) => {
    const { value } = e.target
    if (e.key === 'Enter' && value?.trim().length) {
      setChipData(prev => {
        const newData = { id: chipData?.length + 1, text: value }
        return [...prev, newData]
      })
      setVal("")
    }
  }
  const handleDelete = (id) => {
    setChipData(chipData?.filter(item => item?.id !== id))
  }

  return (
    <div className='flex justify-center mt-5 flex-col mx-10'>
      <input type='text' className='border-1 border-black px-4 py-2' onKeyDown={(e) => handleSubmit(e)} value={val} onChange={e => setVal(e.target.value)} />

      <div className='flex gap-2 mt-3 flex-wrap justify-center'>
        {chipData && chipData?.map(chip => (
          <div key={chip?.id}>

            <Chips item={chip} onDelete={handleDelete} />
          </div>
        )
        )}
      </div>

    </div>
  )
}

export default ChipsInput
