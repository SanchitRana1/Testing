import React from 'react'

const Profile = ({data, onChange, errors}) => {
  const {name, email, age} = data;
    function handleChange(e){
    onChange((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  
  return (
    <div>
      <div>
        <label>Name:</label>
        <input className='border-1 border-black rounded-full px-4 py-2 m-2 outline-none' type="text" name="name" value={name} onChange={handleChange} />
        {errors?.name && <span className='text-red-500'>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input className='border-1 border-black rounded-full px-4 py-2 m-2 outline-none' type="email" name="email" value={email} onChange={handleChange} />
        {errors?.email && <span className='text-red-500'>{errors.email}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input className='border-1 border-black rounded-full px-4 py-2 m-2 outline-none' type="number" name="age" value={age} onChange={handleChange} />
        {errors?.age && <span className='text-red-500'>{errors.age}</span>}
      </div>
    </div>
  )
}

export default Profile