import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import Button from './Button'
// import { Helmet } from 'react-helmet'

const NavBar = () => {
  const [open, setOpen]=useState(false)
  return (
    <>
      {/* <Helmet>
        <title>NavBar</title>
      </Helmet> */}

      <nav className='bg-blue-10'>
        <div className='flex items-center font-medium justify-around'>
          <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
            <img src='/images/officelogo.png' alt="Logo" height={'60'} className='md:cursor-pointer h-9' />
            <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
              <ion-icon name= {`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
            <li>
              <Link to="/" className="py-4 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />

          </ul>
          <div className='md:block hidden'>
            <Button />
          </div>
          {/* mobile nav */}
          <ul className={`
              md:hidden bg-blue-50 absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open? 'left-0': 'left-[-100%]'}
            `}>
            <li>
              <Link to="/" className="pt-4 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className='pt-2'>
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar