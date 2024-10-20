import React from 'react'
import { ImCross } from 'react-icons/im'
import Link from 'next/link'

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

    const navStyle = showNav ? 'translate-x-0':'translate-x-[-100%]'

    return (
        <div className={`fixed ${navStyle} right-0 translate-full duration-500 left-0 bottom-0 top-0 h-[100vh] bg-black/80 z-50 sm:hidden`}>
            <ImCross onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white' />
            {/* Nav Div */}
            <div className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
                {/* Nav Links */}
                <ul className='space-y-10 text-white'>
                    <li className='text-[35px] font-medium hover:text-yellow-400'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='text-[35px] font-medium hover:text-yellow-400'>
                        <Link href='/'>Shop</Link>
                    </li>
                    <li className='text-[35px] font-medium hover:text-yellow-400'>
                        <Link href='/'>Menu</Link>
                    </li>
                    <li className='text-[35px] font-medium hover:text-yellow-400'>
                        <Link href='/'>Blog</Link>
                    </li>
                    <li className='text-[35px] font-medium hover:text-yellow-400'>
                        <Link href='/'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav