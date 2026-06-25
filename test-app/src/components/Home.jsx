// import { useState, useCallback } from 'react'

import Accordion from "./Accordion"
import AutocompleteSearch from "./AutocompleteSearch"
import ChipsInput from "./ChipsInput"
import FileExplorer from "./FileExplorer"
import NestedCheckBoxes from "./NestedCheckBoxes"
import OTPInput from "./OTPInput"
import Pagination from "./Pagination"
import Progressbar from "./Progressbar"
import StaleState from "../problems/StaleState"
import TabForm from "./TabForm"
import ToDoList from "./ToDoList"
import RaceCondition from "../problems/RaceCondition"
import InfiniteScroll from "./InfiniteScroll"
import VirtualizedList from "./VirtualizedList"

const Home = () => {
  // const [val, setVal] = useState('')

  // function debounce(func, delay) {
  //   let timer;
  //   return function (...args) {
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args)
  //     }, delay)
  //   }
  // }

  // const debounceSearch = useCallback(
  //   debounce((value) => {
  //     console.log('Searching for:', value);
  //   }, 500), []
  // )

  // const handleChange = (e) => {
  //   setVal(e.target.value);
  //   debounceSearch(e.target.value);
  // }
  // const pbar=[1,5,10,20,30,40,50,60,70,80,90,100]

  return (
    <div>
      {/* <input type="text" value={val} onChange={handleChange} />
      <h1 className=''>Hello, Tailwind!</h1> */}
    {/* <TabForm/> */}
    {/* <Pagination/> */}
    {/* <AutocompleteSearch/> */}
    {/* <FileExplorer/> */}
    
        {/* {pbar?.map(prog=> <Progressbar  progress={prog}/>)} */}
    {/* <Progressbar/> */}
    {/* <OTPInput size={5}/> */}
    {/* <NestedCheckBoxes /> */}
    {/* <ChipsInput/> */}
    {/* <ToDoList/> */}
    {/* {<Accordion/>} */}
    {/* <StaleState/> */}
    {/* <RaceCondition/> */}
    {/* <InfiniteScroll/> */}
    <VirtualizedList/>
    </div>
  )
}

export default Home
