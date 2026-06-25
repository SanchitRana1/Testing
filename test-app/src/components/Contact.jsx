import React from 'react'
import { UserContext } from '../context/UserProvider';
import { useContext } from 'react';

const Contact = () => {
  const data = useContext(UserContext);
  console.log({data})
  return (
    <div>Contact</div>
  )
}

export default Contact