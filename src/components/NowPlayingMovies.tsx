import movieService from '@/services/movieService';
import React from 'react'
import AppTitle from './AppTitle';
import MovieGrid from './MovieGrid';

const NowPlayingMovies = async () => {
    const movies = await movieService.getMovies(`/movie/now_playing?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`);
    return (
        <div className='mt-8'>
            <AppTitle title='Now Playing Movies' link='/movies/now_playing' />
            <MovieGrid data={movies?.results!} />
        </div>
    )
}

export default NowPlayingMovies
