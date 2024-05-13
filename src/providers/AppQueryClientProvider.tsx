'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}
const queryClient = new QueryClient()

const AppQueryClientProvider = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default AppQueryClientProvider
