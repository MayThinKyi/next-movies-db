import CurrentAiringTvs from '@/components/CurrentAiringTvs'
import PopularTvs from '@/components/PopularTvs'
import TopRatedTvs from '@/components/TopRatedTvs'
import TvHero from '@/components/TvHero'
import TvsAiringToday from '@/components/TvsAiringToday'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Tvs",
    description: "Get a list of Tvs",
};

const TVPage = () => {
    return (
        <div >
            <TvHero />
            <div className='pt-5 px-5 sm:px-0 sm:ps-24'>
                <PopularTvs />
                <TopRatedTvs />
                <CurrentAiringTvs />
                <TvsAiringToday />
            </div>
        </div>
    )
}

export default TVPage
