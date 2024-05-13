import movieService from '@/services/movieService'
import Link from 'next/link'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

const MovieHero = async () => {
    const movies = await movieService.getMovies(`/trending/movie/day?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`)
    const movie = movies?.results[Math.floor(Math.random() * 20)];
    const videos = await movieService.getVideos(`/movie/${movie?.id}/videos?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const trailerKey = videos?.results.filter((video) => video.type === 'Trailer')[0]?.key
    return (
        <div >
            <div className="bg-black relative ">
                <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} className='w-full h-[500px] object-cover opacity-50' alt={movie?.title!} />
            </div>
            <div className='sm:ps-24 absolute top-24 left-5 right-5'>
                <Link href={`/movies/details/${movie?.id}`}>
                    <h1 className='text-4xl sm:text-5xl font-bold'>{movie?.title}</h1>
                </Link>
                <div className="mt-4 flex items-center gap-3 ">
                    <BsFillStarFill size={25} className='text-blue-600' />
                    <p className='text-xl sm:text-2xl text-zinc-200 font-bold'>{movie?.vote_average}</p>
                    <p className="text-xl sm:text-2xl font-bold text-zinc-200 ms-4">{movie?.release_date}</p>
                </div>
                <p className="line-clamp-5 text-zinc-200 text-lg sm:text-xl mt-5">
                    {movie?.overview}
                </p>
                <Link className='flex items-center gap-2 py-2 px-4 mt-8 w-max bg-zinc-600 bg-opacity-55' target='_blank' href={`https://www.youtube.com/watch?v=${trailerKey}`}>
                    <FaPlay />
                    <p> Watch Trailer</p>
                </Link>
            </div>
        </div >
    )
}

export default MovieHero
