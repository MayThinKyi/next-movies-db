'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface Props {
    currentPage: string;
    totalPages: string;
}
const AppPagination = ({ currentPage, totalPages }: Props) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const routeHandle = (page: number) => {
        pathName.includes('/search') ? router.push(`${pathName}?q=${searchParams.get('q')}&page=${page}`) :
            router.push(`${pathName}?page=${page}`)
    }
    return (
        <div className='mt-10 sm:mt-5 flex items-center gap-3 sm:gap-5 justify-center'>
            <button onClick={() => {
                if (Number(currentPage) > 1) routeHandle(Number(currentPage) - 1)
            }} className='border text-sm py-1 sm:py-2 px-2 sm:px-4 hover:bg-slate-900'>Previous</button>
            <h1 className="text-sm sm:text-lg font-bold">Page {currentPage} of {totalPages}</h1>
            <button onClick={() => {
                if (Number(currentPage) < Number(totalPages)) routeHandle(Number(currentPage) + 1)
            }} className='border text-sm py-1 sm:py-2 px-2 sm:px-4 hover:bg-slate-900'>Next</button>
        </div>
    )
}

export default AppPagination
