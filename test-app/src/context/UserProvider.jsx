
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name:'  John Doe',
    email:' jd@gmail.com',
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider