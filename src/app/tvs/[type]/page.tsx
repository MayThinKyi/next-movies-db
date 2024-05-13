import AppPagination from '@/components/AppPagination';
import tvService from '@/services/tvService';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';

interface Props {
    params: {
        type: string;
    },
    searchParams: {
        page?: string;
    }
}
export const generateMetadata = ({ params: { type } }: Props): Metadata => {
    return {
        title: `${type.toUpperCase()} TV SHOWS`,
        description: `${type.toUpperCase()} Tv Shows Lists`
    }
}
const TvsTypePage = async ({ params: { type }, searchParams: { page } }: Props) => {
    const tvs = await tvService.getTvs(`/tv/${type}?language=en-US&page=${page || 1}&api_key=${process.env.TMDB_API_KEY}`)
    return (
        <div className='px-5 sm:ps-24 sm:pe-0 py-10'>
            <h1 className="text-xl sm:text-2xl font-bold mb-10">{type.toUpperCase()} TV Shows</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {tvs?.results.map((tv) => {
                    return <Link key={tv.id} href={`/tvs/details/${tv.id}`}>
                        <img src={tv.poster_path ? `https://image.tmdb.org/t/p/w500${tv.poster_path}` : '/notFound.png'} className='object-cover w-[85%] h-[80%]' alt="Image 2" />
                        <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{tv.name}</h1>
                        <div className="mt-1 flex items-center gap-1 ">
                            <BsFillStarFill size={15} className='text-blue-600' />
                            <small className='text-zinc-300 font-bold'>{tv.vote_average}</small>
                        </div>
                    </Link>
                })}
            </div>
            <AppPagination currentPage={page || '1'} totalPages={tvs?.total_pages.toString()!} />
        </div>
    )
}

export default TvsTypePage
