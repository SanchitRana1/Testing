import React, { useState } from 'react'


const Task = ({ item, checkedList, setCheckedList, onDelete }) => {
  
  const handleChange = (checked, task) =>{
    setCheckedList(prev=>{
      const newUpdate = {...prev}
      newUpdate[task?.id] = checked;
      return newUpdate
    })
  }
  
  return (
    <div className='flex w-80 gap-4 px-4 py-2'>
      <input type="checkbox" name="" id="" checked={!!checkedList[item?.id]} onChange={e=>handleChange(e.target.checked, item)}/>
      <span className={`py-2 ${!!checkedList[item?.id] &&'line-through'}`}>
        {item?.text}
      </span> 
      {/* {!(checkedList[item?.id])

      } */}
      <button className='bg-gray-300 px-4 py-2 cursor-pointer' onClick={()=>onDelete(item)}>Delete</button>
    </div>)
}

const ToDoList = () => {

  const [inp, setInp] = useState("")
  const [tasks, setTasks] = useState([])
  const [checkedList, setCheckedList] = useState({})

  const handleAdd = () => {
    setTasks(prev => {
      const newVal = inp.trim()
      if (newVal) {
        return [...prev, { id: Date.now(), text: inp }]
      }
      return [...prev]
    })
    setInp("")
  }

  const handleDelete=(item)=>{
    setTasks(prev=> prev.filter(task=> task?.id !== item?.id))
    // setCheckedList(prev=>({...prev,}))
  }

  return (
    <div className='flex justify-center mt-10 flex-col items-center'>
      <div className=''>
        <input type="text" className='border-1 border-black px-4 py-2' value={inp} onChange={e => setInp(e.target.value)} />
        <button className='bg-gray-300 shadow-2xl mx-4 px-4 py-2 rounded-2xl cursor-pointer' onClick={handleAdd}>Add</button>
      </div>
      <div className='flex flex-col my-5 gap-2'>
        {tasks?.map(task =>
          <Task key={task?.id} item={task} checkedList={checkedList} setCheckedList={setCheckedList} onDelete={handleDelete}/>
        )}
      </div>
    </div>
  )
}

export default ToDoList

