import MovieDetails from '@/components/MovieDetails';
import movieService from '@/services/movieService';
import Link from 'next/link';
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

interface Props {
    params: {
        movieId: string;
    }
}
export const generateMetadata = async ({ params: { movieId } }: Props) => {
    const movie = await movieService.getMovie(`/movie/${movieId}?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    return {
        title: movie?.title,
        description: movie?.overview
    }
}
const MovieDetailsPage = async ({ params: { movieId } }: Props) => {
    const movie = await movieService.getMovie(`/movie/${movieId}?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const casts = await movieService.getMoviePerson(`/movie/${movieId}/credits?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const videos = await movieService.getVideos(`/movie/${movieId}/videos?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const trailerKey = videos?.results.filter((video) => video.type === 'Trailer')[0]?.key
    const images = await movieService.getMovieImages(`/movie/${movieId}/images? api_key=${process.env.TMDB_API_KEY}`);
    const watchProviders = await movieService.getMovieWatchProviders(`/movie/${movieId}/watch/providers?api_key=${process.env.TMDB_API_KEY}`)

    return (
        <div>
            <div >
                <div className="bg-black relative ">
                    <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} className='w-full h-[500px] object-cover opacity-50' alt={movie?.title!} />
                </div>
                <div className='sm:ps-24 absolute top-24 left-5 right-5'>
                    <h1 className='text-4xl sm:text-5xl font-bold'>{movie?.title}</h1>
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
            </div>
            <MovieDetails casts={casts!} images={images!} overview={movie!} videos={videos!} watchProviders={watchProviders!} movieId={Number(movie?.id)} />
        </div>
    )
}

export default MovieDetailsPage
