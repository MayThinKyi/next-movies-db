'use client';
import React from 'react'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';

interface Props {
    data: IPerson[];
}
const CastGrid = ({ data }: Props) => {
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
            aria-label='Casts Grids'
        >
            {data?.map((item) => {
                return <SplideSlide key={item.id} className='h-max'>
                    <Link href={`/persons/details/${item.id}`}>
                        <img src={`${item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : '/notFound.png'}`} className='object-cover w-[85%] h-[80%]' alt="Image 2" />
                        <h1 className='mt-2 w-[85%] text-[15px] line-clamp-1'>{item.name}</h1>
                        <div className="mt-1 flex items-center gap-1 ">
                            <small className='text-zinc-300 font-bold'>{item.original_name}</small>
                        </div>
                    </Link>
                </SplideSlide>
            })}
        </Splide>
    )
}

export default CastGrid
