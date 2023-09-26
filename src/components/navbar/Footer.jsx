import React from 'react'
import FooterItemsContainer from './FooterItemsContainer'
import SocialIcons from './SocialIcons'
import {Icons} from './Menu'
const Footer = () => {
  return (
    <>

            <footer className='bg-blue-500 text-white '>
                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
                    <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md: w-2/5'>
                    <span className="text-teal-400">Free</span> until you're ready to launch
                    </h1>
                    <div>
                        <input type="text" placeholder='Enter your email address' className='text-gray-800 sm:w-72 w-full sm:mr-5 lg:mb-0 mb-4 rounded py-2.5 px-2 focus:outline-none'/>
                        <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <FooterItemsContainer/>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-400  pt-2 text-sm pb-8 '>
                    <span>#&copy; 2023 All Rights Reserved.</span>
                    <span>Design by <strong>SuwasGhale</strong> with &#10084;</span>
                    <span>Terms. Privacy Policy</span>

                    <SocialIcons Icons={Icons}   />
                </div>
            </footer>

    </>
  )
}

export default Footer