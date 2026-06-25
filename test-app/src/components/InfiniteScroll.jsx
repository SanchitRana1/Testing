import React, { useCallback, useRef } from 'react'
import { useState } from 'react'
import useInfinite from '../hooks/useInfinite'

const InfiniteScroll = () => {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1);
  const { error, books, loading, hasMore } = useInfinite({ query, page: page, setPage })

  const observer = useRef()
  // const lastBookElement = useCallback(node => {
  //   if (loading) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting && hasMore) {
  //       setPage(prev => prev + 1)
  //     }
  //   })
  //   if (node) observer.current.observe(node)
  // }, [loading, hasMore])
  const lastBookElement = useCallback(node=>{
if(loading) return;
if(observer.current) observer.current.disconnect()
  observer.current = new IntersectionObserver((enteries)=>{
console.log({enteries})
    if(enteries[0].isIntersecting && hasMore){
      setPage(prev=>prev+1)
    }
  },{
    threshold:0.8
  })
  if(node) observer.current.observe(node)
  },[
    loading, hasMore
  ])
  // console.log(lastBookElement)

  const handleChange = (e) => {
    setQuery(e.target.value)
    setPage(1);
  }
  return (
    <div className='flex justify-center mt-10 flex-col gap-1 ml-3'>
      <input className='border-2 px-4 py-2 w-[40%]' value={query} onChange={handleChange} />
      {books?.map((book, index) => (
        <div className='px-4 py-1 shadow-xl flex w-[40%] hover:bg-amber-500 hover:text-white'>
          {index === books?.length - 1 ?
            (<div ref={lastBookElement} >{book}</div>)
            :
            (<div>{book}</div>)}
        </div>)
      )}
      {loading && (<p>...Loading</p>)}
      { (loading && error) && (<p>...Error</p>)}

    </div>
  )
}

export default InfiniteScroll
