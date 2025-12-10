"use client"

import { SessionProvider } from "next-auth/react"
import React from "react"
import { Appbar } from "./components/Appbar"

export function Provider( {children} : {children: React.ReactNode}) {
    return <SessionProvider > 
        {children}
    </SessionProvider>
    
}