import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from './MyLinks'
const NavLinks = () => {
const [heading,setHeading] =useState(" ")
const [subHeading,setSubtHeading] =useState(" ")
  return (
    <>
    {
        links.map(link=>(
            <div>
                <div className='px-3 text-left md:cursor-pointer group'>
                    <h1 className='pb-6 md:py-7 flex justify-between items-center md:pr-0 pr-5 group' 
                    onClick={
                        ()=>{heading !== link.name ? setHeading(link.name): setHeading("");
                                                    setSubtHeading("")
                                                    }}>
                        {link.name}
                        <span className='text-xl md:mt-1 md:hidden inline'>
                            <ion-icon name= {`${heading === link.name ? "chevron-up" : "chevron-down" }`}></ion-icon>
                        </span>
                        <span className='text-xl md:mt-1 md:block  hidden group-hover:rotate-180 group-hover:mt-2'>
                            <ion-icon name= "chevron-down" ></ion-icon>
                        </span>
                    </h1>
                    {heading}
                    {link.submenu && 
                    <div> 
                        <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                            <div className='py-3'>
                                <div className='w-4 h-4 left-3 absolute mt-1 bg-blue-500 rotate-45'></div>
                            </div>
                            <div className='bg-blue-500 p-5 grid grid-cols-3 gap-10 '>
                                {
                                    link.sublinks.map((mysublinks)=>(
                                        <div>
                                            <h1 className='font-bold text-lg '>{mysublinks.Head}</h1>
                                            {mysublinks.sublink.map(slink=>(
                                                <li className='text-sm text-red-500 my-2.5'>
                                                  <Link to={slink.link} className='hover: text-blue-900'> {slink.name}</Link>
                                                </li>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        </div>
                        }
                </div>
                {/* mobile menus */}
                <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                <div>
                    {
                        // sublinks
                        link.sublinks.map((slinks)=>(
                            <div>
                                <div>
                                    <h1 className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center ' onClick={()=>
                                    subHeading !== slinks.Head ? setSubtHeading(slinks.Head): setSubtHeading("")}>
                                        {slinks.Head}

                                        <span className='text-xl md:mt-1 md:ml-2 inline'>
                            <ion-icon name= {`${subHeading === slinks.Head ? "chevron-up" : "chevron-down" }`}></ion-icon>
                        </span>
                                    </h1>
                                    <div className={
                                        `${subHeading===slinks.Head ? "md:hidden": "hidden"}`
                                    }>
                                        {slinks.sublink.map(slink=>(
                                            <li className='py-3 pl-14'>
                                                <Link to={slink.link} className='hover:text-red-500' >{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        ))

    }

    </>
  )
}

export default NavLinks