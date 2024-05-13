import React from 'react'
import AppTitle from './AppTitle'
import movieService from '@/services/movieService'
import MovieGrid from './MovieGrid';

const PopularMovies = async () => {
    const movies = await movieService.getMovies(`/movie/popular?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`);
    return (
        <div className='mt-8'>
            <AppTitle title='Popular Movies' link='/movies/popular' />
            <MovieGrid data={movies?.results!} />
        </div>
    )
}

export default PopularMovies
