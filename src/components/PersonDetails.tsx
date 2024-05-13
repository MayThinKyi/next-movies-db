'use client';
import actorService from '@/services/actorService';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsFillStarFill } from 'react-icons/bs';

interface Props {
    personId: number;
    credits: IPersonCredits;
    images: IPersonImageResponse;
    movies: IPersonMovieResponse;
    series: IPersonTvResponse;
}
const PersonDetails = ({ personId, credits, images, movies, series }: Props) => {

    const [selectedTab, setSelectedTab] = useState('KNOWN FOR')
    const tabs = [
        { name: 'KNOWN FOR', value: 'KNOWN FOR' },
        { name: 'CREDITS', value: 'CREDITS' },
        { name: 'PHOTOS', value: 'PHOTOS' },
    ]
    return (
        <div className='my-10'>
            <div className="cursor-pointer flex flex-wrap items-center justify-center gap-4 sm:gap-10">
                {tabs.map((tab) => {
                    return <div className={`text-sm sm:text-xl  font-bold 
                    ${selectedTab === tab.value ? 'text-white underline ' : 'text-slate-600'} `}
                        key={tab.value} onClick={() => setSelectedTab(tab.value)}>{tab.name}</div>
                })}
            </div>
            <div className="my-8">
                {selectedTab === 'KNOWN FOR' && <div>
                    <h1 className="my-8 text-xl font-bold underline">TV Series</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                        {series?.cast.map((item) => {
                            return <Link key={item.id} href={`/tvs/details/${item.id}`}>
                                <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '/notFound.png'} className='object-cover w-[85%] h-[80%]' alt={item.name} />
                                <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{item.name}</h1>
                                <div className="mt-1 flex items-center gap-1 ">
                                    <BsFillStarFill size={15} className='text-blue-600' />
                                    <small className='text-zinc-300 font-bold'>{item.vote_average}</small>
                                </div>
                            </Link>
                        })}
                    </div>
                    <h1 className="my-8 text-xl font-bold underline">Movies</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                        {movies?.cast.map((item) => {
                            return <Link key={item.id} href={`/movies/details/${item.id}`}>
                                <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '/notFound.png'} className='object-cover w-[85%] h-[80%]' alt={item.title} />
                                <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{item.title}</h1>
                                <div className="mt-1 flex items-center gap-1 ">
                                    <BsFillStarFill size={15} className='text-blue-600' />
                                    <small className='text-zinc-300 font-bold'>{item.vote_average}</small>
                                </div>
                            </Link>
                        })}
                    </div>

                </div>}
                {selectedTab === 'CREDITS' && <div>
                    <h1 className="font-bold text-xl underline mb-6">Acting</h1>
                    {credits?.cast.map((item) => {
                        return <div key={item.name} className="py-3 border-b px-2 flex items-center flex-wrap gap-x-4 sm:gap-5 bg-black">
                            <p>{item.first_air_date}</p>
                            <p className='text-lg font-bold'>{item.name}</p>
                            <p>( {item.episode_count} episodes )</p>
                            <p>as  <span className="ms-2 font-bold">{item.character}</span></p>
                        </div>
                    })}
                    <h1 className="font-bold text-xl underline my-6">Production</h1>
                    {credits?.crew.map((item) => {
                        return <div key={item.name} className="py-3 border-b px-2 flex items-center flex-wrap gap-x-4 sm:gap-5 bg-black">
                            <p>{item.first_air_date}</p>
                            <p className='text-lg font-bold'>{item.name}</p>
                            <p>( {item.episode_count} episodes )</p>
                            <p>as  <span className="ms-2 font-bold">{item.job}</span></p>
                        </div>
                    })}
                </div>}
                {selectedTab === 'PHOTOS' && <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-8'>
                    {images?.profiles.map((img) => {
                        return <img key={img.file_path} alt={personId.toString()} src={img.file_path ? `https://image.tmdb.org/t/p/w500${img.file_path}` : '/notFound.png'} className='w-[100%] h-[200px] sm:h-[300px]  lg:h-[350px] object-cover' />
                    })}
                </div>}
            </div>
        </div>
    )
}

export default PersonDetails
