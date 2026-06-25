import React, { 
  // useCallback,
   useEffect, useState } from 'react'

const AutocompleteSearch = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const[cache,setCache] = useState({})
  const searchData = async () => {
    try {
      if(cache[search?.trim()]){
        setData(cache[search])
        return;
      }
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
      const rec = await res.json();
      setData(rec?.recipes)
      setCache(prev=>({...prev, [search]:rec?.recipes}))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  // const debounceSearch = useCallback(
  //   debounce(searchData, 400), []
  // )

  // function debounce(func, delay) {
  //   let timer;
  //   return function (...args) {
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args)
  //     }, delay)
  //   }
  // }

  function handleSearch(e) {
    setSearch(e.target.value)
    setLoading(true)
    // if (e.target.value) {
    //   debounceSearch(e.target.value)
    // }
  }
  useEffect(() => {
      const timer = setTimeout(searchData,300)
    return ()=> clearTimeout(timer)
  }, [search])

  return (
    <div>
      <h1 className='text-3xl font-bold text-center m-10'>AUTO COMPLETE SEARCH BAR</h1>
      <div className='flex flex-col mx-auto w-full justify-center mt-10 items-center'>
        <input className='border-1 border-blue-800 rounded-t-md px-4 py-2 w-[50%] outline-none' type="text" value={search} onChange={handleSearch} />
        {(search && !loading) && (
          <div className='flex flex-col shadow-2xl border-x-2 border-b-2 border-black w-[50%] max-h-[40rem] overflow-auto'>
            {data?.map(item =>
              <span className='block px-4 py-1 hover:bg-blue-400 hover:text-white hover:cursor-pointer' key={item?.id} onClick={(e) => {
                setSearch(item?.name)
                handleSearch(e)
              }
              }
              >{item.name}</span>)}
          </div>
        )}

      </div>

    </div>
  )
}

export default AutocompleteSearch
