import TvDetails from '@/components/TvDetails';
import tvService from '@/services/tvService';
import Link from 'next/link';
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

interface Props {
    params: {
        tvId: string;
    }
}
export const generateMetadata = async ({ params: { tvId } }: Props) => {
    const tv = await tvService.getTv(`/tv/${tvId}?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    return {
        title: tv?.name,
        description: tv?.overview
    }
}

const TvDetailsPage = async ({ params: { tvId } }: Props) => {
    const tv = await tvService.getTv(`/tv/${tvId}?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const tvPerson = await tvService.getTvPerson(`/tv/${tvId}/credits?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const videos = await tvService.getVideos(`/tv/${tvId}/videos?language=en-US&api_key=${process.env.TMDB_API_KEY}`);
    const images = await tvService.getTvImages(`/tv/${tvId}/images?api_key=${process.env.TMDB_API_KEY}`);
    const watchProviders = await tvService.getTvWatchProviders(`/tv/${tvId}/watch/providers?api_key=${process.env.TMDB_API_KEY}`);
    // const trailerKey = videos?.results.filter((video) => video.type === 'Trailer')[0]?.key
    // console.log(videos?.results)
    const trailerKey = videos?.results && videos?.results[0]?.key

    return (
        <div>
            <div >
                <div className="bg-black relative ">
                    <img src={`https://image.tmdb.org/t/p/w1280${tv?.backdrop_path}`} className='w-full h-[500px] object-cover opacity-50' alt={tv?.name!} />
                </div>
                <div className='sm:ps-24 absolute top-24 left-5 right-5'>
                    <h1 className='text-4xl sm:text-5xl font-bold'>{tv?.name}</h1>
                    <div className="mt-4 flex items-center gap-3 ">
                        <BsFillStarFill size={25} className='text-blue-600' />
                        <p className='text-xl sm:text-2xl text-zinc-200 font-bold'>{tv?.vote_average}</p>
                        <p className="text-xl sm:text-2xl font-bold text-zinc-200 ms-4">{tv?.first_air_date}</p>
                    </div>
                    <p className="line-clamp-5 text-zinc-200 text-lg sm:text-xl mt-5">
                        {tv?.overview}
                    </p>
                    <Link className='flex items-center gap-2 py-2 px-4 mt-8 w-max bg-zinc-600 bg-opacity-55' target='_blank' href={`https://www.youtube.com/watch?v=${trailerKey}`}>
                        <FaPlay />
                        <p> Watch Trailer</p>
                    </Link>
                </div>
            </div>
            <TvDetails images={images!} tv={tv!} tvPerson={tvPerson!} videos={videos!} watchProviders={watchProviders!} tvId={Number(tv?.id)} />
        </div>
    )
}

export default TvDetailsPage
