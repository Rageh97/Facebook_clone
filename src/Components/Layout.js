import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Header from './Header/Header'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default Layout