import React from 'react'

const SocialIcons = ({Icons}) => {

  return (
    <>

<div className='text-black-500'>
       {
        Icons.map((icon)=>(
            <span key={icon.name} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover: text-gray-1000 hover:bg-teal-700 duration-200'>
                        <ion-icon name={icon.name}></ion-icon>
            </span>
        ))
       }
</div>

    </>
  )
}

export default SocialIcons