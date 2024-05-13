import movieService from '@/services/movieService';
import React from 'react'
import AppTitle from './AppTitle';
import MovieGrid from './MovieGrid';

const UpcomingMovies = async () => {
    const movies = await movieService.getMovies(`/movie/upcoming?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`);
    return (
        <div className='mt-8'>
            <AppTitle title='Upcoming Movies' link='/movies/upcoming' />
            <MovieGrid data={movies?.results!} />
        </div>
    )
}

export default UpcomingMovies
