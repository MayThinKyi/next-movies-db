'use client';
import React, { ReactNode } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

interface Props {
    children: ReactNode;
}
const NextProgressBar = ({ children }: Props) => {
    return (
        <div>
            <ProgressBar
                height="3px"
                color="#2563EB"
                options={{ showSpinner: true }}
                shallowRouting
            />
            {children}
        </div>
    )
}

export default NextProgressBar
