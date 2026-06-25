import React, { useState } from 'react'
import { useEffect } from 'react'
import ProdCard from './ProdCard'

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=200');
      const data = await res.json();
      setProducts(data);
    }
    catch (error) {
      console.log(error)
      setProducts([])
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handlePrev = () => {
    setPage(prev => prev - 1)
  }
  const handleNext = () => {
    setPage(prev => prev + 1)
  }

  const handlePages = (pg)=>{
    setPage(Number(pg))
  }

  const handleLimit=(e)=>{
    console.log('target',e.target.value)
    setLimit(e.target.value)
  }
  const totalPages = Math.ceil(products?.total / limit)
  const options = [{id:0, value:5}, {id:1, value:10}, {id:2, value:20}, {id:3, value:30}]
  return products.length === 0 ?
    (<>No Data Found</>)
    : (
      <div className='flex flex-col justify-center items-center mx-auto'>
        <div className='flex justify-center mt-5'>
          <select className='w-30 text-lg flex text-center bg-gray-200 px-5 py-2' onChange={handleLimit} value={limit}>
            {options?.map(op=><option>{op.value}</option>)}
            </select>
        </div>
        <div className='flex gap-4 mx-auto w-max mt-4'>
          <button type='submit' className={`p-3 rounded-full cursor-pointer ${page === 1 ? 'bg-gray-200' : 'bg-blue-200'}`} disabled={page === 1}
            onClick={handlePrev}>⬅️</button>
       <div  className='flex gap-2 items-center justify-center' >{[...Array(totalPages).keys()]
        .map(item =>(
          <div key={item} onClick={()=>{handlePages(item+1)}} value={item+1} className={`px-2 mt-4 cursor-pointer ${page===item+1 ?'bg-amber-400':'bg-gray-200'}`}>
          {item+1}
        </div>)
        )}</div>
          <button type='submit' className={`p-3 rounded-full cursor-pointer ${page * limit >= products?.total ? 'bg-gray-200' : 'bg-blue-200'}`}
            disabled={page * limit >= products?.total}
            onClick={handleNext}>➡️</button>
        </div>
 
        <div className='flex flex-wrap justify-center m-4'>
          {products?.products?.slice((page - 1) * limit, page * limit).map(prod => (
            <ProdCard data={prod} />
          ))}
        </div>

      </div>
    )
}

export default Pagination