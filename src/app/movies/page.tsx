import MovieHero from '@/components/MovieHero'
import NowPlayingMovies from '@/components/NowPlayingMovies'
import PopularMovies from '@/components/PopularMovies'
import TopRatedMovies from '@/components/TopRatedMovies'
import UpcomingMovies from '@/components/UpcomingMovies'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Movies',
    description: 'Get a list of Movies'
}


const MoviePage = () => {
    return (
        <div>
            <MovieHero />
            <div className='pt-5 px-5 sm:px-0 sm:ps-24'>
                <PopularMovies />
                <TopRatedMovies />
                <UpcomingMovies />
                <NowPlayingMovies />
            </div>
        </div>
    )
}

export default MoviePage
