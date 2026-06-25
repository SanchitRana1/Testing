import React from 'react'

const Interests = ({ data, onChange, errors }) => {
  console.log({ data })
  const ints = ['Music', 'Sports', 'Cooking', 'Reading', 'Coding', 'Travel'];
  const { interests } = data;

  function handleInterest(e) {
    const value = e.target.name;
    if(interests.includes(value)){
      onChange((prev) => ({...prev, interests: prev.interests.filter((i) => i !== value)}))
    }else{
      onChange((prev) => ({...prev, interests: [...prev.interests, value]}))
    }
  }
  return (
    <div>
      {ints.map((interest, index) => (
        <div key={index} onChange={handleInterest}>
          {/* <label>Interest {index + 1}:</label> */}
          <label className='px-4 py-2 m-2 max-w-[10rem] w-auto' type="text" name="interests"
          >
          <input className='mx-2' type='checkbox' checked={interests.includes(interest)} name={interest}/>
            {interest}
          </label>
        </div>
      ))}

        {errors?.interests && <span className='text-red-500'>{errors.interests}</span>}
    </div>
  )
}

export default Interests