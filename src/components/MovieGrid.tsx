'use client';
import React from 'react'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import { BsFillStarFill } from 'react-icons/bs';

interface Props {
    data: IMovie[]
}
const MovieGrid = ({ data }: Props) => {
    return (
        <Splide
            options={{
                rewind: true,
                pagination: false,
                perPage: 5,
                breakpoints: {
                    340: {
                        perPage: 2,
                    },
                    450: {
                        perPage: 3,
                    },
                    900: {
                        perPage: 4,
                    },
                    1200: {
                        perPage: 5,
                    }
                }
            }}
            aria-label='Movie and Tv Grids'
        >
            {data?.map((item) => {
                return <SplideSlide key={item.id} className='h-max'>
                    <Link href={`/movies/details/${item.id}`}>
                        <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '/notFound.png'} className='object-cover w-[85%] h-[80%]' alt="Image 2" />
                        <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{item.title}</h1>
                        <div className="mt-1 flex items-center gap-1 ">
                            <BsFillStarFill size={15} className='text-blue-600' />
                            <small className='text-zinc-300 font-bold'>{item.vote_average}</small>
                        </div>
                    </Link>
                </SplideSlide>
            })}
        </Splide>
    )
}

export default MovieGrid
