import Link from 'next/link';
import React from 'react'

interface Props {
    title: string;
    link: string;
}
const AppTitle = ({ title, link }: Props) => {
    return (
        <div className='flex items-center gap-2 mb-5 '>
            <h1 className='font-bold text-lg'>{title}</h1>
            <Link href={link} className='text-blue-500 font-semibold text-[15px] underline'>Explore More</Link>
        </div>
    )
}

export default AppTitle
