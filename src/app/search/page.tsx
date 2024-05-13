import AppPagination from '@/components/AppPagination';
import SearchInput from '@/components/SearchInput'
import multiService from '@/services/multiService';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';

interface Props {
    searchParams: {
        page?: string;
        q?: string;
    }
}
const SearchPage = async ({ searchParams: { q, page } }: Props) => {
    let data: IMultiResponse | null = null;
    if (q) {
        data = await multiService.getMultiData(`/search/multi?query=${q}&include_adult=false&language=en-US&page=${Number(page) || 1}&api_key=`) as IMultiResponse
    }
    return (
        <div className='py-5 px-5 sm:ps-24'>
            <SearchInput />
            {q && <p className='my-5 text-xl font-semibold'>Showing results for &quot;{q}&quot;</p>}
            <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                {data?.results.map((item) => {
                    return <div key={item.id}>
                        {item.media_type === 'person' && <Link href={`/persons/details/${item.id}`}>
                            <img src={`${item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : '/notFound.png'}`} className='object-cover w-[85%] h-[80%]' alt="Image 2" />
                            <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{item.name}</h1>
                            <div className="mt-1 flex items-center gap-1 ">
                                <small className='text-zinc-300 font-bold'>{item.original_name}</small>
                            </div>
                        </Link>}
                        {item.media_type === 'movie' && <Link href={`/movies/details/${item.id}`}>
                            <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '/notFound.png'} className='object-cover w-[85%] h-[80%]' alt="Image 2" />
                            <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>
                                {item.title}</h1>
                            <div className="mt-1 flex items-center gap-1 ">
                                <BsFillStarFill size={15} className='text-blue-600' />
                                <small className='text-zinc-300 font-bold'>{item.vote_average}</small>
                            </div>
                        </Link>}
                        {item.media_type === 'tv' && <Link href={`/tvs/details/${item.id}`}>
                            <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '/notFound.png'} className='object-cover w-[85%] h-[80%]' alt="Image 2" />
                            <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{item.name}</h1>
                            <div className="mt-1 flex items-center gap-1 ">
                                <BsFillStarFill size={15} className='text-blue-600' />
                                <small className='text-zinc-300 font-bold'>{item.vote_average}</small>
                            </div>
                        </Link>}
                    </div>
                })}
            </div>
            {data?.results && data?.results.length > 1 && <AppPagination currentPage={page?.toString() || '1'} totalPages={data?.total_pages.toString()!} />}
        </div>
    )
}

export default SearchPage
