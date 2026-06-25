import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const useInfinite = ({query, page, setPage}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [books, setBooks]  = useState([])
  const  [hasMore, setHasMore] = useState(false);
  
  useEffect(()=>{
    setPage(1)
    setBooks([])
  },[query])

  useEffect(()=>{
    const controller = new AbortController()
    let timer;
    timer = setTimeout (async()=>{
      try {
        setLoading(true)
        setError(false)
        const res = await fetch(`http://openlibrary.org/search.json?q=${query}&page=${page}`,{
          signal: controller.signal
        })
        const data = await res.json()
        
        // console.log({docs: data?.docs})
        if (data?.docs?.length>0)
          {
          setBooks(prev=> {return [...new Set([...prev, ...data.docs.map(item=> item?.title)])]})
          const currentTotalFetched = data?.start + data?.docs?.length; 
          setHasMore(currentTotalFetched < data?.numFound)
          }
      } catch (err) {
        // console.log(err)
        setError(err)
      }finally{
        setLoading(false)
      }
  },300)
    return ()=>{
      controller.abort()
      clearTimeout(timer)
    }
  },[query, page])

  return {error, books,loading, hasMore}
}

export default useInfinite
