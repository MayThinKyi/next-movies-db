'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'
import { BiHome, BiMovie, BiSearch } from 'react-icons/bi'
import { PiTelevision } from 'react-icons/pi'

const Navbar = () => {
    const pathName = usePathname();
    // console.log('pathName', pathName)
    const navLinks: { icon: ReactNode, link: string }[] = [
        { icon: <BiHome />, link: '/' },
        { icon: <BiMovie />, link: '/movies' },
        { icon: <PiTelevision />, link: '/tvs' },
        { icon: <BiSearch />, link: '/search' },
    ]
    return (<>
        <div className='bg-[#09090B] z-10 hidden sm:inline-block sm:fixed top-0 left-0 bottom-0 text-white py-5 px-3 sm:py-10 sm:px-6'>
            {navLinks.map((item) => {
                return <div key={item.link} className='mb-14'>
                    <Link className={`text-3xl ${pathName === item.link ? 'text-blue-600' : ''} `} href={item.link}>{item.icon}</Link>
                </div>
            })}
        </div>
        <div className='bg-[#09090B] z-10 fixed right-0 left-0 bottom-0  flex  justify-between sm:hidden text-white py-5 px-4'>
            {navLinks.map((item) => {
                return <div key={item.link}  >
                    <Link className={`text-2xl ${pathName === item.link ? 'text-blue-600' : ''} `} href={item.link}>{item.icon}</Link>
                </div>
            })}
        </div>
    </>
    )
}

export default Navbar
