import React from 'react'
import AppTitle from './AppTitle'
import tvService from '@/services/tvService'
import TvGrid from './TvGrid'

const TvsAiringToday = async () => {
    const tvs = await tvService.getTvs(`/tv/airing_today?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`)
    return (
        <div className='my-10'>
            <AppTitle title='Currently Airing TV Shows' link='tvs/airing_today' />
            <TvGrid data={tvs?.results!} />
        </div>
    )
}

export default TvsAiringToday
