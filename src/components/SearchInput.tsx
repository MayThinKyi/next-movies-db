'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchInput = () => {
    const router = useRouter();
    const [input, setInput] = useState('');
    const searchHandler = () => {
        router.push(`/search?q=${input}`)
    }
    return (
        <div className='flex items-center gap-2'>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='w-full rounded-lg py-2 px-4 outline-blue-600  bg-slate-800 text-white'
                placeholder='Search...' />
            <button onClick={searchHandler} className='bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded-lg text-center text-white '>Search</button>
        </div>
    )
}

export default SearchInput
