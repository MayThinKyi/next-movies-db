import MovieHero from '@/components/MovieHero'
import PopularMovies from '@/components/PopularMovies'
import PopularTvs from '@/components/PopularTvs'
import TopRatedMovies from '@/components/TopRatedMovies'
import TopRatedTvs from '@/components/TopRatedTvs'
import React from 'react'

const HomePage = () => {
  return (
    <div >
      <MovieHero />
      <div className='pt-5 px-5 sm:px-0 sm:ps-24'>
        <TopRatedMovies />
        <TopRatedTvs />
        <PopularMovies />
        <PopularTvs />
      </div>
    </div>
  )
}

export default HomePage
