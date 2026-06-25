import React from 'react'

const ProdCard = ({data}) => {
  // console.log(data)

  return (
    <div className='rounded-2xl shadow-2xl p-4 m-2 w-60'>
      <div className='rounded-2xl m-2 object-contain'>
        <img src={data?.thumbnail} alt={data?.title} />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-xl font-bold'>{data?.title}</h1>
        <p className='text-gray-500'>{data?.description}</p>
      </div>
    </div>
  )
}

export default ProdCard
