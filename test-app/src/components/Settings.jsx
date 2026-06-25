import React from 'react'

const Settings = ({data, onChange}) => {
  function changeTheme(e){
    onChange((prev) => ({...prev, theme: e.target.value ? 'dark' : 'light'}))
  }
  return (
    <div>
      <input type="radio" checked={data?.theme === 'dark'} onChange={changeTheme}/> 
      <label className='mx-2' htmlFor="">Dark Mode </label>
      <input type="radio" checked={data?.theme === 'light'} onChange={changeTheme}/> 
      <label className='mx-2' htmlFor="">Light Mode </label>
    </div>
  )
}

export default Settings