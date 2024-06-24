"use client"
import React, { ReactNode } from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const client = new QueryClient()

function Providers({children} : {children : ReactNode}) {
    return <QueryClientProvider client={client} >
        {children}
    </QueryClientProvider>
//   return (
//     <div>Providers</div>
//   )
}

export default Providers