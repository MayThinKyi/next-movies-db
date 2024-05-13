import AppPagination from '@/components/AppPagination';
import movieService from '@/services/movieService';
import { Metadata } from 'next';
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
        title: `${type.toUpperCase()} MOVIES`,
        description: `${type.toUpperCase()} Movie Lists`
    }
}
const MoviesTypePage = async ({ params: { type }, searchParams: { page } }: Props) => {
    const movies = await movieService.getMovies(`/movie/${type}?language=en-US&page=${page || 1}&api_key=${process.env.TMDB_API_KEY}`)
    return (
        <div className='px-5 sm:ps-24 sm:pe-0 py-10'>
            <h1 className="text-xl  sm:text-2xl font-bold mb-10">{type.toUpperCase()} MOVIES</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {movies?.results.map((movie) => {
                    return <Link key={movie.id} href={`/movies/details/${movie.id}`}>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/notFound.png'} className='object-cover w-[85%] h-[80%]' alt={movie.title} />
                        <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{movie.title}</h1>
                        <div className="mt-1 flex items-center gap-1 ">
                            <BsFillStarFill size={15} className='text-blue-600' />
                            <small className='text-zinc-300 font-bold'>{movie.vote_average}</small>
                        </div>
                    </Link>
                })}
            </div>
            <AppPagination currentPage={page || '1'} totalPages={movies?.total_pages.toString()!} />
        </div>
    )
}

export default MoviesTypePage
