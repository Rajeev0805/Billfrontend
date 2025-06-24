import React from 'react'
import NavBar from './navbar/NavBar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Main