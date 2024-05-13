"use client"
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const LoadingPage = () => {
    return (
        <div className='mx-auto mt-20 ms-36 text-center '>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#2062F6"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default LoadingPage
