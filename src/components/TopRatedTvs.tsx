import React from 'react'
import AppTitle from './AppTitle'
import tvService from '@/services/tvService'
import TvGrid from './TvGrid'

const TopRatedTvs = async () => {
    const tvs = await tvService.getTvs(`/tv/top_rated?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`)
    return (
        <div>
            <AppTitle title='Top Rated TV Shows' link='tvs/top_rated' />
            <TvGrid data={tvs?.results!} />
        </div>
    )
}

export default TopRatedTvs
