import React from 'react'
import AppTitle from './AppTitle'
import movieService from '@/services/movieService'
import MovieGrid from './MovieGrid'

const TopRatedMovies = async () => {
    const movies = await movieService.getMovies(`/movie/top_rated?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`)
    return (
        <div className='mt-8 my-10'>
            <AppTitle title='Top Rated Movies' link='/movies/top_rated' />
            <MovieGrid data={movies?.results!} />
        </div>
    )
}

export default TopRatedMovies
