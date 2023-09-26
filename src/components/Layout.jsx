import React from 'react'
import NavBar from './navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './navbar/Footer'
import Cards from './navbar/Cards'
import Carousel from './navbar/Carousel'

const Layout = () => {
  return (
    <>
<NavBar/>

<Outlet/>
<Footer/>

    </>
  )
}

export default Layout