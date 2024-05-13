'use client'
import movieService from '@/services/movieService';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import CastGrid from './CastGrid';
interface Props {
    movieId: number;
    overview: IMovieDetails;
    casts: IMoviePersonResponse;
    videos: IMovieVideoResponse;
    images: IMovieImageResponse;
    watchProviders: IWatchProviderResponse
}
const MovieDetails = ({ movieId, casts, images, overview, videos, watchProviders }: Props) => {
    const director = casts?.crew.filter(person => person.known_for_department === 'Directing')[0]
    const [selectedTab, setSelectedTab] = useState('OVERVIEW')
    const tabs = [
        { name: 'OVERVIEW', value: 'OVERVIEW' },
        { name: 'VIDEOS', value: 'VIDEOS' },
        { name: 'PHOTOS', value: 'PHOTOS' },
        { name: 'WATCH', value: 'WATCH' },
    ]
    return (
        <div className='my-10 px-5 sm:ps-24 lg:px-28'>
            <div className="cursor-pointer flex flex-wrap items-center justify-center gap-3 sm:gap-10">
                {tabs.map((tab) => {
                    return <div className={`text-sm sm:text-xl  font-bold 
                    ${selectedTab === tab.value ? 'text-white underline ' : 'text-slate-600'} `}
                        key={tab.value} onClick={() => setSelectedTab(tab.value)}>{tab.name}</div>
                })}
            </div>
            {selectedTab === 'OVERVIEW' && <>
                <div className='text-white mt-10 flex
            flex-wrap md:flex-nowrap gap-10 items-center'>
                    <img src={overview?.poster_path ? `https://image.tmdb.org/t/p/w500${overview?.poster_path}` : '/notFound.png'} className='mx-auto h-[250px] md:h-[450px] object-contain' alt={overview?.title!} />
                    <div>
                        <h1 className='text-xl font-bold mb-6'>Storyline </h1>
                        <h1>{overview?.overview}</h1>
                        <div className='w-[60%] my-6'>
                            <div className="grid sm:grid-cols-2 mb-4">
                                <p>Released</p>
                                <p>{overview?.release_date}</p>
                            </div>
                            <div className="grid sm:grid-cols-2  mb-4">
                                <p>Runtime</p>
                                <p>{overview?.runtime}</p>
                            </div>
                            <div className="grid sm:grid-cols-2  mb-4">
                                <p>Director</p>
                                <p>{director?.name}</p>
                            </div>
                            <div className="grid sm:grid-cols-2  mb-4">
                                <p>Budget</p>
                                <p>${overview?.budget}</p>
                            </div>
                            <div className="grid sm:grid-cols-2  mb-4">
                                <p>Revenue</p>
                                <p>${overview?.revenue}</p>
                            </div>
                            <div className="grid sm:grid-cols-2  mb-4">
                                <p>Genres</p>
                                <div className='flex flex-wrap items-center gap-4'>
                                    {overview?.genres.map((genre) => {
                                        return <p className='text-blue-600' key={genre.id}>{genre.name}</p>
                                    })}
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2  mb-4">
                                <p>Language</p>
                                <p>{overview?.spoken_languages[0].name}</p>
                            </div>
                            <div className="grid sm:grid-cols-2  mb-4">
                                <p>Production</p>
                                <div className='flex flex-wrap items-center gap-5'>{overview?.production_companies.map((item) => {
                                    return <p key={item.id} className='text-wrap lg:text-nowrap'>{item.name}</p>
                                })}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
            {selectedTab === 'VIDEOS' && <>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
                    {videos?.results.map((video) => {
                        return <iframe key={video.id} className='w-[100%] h-[200px]'
                            src={`https://www.youtube.com/embed/${video.key}`}>
                        </iframe>
                    })}
                </div>
            </>}
            {selectedTab === 'PHOTOS' && <>
                <div className="mt-8 grid grid-cols-2  md:grid-cols-3 gap-8">
                    {images?.backdrops?.map((img) => {
                        return <img key={img.file_path} alt={overview?.title!} src={img.file_path ? `https://image.tmdb.org/t/p/w500${img.file_path}` : '/notFound.png'} className='w-[100%] h-[180px] object-cover' />
                    })}
                </div>
            </>}
            {selectedTab === 'WATCH' && <>
                <div className="mt-8 px-10 ">
                    <p className="font-bold mb-8 underline">Buy</p>
                    {Object.keys(watchProviders?.results!).length === 0 && <p className="font-bold">No Provider Available...</p>}
                    <div className="flex items-center flex-wrap gap-4  ">
                        {watchProviders?.results.AU?.buy?.map((item) => {
                            return <div key={item.logo_path} className='text-center' >
                                <img alt={item.provider_name} src={item.logo_path ? `https://image.tmdb.org/t/p/original${item.logo_path}` : '/notFound.png'} className='w-[70px] h-[70px] rounded-xl object-cover mx-auto' />
                                <small className="font-bold mt-2">{item.provider_name}</small>
                            </div>
                        })}
                    </div>
                    <p className="font-bold mt-10 mb-8 underline">Rent</p>
                    {Object.keys(watchProviders?.results!).length === 0 && <p className="font-bold">No Provider Available...</p>}
                    <div className="flex items-center flex-wrap gap-4 mb-20  ">
                        {watchProviders?.results.AU?.rent?.map((item) => {
                            return <div key={item.logo_path} className='text-center' >
                                <img alt={item.provider_name} src={item.logo_path ? `https://image.tmdb.org/t/p/original${item.logo_path}` : '/notFound.png'} className='w-[70px] h-[70px] rounded-xl object-cover mx-auto' />
                                <small className="font-bold mt-2">{item.provider_name}</small>
                            </div>
                        })}
                    </div>
                </div>
            </>}
            <div className="my-8">
                <h1 className='text-2xl tex-white font-bold mb-6'>Casts</h1>
                <CastGrid data={casts?.cast!} />

            </div>
        </div>
    )
}

export default MovieDetails
