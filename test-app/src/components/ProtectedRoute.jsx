import React from 'react'
import {Outlet, Navigate }from 'react-router-dom'
const ProtectedRoute = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to='/' replace />
}

export default ProtectedRoute
