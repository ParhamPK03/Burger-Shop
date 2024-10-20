import React from 'react'
import { ImCross } from 'react-icons/im'

const MobileNav = () => {
  return (
    <div className='fixed right-0 translate-full duration-500 left-0 bottom-0 top-0 h-[100vh] bg-black/80 z-50'>
        <ImCross className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white'/>
    </div>
  )
}

export default MobileNav