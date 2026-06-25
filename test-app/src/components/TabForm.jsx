import React from 'react'
import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';
import { useState } from 'react';

const TabForm = () => {
  const [data, setData] = useState({
    name: 'John Doe',
    age: 30,
    email: 'jd@yopmail.com',
    interests: ['Sports', 'Coding', 'Travel'],
    theme: 'light',
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: '',
  });

  function handlePrev() {
    if (activeTab > 0)
      setActiveTab((prev) => prev - 1)
    else setActiveTab(0)
  }
  function handleNext() {
    if (activeTab < tabs.length - 1){
      const err = tabs[activeTab].validate(); 
      if(err){
        setActiveTab((prev) => prev  +1)
      }
    }
    else setActiveTab(tabs.length - 1)
  }

  const tabs = [
    { id: 0, name: 'Profile', component: Profile , validate:()=>{
      const err={};
      if(!data?.name || data?.name.length <=2){
        err.name = 'Invalid Name !'
      }
       if(!data?.age || data?.age<18){
        err.age = 'Invalid Age !'
      }
       if(!data?.email || !data?.email.includes('@')){
        err.email = 'Invalid Email !'
      }
      setErrors(err)

      return err.name || err.age || err.email ? false : true;
    }}, {
      id: 1, name: 'Interests', component: Interests, validate:()=>{
        const err={};
        if(!data?.interests || data?.interests?.length ===0){
          err.interests = 'Select Atleast 1 interest'
        }
        setErrors(err)

        return err?.interests ? false : true;
      }
    }, { id: 2, name: 'Settings', component: Settings }];

  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = tabs[activeTab].component;
  return (
    <div className='mx-2'>
      <div className="heading-container flex  mt-2">
        {tabs?.map((tab) => {

          return (
            <div
              key={tab.id}
              className={`heading px-5 border-2 border-black ${activeTab === tab.id ? 'text-white bg-black' : ''
                }`}
            >
              {tab.name}
            </div>
          )
        })}
      </div>
      <div className='w-full border-2 border-black h-[20rem] p-5'>
        <ActiveComponent data={data} onChange={setData} errors={errors} setErrors={setErrors} />
      </div>
      <div className='flex gap-4 mx-auto w-max mt-4'>
        <button type='submit' className={`p-3 rounded-full cursor-pointer ${activeTab === 0 ? 'bg-gray-200' : 'bg-blue-200'}`} disabled={activeTab === 0}
          onClick={handlePrev}>⬅️</button>
        {activeTab === tabs?.length - 1 && (

          <button type='submit' className=' border-1 border-black rounded-full px-4 py-2 bg-amber-400'>Submit</button>
        )}
        <button type='submit' className={`p-3 rounded-full cursor-pointer ${activeTab === tabs.length - 1 ? 'bg-gray-200' : 'bg-blue-200'}`} disabled={activeTab === tabs.length - 1}
        onClick={handleNext}>➡️</button>
      </div>

    </div>
  )
}

export default TabForm
