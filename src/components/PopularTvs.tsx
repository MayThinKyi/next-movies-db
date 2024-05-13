import React from 'react'
import AppTitle from './AppTitle'
import tvService from '@/services/tvService'
import TvGrid from './TvGrid'

const PopularTvs = async () => {
  const tvs = await tvService.getTvs(`/tv/popular?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`)
  return (
    <div className='my-10'>
      <AppTitle title='Popular TV Shows' link='tvs/popular' />
      <TvGrid data={tvs?.results!} />
    </div>
  )
}

export default PopularTvs
